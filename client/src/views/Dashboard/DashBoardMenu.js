import React, { useContext } from 'react'
//import { useDispatch } from "react-redux";
import { Button, Card, Label } from 'reactstrap';
import { viewPageAction } from '../../ContextAPI/actions/UserActions'
import me from '../../assets/me.jpg'
import { globaltore } from '../../ContextAPI/globalStore'



function DashBoardMenu({ user }) {

    // const dispatch = useDispatch();
    const { state, dispatch } = useContext(globaltore)
    console.log(state)
    return (
        <div className='d-flex flex-column w-25 border '>
            {/* <Card className='text-success  w-75 border d-flex justify-content-center align-items-center m-1 align-self-center'>
                <img src={me} alt='Passport' className='border rounded-circle ' style={{ height: '190px', width: '150px' }} />
                <div className='text-uppercase font-weight-bold'>{`${user.f_name} `} {user.l_name}</div>
                <div>+234 {user.phone}</div>
            </Card> */}

            <Label className='font-weight-bold text-center pl-3 text-success '>
                IMMATE
                 <hr />
            </Label>

            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('regImmate'))}>
                Register Immate
            </Button>

            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('searchImmate'))}>
                Search Immate
            </Button>




            <Label className='font-weight-bold text-center mt-4 pl-3 text-success '>
                Guest
                 <hr />
            </Label>
            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('regVisitor'))}>
                Register Guest
             </Button>

            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('generatePass'))}>
                Generate Pass
             </Button>
        </div>
    )
}
export default DashBoardMenu
