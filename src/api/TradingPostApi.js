import axioClient from './axiosClient';

const tradingPostApi = {

    getAll(id) {
        const url = `/trading_posts/group/${id}`;
        return axioClient.get(url);
    },

    getAllByAccount(id) {
        const url = `posts/account/${id}`;
        return axioClient.get(url);
    },


    get(id){
        const url = `/posts/details/${id}`;
        return axioClient.get(url);
    },

    reactPost(id){
        const url = `/posts/reacts/${id}`;
        return axioClient.put(url);
    },

    add(data) {

    },

    update(data) {

    },
    remove(id) {

    }
};

export default tradingPostApi;