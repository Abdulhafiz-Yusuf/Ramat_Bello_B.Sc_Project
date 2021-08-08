import React, { } from 'react'
// import CardList from '../components/CardList'
import { CardTitle, CardText, } from 'reactstrap'
import Carousel from '../components/Carousel'




const LandingPage = () => {


    return (

        <div className=' container mt-5 mb-5'>
            <div style={{ height: '120px' }}></div>


            {/* <Carousel /> */}


            <div className='mb-5 shadow p-4'>
                <CardTitle className='text-success' tag="h2"> The Nigerian Correctional Service(NCoS)</CardTitle>

                <CardText className='text-justify'>
                    The Nigerian Correctional Service(NCoS), formerly known as Nigerian Prison Service (NPS) is a government agency of Nigeria which operates prisons. The agency is headquartered in Abuja, and it is under the supervision of the Ministry of the Interior and the Civil Defence Immigration and Correctional Service. The name was changed from the Nigerian Prisons Service to the Nigerian Correctional Service by President Muhammadu Buhari on the 15th of August 2019 after signing the Nigerian Correctional Service Act of 2019 into law.The bill was passed by the 8th Assembly of the House of Representatives but the signing was done two months after their tenure had expired. The law divides the Correctional Service into two main areas which are The Custodial Service and Non-custodial Service.
                </CardText>
            </div>





        </div >
    )
}

export default LandingPage
