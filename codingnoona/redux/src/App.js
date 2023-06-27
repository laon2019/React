
import { useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import './App.css';
import Box from "./component/Box";

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
  const increase = () =>{
    dispatch({type: "INCREMENT", payload: {num: 5}})
  }
  const decrease = () => {
    dispatch({type: "DECREMENT", payload: {num: 3}})
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <Box />
    </div>
  );
}

export default App;
