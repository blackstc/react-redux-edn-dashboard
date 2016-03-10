import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    const request = axios.get('src/files/data.json');

    return {
        type: FETCH_DATA,
        payload: request
    }
}