export default function index_4(){
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
          <ul className="navbar-nav navbar-nav-scroll mx-auto">
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
                  <a className="dropdown-item active" href="index-4">
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
        <div className="nav ms-3 flex-nowrap align-items-center">
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
    <section className="pt-3 pb-3 mb-2 card-grid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tiny-slider arrow-hover arrow-blur arrow-white arrow-round rounded-3 overflow-hidden">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-gutter={1}
                data-arrow="true"
                data-dots="false"
                data-items={1}
              >
                {/* Slide 1 */}
                <div
                  className="card bg-dark-overlay-3 h-400 h-sm-500 h-md-600 rounded-0"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/05.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5">
                    <div className="w-100 my-auto">
                      <div className="col-md-10 col-lg-7 mx-auto text-center">
                        {/* Card category */}
                        <a href="#" className="badge bg-primary mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Business
                        </a>
                        {/* Card title */}
                        <h2 className="text-white display-5">
                          <a
                            href="post-single-2.html"
                            className="btn-link text-reset fw-normal"
                          >
                            Never underestimate the influence of social media
                          </a>
                        </h2>
                        <p className="text-white">
                          For who thoroughly her boy estimating conviction.
                          Removed demands expense account in outward tedious do.
                        </p>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center text-white position-relative">
                                <div className="avatar avatar-sm">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/images/avatar/14.jpg"
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
                          <li className="nav-item">
                            <a href="#" className="btn-link">
                              <i className="far fa-comment-alt me-1" /> 5
                              Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div
                  className="card bg-dark-overlay-3 h-400 h-sm-500 h-md-600 rounded-0"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/02.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5">
                    <div className="w-100 my-auto">
                      <div className="col-md-10 col-lg-7 mx-auto text-center">
                        {/* Card category */}
                        <a href="#" className="badge text-bg-danger mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Lifestyle
                        </a>
                        {/* Card title */}
                        <h2 className="text-white display-5">
                          <a
                            href="post-single-2.html"
                            className="btn-link text-reset fw-normal"
                          >
                            This is why this year will be the year of startups
                          </a>
                        </h2>
                        <p className="text-white">
                          Particular way thoroughly unaffected projection
                          favorable Mrs can be projecting own.{" "}
                        </p>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                          <li className="nav-item">
                            <div className="nav-link">
                              <div className="d-flex align-items-center text-white position-relative">
                                <div className="avatar avatar-sm">
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
                                    Louis
                                  </a>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">Nov 15, 2022</li>
                          <li className="nav-item">
                            <a href="#" className="btn-link">
                              <i className="far fa-comment-alt me-1" /> 3
                              Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Cards START */}
    <section className="p-0">
      <div className="container">
        <div className="row g-4">
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card card-overlay-bottom card-img-scale overflow-hidden">
              {/* Card featured */}
              <span className="card-featured" title="Featured post">
                <i className="fas fa-star" />
              </span>
              {/* Card Image */}
              <img src="assets/images/blog/3by4/01.jpg" alt="" />
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge text-bg-warning">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Technology
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      Best Pinterest boards for learning about business
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Bryan
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">Aug 18, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card card-overlay-bottom card-image-scale">
              {/* Card Image */}
              <img src="assets/images/blog/3by4/02.jpg" alt="" />
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge text-bg-success mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Business
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      5 intermediate guide to business
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Joan
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">Jun 03, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-12 col-lg-4">
            <div
              className="card card-overlay-bottom bg-parallax h-400 h-lg-100"
              data-jarallax-video="https://youtu.be/WS-MfCjzztg"
              data-speed="1.2"
            >
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge bg-dark mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Travel
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      5 investment doubts you should clarify
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Dennis
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">Jan 28, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card card-overlay-bottom card-image-scale">
              {/* Card Image */}
              <img src="assets/images/blog/3by4/04.jpg" alt="" />
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge bg-primary mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Business
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      7 common mistakes everyone makes while traveling
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Bryan
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">May 26, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card bg-primary h-400 h-sm-100">
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge bg-dark mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Travel
                  </a>
                  {/* Card title */}
                  <blockquote className="blockquote blockquote-icon-bg mt-3">
                    <p className="mb-0 text-white">
                      Your time is limited, so don’t waste it living someone
                      else’s life. Don’t be trapped by dogma – which is living
                      with the results of other people’s thinking
                    </p>
                    <footer className="blockquote-footer text-white">
                      Steve Jobs @ <cite title="Source Title">Apple Inc</cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
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
                    </li>
                    <li className="nav-item">May 26, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card card-overlay-bottom card-image-scale">
              {/* Card Image */}
              <img src="assets/images/blog/3by4/05.jpg" alt="" />
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge text-bg-info mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Covid-19
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      Bad habits that people in the industry need to quit
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Billy
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">Feb 22, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card bg-light border h-500 h-sm-100">
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge text-bg-warning mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Covid-19
                  </a>
                  {/* Card title */}
                  <h3>
                    <a href="#" className="btn-link text-reset">
                      The pros and cons of business agency
                    </a>
                  </h3>
                  <p className="card-text d-none d-md-block">
                    Interested has all Devonshire difficulty gay assistance joy.
                  </p>
                  <div className="mt-3 rounded overflow-hidden">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width={560}
                        height={315}
                        src="https://www.youtube.com/embed/tXHviS-4ygo"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center small">
                    <li className="nav-item position-relative">
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
                            Joan
                          </a>
                        </span>
                      </div>
                    </li>
                    <li className="nav-item">Aug 28, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card card-overlay-bottom card-image-scale">
              {/* Card Image */}
              <img src="assets/images/blog/3by4/06.jpg" alt="" />
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge bg-primary mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Business
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      7 common mistakes everyone makes while traveling
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Bryan
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">May 26, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card card-overlay-bottom card-image-scale">
              {/* Card Image */}
              <img src="assets/images/blog/3by4/07.jpg" alt="" />
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
                <div>
                  {/* Card category */}
                  <a href="#" className="badge text-bg-info mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Covid-19
                  </a>
                </div>
                <div className="w-100 mt-auto">
                  {/* Card title */}
                  <h4 className="text-white">
                    <a
                      href="post-single-5.html"
                      className="btn-link text-reset stretched-link"
                    >
                      Ten questions you should answer truthfully.
                    </a>
                  </h4>
                  {/* Card info */}
                  <ul className="nav nav-divider text-white-force align-items-center small">
                    <li className="nav-item position-relative">
                      <div className="nav-link">
                        by{" "}
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Billy
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">Feb 22, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Card item END */}
        </div>{" "}
        {/* Row END */}
      </div>
    </section>
    {/* =======================
Cards END */}
    {/* =======================
Adv START */}
    <section className="py-3 my-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <a
              href="#"
              className="d-block card-img-flash  rounded-3 overflow-hidden"
            >
              <img src="assets/images/adv-3.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Adv END */}
    {/* =======================
Trending topics START */}
    <section className="p-0">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Slider */}
            <div className="tiny-slider arrow-hover arrow-dark arrow-round">
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
Newsletter START */}
    <section className="pb-0 pt-3 mt-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="bg-dark p-3 p-sm-4 rounded-3 position-relative overflow-hidden">
              <div className="row">
                <div className="col-md-8 col-lg-6 mx-auto text-center py-5 position-relative">
                  {/* Title */}
                  <h2 className="display-6 text-white">Never miss a story!</h2>
                  <p className="text-white">
                    Get the freshest headlines and updates sent uninterrupted to
                    your inbox.
                  </p>
                  {/* Form */}
                  <form className="row row-cols-sm-auto g-2 align-items-center justify-content-center mt-3">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary m-0">
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
  <footer className="pb-5">
    <div className="container">
      <div className="row pt-5">
        <div className="col-lg-7 mx-auto text-center">
          {/* Logo */}
          <img
            className="light-mode-item mx-auto"
            src="assets/images/logo.svg"
            alt="logo"
          />
          <img
            className="dark-mode-item mx-auto"
            src="assets/images/logo-light.svg"
            alt="logo"
          />
          <p className="mt-3">
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today! This Bootstrap 5 based theme is ideal
            for all types of sites that deliver the news.
          </p>
          {/* Links */}
          <ul className="nav text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Terms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Privacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career<span className="badge text-bg-danger ms-2">2 Job</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-0" href="#">
                Cookies
              </a>
            </li>
          </ul>
          <div className="mt-2">
            ©2023{" "}
            <a
              href="https://www.webestica.com/"
              className="text-reset btn-link"
              target="_blank"
            >
              Webestica
            </a>
            . All rights reserved{" "}
          </div>
        </div>
      </div>
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