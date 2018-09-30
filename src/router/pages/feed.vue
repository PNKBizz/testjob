<template>
    <el-container>
        <el-header>
            <label>Галлерея</label>
            <el-input v-model="gallery_id">
                <div slot="suffix">
                    <el-button type="primary" @click="loadGallery()">Загрузить</el-button>
                </div>
            </el-input>
            <label>Страница</label>
            <el-pagination layout="prev,pager,next"
                           :page-size="per_page"
                           :total="total"
                           :current-page.sync="page">
            </el-pagination>
        </el-header>
        <el-main id="feed" class="feed-container">
            <el-card v-for="photo in photos">
                <div slot="header">
                    <h4>{{ photo.title }}</h4>
                </div>
                <div>
                    <img :src="'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'"
                         :alt="photo.title">
                </div>
                <div slot="footer" style="text-align: right">
                    <i class="ownerEmail">Автор: {{ photo.owner }}</i>
                </div>
            </el-card>
        </el-main>
        <el-footer>
            <label>Страница</label> {{ page }}
        </el-footer>
    </el-container>
</template>

<script>
    import Api from '../../api/api.js'
    import Store from '../../store/index.js'

    export default {
        store: Store,
        computed : {
            photos () { return Store.getters['Feed/photos'] },
            page () { return Store.getters['Feed/page'] },
            total () { return Store.getters['Feed/total'] },
            per_page () { return Store.getters['Feed/per_page'] },
            num_pages () { return Math.floor(Store.getters['Feed/total'] / Store.getters['Feed/per_page']) },
            gallery_id () { return Store.getters['Feed/gallery_id'] }
        },
        created () {
            this.loadGallery();
        },
        mounted () {
            let el = document.getElementById('feed');
            if (!!el) {
                el.addEventListener('scroll', this.handleScroll);
            }
        },
        watch: {
            '$route': 'loadGallery'
        },
        methods: {
            handleScroll () {
                const el = document.getElementById('feed')
                if (el.scrollTop === el.scrollTopMax) {
                    this.nextPage();
                }
            },
            loadGallery (params = {}) {
                const gid = Store.getters['Feed/gallery_id'], p = Store.getters['Feed/page'], pp = Store.getters['Feed/per_page'];
                if (!params.gallery_id) { params.gallery_id = gid; }
                else { if (params.gallery_id !== gid) { params.page = 1; } }
                if (!params.page) { params.page = p; }
                if (!params.per_page) { params.per_page = pp; }

                let cb = data => Store.dispatch('Feed/fetchPhotos', data);

                Api.getPhotos(params, cb);
            },
            nextPage () {
                let cp = Store.getters['Feed/page'],
                    nump = Math.floor(Store.getters['Feed/total'] / Store.getters['Feed/per_page']),
                    p =  Math.min(cp + 1, nump);
                this.loadGallery({page: p});
            }
        }
    }
</script>

