import axioClient from './axiosClient';

const eventApi = {

    getHighLight(params) {
        const url = '/contest/highlight';
        return axioClient.get(url, {params: params});
    },

    getListContestByGroup(id) {
        const url = `/contest/group/${id}`;
        return axioClient.get(url);
    },
    proposalToOpenContest(data) {
        const url = '/proposals';
        return axioClient.post(url, data);
    },
    
    add(data) {
        
    },

    update(data) {

    },
    remove(id) {

    }
};

export default eventApi;