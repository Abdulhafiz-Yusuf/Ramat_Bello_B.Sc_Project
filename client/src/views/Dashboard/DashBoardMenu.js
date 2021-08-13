import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import { viewPageAction } from '../../ContextAPI/actions/UserActions'
import { globalStore } from '../../ContextAPI/globalStore'



function DashBoardMenu({ user }) {

    // const dispatch = useDispatch();
    const { state, dispatch } = useContext(globalStore)
    console.log(state)
    return (
        <div className='d-flex flex-column border border-success w-25 border pt-3'>
            {/* <Card className='text-success  w-75 border d-flex justify-content-center align-items-center m-1 align-self-center'>
                <img src={me} alt='Passport' className='border rounded-circle ' style={{ height: '190px', width: '150px' }} />
                <div className='text-uppercase font-weight-bold'>{`${user.f_name} `} {user.l_name}</div>
                <div>+234 {user.phone}</div>
            </Card> */}

            {/* <Label className='font-weight-bold text-center pl-3 text-success '>
                INMATE
                 <hr />
            </Label> */}


            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('searchImmate'))}>
                Search Inmate
            </Button>



            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('regImmate'))}>
                Register Inmate
            </Button>



            {/* <Label className='font-weight-bold text-center mt-4 pl-3 text-success '>
                Guest
                 <hr />
            </Label>
            
*/}
            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('generatePass'))}>
                Generate Pass
            </Button>
            <Button className='bg-success m-2 text-light' onClick={() => dispatch(viewPageAction('regVisitor'))}>
                Visit History
            </Button>
        </div>
    )
}
export default DashBoardMenu
