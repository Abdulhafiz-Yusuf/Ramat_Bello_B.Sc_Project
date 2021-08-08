import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'

//REDUX
//import { Provider } from 'react-redu';
import ContextProvider from './ContextAPI/globalStore'




ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>, document.getElementById("root")
);