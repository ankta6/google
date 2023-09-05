import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: 'AIzaSyBF6KO42Xzu1AG1GMbbdqWOn7oRpKWYirw',
    cx: '91d8423275cb74211'
}



export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    });
    return data;
};
