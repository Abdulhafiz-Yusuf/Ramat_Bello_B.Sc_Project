import axios from 'axios';
import { INMATE_SERVER } from '../../services/Config.json'
import { storage } from '../../services/FirebaseConfig'

// "proxy": "http://localhost:8000"



export function firebaseImageUploadforNewVisitor(dispatch, selectedFile, setUrl, setProgress, prevPicName, setPrevPicName) {
    const uploadTask = storage.ref(`visitors/${selectedFile.name}`).put(selectedFile.file);
    const actualUploading = () => {
        uploadTask.on(
            'state_changed', snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref('visitors')
                    .child(selectedFile.name)
                    .getDownloadURL()
                    .then(url => {
                        if (url) {
                            setUrl(url)
                            alert('Uploaded Successful')
                        }
                    })
            }
        )
    }
    if (prevPicName) {
        let imageRef = storage.ref(`images/${prevPicName}`);
        imageRef
            .delete()
            .then(() => {
                setPrevPicName(selectedFile.name)
                actualUploading(selectedFile)
            })
            .catch((e) => console.log('error on image deletion => ', e));
    }

    else {
        setPrevPicName(selectedFile.name)
        actualUploading(selectedFile)
    }


}



export function firebaseImageUploadforNewInmate(dispatch, selectedFile, setUrl, setProgress, prevPicName, setPrevPicName) {
    const uploadTask = storage.ref(`images/${selectedFile.name}`).put(selectedFile.file);
    const actualUploading = () => {
        uploadTask.on(
            'state_changed', snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(selectedFile.name)
                    .getDownloadURL()
                    .then(url => {
                        if (url) {
                            setUrl(url)
                            alert('Uploaded Successful')
                        }
                    })
            }
        )
    }
    if (prevPicName) {
        let imageRef = storage.ref(`images/${prevPicName}`);
        imageRef
            .delete()
            .then(() => {
                setPrevPicName(selectedFile.name)
                actualUploading(selectedFile)
            })
            .catch((e) => console.log('error on image deletion => ', e));
    }

    else {
        setPrevPicName(selectedFile.name)
        actualUploading(selectedFile)
    }


}

export function firebaseImageUploadforPicUpdate(dispatch, selectedFile, setProgress, currentInmate) {

    const uploadTask = storage.ref(`images/${selectedFile.name}`).put(selectedFile.file);

    const actualUploading = (selectedFile) => {
        uploadTask.on(
            'state_changed', snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(selectedFile.name)
                    .getDownloadURL()
                    .then(newUrl => {
                        if (newUrl) {
                            let data = {
                                inmate: currentInmate,
                                url: newUrl,
                                ipicname: selectedFile.name
                            }
                            axios.post(`${INMATE_SERVER}/updateiPic`, data)
                                .then(response => {
                                    if (response.data.success) {
                                        dispatch({
                                            type: 'SEARCH_INMATE',
                                            payload: response.data
                                        })
                                        alert('Inmate Picture Successfully Changed. Thanks')
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
                    })
            }
        )
    }

    let imageRef = storage.ref(`images/${currentInmate.ipicname}`);
    imageRef
        .delete()
        .then(() => {
            actualUploading(selectedFile)

        })
        .catch((e) => console.log('error on image deletion => ', e));


}

//Inmate Registration using firebase image url
export function RegisterInmate(dispatch, data) {
    axios.post(`${INMATE_SERVER}/register`, data)
        .then(response => {
            if (response.data.inmateExistAlready) {
                alert('Sorry Inmate with thesame "cell code" already Exist')
            }
            if (response.data.success) {
                console.log(response.data.success)
                // uploadImage(dispatch, formData, config, setImages, setInmatePicName)
                alert('Inmate Registered Successfully. Thanks')
                window.location = '/dashboard'
                dispatch({
                    type: 'SEARCH_INMATE',
                    payload: response.data
                })

            }
        })
        .catch(err => {
            dispatch({
                type: 'ERROR',
                payload: err.message
            })
        })

}


export function RegVisitor(dispatch, data, currentInmate) {
    console.log(currentInmate)

    axios.post(`${INMATE_SERVER}/regVisitor`, data)
        .then(response => {
            if (response.data.VisitorExistAlready) {
                alert('Sorry Visitor with thesame "Phone Number" already Exist')
            }
            if (response.data.success) {
                console.log(response.data.success)
                dispatch({
                    type: 'GATEPASS',
                    payload: {
                        visitor: response.data,
                        style: { display: 'none' },
                        currentInmate: currentInmate,
                        ViewPage: 'gatepass'
                    }
                })

            }
        })
        .catch(err => {
            dispatch({
                type: 'ERROR',
                payload: err.message
            })
        })

}


//Update Image using express.js
export function updateInmatePic(dispatch, inmate, picName) {
    const data = {
        inmate: inmate,
        picName: picName,
    }
    axios.post(`${INMATE_SERVER} / updateiPic`, data)
        .then(response => {
            if (response.data.success) {
                dispatch({
                    type: 'SEARCH_INMATE',
                    payload: response.data
                })
                alert('Inmate Picture Successfully Changed. Thanks')
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

//Uploading Image using express.js
export function uploadImage(dispatch, formData, config, setImage, setInmatePicName, update, inmate) {
    console.log(formData)
    axios.post(`${INMATE_SERVER} / uploadImage`, formData, config)
        .then(response => {
            if (response.data.success) {
                // setImages([...Images, response.data.image])
                if (update) {
                    updateInmatePic(dispatch, inmate, response.data.filename)
                }
                else if (response.data.success & !update) {
                    setInmatePicName(response.data.filename)
                    setImage(response.data.filename)
                    alert('Uploaded Successful')
                }

            }
            else {
                alert('Failed to save the Image in Server')
            }
        })
        .catch(err => {
            console.log(err.message)
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


export function fetchAllInmate(dispatch) {
    axios.post(`${INMATE_SERVER}/readAll`)
        .then(response => {
            console.log(response)
            if (response.data)
                dispatch({
                    type: 'READ_ALL_INMATE',
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


//REGISTRATION USING IMAGE UPLOADED USING EXPRESS.JS
// export function RegisterInmate(dispatch, data) {

//     axios.post(`${INMATE_SERVER} / register`, data)
//         .then(response => {
//             if (response.data.inmateExistAlready) {
//                 alert('Sorry Inmate with thesame "cell code" already Exist')
//             }
//             if (response.data.success) {
//                 console.log(response.data.success)
//                 // uploadImage(dispatch, formData, config, setImages, setInmatePicName)
//                 alert('Inmate Registered Successfully. Thanks')
//                 window.location = '/dashboard'
//                 dispatch({
//                     type: 'SEARCH_INMATE',
//                     payload: response.data
//                 })

//             }
//         })
//         .catch(err => {
//             dispatch({
//                 type: 'ERROR',
//                 payload: err.message
//             })
//         })

// }
