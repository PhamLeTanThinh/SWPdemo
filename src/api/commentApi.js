import axioClient from './axiosClient';

const commentApi = {

    get(id) {

    },

    addNewComment(data) {
        const url = '/comments/news/post';
        return axioClient.post(url, data);
    },

    update(data) {

    },
    remove(id) {

    }
};

export default commentApi;