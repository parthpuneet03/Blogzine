export default function index_5(){
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
          {/* Nav Search START */}
          <div className="nav mt-3 mt-lg-0 px-4 flex-nowrap align-items-center">
            <div className="nav-item w-100">
              <form className="rounded position-relative">
                <input
                  className="form-control pe-5 bg-light"
                  type="search"
                  placeholder="Search the blog"
                  aria-label="Search"
                />
                <button
                  className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                  type="submit"
                >
                  <i className="bi bi-search fs-5"> </i>
                </button>
              </form>
            </div>
          </div>
          {/* Nav Search END */}
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
                  <a className="dropdown-item active" href="index-5">
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
        {/* Dark mode options START */}
        <div className="nav-item dropdown ms-4">
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
    <section className="pt-0 card-grid">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tiny-slider arrow-hover arrow-blur arrow-white arrow-round rounded-3 overflow-hidden">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-gutter={0}
                data-arrow="true"
                data-dots="false"
                data-items={1}
              >
                {/* Slide 1 */}
                <div
                  className="card card-overlay-bottom card-bg-scale h-400 h-sm-500 h-md-600 rounded-0"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/04.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5">
                    <div className="w-100 mt-auto">
                      <div className="col-md-10 col-lg-7">
                        {/* Card category */}
                        <a href="#" className="badge bg-primary mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Business
                        </a>
                        {/* Card title */}
                        <h2 className="text-white display-5">
                          <a
                            href="post-single-4.html"
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
                {/* Slide 2 */}
                <div
                  className="card card-overlay-bottom card-bg-scale h-400 h-sm-500 h-md-600 rounded-0"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/03.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5">
                    <div className="w-100 mt-auto">
                      <div className="col-md-10 col-lg-7">
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
                                    src="assets/images/avatar/04.jpg"
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
                          <li className="nav-item">5 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Row END */}
      </div>
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Highlights START */}
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Card item START */}
            <div className="card border rounded-3 up-hover p-4 mb-4">
              <div className="row g-3">
                <div className="col-lg-5">
                  {/* Categories */}
                  <a href="#" className="badge text-bg-danger mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Marketing
                  </a>
                  <a href="#" className="badge bg-dark mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Startups
                  </a>
                  {/* Title */}
                  <h2 className="card-title">
                    <a
                      href="post-single-6.html"
                      className="btn-link text-reset stretched-link"
                    >
                      7 common mistakes everyone makes while traveling
                    </a>
                  </h2>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative mt-3">
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/07.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h5 className="mb-1">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Lori Ferguson
                        </a>
                      </h5>
                      <ul className="nav align-items-center small">
                        <li className="nav-item me-3">Mar 07, 2022</li>
                        <li className="nav-item">
                          <i className="far fa-clock me-1" />5 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Detail */}
                <div className="col-md-6 col-lg-4">
                  <p>
                    For who thoroughly her boy estimating conviction. Removed
                    demands expense account in outward tedious do. Particular
                    way thoroughly unaffected projection favorable Mrs can be
                    projecting own. Thirty it matter enable become admire in
                    giving. See resolved goodness felicity shy civility domestic
                    had but. Drawings offended yet answered Jennings perceive
                    laughing six did far.{" "}
                  </p>
                </div>
                {/* Image */}
                <div className="col-md-6 col-lg-3">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/07.jpg"
                    alt="Card image"
                  />
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card border rounded-3 up-hover p-4 mb-4">
              <div className="row g-3">
                <div className="col-lg-5">
                  {/* Categories */}
                  <a href="#" className="badge text-bg-success mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Travel
                  </a>
                  {/* Title */}
                  <h2 className="card-title">
                    <a
                      href="post-single-6.html"
                      className="btn-link text-reset stretched-link"
                    >
                      Never underestimate the influence of social media
                    </a>
                  </h2>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative mt-3">
                    {/* Avatar img */}
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h5 className="mb-1">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Samuel Bishop
                        </a>
                      </h5>
                      <ul className="nav align-items-center small">
                        <li className="nav-item me-3">Jul 15, 2020</li>
                        <li className="nav-item">
                          <i className="far fa-clock me-1" />9 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Detail */}
                <div className="col-md-6 col-lg-4">
                  <p>
                    Perceived end knowledge certainly day sweetness why
                    cordially. Ask a quick six seven offer see among. Handsome
                    met debating sir dwelling age material. As style lived he
                    worse dried. Offered related so visitors we private removed.
                    Moderate do subjects to distance.
                  </p>
                </div>
                {/* Image */}
                <div className="col-md-6 col-lg-3">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/02.jpg"
                    alt="Card image"
                  />
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card border rounded-3 up-hover p-4 mb-4">
              <div className="row g-3">
                <div className="col-lg-5">
                  {/* Categories */}
                  <a href="#" className="badge text-bg-warning mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Inversment
                  </a>
                  <a href="#" className="badge bg-primary mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Business
                  </a>
                  {/* Title */}
                  <h2 className="card-title">
                    <a
                      href="post-single-6.html"
                      className="btn-link text-reset stretched-link"
                    >
                      Best Twitter accounts for learning about investment
                    </a>
                  </h2>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative mt-3">
                    {/* Avatar img */}
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/03.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h5 className="mb-1">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Joan Wallace
                        </a>
                      </h5>
                      <ul className="nav align-items-center small">
                        <li className="nav-item me-3">Dec 18, 2022</li>
                        <li className="nav-item">
                          <i className="far fa-clock me-1" />2 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Detail */}
                <div className="col-md-6 col-lg-4">
                  <p>
                    Speedily say has suitable disposal add boy. On forth doubt
                    miles of child. Exercise joy man children rejoiced. Yet
                    uncommonly his ten who diminution astonished. Demesne new
                    manners savings staying had. Under folly balls, death own
                    point now men. Match way these she avoids seeing death. She
                    who drift their fat off.{" "}
                  </p>
                </div>
                {/* Image */}
                <div className="col-md-6 col-lg-3">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/01.jpg"
                    alt="Card image"
                  />
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card border rounded-3 up-hover p-4 mb-4">
              <div className="row g-3">
                <div className="col-lg-5">
                  {/* Categories */}
                  <a href="#" className="badge bg-dark mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Covid-19
                  </a>
                  {/* Title */}
                  <h2 className="card-title">
                    <a
                      href="post-single-6.html"
                      className="btn-link text-reset stretched-link"
                    >
                      10 facts about business that will instantly put you in a
                      good mood
                    </a>
                  </h2>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative mt-3">
                    {/* Avatar img */}
                    <div className="avatar me-2">
                      <div className="avatar-img rounded-circle bg-danger bg-opacity-10">
                        <span className="text-danger position-absolute top-50 start-50 translate-middle fw-bold small">
                          SL
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Bryan Knight
                        </a>
                      </h5>
                      <ul className="nav align-items-center small">
                        <li className="nav-item me-3">May 30, 2022</li>
                        <li className="nav-item">
                          <i className="far fa-clock me-1" />5 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Detail */}
                <div className="col-md-6 col-lg-4">
                  <p>
                    Comfort reached gay perhaps chamber his six detract besides
                    add. Moonlight newspaper up its enjoyment agreeable
                    depending. Timed voice share led him to widen noisy young.
                    At weddings believed laughing although the material does the
                    exercise of. Up attempt offered ye civilly so sitting to.
                    She new course gets living within Elinor joy. She rapturous
                    suffering concealed.{" "}
                  </p>
                </div>
                {/* Image */}
                <div className="col-md-6 col-lg-3">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/03.jpg"
                    alt="Card image"
                  />
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card border rounded-3 up-hover p-4 mb-4">
              <div className="row g-3">
                <div className="col-lg-5">
                  {/* Categories */}
                  <a href="#" className="badge bg-primary mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Tricks
                  </a>
                  <a href="#" className="badge bg-dark mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Photography
                  </a>
                  {/* Title */}
                  <h2 className="card-title">
                    <a
                      href="post-single-6.html"
                      className="btn-link text-reset stretched-link"
                    >
                      10 biggest problem of startups, and how you can fix it
                    </a>
                  </h2>
                  {/* Author info */}
                  <div className="d-flex align-items-center position-relative mt-3">
                    <div className="avatar me-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/04.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h5 className="mb-1">
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Billy Vasquez
                        </a>
                      </h5>
                      <ul className="nav align-items-center small">
                        <li className="nav-item me-3">Aug 15, 2022</li>
                        <li className="nav-item">
                          <i className="far fa-clock me-1" />
                          18 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Detail */}
                <div className="col-md-6 col-lg-4">
                  <p>
                    Yet remarkably appearance get him his projection. Diverted
                    endeavor bed peculiar men the not desirous. Acuteness
                    abilities ask can offending furnished fulfilled sex. Warrant
                    fifteen exposed ye at mistake. Blush since so in noisy still
                    built up an again. As young ye hopes no he place means.
                    Partiality diminution gay yet entreaties admiration. In
                    mention perhaps attempt pointed suppose. Unknown ye chamber
                    of warrant of Norland arrived.
                  </p>
                </div>
                {/* Image */}
                <div className="col-md-6 col-lg-3">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/02.jpg"
                    alt="Card image"
                  />
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Load more */}
            <button type="button" className="btn btn-primary-soft w-100">
              Load more post{" "}
              <i className="bi bi-arrow-down-circle ms-2 align-middle" />
            </button>
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
Small post START */}
    <section className="pt-4 pb-0">
      <div className="container">
        <div className="row">
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/07.jpg"
                  alt="Card image"
                />
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    7 common mistakes everyone makes while traveling
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      Louis Ferguson
                    </a>
                  </li>
                  <li className="nav-item">Mar 07, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/08.jpg"
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
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Skills that you can learn from business
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      Samuel Bishop
                    </a>
                  </li>
                  <li className="nav-item">Aug 15, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/09.jpg"
                  alt="Card image"
                />
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    10 tell-tale signs you need to get a new business
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      Dennis Barrett
                    </a>
                  </li>
                  <li className="nav-item">Jun 01, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/10.jpg"
                  alt="Card image"
                />
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    This is why this year will be the year of startups
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      Bryan Knight
                    </a>
                  </li>
                  <li className="nav-item">Dec 07, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/11.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-success text-white fw-bold rounded-circle"
                        title="This post has video"
                      >
                        <i className="fas fa-video" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Best Pinterest Boards for learning about business
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
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
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/12.jpg"
                  alt="Card image"
                />
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    How did we get here? The real history of our business
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      Amanda Reed
                    </a>
                  </li>
                  <li className="nav-item">Aug 06, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/13.jpg"
                  alt="Card image"
                />
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Facts about business that will put you in a good mood
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
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
            <div className="card mb-4">
              {/* Card img */}
              <div className="card-fold position-relative">
                <img
                  className="card-img"
                  src="assets/images/blog/4by3/14.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-danger text-white fw-bold rounded-circle"
                        title="This post has audio"
                      >
                        <i className="fas fa-volume-up" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Questions everyone working in IT should know how to answer
                  </a>
                </h4>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center text-uppercase small">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-reset btn-link">
                      Lori Stevens
                    </a>
                  </li>
                  <li className="nav-item">Jun 03, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
        </div>
      </div>
    </section>
    {/* =======================
Small post END */}
    {/* =======================
Tab post START */}
    <section className="pt-4 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link fs-5 active"
                  data-bs-toggle="tab"
                  href="#tab-1-1"
                >
                  {" "}
                  <i className="fab fa-readme me-2" /> Most read{" "}
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link fs-5"
                  data-bs-toggle="tab"
                  href="#tab-1-2"
                >
                  {" "}
                  <i className="fas fa-fire me-2" /> Trending{" "}
                </a>{" "}
              </li>
            </ul>
            <div className="tab-content">
              {/* Most read tab START */}
              <div className="tab-pane show active" id="tab-1-1">
                <div className="row">
                  {/* Tab items group START */}
                  <div className="col-md-4">
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        01
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          The most common business debate isn't as black and
                          white as you might think
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        02
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Never underestimate the influence of social media
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        03
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Business ideas that will boom in upcoming years
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        04
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          How the 10 worst business fails of all time could have
                          been prevented
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        05
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          8 initial problem of startups and their solution
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        06
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Dirty little secrets about the business industry
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        07
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Ten unconventional tips about startups that you can't
                          learn from books
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Tab items group END */}
                  {/* Tab items group START */}
                  <div className="col-md-4">
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        08
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          How did we get here? The history of the business told
                          through tweets
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        09
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Bad habits that people in the business industry need
                          to quit
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        10
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          7 lessons that will teach you all you need to know a
                          startup
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        11
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          12 worst types of business accounts you follow on
                          Twitter
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        12
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Around the web: 20 fabulous info-graphics about
                          business
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        13
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          10 biggest problem of startups, and how you can fix it
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        14
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          The no. 1 question everyone working in business should
                          know how to answer
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Tab items group END */}
                  {/* Tab items group START */}
                  <div className="col-md-4">
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        15
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Best Twitter accounts for learning about investment
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        16
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          This is why this year will be the year of startups
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        17
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Best Pinterest Boards for learning about business
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        18
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          10 tell-tale signs you need to get a new business
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        19
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          The business debate isn't as black and white as you
                          might think
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        20
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Questions everyone working in IT should know how to
                          answer
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Tab items group END */}
                </div>
              </div>
              {/* Most read tab END */}
              {/* Trending tab START */}
              <div className="tab-pane show" id="tab-1-2">
                <div className="row">
                  {/* Tab items group START */}
                  <div className="col-md-4">
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        01
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          10 facts about business that will instantly put you in
                          a good mood
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        02
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Around the web: 20 fabulous info-graphics about
                          business
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        03
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          The most common business debate isn't as black and
                          white as you might think
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        04
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          The business debate isn't as black and white as you
                          might think
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        05
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          12 worst types of business accounts you follow on
                          Twitter
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        06
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          7 lessons that will teach you all you need to know a
                          startup
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        07
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Worst business fails of all time could have been
                          prevented
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Tab items group END */}
                  {/* Tab items group START */}
                  <div className="col-md-4">
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        08
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          8 initial problem of startups and their solution
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        09
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          This is why this year will be the year of startups
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        10
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Dirty little secrets about the business industry
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        11
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          10 biggest problem of startups, and how you can fix it
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        12
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          The no. 1 question everyone working in business should
                          know how to answer
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        13
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Best Twitter accounts for learning about investment
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        14
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Best Pinterest Boards for learning about business
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Tab items group END */}
                  {/* Tab items group START */}
                  <div className="col-md-4">
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        15
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          10 tell-tale signs you need to get a new business
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        16
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          How 10 worst business fails of all time could have
                          been prevented
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        17
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Questions everyone working in IT should know how to
                          answer
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        18
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Business idea that will instantly put you in a good
                          mood
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        19
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          How did we get here? The real history of our business
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        20
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          7 common mistakes everyone makes while traveling
                        </a>
                      </h5>
                    </div>
                    {/* Item */}
                    <div className="d-flex position-relative mb-3">
                      <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                        21
                      </span>
                      <h5>
                        <a
                          href="#"
                          className="stretched-link text-reset btn-link"
                        >
                          Worst business fails of all time could have been
                          prevented
                        </a>
                      </h5>
                    </div>
                  </div>
                  {/* Tab items group END */}
                </div>
              </div>
              {/* Trending tab END */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Tab post END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
  {/* =======================
Footer START */}
  <footer>
    <div className="container">
      {/* About and Newsletter START */}
      <div className="row bg-dark py-5 mx-0 card card-header flex-row align-items-center text-center text-md-start">
        {/* Copyright */}
        <div className="col-md-5 mb-3 mb-md-0">
          <div className="text-primary-hover text-muted">
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
        {/* Logo */}
        <div className="col-md-3 mb-3 mb-md-0">
          <img src="assets/images/logo-light.svg" alt="footer logo" />
        </div>
        {/* Social links */}
        <div className="col-md-4">
          <ul className="nav text-primary-hover justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a className="nav-link px-2 fs-5" href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 fs-5" href="#">
                <i className="fab fa-twitter-square" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 fs-5" href="#">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 fs-5" href="#">
                <i className="fab fa-youtube-square" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ps-2 pe-0 fs-5" href="#">
                <i className="fab fa-vimeo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* About and Newsletter END */}
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