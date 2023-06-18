import { useState } from 'react';
import './App.css';
import Box from "./componenet/Box"

function App() {
  const [counter, setcounter] = useState(0);
  const increase= () =>{
    setcounter(counter+ 1);
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>클릭</button>
    </div>
    
  );
}

export default App;
