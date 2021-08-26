import React, { useEffect, useState, useContext } from 'react'
import { firebaseImageUpload, firebaseImageUploadforPicUpdate, uploadImage } from '../../../ContextAPI/actions/inmateActions';
import { Button, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore';


function UploadInmatePic() {
    const { state, dispatch } = useContext(globalStore)
    const inmate = state.currentInmate
    const [progress, setProgress] = useState(0)
    const [selectedFile, setSelectedFile] = useState({ name: '', file: '' })
    console.log(inmate)
    useEffect(() => {
        setSelectedFile({ ...selectedFile, img: inmate.pic })
    }, [])


    let formData = new FormData();

    const onfileSelect = (e) => {
        setSelectedFile({
            name: e.target.files[0].name,
            file: e.target.files[0],
            img: URL.createObjectURL(e.target.files[0])
        })


        formData.append("file", selectedFile.file)
    }
    const onImageUpload = () => {
        // const config = {
        //     header: { 'content-type': 'multipart/form-data' }
        // }

        // formData.append("file", selectedFile.file)
        //save the Image we chose inside the Node Server 

        firebaseImageUploadforPicUpdate(dispatch, selectedFile, setProgress, inmate)
        // uploadImage(dispatch, formData, config, setImages, setInmatePicName, update, inmate)

    }

    // let imageRef = firebase.storage().ref('/' + imageName);
    // imageRef
    //     .delete()
    //     .then(() => {
    //         console.log(`${imageName}has been deleted successfully.`);
    //     })
    //     .catch((e) => console.log('error on image deletion => ', e));



    // useEffect(() => {
    //     const fetchImages = async () => {

    //         let result = await storageRef.child('images').listAll();
    //         let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

    //         return Promise.all(urlPromises);

    //     }

    //     const loadImages = async () => {
    //         const urls = await fetchImages();
    //         setFiles(urls);
    //     }
    //     loadImages();
    // }, []);
    return (
        <>
            <div style={{ width: '90vh' }} class=' d-flex flex-column'>
                <Input className='mb-3' type="file" name="fName" onChange={onfileSelect} placeholder={selectedFile.name} />
                {
                    selectedFile.file &&
                    <div>
                        <progress value={progress} max='100' />
                        <br />
                        <br />
                        <img style={{ minWidth: '100px', width: '100px', height: '100px' }}
                            src={selectedFile.img}
                            // src={'http://localhost:8000/' + image}
                            alt={'productImg' + selectedFile.name}
                        />

                    </div>

                }
                <Button color='success' className='font-weight-bold mt-2' onClick={onImageUpload}>Upload</Button>
            </div>




        </>


    )

}

export default UploadInmatePic
