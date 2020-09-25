import React, { Component } from "react";

export default class single_product extends Component {
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
                <a href="#">
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
                      <span className="mini-cart-link__qty">2 items</span>
                    </a>
                    <div className="mini-cart">
                      <div className="mini-cart__header">Your cart</div>
                      <div className="mini-cart__content">
                        <ul className="mini-cart-list">
                          <li className="mini-cart-item">
                            <div className="mini-cart-item__thumb">
                              <a href="single-product.html">
                                <img src="images/mini-cart-product-1.jpg" alt />
                              </a>
                            </div>
                            <div className="mini-cart-item__content">
                              <div className="mini-cart-item__title">
                                <a href="single-product.html">Origami lamp</a>
                              </div>
                              <span className="amount">$21.00</span>
                            </div>
                          </li>
                          <li className="mini-cart-item">
                            <div className="mini-cart-item__thumb">
                              <a href="single-product.html">
                                <img src="images/mini-cart-product-2.jpg" alt />
                              </a>
                            </div>
                            <div className="mini-cart-item__content">
                              <div className="mini-cart-item__title">
                                <a href="single-product.html">
                                  Monaco collection watch
                                </a>
                              </div>
                              <span className="amount">$132.00</span>
                            </div>
                          </li>
                        </ul>
                        <div className="mini-cart__subtotal d-flex flex-wrap justify-content-between">
                          <span>Subtotal</span>
                          <span>$153.00</span>
                        </div>
                        <a
                          href="checkout.html"
                          className="btn btn-primary btn-lg btn-block mini-cart__btn"
                        >
                          checkout
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
                  <a className="nav-link active" href="shop.html">
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
          </div>{" "}
          {/* end of container */}
          <div className="shop-categories-nav">
            <div className="container">
              <ul className="nav justify-content-between">
                <li className="nav-item">
                  <a href="shop.html" className="nav-link active">
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Art
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Clocks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Furniture
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Gadgets
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Lighting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Placemats
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Workspace
                  </a>
                </li>
                <li className="nav-item">
                  <a href="shop.html" className="nav-link">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="page-wrap single shop">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="shop.html">Shop</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="shop.html">Sale</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dutch Grey Bag
                </li>
              </ol>
            </div>
          </nav>
          <div className="page-content">
            <main className="main-content">
              <section className="section-single-product product">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="product-thumb">
                        <span className="onsale">-25%</span>
                        <div className="product-gallery">
                          <div
                            id="js-product-big"
                            className="product-gallery__big"
                          >
                            <img src="images/05_home_page_001.jpg" alt />
                          </div>
                          <div
                            id="js-product-nav"
                            className="product-gallery-thumbs"
                          >
                            <div
                              className="product-gallery-thumbs__item active"
                              data-large-src="images/05_home_page_001.jpg"
                            >
                              <img src="images/05_home_page_001.jpg" alt />
                            </div>
                            <div
                              className="product-gallery-thumbs__item"
                              data-large-src="images/product-single-big-2.jpg"
                            >
                              <img src="images/05_home_page_003.jpg" alt />
                            </div>
                            <div
                              className="product-gallery-thumbs__item"
                              data-large-src="images/product-single-big-3.jpg"
                            >
                              <img src="images/05_home_page_004.jpg" alt />
                            </div>
                            <div
                              className="product-gallery-thumbs__item"
                              data-large-src="images/product-single-big-4.jpg"
                            >
                              <img src="images/05_home_page_005.jpg" alt />
                            </div>
                            <div
                              className="product-gallery-thumbs__item"
                              data-large-src="images/product-single-big-5.jpg"
                            >
                              <img src="images/05_home_page_006.jpg" alt />
                            </div>
                            <div
                              className="product-gallery-thumbs__item"
                              data-large-src="images/product-single-big-6.jpg"
                            >
                              <img src="images/05_home_page_007.jpg" alt />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-summary summary col-lg-7">
                      <h1 className="h2 product-title">dutch grey bag</h1>
                      <div className="price">
                        <ins>
                          <span className="amount">$33.00</span>
                        </ins>
                        <del>
                          <span className="amount">$44.00</span>
                        </del>
                      </div>
                      <form
                        action="http://taffle.dymix.us/"
                        className="cart-form"
                      >
                        <div className="cart-form__item quantity quantity">
                          <label htmlFor="quantity">Qty:</label>
                          <select
                            id="quantity"
                            className="select-style qty js-qty"
                          >
                            <option value="usd">1</option>
                            <option value="eur">2</option>
                            <option value="gbr">3</option>
                          </select>
                        </div>
                        <div className="color-variants">
                          <div>
                            Color: <span id="active-color">Gray</span>
                          </div>
                          <ul className="colors-list">
                            <li className="colors-list__item colors-list__item_active">
                              <a href="single-product.html">
                                <span
                                  className="prod-color"
                                  style={{ backgroundColor: "#7E7D82" }}
                                />
                              </a>
                            </li>
                            <li className="colors-list__item">
                              <a href="single-product.html">
                                <span
                                  className="prod-color"
                                  style={{ backgroundColor: "#333339" }}
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </form>
                      <a
                        href="cart.html"
                        className="btn btn-primary btn-lg add_to_cart_button"
                      >
                        Add to cart
                      </a>
                      <div className="product-summary__featured">
                        <div className="row">
                          <div className="product-featured-item">
                            <div className="icon-box icon-box-left icon-box-circle">
                              <div className="icon-box__icon">
                                <i className="flaticon flaticon-delivery-truck" />
                              </div>
                              <div className="icon-box__title">
                                Free shipping
                              </div>
                            </div>
                          </div>
                          <div className="product-featured-item">
                            <div className="icon-box icon-box-left icon-box-circle">
                              <div className="icon-box__icon">
                                <i className="flaticon flaticon-blocked-padlock" />
                              </div>
                              <div className="icon-box__title">100% secure</div>
                            </div>
                          </div>
                          <div className="product-featured-item">
                            <div className="icon-box icon-box-left icon-box-circle">
                              <div className="icon-box__icon">
                                <i className="flaticon flaticon-refresh-page-arrow" />
                              </div>
                              <div className="icon-box__title">
                                30 day refund
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-summary__share">
                        <div>Share:</div>
                        <ul className="social-links">
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
                      <div className="description-block">
                        <h3 className="mb-30">Description</h3>
                        <div className="product-description text-content">
                          <p>
                            Dutch Bag crafts high quality tees and accessories
                            that are comfortable, stylish, and imbued with the
                            laid back spirit of Taffle. Comfortably holds your
                            sneakers and your laptop in addition to a plethora
                            of other necessities, while keeping everything
                            organized and well protected.
                          </p>
                        </div>
                      </div>
                      <div className="product-attributes">
                        <div className="product-attributes__item">
                          <strong>Material:</strong>
                          Body — 100% cotton trims / other — 100% polyurethane.
                        </div>
                        <div className="product-attributes__item">
                          <strong>Care:</strong>
                          Wipe clean with a damp sponge, do not dry clean, do
                          not iron
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section-related">
                <div className="container">
                  <h2 className="section-title text-center h3">
                    Other items you may like
                  </h2>
                  <ul className="products featured-products columns-5">
                    <li className="product">
                      <div className="product-thumb">
                        <span className="onsale">-30%</span>
                        <a
                          href="single-product.html"
                          className="product-thumb__link"
                        >
                          <img src="images/01_home_page_005.jpg" alt />
                          <span className="btn btn-outline-light shop-link">
                            Shop
                          </span>
                        </a>
                      </div>
                      <div className="product-title">
                        <a href="single-product.html">Cogen warm lamp</a>
                      </div>
                      <div className="price">
                        <span className="amount">$56.00</span>
                      </div>
                    </li>
                    <li className="product">
                      <div className="product-thumb">
                        <a
                          href="single-product.html"
                          className="product-thumb__link"
                        >
                          <img src="images/02_catalogue_page_010.jpg" alt />
                          <span className="btn btn-outline-light shop-link">
                            Shop
                          </span>
                        </a>
                      </div>
                      <div className="product-title">
                        <a href="single-product.html">Green Card pen</a>
                      </div>
                      <div className="price">
                        <span className="amount">$12.00</span>
                      </div>
                    </li>
                    <li className="product">
                      <div className="product-thumb">
                        <a
                          href="single-product.html"
                          className="product-thumb__link"
                        >
                          <img src="images/02_catalogue_page_011.jpg" alt />
                          <span className="btn btn-outline-light shop-link">
                            Shop
                          </span>
                        </a>
                      </div>
                      <div className="product-title">
                        <a href="single-product.html">CONFETTI LAMP</a>
                      </div>
                      <div className="price">
                        <span className="amount">$45.00</span>
                      </div>
                    </li>
                    <li className="product">
                      <div className="product-thumb">
                        <a
                          href="single-product.html"
                          className="product-thumb__link"
                        >
                          <img src="images/02_catalogue_page_012.jpg" alt />
                          <span className="btn btn-outline-light shop-link">
                            Shop
                          </span>
                        </a>
                      </div>
                      <div className="product-title">
                        <a href="single-product.html">HOT TABLET COVER</a>
                      </div>
                      <div className="price">
                        <span className="amount">$20.00</span>
                      </div>
                    </li>
                    <li className="product">
                      <div className="product-thumb">
                        <a
                          href="single-product.html"
                          className="product-thumb__link"
                        >
                          <img src="images/02_catalogue_page_008.jpg" alt />
                          <span className="btn btn-outline-light shop-link">
                            Shop
                          </span>
                        </a>
                      </div>
                      <div className="product-title">
                        <a href="single-product.html">COSMO ICE BOTTLE</a>
                      </div>
                      <div className="price">
                        <span className="amount">$27.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
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
      </div>
    );
  }
}
