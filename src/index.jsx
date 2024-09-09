import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../public/style.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <App />
    <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);