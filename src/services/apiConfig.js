import axios from "axios";

export const API_BASE_URL = 'https://localhost:7043/api/Spillage';

export const apiConfig = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
