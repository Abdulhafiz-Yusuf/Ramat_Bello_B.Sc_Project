// src/views/profile.js
import React, { useContext, } from "react";
import RegisterInmate from "./Immate/RegInmate";
import SearchImmate from "./Immate/SearchImmate";
import GeneratePass from './Guest/GeneratePass'
import RegGuest from './Guest/RegGuest'
import DashBoardMenu from "./DashBoardMenu";
import { globalStore } from '../../ContextAPI/globalStore'
import Profile from "./Profile";

/*
=========================
  USERDASHBOARD PAGE
=========================
              Tasks
             ========
             1. After successful logIn/SignUp from Auth0 or Firebase this page is called
             2. Use User Identity Info from Auth0 or Firebase to check if user already already exist in DB.
                if User Exist in DB:
                {
                    Fetch Full User info from DB and DisplayUserProfile User Profile Page.
                    HINTS:
                    1.  use dispatch(checkifUserExist(user)) to check if user Exist in DB
                        &&  if(Exist):
                            Fectch full User info from DB
                    2.  Else use 'UserExist' value in redux to displayUserProfile Registration Completion page
                }
                else:
                    DisplayUserProfile Registration Completion Page to collect full user profile.
                      */
export default function UserDashBoard() {

    // const stateViewPage = useSelector(state => state.UserReducer.ViewPage);
    // const stateUser = useSelector(state => state.UserReducer.user);
    // const stateUserExist = useSelector(state => state.UserReducer.UserExist);



    const { state, dispatch } = useContext(globalStore)
    const stateViewPage = state.ViewPage
    const stateUser = {
        uid: 123,
        username: 'Abdul',

    }
    //state.UserPage

    console.log(state)

    return (
        <div className='mt-5 container'>
            <div style={{ height: '100px' }}></div>
            < div >
                {/* <h2 className='text-success mt-5 text-center mb-3 font-weight-bold'> <span className='text-uppercase' >
                    {stateUser.username}</span> Welcome to Nigerian 
                            </h2> */}

                <div className='d-flex  border-success mt-5'>
                    <DashBoardMenu user={stateUser} />
                    <div className='d-flex justify-content-center  border-success flex-grow-1'>
                        {/* <DashBoardView user_id={stateUser.users_id} user={stateUser} bg={stateUser} /> */}
                        {stateViewPage === 'regImmate' ?
                            // user & userExist
                            <RegisterInmate user_id={stateUser.users_id} />
                            :
                            stateViewPage === 'generatePass' ?
                                <GeneratePass />
                                :
                                stateViewPage === 'regVisitor'
                                    ?
                                    <RegGuest />
                                    :
                                    stateViewPage === 'profile'
                                        ?
                                        <Profile />
                                        :
                                        <SearchImmate />

                        }
                    </div >
                </div>
            </div >

        </div>
    )
}


