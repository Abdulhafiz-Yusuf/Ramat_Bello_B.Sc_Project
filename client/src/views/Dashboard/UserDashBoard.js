// src/views/profile.js
import React, { useContext, useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
//import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import RegisterImmate from "./Immate/RegImmate";
import SearchImmate from "./Immate/SearchImmate";
import GeneratePass from './Guest/GeneratePass'
import RegGuest from './Guest/RegGuest'
import DashBoardMenu from "./DashBoardMenu";
import Loading from '../../components/Loading.js'

import { globalStore } from '../../ContextAPI/globalStore'

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

    const [user, setUser] = useState({ users_Id: 1, email: 'talk2abdulhafiz@gmail.com', })

    const { state, dispatch } = useContext(globalStore)
    const stateViewPage = state.ViewPage
    const stateUser = {
        uid: 123,
        username: 'Abdul',

    }
    //state.UserPage
    const stateUserExist = state.UserExist
    console.log(state)

    const displayUserProfile = () => {
        return (< div >
            <h2 className='text-success text-center mb-3 font-weight-bold'> <span className='text-uppercase' >
                {stateUser.username}</span> Welcome to 9jaBloodBank
                            </h2>

            <div className='d-flex border border-success'>
                <DashBoardMenu user={stateUser} />
                <div className='d-flex justify-content-center border border-success flex-grow-1'>
                    {/* <DashBoardView user_id={stateUser.users_id} user={stateUser} bg={stateUser} /> */}
                    {stateViewPage === 'regImmate' ?
                        // user & userExist
                        <RegisterImmate user_id={stateUser.users_id} />
                        :
                        stateViewPage === 'searchImmate'
                            ?
                            <SearchImmate />
                            :
                            stateViewPage === 'regVisitor'
                                ?
                                <RegGuest />
                                :
                                stateViewPage === 'generatePass'
                                    ?
                                    <GeneratePass />
                                    :
                                    <Profile user={stateUser} bg={stateUser} />
                    }
                </div >
            </div>
        </div >
        )
    }




    return (
        <div className='mt-5 container'>
            <div style={{ height: '100px' }}></div>
            {
                // !stateUserExist & stateUser ?
                //     < RegCompletion user={stateUser[0]} />
                //     :
                //     // stateUser ?

                //     //     <Loading />
                //         :
                // stateUser.length > 0 &&
                displayUserProfile()


            }

        </div>
    )
}


