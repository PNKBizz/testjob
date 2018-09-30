<template>
    <el-container>
        <el-aside :width="120">
            <router-link to="/info" active-class="active" class="navLink">Информация</router-link>
            <router-link to="/feed" active-class="active" class="navLink">Галлерея</router-link>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
    import Info from '../router/pages/info.vue'
    import Feed from '../router/pages/feed.vue'

    export default {
        components: { Info, Feed }
    }
</script>