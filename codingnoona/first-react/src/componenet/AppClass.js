import React, { Component } from "react";
import BoxClass from "./BoxClass";

export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state={
            counter:0,
            num:1,
            value:0
        }
    }
    increase = () =>{
        this.setState({counter:this.state.counter + 1, value:this.state.value+1})
        console.log("increase", this.state)
    };
    componentDidMount(){

        //API 콜
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate", this.state)
    }
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increase}>클릭</button>
        <BoxClass num={this.state.value} />
      </div>
    );
  }
}
