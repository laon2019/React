import "./App.css";
import Box from "./component/Box";
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
  const [userSelect, setUserSlect] = useState(null)
  const [computerSelect, setComputerSelcet] = useState(null)
  const [result, setResult] = useState("")
  // const [computerResult, setComputerResult] = useState("")
  const play = (userChoice) => {
    setUserSlect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelcet(computerChoice);
    // console.log(judgement(choice[userChoice], computerChoice))
    setResult(judgement(choice[userChoice], computerChoice))
    // setComputerResult(computerJudgement(judgement(choice[userChoice], computerChoice)))
  }
  const randomChoice = () =>{
    let itemArray = Object.keys(choice);//객체에 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }
  const judgement = (user, computer) => {
    if(user.name == computer.name){
      return ["tie","tie"]
    } else if(user.name =="Rock"){
      return computer.name=="Scissors"?["win","lose"]:["lose","win"];
    } else if(user.name =="Scissors"){
      return computer.name=="Paper"?["win","lose"]:["lose","win"];
    } else if(user.name == "Paper"){
      return computer.name=="Rock"?["win","lose"]:["lose","win"];
    }
  }

  // const computerJudgement = (user) =>{
  //   if(user =="win"){
  //     return "lose"
  //   } else if(user =="tie"){
  //     return "tie"
  //   } else if(user =="lose"){
  //     return "win"
  //   }
  // }
  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result[0]}/>
        <Box title="Computer" item={computerSelect} result={result[1]}/>
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
