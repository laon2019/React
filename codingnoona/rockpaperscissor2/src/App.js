
import "./App.css";
import Box1 from "./component/Box1";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-Pk7owku_TooCmyXvk6rXDDe6nds35lTTw&usqp=CAU"
  },
  scissors: {
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiANMNPLRgBSQgMaMn_PpejGtR5JbVKaIYg&usqp=CAU"
  },
  paper: {
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPyrhF6rZ-IZOQM0WoJ2JLWQlP1lGewwa-wg&usqp=CAU"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [result, setResult] = useState("");
  const play = (userChoise) =>{
    setUserSelect(choice[userChoise]);
    let computer = random();
    setComputerSelect(computer);
    setResult(judgement(choice[userChoise], computer));
  }
  const random = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }
  const judgement = (user, computer) =>{
    if(user.name==computer.name){
      return ["tie", "tie"]
    } else if(user.name =="Rock"){
      return computer.name=="Scissors"?["win","lose"]:["lose","win"];
    } else if(user.name =="Scissors"){
      return computer.name=="Paper"?["win","lose"]:["lose","win"];
    } else if(user.name == "Paper"){
      return computer.name=="Rock"?["win","lose"]:["lose","win"];
    }
  }
  return (
    <div>
      <div className="main">
        <Box1 item={userSelect} result={result[0]} title="You"/>
        <Box1 item={computerSelect} result={result[1]} title="Computer"/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
