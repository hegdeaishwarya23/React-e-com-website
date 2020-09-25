import React, { Component } from "react";
import "./Card.css";
import Img1 from "../images/sweets-1.jpeg";
import Img2 from "../images/sweets-2.jpeg";
import Img3 from "../images/sweets-3.jpeg";
export default class Card extends Component {
  render() {
    return (
      <div id="body">
        <section className="hero-section">
          <div className="cgrid">
            <a className="card" href="#">
              <div className="cardbg bg1" />
              <div className="ccontent ">
                <h3 className="textcard two-col">Sweets </h3>
                <div style={{ float: "right", marginLeft: "100px" }} />
                <h3 className="textcard two-col">Rs.25</h3>
              </div>
            </a>
            <a className="card" href="#">
              <div className="cardbg bg2" />
              <div className="ccontent ">
                <h3 className="textcard two-col">Sweets </h3>
                <div style={{ float: "right", marginLeft: "100px" }} />
                <h3 className="textcard two-col">Rs.25</h3>
              </div>
            </a>
            <a className="card" href="#">
              <div className="cardbg bg3" />
              <div className="ccontent ">
                <h3 className="textcard two-col">Sweets </h3>
                <div style={{ float: "right", marginLeft: "100px" }} />
                <h3 className="textcard two-col" >Rs.25</h3>
              </div>
            </a>

            <div></div>
          </div>
        </section>
      </div>
    );
  }
}
