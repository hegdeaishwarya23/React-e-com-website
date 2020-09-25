import React, { Component } from 'react'

export default class checkout extends Component {
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
                                    <span>Menu</span> <i className="flaticon-menu-options fi-2x" />
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
                </header>
                <div className="page-wrap checkout shop">
                    {/* Breadcrumbs */}
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="cart.html">Cart</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Checkout
          </li>
                            </ol>
                        </div>
                    </nav>
                    <div className="page-content">
                        <main className="main-content">
                            <div className="container">
                                <h1 className="page-title h3 text-center">Checkout</h1>
                                <ul
                                    className="checkout-tabs nav nav-tabs nav-justified nav-tabs-responsive"
                                    id="checkoutTabs"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="shipping-tab"
                                            role="tab"
                                            data-toggle="tab"
                                            href="#shipping"
                                            aria-controls="shipping"
                                            aria-selected="true"
                                        >
                                            1. Sipping
              </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link disabled"
                                            id="payment-tab"
                                            role="tab"
                                            data-toggle="tab"
                                            href="#payment"
                                            aria-controls="payment"
                                            aria-selected="false"
                                        >
                                            2. Payment method
              </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link disabled"
                                            id="overview-tab"
                                            role="tab"
                                            data-toggle="tab"
                                            href="#overview"
                                            aria-controls="overview"
                                            aria-selected="false"
                                        >
                                            3. Overview
              </a>
                                    </li>
                                </ul>
                                <form className="checkout-form">
                                    <div className="tab-content" id="checkoutTabsContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="shipping"
                                            role="tabpanel"
                                            aria-labelledby="shipping-tab"
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6">
                                                    <h3 className="simple-heading mb-4">
                                                        Shipping information
                    </h3>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <select
                                                            className="form-control js-select2"
                                                            data-placeholder="Country"
                                                        >
                                                            <option value>Choose country</option>{" "}
                                                            {/* Require for select placeholder */}
                                                            <option value="Canada">Canada</option>
                                                            <option value="China">China</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="USA">USA</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Addition address information"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="City"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="State / Province / Region"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Zip / Postal code"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Phone number"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-submit">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-lg btn-block"
                                                            id="js-checkout-to-payment"
                                                        >
                                                            Continue to payment method
                      </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="payment"
                                            role="tabpanel"
                                            aria-labelledby="payment-tab"
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6">
                                                    <h3 className="simple-heading mb-4">Payment method</h3>
                                                    <div className="input-group form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Card number"
                                                        />
                                                        <span className="input-group-addon">
                                                            <i className="mdi mdi-lock" />
                                                        </span>
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name on card"
                                                        />
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="form-group col-sm checkout-form__month">
                                                            <select
                                                                className="form-control js-select2"
                                                                data-placeholder="Month"
                                                            >
                                                                <option value>Month</option>{" "}
                                                                {/* Require for select placeholder */}
                                                                <option value="January">January</option>
                                                                <option value="January">February</option>
                                                                <option value="January">March</option>
                                                                <option value="January">April</option>
                                                                <option value="January">May</option>
                                                                <option value="January">June</option>
                                                                <option value="January">July</option>
                                                                <option value="January">August</option>
                                                                <option value="January">September</option>
                                                                <option value="January">October</option>
                                                                <option value="January">November</option>
                                                                <option value="January">December</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col checkout-form__year">
                                                            <select
                                                                className="form-control js-select2"
                                                                data-placeholder="Year"
                                                            >
                                                                <option value>Year</option>{" "}
                                                                {/* Require for select placeholder */}
                                                                <option value={2020}>2020</option>
                                                                <option value={2021}>2021</option>
                                                                <option value={2022}>2022</option>
                                                                <option value={2023}>2023</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-5 checkout-form__cvv">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="CVV"
                                                                />
                                                                <span className="input-group-addon">
                                                                    <i className="mdi mdi-help-circle" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="custom-control custom-checkbox mb-40">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="billing-addr"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="billing-addr"
                                                        >
                                                            My billing address is the same as my shipping address.
                      </label>
                                                    </div>
                                                    <h3 className="simple-heading mb-4">Billing information</h3>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First name"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <select
                                                            className="form-control js-select2"
                                                            data-placeholder="Country"
                                                        >
                                                            <option value>Country</option>{" "}
                                                            {/* Require for select placeholder */}
                                                            <option value="Canada">Canada</option>
                                                            <option value="China">China</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="USA">USA</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Address"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Addition address information"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="City"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="State / Province / Region"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Zip / Postal code"
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Phone number"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="form-submit">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-lg btn-block"
                                                            id="js-checkout-to-overview"
                                                        >
                                                            Continue to overview
                      </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="overview"
                                            role="tabpanel"
                                            aria-labelledby="overview-tab"
                                        >
                                            <div className="row justify-content-center">
                                                <div className="col-lg-6">
                                                    <h3 className="simple-heading mb-4">Your order</h3>
                                                    <div className="cart-overview">
                                                        <table className="review-order-table cart-table">
                                                            <tbody>
                                                                <tr className="cart-item">
                                                                    <td className="product-name">
                                                                        <a href="single-product.html">
                                                                            <img src="images/mini-cart-product-1.jpg" alt />
                                Origami lamp
                              </a>
                                                                    </td>
                                                                    <td className="product-total">
                                                                        <span className="amount">$21.00</span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="cart-item">
                                                                    <td className="product-name">
                                                                        <a href="single-product.html">
                                                                            <img src="images/mini-cart-product-2.jpg" alt />
                                Monaco collection watch
                              </a>
                                                                    </td>
                                                                    <td className="product-total">
                                                                        <span className="amount">$132.00</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="cart-subtotal">
                                                                    <th>Subtotal</th>
                                                                    <td>$153.00</td>
                                                                </tr>
                                                                <tr className="cart-shiping">
                                                                    <th>Shipping Fee</th>
                                                                    <td>FREE</td>
                                                                </tr>
                                                                <tr className="cart-tax">
                                                                    <th>Estimated Tax</th>
                                                                    <td>$0.00</td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                    <th>Order total</th>
                                                                    <td>$153.00</td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                        <div className="cart-overview__btn">
                                                            <input
                                                                type="submit"
                                                                className="btn btn-primary btn-lg btn-block"
                                                                defaultValue="Place Order"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
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
        )
    }
}
