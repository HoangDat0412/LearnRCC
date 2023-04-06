import React, { Component } from 'react'

export default class RenderingCondition extends Component {
  login = true;
  userName = "Hoàng Đạt";

  render() {
    return (
      <div>
        {this.login ? <p>Hello {this.userName}</p> : <button>Đăng Nhập </button>}
      </div>
    )
  }
}
