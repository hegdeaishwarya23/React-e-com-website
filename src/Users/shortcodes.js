import React, { Component } from "react";

export default class shortcodes extends Component {
  render() {
    return (
      <div>
        <div className="head-line" />
        <header className="page-header">
          <div className="container">
            <div className="top-bar row align-items-center">
              <div className="search col-lg-4">
                <div className="form-search-toggle js-open-search">
                  <i className="search-icon flaticon-magnifying-glass-browser fi-2x" />
                  <span>Search</span>
                </div>
                <div id="js-open-mob-menu" className="mob-menu-toggle">
                  <span>Menu</span>{" "}
                  <i className="flaticon-menu-options fi-2x" />
                </div>
              </div>
              <div className="logo col-lg-4">
                <a href="index-2.html">
                  <img src="images/logo.png" alt />
                </a>
              </div>
              <div className="quick-access-menu col-lg-4">
                <div className="quick-access__item">
                  <div className="select-currency">
                    <select className="select-style js-select2">
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                      <option value="gbr">GBR</option>
                    </select>
                  </div>
                </div>
                <div className="quick-access__item quick-access__item_border-r">
                  <a href="#">
                    <span className="account">
                      <i className="flaticon-messenger-user-avatar fi-2x" />
                    </span>
                  </a>
                </div>
                <div className="quick-access__item">
                  <div className="header-mini-cart">
                    <a href="cart.html" className="mini-cart-link">
                      <i className="cart__icon flaticon-online-shopping-cart fi-2x" />
                      <span className="mini-cart-link__qty">0 items</span>
                    </a>
                    <div className="mini-cart">
                      <div className="mini-cart__content">
                        <div className="empty-message">
                          You have no items in your cart
                        </div>
                        <a
                          href="shop.html"
                          className="btn btn-primary btn-lg mini-cart__btn"
                        >
                          shop more
                        </a>
                      </div>
                      <div className="mini-cart__footer">
                        <div className="icon-box icon-box-left justify-content-center">
                          <div className="icon-box__icon">
                            <i className="flaticon flaticon-delivery-truck" />
                          </div>
                          <div className="icon-box__title">
                            Delivery to all regions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of quick-access-menu */}
            </div>{" "}
            {/* end of top-bar */}
            <nav className="header-navigation">
              <button className="mob-menu-close" id="js-close-mob-menu">
                <span>Close</span>
                <i className="flaticon-cancel-button" />
              </button>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="index-2.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="promo.html">
                    Promo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                  <ul className="sub-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="shortcodes.html">
                        Shortcodes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="404.html">
                        404 Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="page-wrap">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="about.html">About</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shortcodes
                </li>
              </ol>
            </div>
          </nav>
          {/* Page content */}
          <div className="page-content">
            <div className="container">
              <div className="row justify-content-between">
                <main id="main" className="main-content col-lg-8">
                  <div className="post-content">
                    <section className="mb-5">
                      <h2>Shortcodes</h2>
                      <p>
                        All kinds of goodies to be used anywhere in the theme!
                      </p>
                      <hr />
                    </section>
                    <section className="mb-5" id="slider">
                      <h4>Slider</h4>
                      <div
                        className="slider js-slider"
                        data-slick='{"slidesToShow": 1, "slidesToScroll": 1}'
                      >
                        <div className="slider-item">
                          <img src="images/slider1.jpg" alt="slide1" />
                        </div>
                        <div className="slider-item">
                          <img src="images/slider1.jpg" alt="slide2" />
                        </div>
                        <div className="slider-item">
                          <img src="images/slider1.jpg" alt="slide3" />
                        </div>
                      </div>
                    </section>
                    <section className="mb-5" id="accordions">
                      <h4>Accordions</h4>
                      <div
                        className="accordion mb-5"
                        id="accordionExamplePrimary"
                      >
                        <div className="card">
                          <div className="card-header" id="headingOnePrimary">
                            <button
                              className="btn btn-primary btn-lg "
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOnePrimary"
                              aria-expanded="true"
                              aria-controls="collapseOnePrimary"
                            >
                              Accordion item #1
                            </button>
                          </div>
                          <div
                            id="collapseOnePrimary"
                            className="collapse show"
                            aria-labelledby="headingOnePrimary"
                            data-parent="#accordionExamplePrimary"
                          >
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingTwoPrimary">
                            <button
                              className="btn btn-primary btn-lg collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwoPrimary"
                              aria-expanded="false"
                              aria-controls="collapseTwoPrimary"
                            >
                              Accordion item #2
                            </button>
                          </div>
                          <div
                            id="collapseTwoPrimary"
                            className="collapse"
                            aria-labelledby="headingTwoPrimary"
                            data-parent="#accordionExamplePrimary"
                          >
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingThreePrimary">
                            <button
                              className="btn btn-primary btn-lg collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThreePrimary"
                              aria-expanded="false"
                              aria-controls="collapseThreePrimary"
                            >
                              Accordion item #3
                            </button>
                          </div>
                          <div
                            id="collapseThreePrimary"
                            className="collapse"
                            aria-labelledby="headingThreePrimary"
                            data-parent="#accordionExamplePrimary"
                          >
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* #headingOnePrimary */}
                      <div className="accordion" id="accordionExampleOutline">
                        <div className="card">
                          <div className="card-header" id="headingOneOutline">
                            <button
                              className="btn btn-outline-primary btn-lg"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOneOutline"
                              aria-expanded="true"
                              aria-controls="collapseOneOutline"
                            >
                              Accordion item #1
                            </button>
                          </div>
                          <div
                            id="collapseOneOutline"
                            className="collapse show"
                            aria-labelledby="headingOneOutline"
                            data-parent="#accordionExampleOutline"
                          >
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingTwoOutline">
                            <button
                              className="btn btn-outline-primary btn-lg collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwoOutline"
                              aria-expanded="false"
                              aria-controls="collapseTwoOutline"
                            >
                              Accordion item #2
                            </button>
                          </div>
                          <div
                            id="collapseTwoOutline"
                            className="collapse"
                            aria-labelledby="headingTwoOutline"
                            data-parent="#accordionExampleOutline"
                          >
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" id="headingThreeOutline">
                            <button
                              className="btn btn-outline-primary btn-lg collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThreeOutline"
                              aria-expanded="false"
                              aria-controls="collapseThreeOutline"
                            >
                              Accordion item #3
                            </button>
                          </div>
                          <div
                            id="collapseThreeOutline"
                            className="collapse"
                            aria-labelledby="headingThreeOutline"
                            data-parent="#accordionExampleOutline"
                          >
                            <div className="card-body">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* #accordionExampleOutline */}
                    </section>
                    <section className="mb-5" id="progress">
                      <h4>Progress bar</h4>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "58%" }}
                          aria-valuenow={58}
                          aria-valuemin={0}
                          aria-valuemax={58}
                        />
                      </div>
                      <div className="progress progress-sm mb-4">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow={35}
                          aria-valuemin={0}
                          aria-valuemax={35}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "67%" }}
                          aria-valuenow={67}
                          aria-valuemin={0}
                          aria-valuemax={67}
                        >
                          67%
                        </div>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "32%" }}
                          aria-valuenow={32}
                          aria-valuemin={0}
                          aria-valuemax={32}
                        >
                          32%
                        </div>
                      </div>
                    </section>
                    <section className="mb-5" id="buttons">
                      <h4>Buttons</h4>
                      <div className="d-block d-md-inline-block">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg mr-1 mb-3"
                        >
                          Default
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-lg active mr-3 mb-3"
                        >
                          Hover
                        </button>
                      </div>
                      <div className="d-block d-md-inline-block">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg mr-1 mb-3"
                        >
                          Stroke
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg active mb-3"
                        >
                          Hover
                        </button>
                      </div>
                      <div className="d-block d-md-inline-block">
                        <button
                          type="button"
                          className="btn btn-primary mr-1 mb-3"
                        >
                          Medium
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary active mr-3 mb-3"
                        >
                          Medium
                        </button>
                      </div>
                      <div className="d-block d-md-inline-block">
                        <button
                          type="button"
                          className="btn btn-outline-primary mr-1 mb-3"
                        >
                          Medium
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary active mb-3"
                        >
                          Medium
                        </button>
                      </div>
                      <div className="d-block d-md-inline-block">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mr-1 mb-3"
                        >
                          Small
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm active mr-3 mb-3"
                        >
                          Small
                        </button>
                      </div>
                      <div className="d-block d-md-inline-block">
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm mr-1 mb-3"
                        >
                          Small
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-sm active mb-3"
                        >
                          Small
                        </button>
                      </div>
                    </section>
                    <section className="mb-2" id="featured">
                      <h4>Featured box</h4>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="offer-box">
                            <img
                              className="offer-box__bg"
                              src="images/01_home_page_002.jpg"
                              alt
                            />
                            <div className="offer-box__body">
                              <div className="offer-box__title">S1 table</div>
                              <a
                                href="single-product.html"
                                className="btn btn-outline-primary"
                              >
                                buy $29.99
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <a
                            href="shop.html"
                            className="offer-box offer-box-sm"
                          >
                            <img
                              className="offer-box__bg"
                              src="images/01_home_page_003.jpg"
                              alt
                            />
                            <div className="offer-box__body">
                              <div className="offer-box__title">
                                <span className="offer-percent">50%</span>
                                sale
                              </div>
                            </div>
                          </a>
                          <a
                            href="shop.html"
                            className="offer-box offer-box-sm"
                          >
                            <img
                              className="offer-box__bg"
                              src="images/01_home_page_004.jpg"
                              alt
                            />
                            <div className="offer-box__body">
                              <div className="offer-box__title">Airshelf</div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="icon-box icon-box-left icon-box-circle mb-40">
                            <div className="icon-box__icon">
                              <i className="flaticon flaticon-delivery-truck" />
                            </div>
                            <div className="icon-box__title">
                              Delivery to all regions
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="icon-box icon-box-left icon-box-circle mb-40">
                            <div className="icon-box__icon">
                              <i className="flaticon flaticon-sales-ticket" />
                            </div>
                            <div className="icon-box__title">
                              Don't miss this great deal!
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="icon-box icon-box-left icon-box-circle mb-40">
                            <div className="icon-box__icon">
                              <i className="flaticon flaticon-thumb-up-gesture" />
                            </div>
                            <div className="icon-box__title">
                              The highest quality of products
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="icon-box icon-box-left icon-box-circle mb-40">
                            <div className="icon-box__icon">
                              <i className="flaticon flaticon-star-shape-favorite" />
                            </div>
                            <div className="icon-box__title">
                              Only best items
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="mb-5" id="forms">
                      <h4 className="mb-4">Forms &amp; controls</h4>
                      <div className="shortcodes-col-sm">
                        <div className="form-group mb-20">
                          <input
                            type="text"
                            className="form-control mb-10"
                            placeholder="Default"
                          />
                          <input
                            type="text"
                            className="form-control mb-10 hover"
                            placeholder="Default hover"
                          />
                          <input
                            type="text"
                            className="form-control mb-10 active"
                            placeholder="Default active"
                          />
                        </div>
                        <div className="form-group mb-20">
                          <div className="form-group mb-10">
                            <select
                              className="form-control js-select2"
                              data-placeholder="List default"
                            >
                              <option value>List default</option>
                              <option value={1}>List item</option>
                              <option value={2}>List item</option>
                              <option value={3}>List item</option>
                            </select>
                          </div>
                          <div className="form-group mb-10">
                            <select
                              className="form-control js-select2 hover"
                              data-placeholder="List default"
                            >
                              <option value>List hover</option>
                              <option value={1}>List item</option>
                              <option value={2}>List item</option>
                              <option value={3}>List item</option>
                            </select>
                          </div>
                          <div className="form-group mb-10">
                            <select
                              className="form-control js-select2 active"
                              data-placeholder="List default"
                            >
                              <option value>List active</option>
                              <option value={1}>List item</option>
                              <option value={2}>List item</option>
                              <option value={3}>List item</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Icon default"
                            />
                            <span className="input-group-addon">
                              <i className="mdi mdi-lock" />
                            </span>
                          </div>
                          <div className="input-group mb-10">
                            <input
                              type="text"
                              className="form-control hover"
                              placeholder="Icon hover"
                            />
                            <span className="input-group-addon">
                              <i className="mdi mdi-lock" />
                            </span>
                          </div>
                          <div className="input-group mb-10">
                            <input
                              type="text"
                              className="form-control active"
                              placeholder="Icon active"
                            />
                            <span className="input-group-addon">
                              <i className="mdi mdi-lock" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="mb-5" id="icons">
                      <h4>Material design icons</h4>
                      <div className="shortcodes-col-sm">
                        <div className="icons-list">
                          <span className="icon">
                            <i className="mdi mdi-lock" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-account" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-calendar" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-map-marker" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-arrow-left" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-arrow-right" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-phone" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-autorenew" />
                          </span>
                          <span className="icon">
                            <i className="mdi mdi-eye" />
                          </span>
                        </div>
                        <ul className="social-links social-links_demo">
                          <li>
                            <a href="#">
                              <i className="mdi mdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-vimeo" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-medium" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-disqus" />
                            </a>
                          </li>
                        </ul>
                        <ul className="social-links social-links_hovered">
                          <li>
                            <a href="#">
                              <i className="mdi mdi-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-vimeo" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-medium" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-google-plus" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="mdi mdi-disqus" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                    <section className="mb-5" id="alerts">
                      <h4>Alert message</h4>
                      <div className="shortcodes-col-sm">
                        <div className="alert-message">
                          <div className="alert alert-success">
                            <strong>Well done!</strong>
                            You successfully read this important alert message.
                          </div>
                          <div className="alert alert-info">
                            <strong>Heads up!</strong>
                            This alert needs your attention.
                          </div>
                          <div className="alert alert-warning">
                            <strong>Warning!</strong>
                            Best check yo self, you're not looking too good.
                          </div>
                          <div className="alert alert-danger">
                            <strong>Oh snap!</strong>
                            Change a few things up and try submitting again.
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="mb-5" id="tabs">
                      <h4>Tabs</h4>
                      <div className="shortcodes-col-sm">
                        <ul className="nav nav-tabs nav-justified nav-tabs-responsive mb-30">
                          <li className="nav-item">
                            <a className="nav-link active" href="#0">
                              Active
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link hover" href="#0">
                              Hover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" href="#0">
                              Non-active
                            </a>
                          </li>
                        </ul>
                        <ul className="nav nav-tabs nav-justified nav-tabs-responsive style-2 mb-30">
                          <li className="nav-item">
                            <a className="nav-link active" href="#0">
                              Active
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link hover" href="#0">
                              Hover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" href="#0">
                              Non-active
                            </a>
                          </li>
                        </ul>
                        <ul className="nav nav-tabs nav-justified nav-tabs-responsive style-3">
                          <li className="nav-item">
                            <a className="nav-link active" href="#0">
                              Active
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link hover" href="#0">
                              Hover
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" href="#0">
                              Non-active
                            </a>
                          </li>
                        </ul>
                      </div>
                    </section>
                    <section className="mb-5 pb-md-5" id="typography">
                      <div className="shortcodes-col-sm">
                        <h4>Typography</h4>
                        <div className="typography">
                          <h1>Heading h1</h1>
                          <h2>Heading h2</h2>
                          <h3>Heading h3</h3>
                          <h4>Heading h4</h4>
                          <p>
                            Body text. Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry’s standard dummy text ever since
                            the 1500s, when an unknown printer.
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>{" "}
                  {/* end of content */}
                </main>
                <aside
                  id="aside"
                  className="sidebar sidebar-shortcodes col-lg-3"
                >
                  <div className="sidebar-widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li className="active">
                        <a href="#">Slider</a>
                      </li>
                      <li>
                        <a href="#accordions">Accordions</a>
                      </li>
                      <li>
                        <a href="#progress">Progress bar</a>
                      </li>
                      <li>
                        <a href="#buttons">Buttons</a>
                      </li>
                      <li>
                        <a href="#featured">Featured box</a>
                      </li>
                      <li>
                        <a href="#forms">Forms &amp; controls</a>
                      </li>
                      <li>
                        <a href="#icons">Icons Material design</a>
                      </li>
                      <li>
                        <a href="#alerts">Alert message</a>
                      </li>
                      <li>
                        <a href="#tabs">Tabs</a>
                      </li>
                      <li>
                        <a href="#typography">Typorgaphy</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>{" "}
              {/* /.row*/}
            </div>{" "}
            {/* /.container*/}
          </div>{" "}
          {/* /.page-content*/}
        </div>{" "}
        {/* /.page-wrap*/}
        <footer className="page-footer">
          <div className="container">
            <div className="foot-info row">
              <div className="col-md-8">
                <div className="d-lg-flex align-items-end text-center text-md-left">
                  <a href="index.html" className="logo-footer">
                    <img src="images/logo-white.png" alt />
                  </a>
                  <div className="ml-lg-4 page-footer__text">
                    Is a design-focused wordpress theme for unique products
                  </div>
                </div>
              </div>
              <div className="social col-md-4">
                <span>Follow us:</span>
                <ul className="social-links ml-md-3">
                  <li>
                    <a href="#">
                      <i className="mdi mdi-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="footer-navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="index-2.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="promo.html">
                    Promo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer-bottom">
              <div className="copyright">© Taffle. All rights reserved.</div>
              <ul className="footer-bottom__menu">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="full-search-wrap">
          <div className="full-search container">
            <div className="close-s float-right js-close-search flaticon-cancel-button fi-2x" />
            <form
              action="http://taffle.dymix.us/"
              className=" search-full-form"
            >
              <div className="position-relative">
                <i className="search-icon flaticon-magnifying-glass-browser fi-2x" />
                <input
                  type="text"
                  id="s-full"
                  className="search-full-form__input"
                  placeholder="Search"
                />
                <input type="submit" className="d-none" />
              </div>
              <p className="hint">Type in your search and press enter</p>
            </form>
          </div>
        </div>
        <div id="js-back-to-top" className="back-to-top">
          <i className="flaticon-up-arrow-sign" /> Page top
        </div>
      </div>
    );
  }
}
