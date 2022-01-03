import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8b7fc457-5752-4d08-8e05-f0c21e5c1739"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    getFollow(userId) {
        return instance.post(`follow/${userId}`, null)
        .then(response => response.data.resultCode);
    },
    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data.resultCode);
    },
    getLoginUser(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
        .then(response => response.data);
    },
    getLogout() {
        return instance.delete('auth/login')
        .then(response => response);
    }
};

export const headerAPI = {
    getAuthUsers() {
        return instance.get(`auth/me`)
        .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}