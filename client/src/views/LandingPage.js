import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList'
import { Table, CardTitle, CardText } from 'reactstrap'
import { useDispatch } from "react-redux";
import { fetchBlood, } from '../appStore/_actions/BloodBankAction'
import Loading from '../components/Loading';


const LandingPage = () => {
    const [bgData, setBgData] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlood)
            .then(response => {
                if (response.payload.bg) {
                    console.log(response.payload.bg)
                    setBgData(response.payload.bg)
                }
                else { console.log(response.payload) }
            })

    }, [dispatch])

    return (

        <div className=' container mt-5 mb-5'>
            <div style={{ height: '100px' }}></div>
            <div className='mb-5 shadow p-4'>

                <CardTitle className='text-danger' tag="h2"> Become A Blood Donor! Register and Save A Life Today!!</CardTitle>
                <CardText>
                    The Nigerian Correctional Service(NCoS), formerly known as Nigerian Prison Service (NPS) is a government agency of Nigeria which operates prisons. The agency is headquartered in Abuja, and it is under the supervision of the Ministry of the Interior and the Civil Defence Immigration and Correctional Service. The name was changed from the Nigerian Prisons Service to the Nigerian Correctional Service by President Muhammadu Buhari on the 15th of August 2019 after signing the Nigerian Correctional Service Act of 2019 into law.The bill was passed by the 8th Assembly of the House of Representatives but the signing was done two months after their tenure had expired. The law divides the Correctional Service into two main areas which are The Custodial Service and Non-custodial Service.
                </CardText>
            </div>
            {!bgData ?
                <Loading />
                :
                <div className='d-flex flex-row'>

                    <div className='   w-75 row '>
                        <CardList bgData={bgData} />
                    </div>
                    <div className='  w-25 rounded'>

                        <Table bordered className='bg-danger text-light w-100 text-center mt-3'>
                            <thead className='text-center'>
                                <th colspan="2" className='font-weight-bold text-light'>
                                    Statistics of Available Blood
                            </th>
                            </thead> <thead>
                                <th>Blood Group </th>
                                <th>Quantity in pints</th>

                            </thead>
                            {bgData && bgData.map((item, index) => {
                                return (
                                    < tr >
                                        <td>{item.bg}<sup>{item.rhd}</sup></td>
                                        <td>{item.qty} pints</td>
                                    </tr>
                                )
                            })
                            }

                        </Table>

                    </div>
                </div >

            }



        </div >
    )
}

export default LandingPage
