import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(user, pass1, pass2);
    if (pass1 === pass2) {
      const res = await axios
        .post(`${process.env.STRAPI_URL}/auth/local/register`, {
          email: user,
          password: pass1,
          username: user,
        })
        .then(
          function (response) {
            console.log(response);
          },
          alert("Thankyou for Signing up")
          // ,window.location.assign("signin")
        )
        //   axios.post(url, userdata)
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Password Do Not match");
    }
  };

  return (
    <>
      <div>
        <title>Blogzine - Blog and Magazine Bootstrap 5 Theme</title>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Webestica.com" />
        <meta
          name="description"
          content="Bootstrap based News, Magazine and Blog Theme"
        />
        {/* Dark mode */}
        {/* Favicon */}
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Plugins CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/font-awesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        />
        {/* Theme CSS */}
        <link
          id="style-switch"
          rel="stylesheet"
          type="text/css"
          href="assets/css/style.css"
        />
        {/* =======================
Header START */}

        <header className="navbar-light navbar-sticky header-static">
          {/* Logo Nav START */}
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo START */}
              <a className="navbar-brand" href="/">
                <img
                  className="navbar-brand-item light-mode-item"
                  src="assets/images/logo.svg"
                  alt="logo"
                />
                <img
                  className="navbar-brand-item dark-mode-item"
                  src="assets/images/logo-light.svg"
                  alt="logo"
                />
              </a>
              {/* Logo END */}
              {/* Responsive navbar toggler */}
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="text-body h6 d-none d-sm-inline-block">
                  Menu
                </span>
                <span className="navbar-toggler-icon" />
              </button>
              {/* Main navbar START */}
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav navbar-nav-scroll ms-auto">
                  {/* Nav item 1 Demos */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="homeMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="homeMenu">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="/">
                          Home default
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-lazy.html">
                          Home lazy load
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-2.html">
                          Magazine classic
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-3.html">
                          Magazine
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-4.html">
                          Home cards
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-5.html">
                          Blog classic
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-6.html">
                          Blog Personal{" "}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-7.html">
                          Blog Vintage
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-8.html">
                          Blog Tech
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-9.html">
                          Blog Fashion
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-10.html">
                          Blog Podcast
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="index-11.html">
                          Home Shop{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Nav item 2 Pages */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="pagesMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                      <li>
                        {" "}
                        <a className="dropdown-item" href="about-us.html">
                          About
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="contact-us.html">
                          Contact
                        </a>
                      </li>
                      {/* Dropdown submenu */}
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Shop
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-start"
                          data-bs-popper="none"
                        >
                          <li>
                            {" "}
                            <a className="dropdown-item" href="shop-grid.html">
                              Shop grid
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="shop-detail.html"
                            >
                              Shop detail
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="checkout.html">
                              Checkout
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="my-cart.html">
                              Cart
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="empty-cart.html">
                              Empty Cart
                            </a>{" "}
                          </li>
                        </ul>
                      </li>
                      {/* Dropdown submenu */}
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Other Archives
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-start"
                          data-bs-popper="none"
                        >
                          <li>
                            {" "}
                            <a className="dropdown-item" href="author.html">
                              Author Page
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="categories.html">
                              Category page 1
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="categories-2.html"
                            >
                              Category page 2
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="tag.html">
                              # tag
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="search-result.html"
                            >
                              Search result
                            </a>{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="404.html">
                          Error 404
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="signin.html">
                          signin
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="signup.html">
                          signup
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="offline.html">
                          offline
                        </a>
                      </li>
                      {/* Dropdown submenu levels */}
                      <li className="dropdown-divider" />
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Dropdown levels
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-start"
                          data-bs-popper="none"
                        >
                          {/* dropdown submenu open right */}
                          <li className="dropdown-submenu dropend">
                            <a
                              className="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Dropdown (end)
                            </a>
                            <ul className="dropdown-menu" data-bs-popper="none">
                              <li>
                                {" "}
                                <a className="dropdown-item" href="#">
                                  Dropdown item
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className="dropdown-item" href="#">
                                  Dropdown item
                                </a>{" "}
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Dropdown item
                            </a>{" "}
                          </li>
                          {/* dropdown submenu open left */}
                          <li className="dropdown-submenu dropstart">
                            <a
                              className="dropdown-item dropdown-toggle"
                              href="#"
                            >
                              Dropdown (start)
                            </a>
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              data-bs-popper="none"
                            >
                              <li>
                                {" "}
                                <a className="dropdown-item" href="#">
                                  Dropdown item
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className="dropdown-item" href="#">
                                  Dropdown item
                                </a>{" "}
                              </li>
                            </ul>
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Dropdown item
                            </a>{" "}
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://support.webestica.com/"
                          target="_blank"
                        >
                          <i className="text-warning fa-fw bi bi-life-preserver me-2" />
                          Support
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="docs/index.html"
                          target="_blank"
                        >
                          <i className="text-danger fa-fw bi bi-card-text me-2" />
                          Documentation
                        </a>
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://blogzine.webestica.com/rtl"
                          target="_blank"
                        >
                          <i className="text-info fa-fw bi bi-toggle-off me-2" />
                          RTL demo
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://themes.getbootstrap.com/store/webestica/"
                          target="_blank"
                        >
                          <i className="text-success fa-fw bi bi-cloud-download-fill me-2" />
                          Buy blogzine!
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Nav item 3 Post */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="postMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Post
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="postMenu">
                      {/* dropdown submenu */}
                      <li className="dropdown-submenu dropend">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Post grid
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-start"
                          data-bs-popper="none"
                        >
                          <li>
                            {" "}
                            <a className="dropdown-item" href="post-grid.html">
                              Post grid
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="post-grid-4-col.html"
                            >
                              Post grid 4 col
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="post-grid-masonry.html"
                            >
                              Post grid masonry
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="post-grid-masonry-filter.html"
                            >
                              Post grid masonry filter
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item"
                              href="post-large-and-grid.html"
                            >
                              Post mixed large than grid
                            </a>{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-list.html">
                          Post list
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-list-2.html">
                          Post list 2
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-cards.html">
                          Post card
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-overlay.html">
                          Post Overlay
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-types.html">
                          Post types
                        </a>{" "}
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-single.html">
                          Post single magazine
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-single-2.html">
                          Post single classic
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-single-3.html">
                          Post single minimal
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-single-4.html">
                          Post single card
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-single-5.html">
                          Post single review
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="post-single-6.html">
                          Post single video
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="podcast-single.html">
                          Podcast single
                        </a>{" "}
                      </li>
                      <li className="dropdown-divider" />
                      <li>
                        {" "}
                        <a
                          className="dropdown-item"
                          href="pagination-styles.html"
                        >
                          Pagination styles
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  {/* Nav item 4 Mega menu */}
                  <li className="nav-item dropdown dropdown-fullwidth">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="megaMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      Lifestyle
                    </a>
                    <div className="dropdown-menu" aria-labelledby="megaMenu">
                      <div className="container">
                        <div className="row g-4 p-3 flex-fill">
                          {/* Card item START */}
                          <div className="col-sm-6 col-lg-3">
                            <div className="card bg-transparent">
                              {/* Card img */}
                              <img
                                className="card-img rounded"
                                src="assets/images/blog/16by9/small/01.jpg"
                                alt="Card image"
                              />
                              <div className="card-body px-0 pt-3">
                                <h6 className="card-title mb-0">
                                  <a
                                    href="post-single-2.html"
                                    className="btn-link text-reset fw-bold"
                                  >
                                    7 common mistakes everyone makes while
                                    traveling
                                  </a>
                                </h6>
                                {/* Card info */}
                                <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                                  <li className="nav-item">
                                    <a href="#" className="text-reset btn-link">
                                      Joan Wallace
                                    </a>
                                  </li>
                                  <li className="nav-item">Feb 18, 2022</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Card item END */}
                          {/* Card item START */}
                          <div className="col-sm-6 col-lg-3">
                            <div className="card bg-transparent">
                              {/* Card img */}
                              <img
                                className="card-img rounded"
                                src="assets/images/blog/16by9/small/02.jpg"
                                alt="Card image"
                              />
                              <div className="card-body px-0 pt-3">
                                <h6 className="card-title mb-0">
                                  <a
                                    href="post-single-2.html"
                                    className="btn-link text-reset fw-bold"
                                  >
                                    12 worst types of business accounts you
                                    follow on Twitter
                                  </a>
                                </h6>
                                {/* Card info */}
                                <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                                  <li className="nav-item">
                                    <a href="#" className="text-reset btn-link">
                                      Lori Stevens
                                    </a>
                                  </li>
                                  <li className="nav-item">Jun 03, 2022</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Card item END */}
                          {/* Card item START */}
                          <div className="col-sm-6 col-lg-3">
                            <div className="card bg-transparent">
                              {/* Card img */}
                              <img
                                className="card-img rounded"
                                src="assets/images/blog/16by9/small/03.jpg"
                                alt="Card image"
                              />
                              <div className="card-body px-0 pt-3">
                                <h6 className="card-title mb-0">
                                  <a
                                    href="post-single-2.html"
                                    className="btn-link text-reset fw-bold"
                                  >
                                    Skills that you can learn from business
                                  </a>
                                </h6>
                                {/* Card info */}
                                <ul className="nav nav-divider align-items-center text-uppercase small mt-2">
                                  <li className="nav-item">
                                    <a href="#" className="text-reset btn-link">
                                      Judy Nguyen
                                    </a>
                                  </li>
                                  <li className="nav-item">Sep 07, 2022</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Card item END */}
                          {/* Card item START */}
                          <div className="col-sm-6 col-lg-3">
                            <div className="bg-primary bg-opacity-10 text-center h-100 w-100 rounded p-4">
                              <span>The Blogzine</span>
                              <h3>Premium Membership</h3>
                              <p>Become a Member Today!</p>
                              <a href="#" className="btn btn-warning">
                                View pricing plans
                              </a>
                            </div>
                          </div>
                          {/* Card item END */}
                        </div>{" "}
                        {/* Row END */}
                        {/* Trending tags */}
                        <div className="row px-3">
                          <div className="col-12">
                            <ul className="list-inline mt-3">
                              <li className="list-inline-item">
                                Trending tags:
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-primary-soft"
                                >
                                  Travel
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-warning-soft"
                                >
                                  Business
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-success-soft"
                                >
                                  Tech
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-danger-soft"
                                >
                                  Gadgets
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-info-soft"
                                >
                                  Lifestyle
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-primary-soft"
                                >
                                  Vaccine
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-success-soft"
                                >
                                  Sports
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-danger-soft"
                                >
                                  Covid-19
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="btn btn-sm btn-info-soft"
                                >
                                  Politics
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                        {/* Row END */}
                      </div>
                    </div>
                  </li>
                  {/* Nav item 5 link*/}
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" href="dashboard.html">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
              {/* Main navbar END */}
              {/* Nav right START */}
              <div className="nav ms-sm-3 flex-nowrap align-items-center">
                {/* Dark mode options START */}
                <div className="nav-item dropdown ms-3">
                  {/* Switch button */}
                  <button
                    className="modeswitch"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                  >
                    <svg className="theme-icon-active">
                      <use href="#" />
                    </svg>
                  </button>
                  {/* Dropdown items */}
                  <ul
                    className="dropdown-menu min-w-auto dropdown-menu-end"
                    aria-labelledby="bd-theme"
                  >
                    <li className="mb-1">
                      <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="light"
                      >
                        <svg
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          <use href="#" />
                        </svg>
                        Light
                      </button>
                    </li>
                    <li className="mb-1">
                      <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                          <use href="#" />
                        </svg>
                        Dark
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item d-flex align-items-center active"
                        data-bs-theme-value="auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-circle-half fa-fw mode-switch me-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                          <use href="#" />
                        </svg>
                        Auto
                      </button>
                    </li>
                  </ul>
                </div>
                {/* Dark mode options END */}
                {/* Nav additional link */}
                <div className="nav-item dropdown dropdown-toggle-icon-none">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    href="#"
                    id="navAdditionalLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots fs-4" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto shadow rounded text-end"
                    aria-labelledby="navAdditionalLink"
                  >
                    <li>
                      <a className="dropdown-item fw-normal" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fw-normal" href="#">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fw-normal" href="#">
                        Author
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fw-normal" href="#">
                        #Tags
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fw-normal" href="#">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item fw-normal" href="#">
                        <span className="badge bg-danger me-2 align-middle">
                          2 Job
                        </span>
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Nav Button */}
                <div className="nav-item d-none d-md-block">
                  <a href="#" className="btn btn-sm btn-danger mb-0 mx-2">
                    Subscribe!
                  </a>
                </div>
                {/* Nav Search */}
                <div className="nav-item dropdown nav-search dropdown-toggle-icon-none">
                  <a
                    className="nav-link pe-0 dropdown-toggle"
                    role="button"
                    href="#"
                    id="navSearch"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-search fs-4"> </i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                    aria-labelledby="navSearch"
                  >
                    <form className="input-group">
                      <input
                        className="form-control border-success"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-success m-0" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Nav right END */}
            </div>
          </nav>
          {/* Logo Nav END */}
        </header>
        {/* =======================
Header END */}
        {/* **************** MAIN CONTENT START **************** */}
        <main>
          {/* =======================
Inner intro START */}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                  <div className="bg-primary bg-opacity-10 rounded p-4 p-sm-5">
                    <h2>Create your free account </h2>
                    {/* Form START */}
                    <form className="mt-4">
                      {/* Email */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="exampleInputEmail1"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={user}
                          onChange={(event) => setUser(event.target.value)}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="E-mail"
                        />
                        <small id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      {/* Password */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="exampleInputPassword1"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={pass1}
                          onChange={(event) => setPass1(event.target.value)}
                          id="exampleInputPassword1"
                          placeholder="*********"
                        />
                      </div>
                      {/* Password */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="exampleInputPassword2"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={pass2}
                          onChange={(event) => setPass2(event.target.value)}
                          id="exampleInputPassword2"
                          placeholder="*********"
                        />
                      </div>
                      {/* Checkbox */}
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Yes i'd also like to sign up for additional
                          subscription
                        </label>
                      </div>
                      {/* Button */}
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <button
                            type="submit"
                            onClick={handleSignup}
                            className="btn btn-success"
                          >
                            Sign me up
                          </button>
                        </div>
                        <div className="col-sm-8 text-sm-end">
                          <span>
                            Have an account?{" "}
                            <a href="signin.html">
                              <u>Sign in</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </form>
                    {/* Form END */}
                    <hr />
                    {/* Social-media btn */}
                    <div className="text-center">
                      <p>Sign up with your social network for quick access</p>
                      <ul className="list-unstyled d-sm-flex mt-3 justify-content-center">
                        <li className="mx-2">
                          <a
                            href="#"
                            className="btn bg-facebook d-inline-block"
                          >
                            <i className="fab fa-facebook-f me-2" /> Sign up
                            with Facebook
                          </a>
                        </li>
                        <li className="mx-2">
                          <a href="#" className="btn bg-google d-inline-block">
                            <i className="fab fa-google me-2" /> Sign up with
                            google
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =======================
Inner intro END */}
        </main>
        {/* **************** MAIN CONTENT END **************** */}
        {/* =======================
Footer START */}
        <footer className="pb-0">
          <div className="container">
            <hr />
            {/* Widgets START */}
            <div className="row pt-5">
              {/* Footer Widget */}
              <div className="col-md-6 col-lg-4 mb-4">
                <img
                  className="light-mode-item"
                  src="assets/images/logo.svg"
                  alt="logo"
                />
                <img
                  className="dark-mode-item"
                  src="assets/images/logo-light.svg"
                  alt="logo"
                />
                <p className="mt-3">
                  The next-generation blog, news, and magazine theme for you to
                  start sharing your stories today! This Bootstrap 5 based theme
                  is ideal for all types of sites that deliver the news.
                </p>
                <div className="mt-4">
                  ©2023{" "}
                  <a
                    href="https://www.webestica.com/"
                    className="text-reset btn-link"
                    target="_blank"
                  >
                    Webestica
                  </a>
                  . All rights reserved
                </div>
              </div>
              {/* Footer Widget */}
              <div className="col-md-6 col-lg-3 mb-4">
                <h5 className="mb-4">Navigation</h5>
                <div className="row">
                  <div className="col-6">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link pt-0" href="#">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Style Guide
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Contact us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Get Theme
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link pt-0" href="#">
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Career{" "}
                          <span className="badge text-bg-danger ms-2">
                            2 Job
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Technology
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Startups
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Gadgets
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Footer Widget */}
              <div className="col-sm-6 col-lg-3 mb-4">
                <h5 className="mb-4">Browse by Tag</h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-primary-soft">
                      Travel
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-warning-soft">
                      Business
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-success-soft">
                      Tech
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-danger-soft">
                      Gadgets
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-info-soft">
                      Lifestyle
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-primary-soft">
                      Vaccine
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-warning-soft">
                      Marketing
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-success-soft">
                      Sports
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-danger-soft">
                      Covid-19
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn btn-sm btn-info-soft">
                      Politics
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer Widget */}
              <div className="col-sm-6 col-lg-2 mb-4">
                <h5 className="mb-4">Our Social handles</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link pt-0" href="#">
                      <i className="fab fa-facebook-square fa-fw me-2 text-facebook" />
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fab fa-twitter-square fa-fw me-2 text-twitter" />
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fab fa-linkedin fa-fw me-2 text-linkedin" />
                      Linkedin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fab fa-youtube-square fa-fw me-2 text-youtube" />
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Widgets END */}
          </div>
        </footer>
        {/* =======================
Footer END */}
        {/* Back to top */}
        <div className="back-top">
          <i className="bi bi-arrow-up-short" />
        </div>
        {/* =======================
JS libraries, plugins and custom scripts */}
        {/* Bootstrap JS */}
        {/* Template Functions */}
      </div>
    </>
  );
}
export default Register;
