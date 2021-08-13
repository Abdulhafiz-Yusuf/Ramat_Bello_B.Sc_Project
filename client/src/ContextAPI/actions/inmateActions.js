import axios from 'axios';


export function fetchBlood() {
    const request = axios.get(`${BLOODCENTER_SERVER}/`)
        .then(response => {
            if (response.data)
                dispatch({
                    type: 'GET_CURRENT_USER',
                    payload: user
                })
            return {
                type: ACTION_TYPES.FETCH_BLOOD_GROUP,
                payload: response.data
            }
        })
        .catch(err => {
            return {
                type: ACTION_TYPES.ERROR_CATCH,
                payload: err.message
            }
        })
    return request
}