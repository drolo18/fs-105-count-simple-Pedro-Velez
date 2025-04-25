import React from "react";
import ReactDOM from "react-dom/client";
import Home from './components/Home';

let count = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

let intervalId = setInterval(() => { 
  count++;
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

 root.render(<Home count={count} onReset={onReset}  stop={stop}/>);

}


render();