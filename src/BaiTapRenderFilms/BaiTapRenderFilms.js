import React, { Component } from "react";
import dataFilms from "../Data/DataFilms.json";



export default class BaiTapRenderFilms extends Component {

    RenderFilms = ()=>{
        return(
            dataFilms.map((Film,index) =>{
                return <div className="card text-white col-3 bg-dark" key={index}>
                <img className="card-img-top img-fluid" src={Film.hinhAnh} alt="img-film" />
                <div className="card-body">
                  <h4 className="card-title">{Film.tenPhim}</h4>
                  <p className="card-text">{Film.moTa.length > 80 ? <p>{Film.moTa.substring(0,90)} ...</p> : Film.moTa}</p>
                </div>
              </div>
            })
        )
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            {this.RenderFilms()}
        </div>
      </div>
    );
  }
}
