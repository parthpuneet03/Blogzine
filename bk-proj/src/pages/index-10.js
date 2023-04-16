export default function index_10(){
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
  <link
    rel="stylesheet"
    type="text/css"
    href="assets/vendor/glightbox/css/glightbox.css"
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
                  <a className="dropdown-item" href="index-2">
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
                  <a className="dropdown-item active" href="index-10">
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
                  <a className="dropdown-item" href="podcast-single.html">
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
    <section>
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between pb-lg-5">
          <div className="col-lg-6 mt-0 position-relative">
            {/* Hero image */}
            <img
              className="rounded"
              src="assets/images/blog/1by1/12.jpg"
              alt=""
            />
            {/* Hero info */}
            <div className="mt-lg-n5 d-none d-sm-block">
              <div className="col-4 position-absolute bottom-0 end-0 me-4 mb-3 mb-lg-0 me-lg-n5">
                <div className="bg-body rounded shadow text-center px-3 py-4">
                  <i className="bi bi-mic fs-1 h6" />
                  <p className="mb-0">We air new episodes every Monday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            {/* Hero title */}
            <p>
              <span className="badge bg-primary me-1">NEW</span> All new season
              with entrepreneurs!
            </p>
            <h1 className="display-3">The Podcast With Bryan Knight</h1>
            <p>
              Interviews with top thinkers, founders, and artists since 2012.
              10M+ downloads.
            </p>
            {/* Listen on */}
            <ul className="list-unstyled d-flex gap-1 gap-sm-2 align-items-center mt-4">
              <li className="h5 mb-0">Listen on:</li>
              <li className="ms-2">
                <a href="#">
                  {" "}
                  <img
                    src="assets/images/icon/apple-podcasts.svg"
                    alt=""
                  />{" "}
                </a>
              </li>
              <li className="ms-2">
                <a href="#">
                  {" "}
                  <img src="assets/images/icon/divider-icon.svg" alt="" />{" "}
                </a>
              </li>
              <li className="ms-2">
                <a href="#">
                  {" "}
                  <img src="assets/images/icon/spotify.svg" alt="" />{" "}
                </a>
              </li>
              <li className="ms-2">
                <a href="#">
                  {" "}
                  <img
                    src="assets/images/icon/google-podcasts.svg"
                    alt=""
                  />{" "}
                </a>
              </li>
              <li className="ms-2">
                <a href="#">
                  {" "}
                  <img src="assets/images/icon/pocket.svg" alt="" />{" "}
                </a>
              </li>
              <li className="ms-2">
                <a href="#">
                  {" "}
                  <img src="assets/images/icon/sound-cloud.svg" alt="" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Recent Episodes START */}
    <section className="pt-0 pt-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Title */}
            <h2 className="mb-4">Recent Episodes</h2>
            {/* Episodes Item START */}
            <div className="card border rounded-3 p-3 mb-4">
              <div className="row g-4">
                {/* Image */}
                <div className="col-md-5">
                  <div className="position-relative">
                    <img
                      className="rounded-3"
                      src="assets/images/blog/4by3/31.jpg"
                      alt="Card image"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-between mb-2">
                    {/* Episode */}
                    <a
                      href="podcast-single.html"
                      className="badge text-bg-danger mb-2"
                    >
                      Episode 1
                    </a>
                    <span>
                      {" "}
                      <i className="bi bi-clock-fill" /> 4hr 12min
                    </span>
                  </div>
                  {/* Title */}
                  <h4 className="card-title">
                    <a
                      href="podcast-single.html"
                      className="btn-link text-reset"
                    >
                      Everything I Know (so Far) on UI/UX Ep.01
                    </a>
                  </h4>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative">
                    <div className="avatar avatar-xs me-2">
                      <img
                        className="avatar-img  rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="stretched-link text-reset btn-link"
                      >
                        Billy Vasquez
                      </a>
                    </h6>
                  </div>
                  {/* Play Episode */}
                  <div className="d-xl-flex align-items-center justify-content-between mt-4">
                    <a
                      className="btn btn-sm btn-primary"
                      href="podcast-single.html"
                    >
                      Play Episode
                    </a>
                    <ul className="list-unstyled d-flex gap-2 align-items-center">
                      <li className="h6 mb-0">Listen on:</li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/apple-podcasts.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/divider-icon.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/spotify.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/pocket.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/sound-cloud.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Episodes Item END */}
            {/* Episodes Item START */}
            <div className="card border rounded-3 p-3 mb-4">
              <div className="row g-4">
                {/* Image */}
                <div className="col-md-5">
                  <div className="position-relative">
                    <img
                      className="rounded-3"
                      src="assets/images/blog/4by3/32.jpg"
                      alt="Card image"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-between mb-2">
                    {/* Episode */}
                    <a
                      href="podcast-single.html"
                      className="badge text-bg-danger mb-2"
                    >
                      Episode 2
                    </a>
                    <span>
                      {" "}
                      <i className="bi bi-clock-fill" /> 5hr 05min
                    </span>
                  </div>
                  {/* Title */}
                  <h4 className="card-title">
                    <a
                      href="podcast-single.html"
                      className="btn-link text-reset"
                    >
                      Design Problems Animation Can Answer Ep.02
                    </a>
                  </h4>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative">
                    <div className="avatar avatar-xs me-2">
                      <img
                        className="avatar-img  rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="avatar"
                      />
                    </div>
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="stretched-link text-reset btn-link"
                      >
                        Bryan Knight
                      </a>
                    </h6>
                  </div>
                  {/* Play Episode */}
                  <div className="d-xl-flex align-items-center justify-content-between mt-4">
                    <a
                      className="btn btn-sm btn-primary"
                      href="podcast-single.html"
                    >
                      Play Episode
                    </a>
                    <ul className="list-unstyled d-flex gap-2 align-items-center">
                      <li className="h6 mb-0">Listen on:</li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/apple-podcasts.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/spotify.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/sound-cloud.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Episodes Item END */}
            {/* Episodes Item START */}
            <div className="card border rounded-3 p-3 mb-4">
              <div className="row g-4">
                {/* Image */}
                <div className="col-md-5">
                  <div className="position-relative">
                    <img
                      className="rounded-3"
                      src="assets/images/blog/4by3/33.jpg"
                      alt="Card image"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-between mb-2">
                    {/* Episode */}
                    <a
                      href="podcast-single.html"
                      className="badge text-bg-danger mb-2"
                    >
                      Episode 3
                    </a>
                    <span>
                      {" "}
                      <i className="bi bi-clock-fill" /> 2hr 22min
                    </span>
                  </div>
                  {/* Title */}
                  <h4 className="card-title">
                    <a
                      href="podcast-single.html"
                      className="btn-link text-reset"
                    >
                      Your Only Challenge Is to Focus Ep.03
                    </a>
                  </h4>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative">
                    <div className="avatar avatar-xs me-2">
                      <img
                        className="avatar-img  rounded-circle"
                        src="assets/images/avatar/03.jpg"
                        alt="avatar"
                      />
                    </div>
                    <h6 className="mb-0">
                      <a
                        href="#"
                        className="stretched-link text-reset btn-link"
                      >
                        Amanda Reed
                      </a>
                    </h6>
                  </div>
                  {/* Play Episode */}
                  <div className="d-xl-flex align-items-center justify-content-between mt-4">
                    <a
                      className="btn btn-sm btn-primary"
                      href="podcast-single.html"
                    >
                      Play Episode
                    </a>
                    <ul className="list-unstyled d-flex gap-2 align-items-center">
                      <li className="h6 mb-0">Listen on:</li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/apple-podcasts.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/divider-icon.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/spotify.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/google-podcasts.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <img
                            className="h-20"
                            src="assets/images/icon/sound-cloud.svg"
                            alt=""
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Episodes Item END */}
          {/* Sidebar START */}
          <div className="col-lg-4">
            {/* Card START */}
            <div
              className="card card-overlay-bottom h-400"
              style={{
                backgroundImage: "url(assets/images/blog/1by1/11.jpg)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
              }}
            >
              {/* Card featured */}
              <span className="card-featured" title="Featured post">
                <i className="fas fa-star" />
              </span>
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-sm-5">
                {/* Card play button */}
                <div className="position-absolute top-50 start-50 translate-middle pb-5">
                  {/* Popup video */}
                  <a
                    href="https://youtu.be/n_Cn8eFo7u8"
                    className="icon-lg bg-primary d-block text-white rounded-circle"
                    data-glightbox=""
                    data-gallery="y-video"
                  >
                    <i className="bi bi-play-btn" />
                  </a>
                </div>
                {/* Card overlay Bottom  */}
                <div className="w-100 mt-auto">
                  <div className="col text-center">
                    {/* Card title */}
                    <h3 className="text-white">
                      <a
                        href="post-single.html"
                        className="btn-link text-reset fw-normal"
                      >
                        Never underestimate the influence of social media
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card END */}
            {/* Trending podcast START */}
            <div className="mt-4">
              <h5 className="mb-3">Trending podcast</h5>
              {/* Recent post item */}
              <div className="card mb-3">
                <div className="d-flex">
                  <div>
                    {/* Popup podcast */}
                    <a
                      href="podcast-single.html"
                      className="icon-md border border-primary d-block text-primary rounded-circle"
                    >
                      <i className="bi bi-play-fill fs-3" />
                    </a>
                  </div>
                  <div className="ms-3">
                    {/* Info */}
                    <h6>
                      <a
                        href="podcast-single.html"
                        className="btn-link stretched-link text-reset fw-bold"
                      >
                        The pros and cons of business agency
                      </a>
                    </h6>
                    <div className="small mt-1">May 17, 2022</div>
                  </div>
                </div>
              </div>
              {/* Recent post item */}
              <div className="card mb-3">
                <div className="d-flex">
                  <div>
                    {/* Popup podcast */}
                    <a
                      href="podcast-single.html"
                      className="icon-md border border-primary d-block text-primary rounded-circle"
                    >
                      <i className="bi bi-play-fill fs-3" />
                    </a>
                  </div>
                  <div className="ms-3">
                    {/* Info */}
                    <h6>
                      <a
                        href="podcast-single.html"
                        className="btn-link stretched-link text-reset fw-bold"
                      >
                        5 reasons why you shouldn't startup
                      </a>
                    </h6>
                    <div className="small mt-1">Apr 04, 2022</div>
                  </div>
                </div>
              </div>
              {/* Recent post item */}
              <div className="card mb-3">
                <div className="d-flex">
                  <div>
                    {/* Popup podcast */}
                    <a
                      href="podcast-single.html"
                      className="icon-md border border-primary d-block text-primary rounded-circle"
                    >
                      <i className="bi bi-play-fill fs-3" />
                    </a>
                  </div>
                  <div className="ms-3">
                    {/* Info */}
                    <h6>
                      <a
                        href="podcast-single.html"
                        className="btn-link stretched-link text-reset fw-bold"
                      >
                        Ten questions you should answer truthfully.
                      </a>
                    </h6>
                    <div className="small mt-1">Jun 30, 2022</div>
                  </div>
                </div>
              </div>
              {/* Recent post item */}
              <div className="card mb-3">
                <div className="d-flex">
                  <div>
                    {/* Popup podcast */}
                    <a
                      href="podcast-single.html"
                      className="icon-md border border-primary d-block text-primary rounded-circle"
                    >
                      <i className="bi bi-play-fill fs-3" />
                    </a>
                  </div>
                  <div className="ms-3">
                    {/* Info */}
                    <h6>
                      <a
                        href="podcast-single.html"
                        className="btn-link stretched-link text-reset fw-bold"
                      >
                        Five unbelievable facts about money.
                      </a>
                    </h6>
                    <div className="small mt-1">Nov 29, 2022</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Trending podcast END */}
            {/* Podcast social START */}
            <div className="row mt-4 mt-lg-0 g-2">
              {/* Facebook */}
              <div className="col-6 col-sm-3">
                <a
                  href="#"
                  className="bg-facebook rounded text-center text-white-force p-3 d-block"
                >
                  <i className="fab fa-facebook-square fs-5 mb-2" />
                  <h6 className="m-0">1.5K</h6>
                  <span className="small">Fans</span>
                </a>
              </div>
              {/* Instagram */}
              <div className="col-6 col-sm-3">
                <a
                  href="#"
                  className="bg-instagram-gradient rounded text-center text-white-force p-3 d-block"
                >
                  <i className="fab fa-instagram fs-5 mb-2" />
                  <h6 className="m-0">1.8M</h6>
                  <span className="small">Followers</span>
                </a>
              </div>
              {/* Youtube */}
              <div className="col-6 col-sm-3">
                <a
                  href="#"
                  className="bg-youtube rounded text-center text-white-force p-3 d-block"
                >
                  <i className="fab fa-youtube-square fs-5 mb-2" />
                  <h6 className="m-0">22K</h6>
                  <span className="small">Subs</span>
                </a>
              </div>
              {/* Twitter */}
              <div className="col-6 col-sm-3">
                <a
                  href="#"
                  className="bg-twitter rounded text-center text-white-force p-3 d-block"
                >
                  <i className="fab fa-twitter-square fs-5 mb-2" />
                  <h6 className="m-0">5K</h6>
                  <span className="small">Followers</span>
                </a>
              </div>
            </div>
            {/* Podcast social END */}
          </div>
          {/* Sidebar END */}
        </div>
      </div>
    </section>
    {/* =======================
Featured video END */}
    {/* =======================
Featured Guests START */}
    <section className="bg-light">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 ">
            {/* Title */}
            <div className="mb-4">
              <h2>Featured Guests</h2>
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
                data-items-xl={6}
                data-items-lg={4}
                data-items-md={3}
                data-items-sm={2}
                data-items-xs={2}
              >
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/01.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">Judy Nguyen</h5>
                      <small>Office Assistant</small>
                    </div>
                  </div>
                </div>
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/02.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">Bryan Knight</h5>
                      <small>Sales Manager</small>
                    </div>
                  </div>
                </div>
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/03.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">Amanda Reed</h5>
                      <small>Software Engineer</small>
                    </div>
                  </div>
                </div>
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/04.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">Larry Lawson</h5>
                      <small>Nurse Practitioner</small>
                    </div>
                  </div>
                </div>
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/05.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">Lori Stevens</h5>
                      <small>Marketing Manager</small>
                    </div>
                  </div>
                </div>
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/06.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0"> Carolyn Ortiz </h5>
                      <small>Executive Assistant</small>
                    </div>
                  </div>
                </div>
                {/* Guest item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/avatar/07.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">Billy Vasquez</h5>
                      <small>Actor</small>
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
Featured Guests END */}
    {/* =======================
Featured shows START */}
    <section className="bg-dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-12">
            {/* Title */}
            <div className="d-sm-flex justify-content-between align-items-center">
              <h2 className="m-sm-0 text-white">Featured episodes</h2>
              <a href="#" className="btn btn-sm bg-youtube">
                <i className="bi bi-youtube me-2 align-middle" />
                Subscribe us on YouTube
              </a>
            </div>
          </div>
          {/* Card big START */}
          <div className="col-12">
            <div
              className="card card-overlay-bottom h-400"
              style={{
                backgroundImage: "url(assets/images/blog/16by9/10.jpg)",
                backgroundPosition: "center left",
                backgroundSize: "cover"
              }}
            >
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-sm-5">
                {/* Card play button */}
                <div className="position-absolute top-50 start-50 translate-middle pb-5">
                  {/* Popup video */}
                  <a
                    href="https://youtu.be/n_Cn8eFo7u8"
                    className="icon-lg bg-primary d-block text-white rounded-circle"
                    data-glightbox=""
                    data-gallery="y-video"
                  >
                    <i className="bi bi-play-btn" />
                  </a>
                </div>
                {/* Card overlay Bottom  */}
                <div className="w-100 mt-auto">
                  <div className="col text-center">
                    {/* Card category */}
                    <a href="#" className="badge text-bg-warning mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Business
                    </a>
                    {/* Card title */}
                    <h2 className="text-white">
                      <a
                        href="podcast-single.html"
                        className="btn-link text-reset fw-normal"
                      >
                        Never underestimate the influence of social media
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card big END */}
          {/* Card small START */}
          <div className="col-sm-6 col-lg-3">
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/05.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay */}
                  <div className="w-100 my-auto">
                    {/* Popup video */}
                    <a
                      href="https://youtu.be/n_Cn8eFo7u8"
                      className="icon-md bg-primary d-block mx-auto text-white rounded-circle"
                      data-glightbox=""
                      data-gallery="y-video"
                    >
                      <i className="bi bi-play-btn" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pt-3">
              <h5 className="card-title">
                <a
                  href="podcast-single.html"
                  className="btn-link text-white fw-bold"
                >
                  Bad habits that people in the industry need to quit
                </a>
              </h5>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center d-none d-sm-inline-block text-white-force small opacity-6">
                <li className="nav-item">
                  <div className="nav-link">
                    by{" "}
                    <a href="#" className="text-reset btn-link">
                      Bryan
                    </a>
                  </div>
                </li>
                <li className="nav-item">Jun 17, 2022</li>
              </ul>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6 col-lg-3">
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/06.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay */}
                  <div className="w-100 my-auto">
                    {/* Popup video */}
                    <a
                      href="https://youtu.be/n_Cn8eFo7u8"
                      className="icon-md bg-primary d-block mx-auto text-white rounded-circle"
                      data-glightbox=""
                      data-gallery="y-video"
                    >
                      <i className="bi bi-play-btn" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h5 className="card-title">
                  <a
                    href="podcast-single.html"
                    className="btn-link text-white fw-bold"
                  >
                    12 worst types of business accounts you follow on Twitter
                  </a>
                </h5>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block text-white-force small opacity-6">
                  <li className="nav-item">
                    <div className="nav-link">
                      by{" "}
                      <a href="#" className="text-reset btn-link">
                        Samuel
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">Jan 22, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          <div className="col-sm-6 col-lg-3">
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/07.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay */}
                  <div className="w-100 my-auto">
                    {/* Popup video */}
                    <a
                      href="https://youtu.be/n_Cn8eFo7u8"
                      className="icon-md bg-primary d-block mx-auto text-white rounded-circle"
                      data-glightbox=""
                      data-gallery="y-video"
                    >
                      <i className="bi bi-play-btn" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h5 className="card-title">
                  <a
                    href="podcast-single.html"
                    className="btn-link text-white fw-bold"
                  >
                    Best Twitter accounts for learning about investment
                  </a>
                </h5>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block text-white-force small opacity-6">
                  <li className="nav-item">
                    <div className="nav-link">
                      by{" "}
                      <a href="#" className="text-reset btn-link">
                        Joan
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">Mar 24, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6 col-lg-3">
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/08.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay */}
                  <div className="w-100 my-auto">
                    {/* Popup video */}
                    <a
                      href="https://youtu.be/n_Cn8eFo7u8"
                      className="icon-md bg-primary d-block mx-auto text-white rounded-circle"
                      data-glightbox=""
                      data-gallery="y-video"
                    >
                      <i className="bi bi-play-btn" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h5 className="card-title">
                  <a
                    href="podcast-single.html"
                    className="btn-link text-white fw-bold"
                  >
                    Ten questions you should answer truthfully
                  </a>
                </h5>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block text-white-force small opacity-6">
                  <li className="nav-item">
                    <div className="nav-link">
                      by{" "}
                      <a href="#" className="text-reset btn-link">
                        Judy
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">Spe 07, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          {/* Card small START */}
        </div>
      </div>
    </section>
    {/* =======================
Featured shows END */}
    {/* =======================
Ads START */}
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <a href="#" className="card-img-flash d-block">
              <img src="assets/images/adv-1.png" alt="adv" />
            </a>
            <div className="smaller text-end mt-2">
              ads via{" "}
              <a href="#" className="text-body">
                <u>Bootstrap</u>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Ads START */}
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
              {/* Item */}
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
              {/* Item */}
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
          {/* Item */}
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
          {/* Item */}
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
  {/* Vendors */}
  {/* Template Functions */}
</>

    )
    
}