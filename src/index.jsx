import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/style.css';
import { init, resizeReset, mousemove, mouseout } from './main';  
import Header from './components/Header.jsx';

function Root() {
  const canvasRef = useRef(null);  
  useEffect(() => {
    const canvas = canvasRef.current;  
    init(canvas);  

    window.addEventListener("resize", () => resizeReset(canvas)); 
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseout", mouseout);
    
    return () => {
      window.removeEventListener("resize", () => resizeReset(canvas));
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseout", mouseout);
    };
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <App />
      <canvas ref={canvasRef} id="canvas"></canvas> 
      {/* <Footer /> */}
    </React.StrictMode>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
