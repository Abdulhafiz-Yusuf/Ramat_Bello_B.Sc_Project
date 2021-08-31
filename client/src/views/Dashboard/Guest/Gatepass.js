import React, { useContext } from 'react'
import { Card, Table, Label, Button, Form, FormGroup, Input } from 'reactstrap';
import { globalStore } from '../../../ContextAPI/globalStore';
function Gatepass() {
    const { state, dispatch } = useContext(globalStore)

    const inmate = state.currentInmate
    // const visitor = state.visitor
    const visitor = {
        vid: 41,
        f_name: 'IBRAHIM',
        l_name: 'Salisu',
        m_name: 'Stephen',
        gender: 'Male',
        phone: '8147620487',
        haddress: 'Toungo, Adamawa State',
        vlga: 'Adamawa',
        vstate: 'Gayuk',
        vpicurl: 'https://firebasestorage.googleapis.com/v0/b/ramatbelloproject.appspot.com/o/images%2Fdownload%20(1).jpeg?alt=media&token=25d9cf7c-42fb-4a16-986d-bd2ef021499b',
        postdate: '2021 - 08 - 27T16: 11: 30.066Z',
        vpicname: 'EVAGELINE PASSPORT.jpg'
    }
    return (
        <Card>
            <Card className='w-100'>
                <h5 className=' text-success text-center font-weight-bold'>Inmate's Information</h5>
                <div className='d-flex border flex-row align-items-center text-success text-center w-100'>
                    <div className='text-success text-center w-50' >
                        <img src={inmate.ipicurl} alt='Inmate Pic'
                            className='rounded-circle border'
                            style={{ height: '100px', width: '100px' }}
                        />
                        <label className='text-uppercase font-weight-bold ml-3 '>{inmate.f_name} {inmate.m_name} {inmate.l_name}</label>
                        <label className='text-uppercase font-weight-bold ml-3 '>{inmate.code}</label>
                    </div>
                    <div className=' d-flex flex-column text-success w-75 border text-left' >

                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> Gender:  </label> </div>
                            <div> <label className='text-uppercase font-weight-bold ml-3 '>{inmate.gender}</label></div>
                            <hr />
                        </div>

                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> D.O.B:  </label> </div>
                            <div> <label className='text-uppercase font-weight-bold ml-3 '>{inmate.dob}</label></div>
                            <hr />
                        </div>
                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> Phone:  </label>  </div>
                            <div> <label className='text-uppercase font-weight-bold ml-3 '>+234 {inmate.phone}</label> </div>
                        </div>
                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> State: </label>  </div>
                            <div> <label className=' text-uppercase font-weight-bold ml-3 '>{inmate.istate}</label> </div>
                        </div>

                        <div className='d-flex w-100 text-success'>
                            <div className='w-25 '><label className='ml-3'> L.G.A:  </label>  </div>
                            <div> <label className='text-uppercase font-weight-bold  ml-3 '>{inmate.ilga}</label> </div>
                        </div>
                    </div>
                </div>
            </Card >
            <Card className='w-100'>
                <h5 className=' text-success text-center font-weight-bold'>Visitor's Information</h5>
                <div className='d-flex border flex-row align-items-center text-success text-center w-100'>

                    <div className=' d-flex flex-column text-success w-75 border text-left' >

                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> Gender:  </label> </div>
                            <div> <label className='text-uppercase font-weight-bold ml-3 '>{visitor.gender}</label></div>
                            <hr />
                        </div>

                        {/* <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> D.O.B:  </label> </div>
                            <div> <label className='text-uppercase font-weight-bold ml-3 '>{visitor.dob}</label></div>
                            <hr />
                        </div> */}
                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'> Phone:  </label>  </div>
                            <div> <label className='text-uppercase font-weight-bold ml-3 '>+234 {visitor.phone}</label> </div>
                        </div>
                        <div className='d-flex w-100 text-success border-bottom'>
                            <div className='w-25 '><label className='ml-3'>Address: </label>  </div>
                            <div> <label className=' text-uppercase font-weight-bold ml-3 '>{visitor.haddress}</label> </div>
                        </div>

                        {/* <div className='d-flex w-100 text-success'> 
                            <div className='w-25 '><label className='ml-3'> L.G.A:  </label>  </div>
                            <div> <label className='text-uppercase font-weight-bold  ml-3 '>{visitor.ilga}</label> </div>
                        </div> */}
                    </div>
                    <div className='text-success text-center w-50' >
                        <img src={visitor.vpicurl} alt='visitor Pic'
                            className='rounded-circle border'
                            style={{ height: '100px', width: '100px' }}
                        />
                        <label className='text-uppercase font-weight-bold ml-3 '>{visitor.f_name} {visitor.m_name} {visitor.l_name}</label>
                        <label className='text-uppercase font-weight-bold ml-3 '>{visitor.code}</label>
                    </div>
                </div>

            </Card >

        </Card>
    )
}

export default Gatepass
