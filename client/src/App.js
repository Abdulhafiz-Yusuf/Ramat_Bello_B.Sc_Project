//DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Card } from 'reactstrap';
//PAGES
import LandingPage from './views/LandingPage';

import MedCenter from './views/About';

//PAGE SECTIONS
import NavBar from './views/NavBar';
import Footer from './views/Footer';

//DASHBOARD
import UserDashBoard from './views/Dashboard/UserDashBoard';

import Login from './views/Login';


/*=====
APP.JS
=======*/
export default function App() {

  // const { isLoading, error } = useAuth0();
  // isLoading &&
  //   <div className='container d-flex justify-content-center align-items-center h-75'>
  //     <Card>
  //       <h2>Loading .... </h2>
  //     </Card>
  //   </div>


  // error &&
  //   < div className='container d-flex justify-content-center align-items-center h-75' >
  //     <Card>
  //       <h2>{error} </h2>
  //     </Card>
  //   </div >

  return (

    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/med-center" exact component={MedCenter} />
        <Route path="/dashboard" exact component={UserDashBoard} />
      </Switch>
      <Footer />
    </Router>



  );
}


