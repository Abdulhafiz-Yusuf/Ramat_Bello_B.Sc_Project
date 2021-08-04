import React from 'react'
import { CardTitle, CardText, } from 'reactstrap'


const AboutPage = () => {
    return (
        <div className='container mt-5 '>

            <div style={{ height: '120px' }}></div>

            <CardTitle className='text-success' tag="h2"> ABOUT NCoS</CardTitle>
            <CardText className='text-justify'>
                The Nigerian Correctional Service is an arm of the Criminal Justice System domiciled in the Ministry of Interior.<br />
The Nigerian Correctional Service is a federal phenomenon. i.e. there are no State Correctional Services in the Nigeria. Every Custodial Centre is a Federal Facility.
The operation of the Service is supervised by the Ministry of Interior and the Civil Defence, Fire, Immigration and Corrections Board.
                </CardText>



            <h3><strong> </strong></h3>

            <p>


            </p> <br />
            <CardTitle className='text-success' tag="h2"> ENABLING LAW</CardTitle>

            <CardText className='text-justify'>
                The Service derives its operational powers from the Nigerian Correctional Act, 2019.
</CardText>
        </div>
    )
}

export default AboutPage
