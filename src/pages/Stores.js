import React, { Component } from "react";

import Card from "./Card";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export default class Stores extends Component {
  render() {
    return (
      <div id="body" className="lg">
        {/* <div className="container"> */}
        <h1 id="body" className="heading-sm">
          OUR STORE
        </h1>
        <br /> 
        <div className="five-col">
          <button className="btn btn5">ALL</button>
        </div>
        <div className="five-col">
          <button className="btn btn5">CAKES</button>
        </div>
        <div className="five-col">
          <button className="btn btn5">CUPCAKES</button>
        </div>
        <div className="five-col">
          <button className="btn btn5">SWEETS</button>
        </div>
        <div className="five-col">
          <button className="btn btn5">DOUGHNUTS</button>
        </div>
        <br /> <br />
        <Card />
        {/* <div className="container">
          <div className="card">
            <img src="https://source.unsplash.com/category/nature/330x200" />
            <h4>Nature</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos molestias facere.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/category/food/330x200" />
            <h4>Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos molestias facere.
            </p>
            <a href="#">Learn more</a>
          </div>
          <div className="card">
            <img src="https://source.unsplash.com/category/buildings/330x200" />
            <h4>Buildings</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos molestias facere.
            </p>
            <a href="#">Learn more</a>
          </div> */}
        {/* </div> */}
        <div className="dark">
          <h1 className="heading-sm">Social Media</h1>
          <br /> <br /> <br />
          <div className="four-col">
            <p>
              <FaFacebook />
            </p>
          </div>
          <div className="four-col">
            <p>
              <FaInstagram />
            </p>
          </div>
          <div className="four-col">
            <p>
              <FaYoutube />
            </p>
          </div>
          <div className="four-col">
            <p>
              <FaTwitter />
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
