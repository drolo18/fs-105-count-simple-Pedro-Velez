import React from "react";
import ReactDOM from "react-dom/client";
import Home from './components/Home';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


let count = 0;
let isIncreasing = true

const root = ReactDOM.createRoot(document.getElementById("root"));

let intervalId = setInterval(() => {
  if (count === 20) {
    isIncreasing = false; 
  } else if (count === 0) {
    isIncreasing = true;
  }
  

  count = isIncreasing ? count + 1 : count - 1;
  
  
  render();
}, 1000);

const render = () => {

const onReset = () => {
 count = 0;
 render();
}

const stop = () => {
    clearInterval(intervalId);
    render()
  }
  const start = () =>{  
      intervalId = setInterval(() => {
        if (count === 20) {
          isIncreasing = false;
        } else if (count === 0) {
          isIncreasing = true;
        }
  
        count = isIncreasing ? count + 1 : count - 1;
        render();
      }, 1000);   
  }


 root.render(<Home count={count} onReset={onReset}  stop={stop} start={start} />);

}


render();