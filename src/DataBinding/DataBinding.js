import React, { Component } from 'react'

export default class DataBinding extends Component {
  // Tạo một thuộc tính
  name ="Đạt";
   virus ={
    name : "covid 19",
    age : 2,
    id : 10
  }
  // binding phương thức hàm của lớp đối tượng
  renderImage = () =>{

  }
  render() {

    return (
      <div>
        <h1>{this.name}</h1>
        {this.renderImage()}
      </div>
    )
  }
}
