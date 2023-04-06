import React, { Component } from "react";

export default class BaiTapchonXe extends Component {
    state={
        imgProduct:require("../assets/products/black-car.jpg")
    }

    renderCar = (imgProduct)=>{
        this.setState({
            imgProduct:imgProduct
        })
    }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={this.state.imgProduct}
              alt="black-car"
            ></img>
          </div>
          <div className="col-5">
            <div className="card  ">
              <div className="card-header text-primary"> Exterior Color </div>
              <div className="card-body text-dark">
                <div className="row border border-light pt-2 pb-2" onClick={()=>this.renderCar(require("../assets/products/black-car.jpg"))} style={{ cursor: "pointer"}}>
                    <img className="col-3" src={ require('../assets/icons/icon-black.jpg')} alt="icon"></img>
                    <div className="col-9">
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                    </div>
                </div>
                <div className="row border border-light pt-2 pb-2" onClick={()=>this.renderCar(require("../assets/products/steel-car.jpg"))} style={{ cursor: "pointer"}}>
                    <img className="col-3" src={ require('../assets/icons/icon-steel.jpg')} alt="icon"></img>
                    <div className="col-9">
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                    </div>
                </div>
                <div className="row border border-light pt-2 pb-2" onClick={()=>{this.renderCar(require("../assets/products/silver-car.jpg"))}} style={{ cursor: "pointer"}}>
                    <img className="col-3" src={ require('../assets/icons/icon-silver.jpg')} alt="icon"></img>
                    <div className="col-9">
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                    </div>
                </div>
                <div className="row border border-light pt-2 pb-2" onClick={()=>{this.renderCar(require("../assets/products/red-car.jpg"))}} style={{ cursor: "pointer"}}>
                    <img className="col-3" src={ require('../assets/icons/icon-red.jpg')} alt="icon"></img>
                    <div className="col-9">
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

