import axios from "axios";

const api = axios.create({
    baseURL: "https://fake-news-headline-generator.onrender.com",
});

export default api;
