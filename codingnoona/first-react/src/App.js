import { useState, useEffect } from 'react';
import './App.css';
import Box from "./componenet/Box"
import AppClass from './componenet/AppClass';

function App() {
  const [counter, setcounter] = useState(0);
  const increase= () =>{
    setcounter(counter+ 1);
  }
  useEffect(()=>{
    console.log("useEffect1 Fire");
  },[])
  useEffect(()=>{
    console.log("useEffect2 Fire");
  },[counter])
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>클릭</button>
    </div>
    
  );
}

export default App;
