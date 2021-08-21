import React, { useEffect, useState, useContext } from 'react'
import { uploadImage } from '../../../ContextAPI/actions/inmateActions';
import { Button, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore';


function UploadInmatePic() {
    const { state, dispatch } = useContext(globalStore)
    const inmate = state.currentInmate
    const [Images, setImages] = useState('')
    const [InmatePicName, setInmatePicName] = useState('')
    const [selectedFile, setSelectedFile] = useState({ name: '', file: '' })

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
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }

        formData.append("file", selectedFile.file)
        //save the Image we chose inside the Node Server 
        let update = true
        uploadImage(dispatch, formData, config, setImages, setInmatePicName, update, inmate)

    }

    return (
        <>
            <div style={{ width: '90vh' }} class=' d-flex flex-column'>
                <Input className='mb-3' type="file" name="fName" onChange={onfileSelect} placeholder={selectedFile.name} />
                {
                    selectedFile.img &&
                    <img style={{ minWidth: '100px', width: '100px', height: '100px' }}
                        src={selectedFile.img}
                        alt={'productImg'}
                        className='rounded-circle border mt-2 mr-1'
                    />
                }
                <Button color='success' className='font-weight-bold' onClick={onImageUpload}>Upload</Button>
            </div>




        </>


    )

}

export default UploadInmatePic
