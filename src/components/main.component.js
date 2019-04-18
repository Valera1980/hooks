import React, { useState } from 'react';
import Child from './child.component';
// import Toast from './toast.component';
import { toast } from 'react-toastify';



export default function mainComponent() {
  const [counter, setCounter ] = useState(0);
  const increment = () => {
    setCounter(counter+1);
  }
  const decrement = () => {
    if(counter === 0){
      return;
    }
    setCounter(counter-1);
  }
  const setShowToast = () => {
    // console.log(isShow);
    toast.error("Success",{position: 'bottom-left'});
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h1>counter</h1>
      <h1>{counter}</h1>
      <hr/>
      <Child counter={counter}></Child>
      <hr/>
      <button onClick={setShowToast}>show toast</button>
    </div>
  )
}