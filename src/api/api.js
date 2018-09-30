import {ajax} from 'jquery'
import Store from '../store/index.js';

export default {

    apiKey: 'f389c74bf8ff9e66ee65d5546979922b',
    secret: '17c6b9df401b7998',
    baseUrl: 'https://api.flickr.com/services/rest/',

    loaded: false,

    api (method, params, callback = () => {}) {
        let data = {
            method: 'flickr.' + method,
            api_key: this.apiKey,
            format: 'json',
            nojsoncallback: '1'
        };
        for (let k in params) { data[k] = params[k]; }
        return ajax({
            method: 'GET',
            url: this.baseUrl + this.encodeQuery(data),
            data: '{}'
        }).done(response =>  callback(response)).fail(err => console.log(err));
    },
    encodeQuery (data) {
        return Object.keys(data).map((k, i) => (i === 0 ? '?' : '&') + k + '=' + data[k]).join('');
    },
    getPhotos (params = {}, callback = () => {}) {
        this.api('galleries.getPhotos', params, response => {
            let data = response.photos; data.gallery_id = params.gallery_id;
            data.per_page = data.perpage; callback(data);
        });
    }
}