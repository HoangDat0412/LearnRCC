import React, { Component } from 'react'
import style from './Styling.module.css'
export default class Styling extends Component {
  render() {
    const styleText = {
        color : "pink",
        padding: "15px",
        backgroundColor:"black"

    }
    return (
      <div>
        <p className={style.txt}>Styling</p>
        <p style={styleText}>Text pink</p>
      </div>
    )
  }
}
