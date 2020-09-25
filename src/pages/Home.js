import React, { Component, Fragment } from "react";

import Navbar from "./Navbar";
import Img1 from "../images/sweets-1.jpeg";
import Img2 from "../images/trans-cake.png";
import Img3 from "../images/trans-custom.png";
import Img4 from "../images/trans-wedding.png";
import Img11 from "../images/candy-icon.png";
import Img12 from "../images/bread-icon.png";
import Img13 from "../images/cupcake-icon.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div id="body">
        <Navbar />
        <br />
        <br />
        <br />
        <div className="paral">
          <div className="heading">
           iyengar bakery
            <br />
            <br />
            <br />
            <button className="button button5">Explore</button>
          </div>
        </div>

        <section>
          <div className="two-col">
            <h1 className="heading-sm">About Us</h1>
            <p>
              Motivation is an important factor which encourages persons to give
              their best performance and help in reaching enterprise goals. A
              strong positive motivation will enable the increased output of
              employees but a negative motivation will reduce their performance.
              A key element in personnel management is motivation.
              {/* <!-- According to Likert, “It is the core of management which shows that every human being gives him a sense of worth in face-to face groups which are most important to him….A supervisor should strive to treat individuals with dignity and a recognition of their personal worth.” --> */}
            </p>
          </div>

          <div className="two-col">
            {/* <!-- <p>It is a driving force which promotes action. For example, hunger is a motivation which causes a desire to eat. Motivation is the purpose or psychological cause of an action.
            With animals, motivation is caused by basic needs: needs for food, water, warmth, safety, mating, protecting the young, defending territory, needs to escape pain and threats... The drive to do these things is instinctive, inborn, and triggered by circumstance.
        
            With humans, whose mental life is so much more complex, motivation is more complicated. Obviously, humans feel the need for food and water, avoid pain and so on. But they are also capable of having long-term plans which are more difficult to understand.
        </p>  */}
            <img className="imghover imgborder" src={Img1}
             width="100%" height="20%" 
             />
          </div>
        </section>
        <div className="paral2">
          <section>
            <h1 className="heading-sm">services</h1>
            <div className="three-col">
              <img src={Img11} />
              <h2>Candy</h2>
              <p>
                Motivation is goal-oriented. Motivation is a continuous process.
                Motivation may be positive or negative. Motivation is
                goal-oriented. Motivation is a continuous process. Motivation
                may be positive or negative.
              </p>
            </div>
            <div className="three-col">
              <img src={Img12} />
              <h2>Bread</h2>
              <p>
                Motivation is goal-oriented. Motivation is a continuous process.
                Motivation may be positive or negative. Motivation is
                goal-oriented. Motivation is a continuous process. Motivation
                may be positive or negative.
              </p>
            </div>
            <div className="three-col">
              <img src={Img13} />
              <h2>Cup Cakes</h2>
              <p>
                Motivation is goal-oriented. Motivation is a continuous process.
                Motivation may be positive or negative. Motivation is
                goal-oriented. Motivation is a continuous process. Motivation
                may be positive or negative.
              </p>
            </div>
          </section>
        </div>
        <section>
          <h1 className="heading-sm">Order Cakes</h1>
          <div className="three-col">
            <h2>Birthday Cakes</h2>
            <p>
              Motivation is goal-oriented. Motivation is a continuous process.
              Motivation may be positive or negative. Motivation is
              goal-oriented. Motivation is a continuous process. Motivation may
              be positive or negative.
            </p>
            <img src={Img2} />
          </div>
          <div className="three-col">
            <h2>Custom Cakes</h2>
            <p>
              Motivation is goal-oriented. Motivation is a continuous process.
              Motivation may be positive or negative. Motivation is
              goal-oriented. Motivation is a continuous process. Motivation may
              be positive or negative.
            </p>
            <img src={Img3} />
          </div>
          <div className="three-col">
            <h2>Wedding Cakes</h2>
            <p>
              Motivation is goal-oriented. Motivation is a continuous process.
              Motivation may be positive or negative. Motivation is
              goal-oriented. Motivation is a continuous process. Motivation may
              be positive or negative.
            </p>
            <img src={Img4} />
          </div>
        </section>
        <div className="paral3" />
        <div className="dark">
          <h1 className="heading-sm">Social Media</h1>
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
        {/* <div className="paral4" /> */}
      </div>
    );
  }
}
