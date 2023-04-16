
export default function index_2(){
    return(
        <>
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
  <link
    rel="stylesheet"
    type="text/css"
    href="assets/vendor/tiny-slider/tiny-slider.css"
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
          <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
          <span className="navbar-toggler-icon" />
        </button>
        {/* Main navbar START */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-scroll ms-auto">
            {/* Nav item 1 Demos */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
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
                  <a className="dropdown-item" href="index-lazy">
                    Home lazy load
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item active" href="index-2">
                    Magazine classic
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-3">
                    Magazine
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-4">
                    Home cards
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-5">
                    Blog classic
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-6">
                    Blog Personal{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-7">
                    Blog Vintage
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-8">
                    Blog Tech
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-9">
                    Blog Fashion
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-10">
                    Blog Podcast
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="index-11">
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
                      <a className="dropdown-item" href="shop-detail.html">
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
                      <a className="dropdown-item" href="categories-2.html">
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
                      <a className="dropdown-item" href="search-result.html">
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
                      <a className="dropdown-item dropdown-toggle" href="#">
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
                      <a className="dropdown-item dropdown-toggle" href="#">
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
                      <a className="dropdown-item" href="post-grid-4-col.html">
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
                  <a className="dropdown-item" href="pagination-styles.html">
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
                            <a href="#" className="btn-link text-reset fw-bold">
                              7 common mistakes everyone makes while traveling
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
                            <a href="#" className="btn-link text-reset fw-bold">
                              12 worst types of business accounts you follow on
                              Twitter
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
                            <a href="#" className="btn-link text-reset fw-bold">
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
                      <div className="bg-primary bg-opacity-10 p-4 text-center h-100 w-100 rounded">
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
                        <li className="list-inline-item">Trending tags:</li>
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
        <div className="nav flex-nowrap align-items-center ms-3 ms-sm-4">
          {/* Dark mode options START */}
          <div className="nav-item dropdown">
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
          <div className="nav-item dropdown dropdown-toggle-icon-none d-none d-sm-block">
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
Main hero START */}
    <section className="p-0">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-xxl-10 mx-auto rounded-3 overflow-hidden">
            <div className="tiny-slider arrow-hover arrow-blur arrow-round position-relative">
              <div
                className="tiny-slider-inner"
                data-autoplay="false"
                data-hoverpause="true"
                data-gutter={2}
                data-arrow="false"
                data-dots="true"
                data-items={1}
              >
                {/* Slide item */}
                <div
                  className="card bg-dark-overlay-3 rounded-0 h-400 h-lg-500 h-xl-700 position-relative overflow-hidden"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/big/02.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay rounded-0 d-flex align-items-center">
                    <div className="container px-3 my-auto">
                      <div className="row">
                        <div className="col-lg-7">
                          {/* Card category */}
                          <a href="#" className="badge text-bg-danger mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Lifestyle
                          </a>
                          {/* Card title */}
                          <h2 className="text-white display-5">
                            <a
                              href="post-single-4.html"
                              className="btn-link text-reset fw-normal"
                            >
                              10 tell-tale signs you need to get a new startup.
                            </a>
                          </h2>
                          <p className="text-white">
                            No visited raising gravity outward subject my
                            cottage Mr be. Hold do at tore in park feet near my
                            case.{" "}
                          </p>
                          {/* Card info */}
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center text-white position-relative">
                                  <div className="avatar avatar-sm">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{" "}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Louis
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jan 01, 2022</li>
                            <li className="nav-item">5 min read</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide item */}
                <div
                  className="card bg-dark-overlay-3 rounded-0 h-400 h-lg-500 h-xl-700 position-relative overflow-hidden"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/big/01.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay rounded-0 d-flex align-items-center">
                    <div className="container px-3 my-auto">
                      <div className="row">
                        <div className="col-lg-7">
                          {/* Card category */}
                          <a href="#" className="badge text-bg-warning mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Travel
                          </a>
                          {/* Card title */}
                          <h2 className="text-white display-5">
                            <a
                              href="post-single-6.html"
                              className="btn-link text-reset fw-normal"
                            >
                              7 common mistakes everyone makes while traveling
                            </a>
                          </h2>
                          <p className="text-white">
                            Particular way thoroughly unaffected projection
                            favorable Mrs can be projecting own.
                          </p>
                          {/* Card info */}
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center text-white position-relative">
                                  <div className="avatar avatar-sm">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/11.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{" "}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Larry
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Feb 22, 2022</li>
                            <li className="nav-item">2 min read</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide item */}
                <div
                  className="card bg-dark-overlay-3 rounded-0 h-400 h-lg-500 h-xl-700 position-relative overflow-hidden"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/big/03.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay rounded-0 d-flex align-items-center">
                    <div className="container w-100 my-auto">
                      <div className="row">
                        <div className="col-lg-7">
                          {/* Card category */}
                          <a href="#" className="badge bg-primary mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Covid-19
                          </a>
                          {/* Card title */}
                          <h2 className="text-white display-5">
                            <a
                              href="post-single-4.html"
                              className="btn-link text-reset fw-normal"
                            >
                              Initial problem of startups and their solution
                            </a>
                          </h2>
                          <p className="text-white">
                            {" "}
                            Thirty it matter enable become admire in giving. See
                            resolved goodness felicity shy civility domestic.{" "}
                          </p>
                          {/* Card info */}
                          <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                            <li className="nav-item">
                              <div className="nav-link">
                                <div className="d-flex align-items-center text-white position-relative">
                                  <div className="avatar avatar-sm">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src="assets/images/avatar/08.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <span className="ms-3">
                                    by{" "}
                                    <a
                                      href="#"
                                      className="stretched-link text-reset btn-link"
                                    >
                                      Dennis
                                    </a>
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className="nav-item">Jun 17, 2022</li>
                            <li className="nav-item">10 min read</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Custom thumb START */}
              <div
                className="col-xl-4 custom-thumb pe-5 position-absolute top-50 end-0 translate-middle-y d-none d-xxl-block"
                id="custom-thumb"
              >
                {/* Thumb 1 */}
                <div className="row align-items-center g-3 mb-4">
                  <div className="col-auto">
                    <div className="avatar avatar-lg">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/blog/16by9/big/02.jpg"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <h4 className="fw-normal text-truncate mb-1">
                      Tell-tale signs you need to get a new startup
                    </h4>
                    <p className="text-truncate d-block col-11 small mb-0">
                      Departure defective arranging rapturous did believe
                    </p>
                  </div>
                </div>
                {/* Thumb 2 */}
                <div className="row align-items-center g-3 mb-4">
                  <div className="col-auto">
                    <div className="avatar avatar-lg">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/blog/16by9/big/01.jpg"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <h4 className="fw-normal text-truncate mb-1">
                      7 common mistakes everyone makes while traveling
                    </h4>
                    <p className="text-truncate d-block col-11 small mb-0">
                      Particular way thoroughly unaffected projection favorable{" "}
                    </p>
                  </div>
                </div>
                {/* Thumb 3 */}
                <div className="row align-items-center g-3">
                  <div className="col-auto">
                    <div className="avatar avatar-lg">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/blog/16by9/big/03.jpg"
                        alt="avatar"
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <h4 className="fw-normal text-truncate mb-1">
                      Initial problem of startups and their solution
                    </h4>
                    <p className="text-truncate d-block col-11 small mb-0">
                      Drawings offended yet answered Jennings perceive
                    </p>
                  </div>
                </div>
              </div>
              {/* Custom thumb END */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Highlights START */}
    <section className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Title */}
            <div className="mb-4">
              <h2 className="m-0">
                <i className="bi bi-megaphone" /> Today's top highlights
              </h2>
              <p className="m-0">
                Latest breaking news, pictures, videos, and special reports
              </p>
            </div>
            <div className="tiny-slider arrow-hover arrow-blur arrow-dark arrow-round mt-3">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-gutter={24}
                data-arrow="true"
                data-dots="false"
                data-items-xl={4}
                data-items-lg={3}
                data-items-md={3}
                data-items-sm={2}
                data-items-xs={1}
              >
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      src="assets/images/blog/4by3/07.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay Top */}
                      <div className="w-100 mb-auto d-flex justify-content-end">
                        <div className="text-end ms-auto">
                          {/* Card format icon */}
                          <div
                            className="icon-md bg-white bg-opacity-10 bg-blur text-white fw-bold rounded-circle"
                            title="8.5 rating"
                          >
                            8.5
                          </div>
                        </div>
                      </div>
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-info mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Marketing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h5 className="card-title">
                      <a
                        href="post-single-6.html"
                        className="btn-link text-reset fw-bold"
                      >
                        7 common mistakes everyone makes while traveling
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/07.jpg"
                                alt="avatar"
                              />
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Lori
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Mar 07, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      src="assets/images/blog/4by3/08.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-danger mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Sports
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h5 className="card-title">
                      <a
                        href="post-single-6.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Skills that you can learn from business
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/08.jpg"
                                alt="avatar"
                              />
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="post-single-6.html"
                                className="stretched-link text-reset btn-link"
                              >
                                Joan
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Aug 15, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      src="assets/images/blog/4by3/09.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-success mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Marketing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h5 className="card-title">
                      <a
                        href="post-single-6.html"
                        className="btn-link text-reset fw-bold"
                      >
                        10 tell-tale signs you need to get a new business
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/09.jpg"
                                alt="avatar"
                              />
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Bryan
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Jun 01, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      src="assets/images/blog/4by3/10.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay Top */}
                      <div className="w-100 mb-auto d-flex justify-content-end">
                        <div className="text-end ms-auto">
                          {/* Card format icon */}
                          <div
                            className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                            title="This post has images"
                          >
                            <i className="fas fa-image" />
                          </div>
                        </div>
                      </div>
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge bg-primary mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Photography
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h5 className="card-title">
                      <a
                        href="post-single-6.html"
                        className="btn-link text-reset fw-bold"
                      >
                        This is why this year will be the year of startups
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/10.jpg"
                                alt="avatar"
                              />
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Samuel
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Dec 07, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      src="assets/images/blog/4by3/11.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge text-bg-warning mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Technology
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h5 className="card-title">
                      <a
                        href="post-single-6.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Best Pinterest Boards for learning about business
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/12.jpg"
                                alt="avatar"
                              />
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Dennis
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Sep 07, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Highlights END */}
    {/* =======================
Adv START */}
    <section className="p-0">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="#" className="d-block card-img-flash">
              <img src="assets/images/adv-3.png" alt="" />
            </a>
            <small className="text-end d-block mt-1">Advertisement</small>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Adv END */}
    {/* =======================
Top highlights START */}
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Title */}
            <div className="mb-4">
              <h2 className="m-0">
                <i className="bi bi-bookmark-star me-2" />
                Last week top highlights
              </h2>
              <p className="m-0">
                Check last weeks top highlights, news, stories and headline news
              </p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-7">
                <div
                  className="card card-overlay-bottom card-bg-scale h-400 h-lg-560"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/05.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5">
                    <div className="w-100 mt-auto">
                      <div className="col">
                        {/* Card category */}
                        <a href="#" className="badge bg-primary mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Business
                        </a>
                        <a
                          href="#!"
                          className="badge mb-2 bg-dark z-index-99 position-relative"
                          tabIndex={0}
                          role="button"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-trigger="focus"
                          data-bs-placement="top"
                          data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                        >
                          <i className="bi bi-info-circle pe-1" /> Sponsored
                        </a>
                        {/* Card title */}
                        <h2 className="text-white display-6">
                          <a
                            href="post-single-5.html"
                            className="btn-link text-reset stretched-link fw-normal"
                          >
                            Never underestimate the influence of social media
                          </a>
                        </h2>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center text-white position-relative">
                                <div className="avatar avatar-sm">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/images/avatar/01.jpg"
                                    alt="avatar"
                                  />
                                </div>
                                <span className="ms-3">
                                  by{" "}
                                  <a
                                    href="#"
                                    className="stretched-link text-reset btn-link"
                                  >
                                    Carolyn
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Jan 26, 2022</li>
                          <li className="nav-item">3 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                {/* Card item START */}
                <div className="card mb-2 mb-md-4">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/4by3/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <a
                        href="#"
                        className="badge bg-danger bg-opacity-10 text-danger mb-2"
                      >
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Lifestyle
                      </a>
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          The pros and cons of business agency
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <div className="avatar-img rounded-circle bg-primary bg-opacity-10">
                                  <span className="text-primary position-absolute top-50 start-50 translate-middle fw-bold small">
                                    PT
                                  </span>
                                </div>
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Samuel
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Jan 22, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-2 mb-md-4">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/4by3/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <a
                        href="#"
                        className="badge bg-info bg-opacity-10 text-info mb-2"
                      >
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Sports
                      </a>
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          5 reasons why you shouldn't startup
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/02.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Dennis
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Mar 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-2 mb-md-4">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/4by3/03.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <a
                        href="#"
                        className="badge bg-success bg-opacity-10 text-success mb-2"
                      >
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Business
                      </a>
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Five unbelievable facts about money.
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/03.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Bryan
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Jun 17, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-2 mb-md-4">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/4by3/04.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <a
                        href="#"
                        className="badge bg-warning bg-opacity-15 text-warning mb-2"
                      >
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Technology
                      </a>
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Around the web: 20 fabulous infographics about
                          business
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/05.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-3">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Jacqueline
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Nov 11, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>{" "}
            {/* Row END */}
          </div>
        </div>{" "}
        {/* Row END */}
      </div>
    </section>
    {/* =======================
Top highlights END */}
    {/* =======================
Trending topics START */}
    <section className="p-0">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 bg-light p-2 p-sm-4 rounded-3">
            {/* Title */}
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
              <h2 className="m-0">Trending topics</h2>
              <a href="#" className="text-body text-primary-hover">
                <u>View all categories</u>
              </a>
            </div>
            {/* Slider */}
            <div className="tiny-slider arrow-hover arrow-dark arrow-blur arrow-round">
              <div
                className="tiny-slider-inner"
                data-autoplay="false"
                data-hoverpause="true"
                data-gutter={24}
                data-arrow="true"
                data-dots="false"
                data-items-xl={5}
                data-items-lg={4}
                data-items-md={3}
                data-items-sm={2}
                data-items-xs={2}
              >
                {/* Category item */}
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    <img
                      className="card-img"
                      src="assets/images/blog/1by1/thumb/01.jpg"
                      alt="card image"
                    />
                    <div className="card-img-overlay d-flex px-3 px-sm-5">
                      <h5 className="mt-auto mx-auto">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white"
                        >
                          Travel
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    <img
                      className="card-img"
                      src="assets/images/blog/1by1/thumb/02.jpg"
                      alt="card image"
                    />
                    <div className="card-img-overlay d-flex px-3 px-sm-5">
                      <h5 className="mt-auto mx-auto">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white"
                        >
                          Business
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    <img
                      className="card-img"
                      src="assets/images/blog/1by1/thumb/03.jpg"
                      alt="card image"
                    />
                    <div className="card-img-overlay d-flex px-3 px-sm-5">
                      <h5 className="mt-auto mx-auto">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white"
                        >
                          Marketing
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    <img
                      className="card-img"
                      src="assets/images/blog/1by1/thumb/04.jpg"
                      alt="card image"
                    />
                    <div className="card-img-overlay d-flex px-3 px-sm-5">
                      <h5 className="mt-auto mx-auto">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white"
                        >
                          Photography
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    <img
                      className="card-img"
                      src="assets/images/blog/1by1/thumb/05.jpg"
                      alt="card image"
                    />
                    <div className="card-img-overlay d-flex px-3 px-sm-5">
                      <h5 className="mt-auto mx-auto">
                        <a
                          href="#"
                          className="stretched-link btn-link fw-bold text-white"
                        >
                          Sports
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Slider END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Trending topics END */}
    {/* =======================
Sports update START */}
    <section>
      <div className="container">
        <div className="row">
          {/* Title */}
          <div className="col-12 mb-4">
            <h2 className="m-0">
              <i className="bi bi-controller me-2" />
              Sports update
            </h2>
            <p className="m-0">
              Get the latest sports news and updates from football, tennis,
              formula one, cricket, NBA, and golf with live scores and stats
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            {/* Card item START */}
            <div
              className="card card-overlay-bottom card-bg-scale h-300 h-lg-540"
              style={{
                backgroundImage: "url(assets/images/blog/16by9/06.jpg)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
              }}
            >
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 mt-auto">
                  <div className="col">
                    {/* Card category */}
                    <a href="#" className="badge text-bg-danger mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Travel
                    </a>
                    {/* Card title */}
                    <h2 className="text-white display-6">
                      <a
                        href="post-single-4.html"
                        className="btn-link text-reset stretched-link fw-normal"
                      >
                        8 initial problem of startups and their solution
                      </a>
                    </h2>
                    {/* Card info */}
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center text-white position-relative">
                            <div className="avatar avatar-sm">
                              <div className="avatar-img rounded-circle bg-primary">
                                <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">
                                  VP
                                </span>
                              </div>
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Carolyn
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Feb 28, 2022</li>
                      <li className="nav-item">6 min read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-md-6">
            {/* Card item START */}
            <div
              className="card card-overlay-bottom card-bg-scale h-300 h-lg-540"
              style={{
                backgroundImage: "url(assets/images/blog/16by9/01.jpg)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
              }}
            >
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 mt-auto">
                  <div className="col">
                    {/* Card category */}
                    <a href="#" className="badge text-bg-warning mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Technology
                    </a>
                    {/* Card title */}
                    <h2 className="text-white display-6">
                      <a
                        href="post-single-4.html"
                        className="btn-link text-reset stretched-link fw-normal"
                      >
                        Business ideas that will boom in upcoming years
                      </a>
                    </h2>
                    {/* Card info */}
                    <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center text-white position-relative">
                            <div className="avatar avatar-sm">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/09.jpg"
                                alt="avatar"
                              />
                            </div>
                            <span className="ms-3">
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Billy
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">Jul 19, 2022</li>
                      <li className="nav-item">2 min read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Sports update END */}
    {/* =======================
Sponsored news START */}
    <section className="pt-4">
      <div className="container">
        <div className="row">
          {/* Title */}
          <div className="col-md-12">
            <div className="mb-4 d-md-flex justify-content-between align-items-center">
              <h2 className="m-0">
                <i className="bi bi-megaphone me-2" /> Sponsored news
              </h2>
              <a href="#" className="text-body small">
                <u>Content by: Bootstrap</u>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* Card item START */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a
                    href="#"
                    className="badge bg-danger bg-opacity-10 text-danger mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Lifestyle
                  </a>
                  <h4>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      The pros and cons of business agency
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/01.jpg"
                              alt="avatar"
                            />
                          </div>
                          <span className="ms-3">
                            by{" "}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Samuel
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Jan 22, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a
                    href="#"
                    className="badge bg-info bg-opacity-10 text-info mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Sports
                  </a>
                  <h4>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      5 reasons why you shouldn't startup
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/02.jpg"
                              alt="avatar"
                            />
                          </div>
                          <span className="ms-3">
                            by{" "}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Dennis
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Mar 07, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a
                    href="#"
                    className="badge bg-success bg-opacity-10 text-success mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Business
                  </a>
                  <h4>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      Five unbelievable facts about money.
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/03.jpg"
                              alt="avatar"
                            />
                          </div>
                          <span className="ms-3">
                            by{" "}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Bryan
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Jun 17, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-lg-6">
            {/* Card item START */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/04.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a
                    href="#"
                    className="badge bg-warning bg-opacity-15 text-warning mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Technology
                  </a>
                  <h4>
                    <a
                      href="post-single-2.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      Around the web: 20 fabulous infographics about business
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/05.jpg"
                              alt="avatar"
                            />
                          </div>
                          <span className="ms-3">
                            by{" "}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Jacqueline
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Oct 11, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/05.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a
                    href="#"
                    className="badge bg-primary bg-opacity-10 text-primary mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Marketing
                  </a>
                  <h4>
                    <a
                      href="post-single-6.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      7 common mistakes everyone makes while traveling
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <div className="avatar-img rounded-circle bg-danger">
                              <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">
                                W
                              </span>
                            </div>
                          </div>
                          <span className="ms-3">
                            by{" "}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Samuel
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Jul 22, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card mb-3 mb-sm-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/06.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a
                    href="#"
                    className="badge bg-danger bg-opacity-10 text-danger mb-2"
                  >
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Photography
                  </a>
                  <h4>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      5 investment doubts you should clarify
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/07.jpg"
                              alt="avatar"
                            />
                          </div>
                          <span className="ms-3">
                            by{" "}
                            <a
                              href="#"
                              className="stretched-link text-reset btn-link"
                            >
                              Judy
                            </a>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">Sep 30, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card item END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Sponsored news END */}
    {/* =======================
Newsletter START */}
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-dark p-3 p-sm-5 rounded-3 position-relative overflow-hidden">
              {/* SVG shape START */}
              <figure className="position-absolute top-50 start-50 translate-middle">
                <svg
                  width={1848}
                  height={481}
                  viewBox="0 0 1848.9 481.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-success"
                    d="m779.4 251c-10.3-11.5-19.9-23.8-29.4-36.1-9-11.6-18.4-22.8-27.1-34.7-15.3-21.2-30.2-45.8-54.8-53.3-10.5-3.2-21.6-3.2-30.6 2.5-7.6 4.8-13 12.6-17.3 20.9-10.8 20.6-16.1 44.7-24.6 66.7-7.9 20.2-19.4 38.6-33.8 54.3-14.7 16.2-31.7 30-50.4 41-15.9 9.4-33.4 17.2-52 19.3-18.4 2-38-2.5-56.5-6.2-22.4-4.4-45.1-9.7-67.6-10.9-9.8-0.5-19.8-0.3-29.1 2.3-9.8 2.8-18.7 8.6-26.6 15.2-17.3 14.5-30.2 34.4-43.7 52.9-12.9 17.6-26.8 34.9-45.4 45.4-19.5 11-42.6 12.1-65 6.6-52.3-13.1-93.8-56.5-127.9-101.5-8.8-11.6-17.3-23.4-25.6-35.4-0.6-0.9-1.1-1.8-1.6-2.7-1.1-2.4-0.9-2.6 0.6-1.2 1 0.9 1.9 1.9 2.7 3 35.3 47.4 71.5 98.5 123.2 123.9 22.8 11.2 48.2 17.2 71.7 12.2 23-5 40.6-21.2 55.3-39.7 24.5-30.7 46.5-75.6 87.1-83 19.5-3.5 40.7 0.1 60.6 3.7 21.2 3.9 42.3 9.1 63.6 11.7 17.8 2.3 35.8-0.1 52.2-7 20-8.1 38.4-20.2 54.8-34.6 16.2-14.1 31-30.7 41.8-50.4 11.1-20.2 17-43.7 24.9-65.7 6.1-16.9 13.8-36.2 29.3-44.5 16.1-8.6 37.3-1.9 52.3 10.6 18.7 15.6 31.2 39.2 46.7 58.2"
                  />
                  <path
                    className="fill-warning"
                    d="m1157.9 344.9c9.8 7.6 18.9 15.8 28.1 24 8.6 7.7 17.6 15.2 26 23.2 14.8 14.2 29.5 30.9 51.2 34.7 9.3 1.6 18.8 0.9 26.1-3.8 6.1-3.9 10.2-9.9 13.2-16.2 7.6-15.6 10.3-33.2 15.8-49.6 5.2-15.1 13.6-29 24.7-41.3 11.4-12.6 24.8-23.6 40-32.8 12.9-7.8 27.3-14.6 43.1-17.3 15.6-2.6 32.8-0.7 49 0.7 19.6 1.7 39.4 4 58.8 3.4 8.4-0.3 17-1.1 24.8-3.6 8.2-2.7 15.4-7.4 21.6-12.7 13.7-11.6 23.1-26.7 33.3-40.9 9.6-13.5 20.2-26.9 35.3-35.6 15.8-9.2 35.6-11.6 55.2-9.1 45.7 5.8 84.8 34.3 117.6 64.4 8.7 8 17.2 16.2 25.6 24.6 2.5 3.2 1.9 3-1.2 1-34.3-32-69.7-66.9-116.5-81.9-20.5-6.5-42.7-9.2-62.4-4-19.3 5.1-33.1 17.9-44.3 32.2-18.5 23.7-33.9 57.5-68.1 65.5-16.5 3.8-34.9 2.6-52.3 1.3-18.5-1.4-37-3.7-55.4-4.2-15.5-0.5-30.7 2.5-44.2 8.5-16.5 7.2-31.3 17.1-44.3 28.5-12.8 11.2-24.1 24.1-31.9 39-7.9 15.3-11.1 32.5-16.2 48.9-3.9 12.6-9 26.9-21.6 33.9-13.1 7.3-31.9 3.8-45.7-4.1-17.2-10-29.9-26.1-44.6-38.8"
                  />
                  <path
                    className="fill-warning opacity-6"
                    d="m1840.8 379c-8.8 40.3-167.8 79.9-300.2 45.3-42.5-11.1-91.4-32-138.7-11.6-38.7 16.7-55 66-90.8 67.4-25.1 1-48.6-20.3-58.1-39.8-31-63.3 50.7-179.9 155.7-208.1 50.4-13.5 97.3-3.2 116.1 1.6 36.3 9.3 328.6 87.4 316 145.2z"
                  />
                  <path
                    className="fill-success opacity-6"
                    d="M368.3,247.3C265.6,257.2,134,226,110.9,141.5C85,47.2,272.5-9.4,355.5-30.7s182.6-31.1,240.8-18.6    C677.6-31.8,671.5,53.9,627,102C582.6,150.2,470.9,237.5,368.3,247.3z"
                  />
                </svg>
              </figure>
              {/* SVG shape END */}
              <div className="row">
                <div className="col-md-8 col-lg-6 mx-auto text-center py-5 position-relative">
                  {/* Title */}
                  <h2 className="display-5 text-white">Never miss a story!</h2>
                  <p className="text-white">
                    Get the freshest headlines and updates sent uninterrupted to
                    your inbox.
                  </p>
                  {/* Form */}
                  <form className="row row-cols-sm-auto g-2 align-items-center justify-content-center mt-3">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg m-0"
                      >
                        Subscribe
                      </button>
                    </div>
                    <div className="form-text text-white opacity-6 mt-2">
                      By subscribing you agree to our
                      <a
                        href="#"
                        className="text-decoration-underline text-reset"
                      >
                        Privacy Policy
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Newsletter END */}
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
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today! This Bootstrap 5 based theme is ideal
            for all types of sites that deliver the news.
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
                    <span className="badge text-bg-danger ms-2">2 Job</span>
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
  {/* =======================
Cookies alert START */}
  <div
    className="alert alert-light alert-dismissible fade show position-fixed bottom-0 start-50 translate-middle-x z-index-99 d-lg-flex justify-content-between align-items-center shadow p-4 col-9 col-md-5"
    role="alert"
  >
    <p className="m-0 pe-3">
      This website stores cookies on your computer. To find out more about the
      cookies we use, see our{" "}
      <a className="text-reset" href="#">
        {" "}
        <u>Privacy Policy</u>
      </a>
    </p>
    <div className="d-flex mt-3 mt-lg-0">
      <button
        type="button"
        className="btn btn-success-soft btn-sm mb-0 me-2"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">Accept</span>
      </button>
      <button
        type="button"
        className="btn btn-danger-soft btn-sm mb-0"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">Decline</span>
      </button>
    </div>
  </div>
  {/* =======================
Cookies alert END */}
  {/* Back to top */}
  <div className="back-top">
    <i className="bi bi-arrow-up-short" />
  </div>
  {/* =======================
JS libraries, plugins and custom scripts */}
  {/* Bootstrap JS */}
  {/* Vendors */}
  {/* Template Functions */}
</>
    )
    
}