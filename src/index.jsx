import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/style.css';
import Header from './components/Header';


ReactDOM.render(
  <React.StrictMode>
    <Header />
     <App />
    {/* <Footer />  */}
  </React.StrictMode>,
  document.getElementById('root')
);