//DEPENDENCIES
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//PAGES
import LandingPage from './views/LandingPage';

import MedCenter from './views/About';

//PAGE SECTIONS
import NavBar from './views/NavBar';
import Footer from './views/Footer';

//DASHBOARD
import UserDashBoard from './views/Dashboard/UserDashBoard';

import Login from './views/Login';
import Firebase from './services/firebase/FirebaseConfig';
import { Card } from 'reactstrap';
import LoadScreen from './components/LoadScreen';


/*=====
APP.JS
=======*/
export default function App() {
  const [isLoading, setisLoading] = useState(false)
  const [user, setuser] = useState()

  function onAuthStateChange() {
    setisLoading(true)
    return Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setuser(user)
        setisLoading(false)
        console.log("The user is logged in");
      } else {
        setisLoading(false)
        console.log("The user is not logged in");
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  // error &&
  //   < div className='container d-flex justify-content-center align-items-center h-75' >
  //     <Card>
  //       <h2>{error} </h2>
  //     </Card>
  //   </div >


  if (isLoading) {
    return (
      // <div className='container d-flex justify-content-center align-items-center h-75'>
      //   <Card>
      //     <h2>Loading .... </h2>
      //   </Card>
      // </div>
      <LoadScreen text='' height='100vh' />
    )
  }
  else {
    return (
      <Router>
        <NavBar setisLoading={setisLoading} user={user} />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/med-center" exact component={MedCenter} />
          <Route path="/dashboard" exact component={UserDashBoard} />
        </Switch>
        <Footer />
      </Router >
    );
  }
}


