import Axios from 'axios';
const database = 'http://localhost:5000';

export const getAll = () => async dispatch => {
    try {
        const response = await Axios.get(`${database}/users`);
        dispatch({
            type: 'USERS',
            payload: response.data
        })
    } catch (error) {
        console.error(error);
    }
}