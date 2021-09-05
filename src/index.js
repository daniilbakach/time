import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Week1 from './Week1';
import Week2 from './Week2';
import reportWebVitals from './reportWebVitals';
let currentDate = new Date();
let firstJan = new Date(currentDate.getFullYear(),0,1);
let numberOfDays = Math.floor((currentDate - firstJan) / (24*60*60*1000));
let currentWeek = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
let renderWeek = (currentWeek % 2 === 0) ? <Week1/> : <Week2/>;


ReactDOM.render(
  <React.StrictMode>
    {renderWeek}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
