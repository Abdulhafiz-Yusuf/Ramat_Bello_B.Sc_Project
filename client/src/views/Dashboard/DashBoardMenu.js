import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import { viewPageAction } from '../../ContextAPI/actions/UserActions'
import { globalStore } from '../../ContextAPI/globalStore'



function DashBoardMenu({ user }) {

    // const dispatch = useDispatch();
    const { state, dispatch } = useContext(globalStore)

    // useEffect(() => {

    // }, [])



    return (

        <div style={state.style ? state.style : { width: '30vh', display: 'flex', flexDirection: 'column', border: 'green solid 1px', paddingTop: '3px' }}>

            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('searchImmate'))}>
                Search Inmate
            </Button>
            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('regImmate'))}>
                Register Inmate
            </Button>

            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('generatePass'))}>
                Generate Pass
            </Button>
            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('vHistory'))}>
                Visit History
            </Button>
        </div>



    )
}
export default DashBoardMenu
