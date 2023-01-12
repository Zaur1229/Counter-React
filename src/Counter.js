import React from "react";

export default function Counter(){
  const [count,setCount] = React.useState(0);
  const onClickPlus =()=>{
    setCount(count +1);
  };
  const onClickMinus =()=>{
    setCount(count -1);
  }
  return(
    <div className="counter">
      <div>
        <h2>Счётчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- минус</button>
        <button onClick={onClickPlus} className="plus">+ плюс</button>
      </div>
    </div>
  );
}