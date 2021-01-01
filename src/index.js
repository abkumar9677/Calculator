import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

import Calculator from './components/calculator.js'; 
  
// Rendering the Calculator to the Web page. 
ReactDOM.render(
  <div style={{textAlign:'center'}}><Calculator /></div>, document.getElementById('root')
);

