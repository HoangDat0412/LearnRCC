import React, { Component } from 'react'
import "./Final.css"
export default class Final2 extends Component {

    state = {
        result:0
    }

    handleClickes = (value)=>{
        switch(value){
            case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        if (this.state.result === "0") {
          this.setState({
            result: value,
          });
        } else {
          this.setState({
            result: this.state.result + value,
          });
        }
        break;
      case "=":
        //todo add a regex test to see if the statment is correct before passing it to eval
        //todo limit the result  to 14
        
        this.setState({
          result: eval(this.state.result),
        });
        break;
      case "c":
        this.setState({
          result: "",
        });
        break;

        default:
            break;
        }
     

    }

    Buttons = ()=>{
        return(
            <div className="buttons">
            <div className="row1">
              <button className="btn btn-action" onClick={(e) =>{this.handleClickes(e.target.value)}} value="c">C</button>
              <button className="btn btn-action" onClick={(e) =>{this.handleClickes(e.target.value)}} value="+/-">+/-</button>
              <button className="btn btn-action" onClick={(e) =>{this.handleClickes(e.target.value)}} value="%">%</button>
              <button className="btn btn-calc" onClick={(e) =>{this.handleClickes(e.target.value)}} value="/">÷</button>
            </div>
            <div className="row2">
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="7">7</button>
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="8">8</button>
              <button className="btn" onClick={this.handleclicks} value="9">9</button>
              <button className="btn btn-calc" onClick={this.handleclicks} value="*">x</button>
            </div>
            <div className="row3">
              <button className="btn" onClick={this.handleclicks} value="4">4</button>
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="5">5</button>
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="6">6</button>
              <button className="btn btn-calc" onClick={(e) =>{this.handleClickes(e.target.value)}} value="-">-</button>
            </div>
            <div className="row4">
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="1">1</button>
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="2">2</button>
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value="3">3</button>
              <button className="btn btn-calc" onClick={(e) =>{this.handleClickes(e.target.value)}} value="+">+</button>
            </div>
            <div className="row5">
              <button className=" btn-0" onClick={(e) =>{this.handleClickes(e.target.value)}} value="0">0</button>
              <button className="btn" onClick={(e) =>{this.handleClickes(e.target.value)}} value=".">.</button>
              <button className="btn btn-calc" onClick={(e) =>{this.handleClickes(e.target.value)}} value="=">=</button>
            </div>
          </div>
        )
    }

    Results =()=>{
        return(
            <div className="result">
              <p>{this.state.result}</p>
            </div>
            );
    }
    

  render() {
    return (
      <div>
        {this.Results()}
        {this.Buttons()}
      </div>
    )
  }
}
