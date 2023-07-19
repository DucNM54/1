import { getData } from "../../../../core/BaseDA";
import { base_url, gettaskall, headers } from '../../../../config/ConfigAPI';

export const getProcessTask = async ({ page = 1, size = 10, isReceived = 0 }) => {
    const url = base_url + gettaskall + `?page=${page}&size=${size}&isReceived=${isReceived}`;
    const response = await getData(url, headers);
    if (response.code === 200) {
        return response.data;
    }
    return [];
};
