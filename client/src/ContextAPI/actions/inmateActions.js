import axios from 'axios';
import { INMATE_SERVER } from '../../services/Config.json'





export function RegisterInmate(dispatch, data) {
    console.log(data)
    axios.post(`${INMATE_SERVER}/register`, data)
        .then(response => {
            if (response.data.inmateExistAlready) {
                alert('Sorry Inmate with thesame "cell code" already Exist')
            }
            if (response.data.success) {
                dispatch({
                    type: 'SEARCH_INMATE',
                    payload: response.data
                })
                alert('Inmate Registered Successfully. Thanks')
                window.location = '/dashboard'
            }
        })
        .catch(err => {
            dispatch({
                type: 'ERROR',
                payload: err.message
            })
        })

}

export function searchInmateByCodeorName(dispatch, data) {
    axios.post(`${INMATE_SERVER}/searchinmate`, data)
        .then(response => {
            if (response.data)
                dispatch({
                    type: 'SEARCH_INMATE',
                    payload: response.data
                })
        })
        .catch(err => {
            dispatch({
                type: 'ERROR',
                payload: err.message
            })
        })

}



export function uploadImage(dispatch, formData, config, setImages) {
    axios.post(`${INMATE_SERVER}/uploadImage`, formData, config)
        .then(response => {
            if (response.data.success) {
                // setImages([...Images, response.data.image])
                setImages([response.data.fileName])
            } else {
                alert('Failed to save the Image in Server')
            }
        })
        .catch(err => {
            console.log(err.message)
            // dispatch({
            //     type: 'ERROR',
            //     payload: err.message
            // })
        })


}



// export async function fetchBloodbyId(bgId) {
//     const request = await axios.get(`${ BLOODCENTER_SERVER } / blood_by_id ? id = ${ bgId }`)
//         .then(response => {
//             if (response.data)
//                 return {
//                     type: ACTION_TYPES.FETCH_BLOOD_GROUP_BY_ID,
//                     payload: { bcDetail: response.data.bcDetail, bgDetail: response.data.bgDetail }
//                 }
//         })
//         .catch(err => {
//             return {
//                 type: ACTION_TYPES.ERROR_CATCH,
//                 payload: err.response.data.Error
//             }
//         })
//     return request
// }


