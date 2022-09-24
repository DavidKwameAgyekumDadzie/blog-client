import axios from "axios";

const token = localStorage.getItem("token");

export const httpClient = axios.create({
    baseURL: "http://localhost:4000",
    headers:{
        // Authorization: "Bearer" + token,
        Authorization: `Bearer ${token}`,
    },
});