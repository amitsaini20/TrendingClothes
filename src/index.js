import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import App from "./App";
// import reportWebVitals from '.reportWebVitals'
import { Provider } from "react-redux";
import store from './redux/store'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store = {store}>
  <App/>
  </Provider>
)
// reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     {/* <BrowserRouter>
//       <Routes>
//       <Route path ="/" element={<App />}></Route>
        
//       </Routes>
//     </BrowserRouter> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
