import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"


import About from "./Users/about";
import Blog from "./Users/blog";
import Cart from "./Users/cart";
import Checkout from "./Users/checkout";
import Contact from "./Users/contact";
import Promo from "./Users/promo";
import Shop from "./Users/shop";
import Shortcodes from "./Users/shortcodes";
import Singlepost from "./Users/single-post";
import Singleproduct from "./Users/single-product";

import Home from "./pages/Home";
import Stores from "./pages/Stores"

function App() {
  return (
    <Fragment>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={Stores} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/promo" component={Promo} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shortcodes" component={Shortcodes} />
        <Route exact path="/singlepost" component={Singlepost} />
        <Route exact path="/singleproduct" component={Singleproduct} />
      </Switch>
    </Fragment>
  );
}

export default App;
