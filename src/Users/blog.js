import React, { Component } from 'react'

export default class blog extends Component {
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
                <div className="page-wrap archive blog">
                    {/* Breadcrumbs */}
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Blog
          </li>
                            </ol>
                        </div>
                    </nav>
                    {/* Page content */}
                    <div className="page-content">
                        <div className="container">
                            <div className="row justify-content-between">
                                <main id="main" className="main-content col-lg-8">
                                    <h1 className="screen-reader-text">Blog</h1>
                                    <div className="post-list">
                                        <article className="post-item">
                                            <a href="single-post.html" className="post-thumb">
                                                <img src="images/12_blog_page_001.jpg" alt />
                                            </a>
                                            <div className="post-item__content">
                                                <h3 className="post-title">
                                                    <a href="single-post.html">
                                                        Advertising And Internet A Long Term Relationship
                    </a>
                                                </h3>
                                                <div className="post-date">08 Mar 2020</div>
                                                <div className="post-excerpt">
                                                    Researchers believe that developing A SENSE OF PURPOSE is a
                                                    strategy which can ENHANCE HEALTHY LIVING.The basis for
                                                    their theory comes from studies carried out on 135 women in
                                                    the age
                  </div>
                                                <a
                                                    href="single-post.html"
                                                    className="read-more btn btn-outline-primary btn-lg"
                                                >
                                                    Read more
                  </a>
                                            </div>
                                        </article>
                                        <article className="post-item">
                                            <a href="single-post.html" className="post-thumb">
                                                <img src="images/12_blog_page_002.jpg" alt />
                                            </a>
                                            <div className="post-item__content">
                                                <h3 className="post-title">
                                                    <a href="single-post.html">
                                                        Motivation Is The First Step To Success
                    </a>
                                                </h3>
                                                <div className="post-date">08 Oct 2019</div>
                                                <div className="post-excerpt">
                                                    Speaking comes to most people as naturally as breathing. On
                                                    many occasions our words are uttered without conscious
                                                    thought; in fact we rarely stop and think about what we are
                                                    saying. Thousands of
                  </div>
                                                <a
                                                    href="single-post.html"
                                                    className="read-more btn btn-outline-primary btn-lg"
                                                >
                                                    Read more
                  </a>
                                            </div>
                                        </article>
                                        <article className="post-item">
                                            <a href="single-post.html" className="post-thumb">
                                                <img src="images/12_blog_page_003.jpg" alt />
                                            </a>
                                            <div className="post-item__content">
                                                <h3 className="post-title">
                                                    <a href="single-post.html">
                                                        Winner S Gold From Personal Garbage
                    </a>
                                                </h3>
                                                <div className="post-date">16 Oct 2019</div>
                                                <div className="post-excerpt">
                                                    Dream interpretation has many forms; it can be done be done
                                                    for the sake of fun, hobby or can be taken up as a serious
                                                    career. Psychologists and therapists are already
                                                    incorporating dream interpretation into
                  </div>
                                                <a
                                                    href="single-post.html"
                                                    className="read-more btn btn-outline-primary btn-lg"
                                                >
                                                    Read more
                  </a>
                                            </div>
                                        </article>
                                        <article className="post-item">
                                            <a href="single-post.html" className="post-thumb">
                                                <img src="images/12_blog_page_004.jpg" alt />
                                            </a>
                                            <div className="post-item__content">
                                                <h3 className="post-title">
                                                    <a href="single-post.html">
                                                        Mind Power The Ultimate Success Formula
                    </a>
                                                </h3>
                                                <div className="post-date">24 Oct 2019</div>
                                                <div className="post-excerpt">
                                                    Increasing prosperity in our lives can be accomplished by
                                                    having the right frame of mind. The truth is, our thoughts
                                                    are very powerful. They are capable of influencing every
                                                    aspect of our daily lives, from
                  </div>
                                                <a
                                                    href="single-post.html"
                                                    className="read-more btn btn-outline-primary btn-lg"
                                                >
                                                    Read more
                  </a>
                                            </div>
                                        </article>
                                        <article className="post-item">
                                            <a href="single-post.html" className="post-thumb">
                                                <img src="images/12_blog_page_005.jpg" alt />
                                            </a>
                                            <div className="post-item__content">
                                                <h3 className="post-title">
                                                    <a href="single-post.html">Yes You Can</a>
                                                </h3>
                                                <div className="post-date">04 Apr 2018</div>
                                                <div className="post-excerpt">
                                                    Many studies have been done to research the effects of
                                                    motivation and mental health. As the implications of helping
                                                    those with negative self-esteem, depression and anxiety are
                                                    immense this is certainly an area of
                  </div>
                                                <a
                                                    href="single-post.html"
                                                    className="read-more btn btn-outline-primary btn-lg"
                                                >
                                                    Read more
                  </a>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="post-pagination">
                                        <nav className="text-center">
                                            <ul className="pagination">
                                                {/*  <li>
                                 <a href="#" aria-label="Previous">
                                   <span aria-hidden="true"><i class="flaticon-left-arrow-sign"></i> Previous</span>
                                 </a>
                               </li> */}
                                                <li className="active">
                                                    <a href="#">01</a>
                                                </li>
                                                <li>
                                                    <a href="#">02</a>
                                                </li>
                                                <li>
                                                    <a href="#">03</a>
                                                </li>
                                                <li>
                                                    <a href="#">04</a>
                                                </li>
                                                <li>
                                                    <a href="#">05</a>
                                                </li>
                                                <li>
                                                    <a href="#">...</a>
                                                </li>
                                                <li>
                                                    <a href="#">28</a>
                                                </li>
                                                <li>
                                                    <a href="#" aria-label="Next">
                                                        <span aria-hidden="true">
                                                            Next <i className="flaticon-right-direction" />
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
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
                            </div>
                        </div>
                    </div>{" "}
                    {/* /.page-wrap */}
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
