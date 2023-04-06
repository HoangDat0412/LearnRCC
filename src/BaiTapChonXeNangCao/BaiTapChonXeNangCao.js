import React, { Component } from "react";
import "./BaiTapChonXeNangCao.css";
//Import mảng dữ liệu các model xe
import dataFeatures from "../Data/arrayFeatures.json";
import dataWheels from "../Data/wheels.json";
export default class BaiTapChonXeNangCao extends Component {
  changeCar = (newCar) => {
    this.setState({
      carCurrent: newCar,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeCar(item);
          }}
          style={{ cursor: "pointer" }}
          className="row mt-1 border border-color-default m-3"
          key={index}
        >
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10">
            <h3 className="p-3">{item.title}</h3>
            <span className="p-3 pt-0 mt-0">{item.type}</span>
          </div>
        </div>
      );
    });
  };

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10 d-flex flex-colum align-items-center">
            <span className="p-3">{item.title}</span>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    // Đây là phương thức của component tự động thực thi sau thi render được gọi , lưu ý component chỉ chạy một lần đầu sau khi render thực thi

    let tagScript = document.createElement("script");
    tagScript.src =
      "https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy";
    document.querySelector(".appendScrip").appendChild(tagScript);
  };

  componentDidUpdate = ()=>{
    // Hàm sinh ra sau khi state thay đổi 
    // Lưu ý k được phép setState tại component này 
    let tagScript = document.createElement("script");
    tagScript.src ="https://cdn.scaleflex.it/filerobot/js-cloudimage-responsive/lazysizes.min.js?v4.1.6";
    document.querySelector(".appendScrip").appendChild(tagScript);
  }

  state = {
    carCurrent: {
      id: 4,
      title: "Rallye Red",
      type: "Metallic",
      img: "./images/icons/icon-red.jpg",
      srcImg: "images-red/images-red-1/",
      color: "Red",
      price: "22,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-red/images-red-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-red/images-red-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-red/images-red-3/",
        },
      ],
    },
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="model">
              {/* <img style={{ width: '100%' }} src="./images/images-black/images-black-1/civic-1.jpg" alt='car'/> */}
              <div
                style={{ minWidth: "100%" }}
                class="cloudimage-360"
                id="gurkha-suv"
                data-folder={"./images/" + this.state.carCurrent.srcImg}
                data-filename-x="civic-{index}.jpg"
                data-amount-x="8"
              ></div>
              <div className="appendScrip">
                <script src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy"></script>
              </div>
            </div>
            <div className="card mt-2">
              <h5 className="card-header text-default">Exterior color</h5>
              <table className="table border border-color-light" border="1">
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$ 19.000,00</td>
                  </tr>
                  <tr>
                    <td>Engine Type</td>
                    <td>In-line-4-cylinder</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior color</h5>
              <div className="container-fluid">{this.renderIcon()}</div>
            </div>
            <div className="card text-left mt-1">
              <h5 className="card-header text-default">Wheels</h5>

              <div className="container-fuild">{this.renderWheels()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
