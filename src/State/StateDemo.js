import React, { Component } from 'react'

export default class StateDemo extends Component {

    state ={
        status : false
    }
    
    userLogin ={
        name : "Hoàng Đạt",
        age : 19
    }
    login = ()=>{
        this.setState({
            status:true
        })
    }
    renderUserLogin = ()=>{
        if(this.state.status){
            return <div>{this.userLogin.name}</div>
        }
        return <button onClick={()=>{
            this.login()
        }}>Log In</button>
    }
  render() {
    return (
      <div>
        {this.renderUserLogin()}
      </div>
    )
  }
}
