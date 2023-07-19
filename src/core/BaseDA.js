import axios from 'axios';

export const postData = async (url, { obj, headers }) => {
    // var headers = { 'Content-type': 'application/json' };
    try {
        const response = await axios({
            method: "post",
            url: url,
            data: obj,
            // responseType: "json",
            headers: headers,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to POST data:', error);
        throw error;
    }
};

export const putData = async (url, { obj, headers }) => {
    // var headers = { 'Content-type': 'application/json' };
    try {
        const response = await axios({
            method: "put",
            url: url,
            data: obj,
            // responseType: "json",
            headers: headers,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to POST data:', error);
        throw error;
    }
};

export const getData = async (url, { headers }) => {
    // var headers = { 'Content-type': 'application/json' };
    try {
        const response = await axios({
            method: "get",
            url: url,
            // responseType: "json",
            headers: headers,
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error;
    }
};

