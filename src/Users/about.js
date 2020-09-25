import React, { Component } from "react";

export default class about extends Component {
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
                  <a className="nav-link" href="promo.html">
                    Promo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="about.html">
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
          <div className="section-featured-icons d-lg-block d-none">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="icon-box icon-box-left icon-box-circle justify-content-lg-center">
                    <div className="icon-box__icon">
                      <i className="flaticon flaticon-delivery-truck" />
                    </div>
                    <div className="icon-box__title">
                      Delivery to all regions
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box icon-box-left icon-box-circle justify-content-lg-center">
                    <div className="icon-box__icon">
                      <i className="flaticon flaticon-sales-ticket" />
                    </div>
                    <div className="icon-box__title">
                      Don't miss this great deal!
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="icon-box icon-box-left icon-box-circle justify-content-lg-center">
                    <div className="icon-box__icon">
                      <i className="flaticon flaticon-thumb-up-gesture" />
                    </div>
                    <div className="icon-box__title">
                      The highest quality of products
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About
                </li>
              </ol>
            </div>
          </nav>
          {/* Page content */}
          <div className="page-content">
            <main className="main-content">
              <section className="section-about">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <h3 className="section-title mb-40">About Us</h3>
                      <p>
                        Our store is more than just another average online
                        retailer. We sell not only top unique products, but give
                        our customers a positive online shopping experience.
                        Purchase the things you need every day or just like in a
                        few clicks or taps, depending on the device you use to
                        access the Internet. We work to make your life more
                        enjoyable.
                      </p>
                    </div>
                    <div className="col-lg-7">
                      <img src="images/11_about_page_001.jpg" alt />
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-team">
                <div className="container">
                  <h3 className="section-title text-center">Our team</h3>
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="team">
                        <div className="team__thumb">
                          <img src="images/11_about_page_002.jpg" alt />
                        </div>
                        <div className="team__name h4">Barry McCoy</div>
                        <div className="team__position">
                          Exec. Creative Director
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="team">
                        <div className="team__thumb">
                          <img src="images/11_about_page_003.jpg" alt />
                        </div>
                        <div className="team__name h4">Barbara Garner</div>
                        <div className="team__position">Client Partner</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="team">
                        <div className="team__thumb">
                          <img src="images/11_about_page_004.jpg" alt />
                        </div>
                        <div className="team__name h4">Justin Gomez</div>
                        <div className="team__position">Photographer</div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="team">
                        <div className="team__thumb">
                          <img src="images/11_about_page_005.jpg" alt />
                        </div>
                        <div className="team__name h4">Eddie Douglas</div>
                        <div className="team__position">Senior Strategist</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-subscribe">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="section-title section-title-w-text text-center">
                        <h2 className="h3 section-title__heading">
                          Newsletter subscription
                        </h2>
                        <div className="section-title__text">
                          Newest products, promotions and sales
                        </div>
                      </div>
                      <form className="subscribe-form form-inline justify-content-center">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg subscribe-form__input"
                            placeholder="E-mail adress"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg subscribe-form__btn"
                        >
                          subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </main>{" "}
            {/* end of main */}
          </div>{" "}
          {/* /.page-content */}
        </div>{" "}
        {/* /.page-wrap */}
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
        <div id="js-back-to-top" className="back-to-top">
          <i className="flaticon-up-arrow-sign" /> Page top
        </div>
        <div className="full-search-wrap">
          <div className="full-search container">
            <div className="close-s float-right js-close-search flaticon-cancel-button fi-2x" />
            <form action="http://taffle.dymix.us/" className="search-full-form">
              <div className="position-relative">
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
              </div>
              <p className="hint">Type in your search and press enter</p>
            </form>
          </div>
        </div>
        {/* Theme */}
      </div>
    );
  }
}
