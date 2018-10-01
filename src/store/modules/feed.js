
const state = { photos: [], total: 0, page: 1, per_page: 5, gallery_id: '72157700009530971'}

const getters = {
    photos (state) { return state.photos },
    total (state) { return state.total },
    page (state) { return state.page },
    per_page (state) { return state.per_page },
    gallery_id (state) { return state.gallery_id }
}
const actions = {
    fetchPhotos ({commit}, data) {
        commit('UPDATE_STATE', data);
    }
}
const mutations = {
    UPDATE_STATE (state, data) { // почему UPPERCASE?
        if (data.per_page !== state.per_page || data.gallery_id !== state.gallery_id) {
            state.page = 1;
        } else {
            state.page = data.page;
        }
        if (data.gallery_id !== state.gallery_id) {
            state.photos = data.photo;

        } else {
            state.photos = state.photos.concat(data.photo);
        } // Тернарки
        state.gallery_id = data.gallery_id;
        state.total = data.total;
        state.per_page = data.per_page;
    }
}

export default { namespaced: true, state, getters, actions, mutations }
