import React, { Component } from 'react'

export default class single_post extends Component {
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
                                    <a className="nav-link active" href="blog.html">
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
                <div className="page-wrap single blog">
                    {/* Breadcrumbs */}
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Advertising and Internet a Long Term Relationship
          </li>
                            </ol>
                        </div>
                    </nav>
                    {/* Page content */}
                    <div className="page-content">
                        <div className="container">
                            <div className="row justify-content-between">
                                <main id="main" className="main-content col-lg-8">
                                    <article className="post-content">
                                        <div className="post-thumb">
                                            <img src="images/12_blog_page_002.jpg" alt />
                                        </div>
                                        <h1 className="h3 post-title">
                                            Advertising And Internet A Long Term Relationship
              </h1>
                                        <div className="post-date">08 mar 2016</div>
                                        <div className="post-text">
                                            <p>
                                                Researchers believe <a href="#">that</a> developing A SENSE OF
                  PURPOSE is a strategy which can ENHANCE HEALTHY LIVING.The
                  basis for their theory comes from studies carried out on 135
                  women in the age group 61-91.This groups EMOTIONAL and
                  PHYSICAL WELL BEING were evaluated by rating two types of
                  indicators.
                </p>
                                            <p>
                                                HAPPINESS evoked by POSITIVE experiences and A SENSE OF
                                                PURPOSEand a high SELF ESTEEM and REWARDING RELATIONSHIPS.
                </p>
                                            <p>
                                                Results indicated that those who had A SENSE OF PURPOSE also
                                                displayed better PHYSICAL FUNCTIONING ABILITY. They had a
                                                tendency to weigh less, had a lower level of inflammatory
                                                cytokines which increase the risk of arthritis, displayed
                                                evidence of better SLEEP PATTERNS, lower blood sugar levels
                                                and HDL levels(good cholesterol) was more apparent. In the
                                                group which only displayed HAPPINESS the benefit was only that
                                                of a lowered cholesterol level.
                </p>
                                            <p>What is A SENSE OF PURPOSE? There are many definitions.</p>
                                            <p>
                                                Having an influence over others in work, in your community,
                                                within a family setting, or on a wider basis.(OXFAM, HELP THE
                                                CHILDREN, AMNESTY INTERNATIONAL.)
                </p>
                                            <blockquote>
                                                He may well have lots of time on his hands and be involved in
                                                a range of recreational activities.
                </blockquote>
                                            <p>
                                                How often have you thought about what you would buy or the
                                                problems that may be solved by a lottery win? Yes, we have all
                                                dreamt about this and there is nothing wrong with having
                                                DREAMS .They can open up our minds to possibilities and
                                                sometimes lead us to pursuing GOALS and a course of ACTION in
                                                their pursuit.
                </p>
                                        </div>
                                    </article>{" "}
                                    {/* /.post-content */}
                                    <div className="post-tags-share">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="mb-3">Tags:</div>
                                                <div className="tagcloud">
                                                    <a href="shop.html">Furniture</a>
                                                    <a href="shop.html">Kitchen</a>
                                                    <a href="shop.html">Home</a>
                                                    <a href="shop.html">Jewelry</a>
                                                    <a href="shop.html">Gift</a>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-lg-right">
                                                <div className="post-share d-md-inline-block text-left">
                                                    <div className="mb-2">Share:</div>
                                                    <div className="share">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-navigation">
                                        <div className="row">
                                            <div className="nav-previous col-6">
                                                <a href="single-post.html">
                                                    <i className="flaticon-left-arrow-sign" />
                                                    <span>Previous</span>
                                                </a>
                                            </div>
                                            <div className="nav-next col-6">
                                                <a href="single-post.html">
                                                    <span>Next</span>
                                                    <i className="flaticon-right-direction" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <section className="latest-posts">
                                        <h3 className="mb-40">Latest posts</h3>
                                        <div className="post-grid row">
                                            <div className="col-lg-4 col-md-6">
                                                <article className="post-item">
                                                    <a href="single-post.html" className="post-thumb">
                                                        <img src="images/01_home_page_009.jpg" alt />
                                                    </a>
                                                    <div className="post-item__content">
                                                        <div className="post-date">06 Jan 2016</div>
                                                        <h3 className="post-title">
                                                            <a href="single-post.html">
                                                                Designer Spotlight: Peter Barber
                        </a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <article className="post-item">
                                                    <a href="single-post.html" className="post-thumb">
                                                        <img src="images/01_home_page_010.jpg" alt />
                                                    </a>
                                                    <div className="post-item__content">
                                                        <div className="post-date">16 Oct 2016</div>
                                                        <h3 className="post-title">
                                                            <a href="single-post.html">
                                                                How do I know if I‘m getting any of this law of
                                                                attraction stuff
                        </a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="col-lg-4">
                                                <article className="post-item">
                                                    <a href="single-post.html" className="post-thumb">
                                                        <img src="images/01_home_page_011.jpg" alt />
                                                    </a>
                                                    <div className="post-item__content">
                                                        <div className="post-date">19 Oct 2016</div>
                                                        <h3 className="post-title">
                                                            <a href="single-post.html">
                                                                How to choose and use a backpack ?
                        </a>
                                                        </h3>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="comments">
                                        <h3 className="mb-40">3 comments</h3>
                                        <ul className="comment-list">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-avatar">
                                                        <img src="images/13_blog_details_page_005.jpg" alt />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-author">Leo Daniels</div>
                                                        <div className="comment-date">14 Oct 2016 at 16:41am</div>
                                                        <div className="comment-text">
                                                            Increasing prosperity in our lives can be accomplished
                                                            by having the right frame of mind. The truth is, our
                                                            thoughts are very powerful.
                      </div>
                                                        <div className="comment-reply">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-sm"
                                                            >
                                                                Reply
                        </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-avatar">
                                                                <img src="images/13_blog_details_page_006.jpg" alt />
                                                            </div>
                                                            <div className="comment-content">
                                                                <div className="comment-author">Florence Curry</div>
                                                                <div className="comment-date">
                                                                    07 Feb 2016 at 14:11am
                          </div>
                                                                <div className="comment-text">
                                                                    Notes are very powerful.{" "}
                                                                </div>
                                                                <div className="comment-reply">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-outline-primary btn-sm"
                                                                    >
                                                                        Reply
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-avatar">
                                                        <img src="images/13_blog_details_page_007.jpg" alt />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-author">Paul Gutierrez</div>
                                                        <div className="comment-date">
                                                            21 Jul 2015 at 15:34 am
                      </div>
                                                        <div className="comment-text">
                                                            It is never too late to become what you might have been.
                      </div>
                                                        <div className="comment-reply">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-sm"
                                                            >
                                                                Reply
                        </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="comment-respond">
                                            <h3 className="mb-4">Post a comment</h3>
                                            <form className="comment-form">
                                                <div className="form-row">
                                                    <div className="form-group col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div className="form-group col-lg-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Last name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <textarea
                                                        rows={4}
                                                        className="form-control"
                                                        placeholder="Your message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="form-submit mt-3">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-primary btn-lg"
                                                        defaultValue="Post comment"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                </main>
                                <aside className="sidebar col-lg-3">
                                    <div className="sidebar-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <ul>
                                            <li>
                                                <a href="shop.html">Art</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Clocks</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Furniture</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Gadgets</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Lighting</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Placemats</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Workspace</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">Sale</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h4 className="widget-title">Tags</h4>
                                        <div className="tagcloud">
                                            <a href="blog.html">Furniture</a>
                                            <a href="blog.html">Kitchen</a>
                                            <a href="blog.html">Home</a>
                                            <a href="blog.html">Bed &amp; Bath</a>
                                            <a href="blog.html">Jewelry</a>
                                            <a href="blog.html">Personal</a>
                                            <a href="blog.html">Gift</a>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h4 className="widget-title">Newsletter</h4>
                                        <form>
                                            <div className="form-group">
                                                <input type="text" placeholder="E-mail address" />
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary btn-sm"
                                                    defaultValue="Subscribe"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget">
                                        <h4 className="widget-title">Archives</h4>
                                        <ul>
                                            <li>
                                                <a href="blog.html">February 2016</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">January 2016</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">December 2015</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">November 2015</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">October 2015</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>{" "}
                                {/* /.sidebar */}
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
                <div id="js-back-to-top" className="back-to-top">
                    <i className="flaticon-up-arrow-sign" /> Page top
  </div>
                <div className="full-search-wrap">
                    <div className="full-search container">
                        <div className="close-s float-right js-close-search flaticon-cancel-button fi-2x" />
                        <form action="http://taffle.dymix.us/" className=" search-full-form">
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
