export default function index_3(){
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
  <link rel="stylesheet" type="text/css" href="assets/vendor/plyr/plyr.css" />
  {/* Theme CSS */}
  <link
    id="style-switch"
    rel="stylesheet"
    type="text/css"
    href="assets/css/style.css"
  />
  {/* Offcanvas START */}
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasMenu">
    <div className="offcanvas-header justify-content-end">
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body d-flex flex-column pt-0">
      <div>
        <img
          className="light-mode-item my-3"
          src="assets/images/logo.svg"
          alt="logo"
        />
        <img
          className="dark-mode-item my-3"
          src="assets/images/logo-light.svg"
          alt="logo"
        />
        <p>
          The next-generation blog, news, and magazine theme for you to start
          sharing your stories today!{" "}
        </p>
        {/* Nav START */}
        <ul className="nav d-block flex-column my-4">
          <li className="nav-item h5">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item h5">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item h5">
            <a className="nav-link" href="#">
              Our Journal
            </a>
          </li>
          <li className="nav-item h5">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        {/* Nav END */}
        <div className="bg-primary bg-opacity-10 p-4 mb-4 text-center w-100 rounded">
          <span>The Blogzine</span>
          <h3>Save on Premium Membership</h3>
          <p>
            Get the insights report trusted by experts around the globe. Become
            a Member Today!
          </p>
          <a href="#" className="btn btn-warning">
            View pricing plans
          </a>
        </div>
      </div>
      <div className="mt-auto pb-3">
        {/* Address */}
        <p className="text-body mb-2 fw-bold">New York, USA (HQ)</p>
        <address className="mb-0">
          750 Sing Sing Rd, Horseheads, NY, 14845
        </address>
        <p className="mb-2">
          Call:{" "}
          <a href="#" className="text-body">
            <u>469-537-2410</u> (Toll-free)
          </a>{" "}
        </p>
        <a href="#" className="text-body d-block">
          hello@blogzine.com
        </a>
      </div>
    </div>
  </div>
  {/* Offcanvas END */}
  {/* =======================
Header START */}
  <header>
    {/* Navbar top */}
    <div className="navbar-top d-none d-lg-block">
      <div className="container">
        <div className="row d-flex align-items-center my-2">
          {/* Top bar left */}
          <div className="col-sm-8 d-sm-flex align-items-center">
            {/* Title */}
            <div className="me-3">
              <span className="badge bg-primary p-2 px-3 text-white">
                Trending:
              </span>
            </div>
            {/* Slider */}
            <div className="tiny-slider arrow-end arrow-xs arrow-bordered arrow-round arrow-md-none">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-gutter={0}
                data-arrow="true"
                data-dots="false"
                data-items={1}
              >
                {/* Slider items */}
                <div>
                  {" "}
                  <a href="#" className="text-reset btn-link">
                    The most common business debate isn't as black and white as
                    you might think
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="#" className="text-reset btn-link">
                    How the 10 worst business fails of all time could have been
                    prevented{" "}
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="#" className="text-reset btn-link">
                    The most common business debate isn't as black and white as
                    you might think{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Top bar right */}
          <div className="col-sm-4">
            <ul className="list-inline mb-0 text-center text-sm-end">
              <li className="list-inline-item">
                <span>Wed, March 31, 2022</span>
              </li>
              <li className="list-inline-item">
                <i className="bi bi-cloud-hail text-info" />
                <span>13 °C NY, USA</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Divider */}
        <div className="border-bottom border-2 border-primary opacity-1" />
      </div>
    </div>
    {/* Navbar logo section START */}
    <div>
      <div className="container">
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center my-2">
          {/* Logo START */}
          <a className="navbar-brand d-block" href="/">
            <img
              className="navbar-brand-item light-mode-item"
              src="assets/images/logo.svg"
              alt="logo"
              style={{ height: 46 }}
            />
            <img
              className="navbar-brand-item dark-mode-item"
              src="assets/images/logo-light.svg"
              alt="logo"
              style={{ height: 46 }}
            />
          </a>
          {/* Logo END */}
          {/* Adv */}
          <div>
            <a href="#" className="card-img-flash d-block">
              <img src="assets/images/adv-2.png" alt="adv" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Navbar logo section END */}
    {/* Navbar START */}
    <div className="navbar-sticky header-static">
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <div className="w-100 bg-dark d-flex">
            {/* Responsive navbar toggler */}
            <button
              className="navbar-toggler me-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="text-muted h6 ps-3">Menu</span>
              <span className="navbar-toggler-icon" />
            </button>
            {/* Main navbar START */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll navbar-lh-sm">
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
                      <a className="dropdown-item" href="index">
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
                      <a className="dropdown-item active" href="index-3">
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
                      <a className="dropdown-item" href="index-10.">
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
                                  href="#"
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
                                  href="#"
                                  className="btn-link text-reset fw-bold"
                                >
                                  12 worst types of business accounts you follow
                                  on Twitter
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
                                  href="#"
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
                              <a href="#" className="btn btn-sm btn-info-soft">
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
            <div className="nav flex-nowrap align-items-center me-2">
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
              {/* Nav bookmark */}
              <div className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bookmark-heart fs-4" />
                </a>
              </div>
              {/* Nav user */}
              <div className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person-square fs-4" />
                </a>
              </div>
              {/* Nav Search */}
              <div className="nav-item dropdown nav-search dropdown-toggle-icon-none">
                <a
                  className="nav-link text-uppercase dropdown-toggle"
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
              {/* Offcanvas menu toggler */}
              <div className="nav-item">
                <a
                  className="nav-link pe-0"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasMenu"
                  role="button"
                  aria-controls="offcanvasMenu"
                >
                  <i
                    className="bi bi-text-right rtl-flip fs-2"
                    data-bs-target="#offcanvasMenu"
                  >
                    {" "}
                  </i>
                </a>
              </div>
            </div>
            {/* Nav right END */}
          </div>
        </div>
      </nav>
    </div>
    {/* Navbar END */}
  </header>
  {/* =======================
Header END */}
  {/* **************** MAIN CONTENT START **************** */}
  <main>
    {/* =======================
Latest news slider START */}
    <section className="py-4 card-grid">
      <div className="container">
        <div className="row">
          <div className="col">
            {/* Slider START */}
            <div className="tiny-slider">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-gutter={24}
                data-arrow="false"
                data-dots="false"
                data-items-md={2}
                data-items-sm={2}
                data-items-xs={1}
                data-items={3}
              >
                {/* Card item START */}
                <div className="card">
                  <div className="row g-3">
                    <div className="col-3">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/1by1/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          The pros and cons of business agency
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center small">
                        <li className="nav-item">
                          <div className="nav-link position-relative">
                            <span>
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
                        <li className="nav-item">Jan 22, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  <div className="row g-3">
                    <div className="col-3">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/1by1/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          5 reasons why you shouldn't startup
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center small">
                        <li className="nav-item">
                          <div className="nav-link position-relative">
                            <span>
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Dennis
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="nav-item">Mar 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  <div className="row g-3">
                    <div className="col-3">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/1by1/03.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          Five unbelievable facts about money.
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center small">
                        <li className="nav-item">
                          <div className="nav-link position-relative">
                            <span>
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Bryan
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="nav-item">Jun 17, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card">
                  <div className="row g-3">
                    <div className="col-3">
                      <img
                        className="rounded-3"
                        src="assets/images/blog/1by1/04.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-9">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset fw-bold"
                        >
                          The web: 20 infographics about business
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center small">
                        <li className="nav-item">
                          <div className="nav-link position-relative">
                            <span>
                              by{" "}
                              <a
                                href="#"
                                className="stretched-link text-reset btn-link"
                              >
                                Jacqueline
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="nav-item">Nov 11, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Row END */}
      </div>
    </section>
    {/* =======================
Latest news slider END */}
    {/* =======================
Main hero START */}
    <section className="py-0 card-grid">
      <div className="container">
        <div className="row">
          {/* Slider START */}
          <div className="col-lg-7">
            <div className="tiny-slider arrow-hover arrow-blur arrow-round rounded-3">
              <div
                className="tiny-slider-inner"
                data-autoplay="false"
                data-hoverpause="true"
                data-gutter={0}
                data-arrow="true"
                data-dots="false"
                data-items={1}
              >
                {/* Slide 1 */}
                <div
                  className="card card-overlay-bottom card-bg-scale h-400 h-lg-560 rounded-0"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/07.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex flex-column p-3 p-sm-5">
                    {/* Card overlay Top */}
                    <div className="w-100 mb-auto d-flex justify-content-end">
                      <div className="text-end ms-auto">
                        {/* Card format icon */}
                        <div
                          className="icon-md bg-primary bg-opacity-10 bg-blur text-white rounded-circle"
                          title="This post has video"
                        >
                          <i className="fas fa-video" />
                        </div>
                      </div>
                    </div>
                    {/* Card overlay Bottom  */}
                    <div className="w-100 mt-auto">
                      <div className="col">
                        {/* Card category */}
                        <a href="#" className="badge bg-primary mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Business
                        </a>
                        {/* Card title */}
                        <h2 className="text-white display-5">
                          <a
                            href="post-single-4.html"
                            className="btn-link text-reset stretched-link fw-normal"
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
                  className="card card-overlay-bottom card-bg-scale h-400 h-lg-560 rounded-0"
                  style={{
                    backgroundImage: "url(assets/images/blog/16by9/08.jpg)",
                    backgroundPosition: "center left",
                    backgroundSize: "cover"
                  }}
                >
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5">
                    <div className="w-100 mt-auto">
                      <div className="col">
                        {/* Card category */}
                        <a href="#" className="badge text-bg-danger mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Lifestyle
                        </a>
                        {/* Card title */}
                        <h2 className="text-white display-5">
                          <a
                            href="post-single-4.html"
                            className="btn-link text-reset stretched-link fw-normal"
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
                                  <div className="avatar-img rounded-circle bg-info">
                                    <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">
                                      WB
                                    </span>
                                  </div>
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
          {/* Slider END */}
          <div className="col-lg-5 mt-5 mt-lg-0">
            {/* Card item START */}
            <div className="card mb-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a href="#" className="badge text-bg-danger mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Lifestyle
                  </a>
                  <h5>
                    <a
                      href="post-single-4.html"
                      className="btn-link text-reset stretched-link fw-bold"
                    >
                      The pros and cons of business agency
                    </a>
                  </h5>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
            <div className="card mb-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a href="#" className="badge text-bg-info mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Sports
                  </a>
                  <h5>
                    <a
                      href="post-single-4.html"
                      className="btn-link text-reset stretched-link fw-bold"
                    >
                      5 reasons why you shouldn't startup
                    </a>
                  </h5>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
            <div className="card mb-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a href="#" className="badge text-bg-success mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Business
                  </a>
                  <h5>
                    <a
                      href="post-single-4.html"
                      className="btn-link text-reset stretched-link fw-bold"
                    >
                      Five unbelievable facts about money.
                    </a>
                  </h5>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
            <div className="card mb-4">
              <div className="row g-3">
                <div className="col-4">
                  <img
                    className="rounded-3"
                    src="assets/images/blog/4by3/04.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <a href="#" className="badge text-bg-warning mb-2">
                    <i className="fas fa-circle me-2 small fw-bold" />
                    Technology
                  </a>
                  <h5>
                    <a
                      href="post-single-4.html"
                      className="btn-link text-reset stretched-link fw-bold"
                    >
                      Around the web: 20 fabulous infographics about business
                    </a>
                  </h5>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Feature News slider START */}
    <section className="py-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tiny-slider arrow-blur arrow-round rounded-3 overflow-hidden">
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
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    {/* Card Image */}
                    <img
                      className="card-img"
                      src="assets/images/blog/3by4/01.jpg"
                      alt=""
                    />
                    {/* Card Image overlay */}
                    <div className="card-img-overlay d-flex flex-column p-3 p-sm-4">
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
                            href="post-single-2.html"
                            className="btn-link text-reset stretched-link"
                          >
                            Best Pinterest boards for learning about business
                          </a>
                        </h4>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block small">
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
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    {/* Card Image */}
                    <img
                      className="card-img"
                      src="assets/images/blog/3by4/02.jpg"
                      alt=""
                    />
                    {/* Card Image overlay */}
                    <div className="card-img-overlay d-flex flex-column p-3 p-sm-4">
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
                            href="post-single-2.html"
                            className="btn-link text-reset stretched-link"
                          >
                            5 intermediate guide to business
                          </a>
                        </h4>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block small">
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
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    {/* Card Image */}
                    <img
                      className="card-img"
                      src="assets/images/blog/3by4/03.jpg"
                      alt=""
                    />
                    {/* Card Image overlay */}
                    <div className="card-img-overlay d-flex flex-column p-3 p-sm-4">
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
                            href="post-single-2.html"
                            className="btn-link text-reset stretched-link"
                          >
                            5 investment doubts you should clarify
                          </a>
                        </h4>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block small">
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
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    {/* Card Image */}
                    <img
                      className="card-img"
                      src="assets/images/blog/3by4/04.jpg"
                      alt=""
                    />
                    {/* Card Image overlay */}
                    <div className="card-img-overlay d-flex flex-column p-3 p-sm-4">
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
                            href="post-single-2.html"
                            className="btn-link text-reset stretched-link"
                          >
                            7 common mistakes everyone makes while traveling
                          </a>
                        </h4>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block small">
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
                <div>
                  <div className="card card-overlay-bottom card-img-scale">
                    {/* Card Image */}
                    <img
                      className="card-img"
                      src="assets/images/blog/3by4/05.jpg"
                      alt=""
                    />
                    {/* Card Image overlay */}
                    <div className="card-img-overlay d-flex flex-column p-3 p-sm-4">
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
                            href="post-single-2.html"
                            className="btn-link text-reset stretched-link"
                          >
                            Bad habits that people in the industry need to quit
                          </a>
                        </h4>
                        {/* Card info */}
                        <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block small">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Feature News slider END */}
    {/* =======================
Main content START */}
    <section className="position-relative">
      <div className="container" data-sticky-container="">
        <div className="row">
          {/* Main Post START */}
          <div className="col-lg-9">
            {/* Top highlights START */}
            <div className="mb-4">
              <h2 className="m-0">
                <i className="bi bi-hourglass-top me-2" />
                Today's top highlights
              </h2>
              <p>Latest breaking news, pictures, videos, and special reports</p>
            </div>
            <div className="tiny-slider arrow-blur arrow-round rounded-3">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-gutter={24}
                data-arrow="true"
                data-dots="false"
                data-items-sm={1}
                data-items-xs={1}
                data-items={2}
              >
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img"
                      src="assets/images/blog/4by3/01.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay Top */}
                      <div className="w-100 mb-auto d-flex justify-content-end">
                        <div className="text-end ms-auto">
                          {/* Card format icon */}
                          <div
                            className="icon-md text-bg-success fw-bold rounded-circle"
                            title="8.5 rating"
                          >
                            8.5
                          </div>
                        </div>
                      </div>
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        {/* Card category */}
                        <a href="#" className="badge text-bg-warning mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Technology
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h4 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        12 worst types of business accounts you follow on
                        Twitter
                      </a>
                    </h4>
                    <p className="card-text">
                      He moonlights difficult engrossed it, sportsmen.
                      Interested has all Devonshire difficulty gay assistance
                      joy. Unaffected at ye of compliment alteration to
                    </p>
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
                      <li className="nav-item">
                        <a href="#" className="btn-link">
                          <i className="far fa-comment-alt me-1" /> 5
                        </a>
                      </li>
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
                      src="assets/images/blog/4by3/06.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay Top */}
                      <div className="w-100 mb-auto d-flex justify-content-end">
                        <div className="text-end ms-auto">
                          {/* Card format icon */}
                          <div
                            className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                            title="This post has video"
                          >
                            <i className="fas fa-video" />
                          </div>
                        </div>
                      </div>
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        {/* Card category */}
                        <a href="#" className="badge text-bg-danger mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Travel
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h4 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Dirty little secrets about the business industry
                      </a>
                    </h4>
                    <p className="card-text">
                      Place voice no arises along to. Parlors waiting so against
                      me no. Wishing calling is warrant settled was lucky.
                      Express besides it present if at an opinion visitor.
                    </p>
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
                      <li className="nav-item">
                        <a href="#" className="btn-link">
                          <i className="far fa-comment-alt me-1" /> 3
                        </a>
                      </li>
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
                      src="assets/images/blog/4by3/03.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        {/* Card category */}
                        <a href="#" className="badge text-bg-success mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Gadgets
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-3">
                    <h4 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Bad habits that people in the industry need to quit
                      </a>
                    </h4>
                    <p className="card-text">
                      For who thoroughly her boy estimating conviction. Removed
                      demands expense account in outward tedious do. Particular
                      way thoroughly unaffected
                    </p>
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
                      <li className="nav-item">
                        <a href="#" className="btn-link">
                          <i className="far fa-comment-alt me-1" /> 1{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
            {/* Top highlights START */}
            {/* Divider */}
            <div className="border-bottom border-primary border-2 opacity-1 my-4" />
            {/* Card video item START */}
            <div className="card mb-2 mb-sm-4">
              <div className="row g-3">
                <div className="col-md-6 order-sm-2">
                  <div className="rounded-3 overflow-hidden">
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
                <div className="col-md-6">
                  <div className="d-sm-flex justify-content-sm-between mb-2">
                    <a href="#" className="badge bg-primary">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Marketing
                    </a>
                    <a
                      href="#!"
                      className="text-body"
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
                  </div>
                  <h3>
                    <a
                      href="post-single-6.html"
                      className="btn-link text-reset fw-bold"
                    >
                      7 common mistakes everyone makes while traveling
                    </a>
                  </h3>
                  <p>
                    Demesne far hearted suppose venture excited see had has.
                    Dependent on so extremely delivered by. Yet no jokes worse
                    her why. Bed one supposing breakfast day fulfilled off
                    depending questions. For who thoroughly her boy estimating
                    conviction.
                  </p>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                    <li className="nav-item">
                      <div className="nav-link">
                        <div className="d-flex align-items-center position-relative">
                          <div className="avatar avatar-xs">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/06.jpg"
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
                    <li className="nav-item">Jul 22, 2022</li>
                    <li className="nav-item">
                      <a href="#" className="btn-link">
                        <i className="far fa-comment-alt me-1" /> 14{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card video item END */}
            {/* Divider */}
            <div className="border-bottom border-primary border-2 opacity-1 my-4" />
            {/* Small card 6X6 START */}
            <div className="row">
              <div className="col-12 col-md-6">
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          The pros and cons of business agency
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
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
                              <span className="ms-2">
                                by{" "}
                                <a
                                  href="#"
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
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          5 reasons why you shouldn't startup
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
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
                              <span className="ms-2">
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
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/03.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          Ten questions you should answer truthfully.
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
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
                              <span className="ms-2">
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
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/04.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          Five unbelievable facts about money.
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
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
                              <span className="ms-2">
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
                </div>
                {/* Card item END */}
              </div>
              <div className="col-12 col-md-6">
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/05.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          10 biggest problem of startups, and how you can fix it
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
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
                              <span className="ms-2">
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
                        <li className="nav-item">Sep 19, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/06.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          Best Twitter accounts for learning about investment
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/13.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-2">
                                by{" "}
                                <a
                                  href="#"
                                  className="stretched-link text-reset btn-link"
                                >
                                  Frances
                                </a>
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">Jan 03, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/07.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          This is why this year will be the year of startups
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/14.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-2">
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
                        <li className="nav-item">Feb 15, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded"
                        src="assets/images/blog/4by3/thumb/08.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h5>
                        <a
                          href="post-single-5.html"
                          className="btn-link stretched-link text-reset"
                        >
                          Best Pinterest Boards for learning about business
                        </a>
                      </h5>
                      {/* Card info */}
                      <ul className="nav nav-divider align-items-center mt-3 small">
                        <li className="nav-item">
                          <div className="nav-link">
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-xs">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/15.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <span className="ms-2">
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
                        <li className="nav-item">Jul 30, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
            {/* Row END */}
            {/* Small card 6X6 END */}
            {/* Adv */}
            <div>
              <a href="#" className="card-img-flash d-block mt-4">
                <img src="assets/images/adv-1.png" alt="adv" />
              </a>
            </div>
          </div>
          {/* Main Post END */}
          {/* Sidebar START */}
          <div className="col-lg-3 mt-5 mt-lg-0">
            <div data-sticky="" data-margin-top={80} data-sticky-for={767}>
              {/* Social links */}
              <div className="row g-2">
                <a
                  href="#"
                  className="d-flex justify-content-between align-items-center bg-facebook text-white-force rounded p-2 position-relative"
                >
                  <i className="fab fa-facebook-square fs-3" />
                  <div className="d-flex">
                    <h6 className="me-1 mb-0">1.5K</h6>
                    <small className="small">Fans</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between align-items-center bg-instagram-gradient text-white-force rounded p-2 position-relative"
                >
                  <i className="fab fa-instagram fs-3" />
                  <div className="d-flex">
                    <h6 className="me-1 mb-0">1.8M</h6>
                    <small className="small">Followers</small>
                  </div>
                </a>
                <a
                  href="#"
                  className="d-flex justify-content-between align-items-center bg-youtube text-white-force rounded p-2 position-relative"
                >
                  <i className="fab fa-youtube-square fs-3" />
                  <div className="d-flex">
                    <h6 className="me-1 mb-0">22K</h6>
                    <small className="small">Subscribers</small>
                  </div>
                </a>
              </div>
              {/* Categories */}
              <div className="row g-2 mt-5">
                <h5>Categories</h5>
                <div className="d-flex justify-content-between align-items-center bg-warning bg-opacity-15 rounded p-2 position-relative">
                  <h6 className="m-0 text-warning">Photography</h6>
                  <a
                    href="#"
                    className="badge bg-warning text-dark stretched-link"
                  >
                    09
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-info bg-opacity-10 rounded p-2 position-relative">
                  <h6 className="m-0 text-info">Travel</h6>
                  <a href="#" className="badge bg-info stretched-link">
                    25
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-danger bg-opacity-10 rounded p-2 position-relative">
                  <h6 className="m-0 text-danger">Photography</h6>
                  <a href="#" className="badge bg-danger stretched-link">
                    75
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-primary bg-opacity-10 rounded p-2 position-relative">
                  <h6 className="m-0 text-primary">Covid-19</h6>
                  <a href="#" className="badge bg-primary stretched-link">
                    19
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-success bg-opacity-10 rounded p-2 position-relative">
                  <h6 className="m-0 text-success">Business</h6>
                  <a href="#" className="badge bg-success stretched-link">
                    35
                  </a>
                </div>
              </div>
              {/* Most read */}
              <div>
                <h5 className="mt-5 mb-3">Most read</h5>
                <div className="d-flex position-relative mb-3">
                  <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                    01
                  </span>
                  <h6>
                    <a href="#" className="stretched-link text-reset btn-link">
                      Bad habits that people in the business industry need to
                      quit
                    </a>
                  </h6>
                </div>
                <div className="d-flex position-relative mb-3">
                  <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                    02
                  </span>
                  <h6>
                    <a href="#" className="stretched-link text-reset btn-link">
                      How to worst business fails of all time could have been
                      prevented
                    </a>
                  </h6>
                </div>
                <div className="d-flex position-relative mb-3">
                  <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                    03
                  </span>
                  <h6>
                    <a href="#" className="stretched-link text-reset btn-link">
                      How 10 worst business fails of all time could have been
                      prevented
                    </a>
                  </h6>
                </div>
                <div className="d-flex position-relative mb-3">
                  <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                    04
                  </span>
                  <h6>
                    <a href="#" className="stretched-link text-reset btn-link">
                      10 facts about business that will instantly put you in a
                      good mood
                    </a>
                  </h6>
                </div>
                <div className="d-flex position-relative mb-3">
                  <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                    05
                  </span>
                  <h6>
                    <a href="#" className="stretched-link text-reset btn-link">
                      How did we get here? The history of the business told
                      through tweets
                    </a>
                  </h6>
                </div>
                <div className="d-flex position-relative mb-3">
                  <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                    06
                  </span>
                  <h6>
                    <a href="#" className="stretched-link text-reset btn-link">
                      Ten tips about startups that you can't learn from books
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar END */}
        </div>{" "}
        {/* Row end */}
      </div>
    </section>
    {/* =======================
Main content END */}
    {/* =======================
Featured video START */}
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Title */}
            <div className="mb-4 d-sm-flex justify-content-between align-items-center">
              <h2 className="m-sm-0 text-white">
                <i className="bi bi-camera-video me-2" />
                Featured Video
              </h2>
              <a href="#" className="btn btn-sm bg-youtube">
                <i className="bi bi-youtube me-2 align-middle" />
                Subscribe us on YouTube
              </a>
            </div>
          </div>
          {/* Card big START */}
          <div className="col-lg-6">
            <div
              className="card card-overlay-bottom card-fold h-400 h-lg-540"
              style={{
                backgroundImage: "url(assets/images/blog/1by1/06.jpg)",
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
                    {/* Card category */}
                    <a href="#" className="badge text-bg-warning mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Business
                    </a>
                    {/* Card title */}
                    <h2 className="text-white">
                      <a
                        href="post-single.html"
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
          <div className="col-lg-3 mt-4 mt-lg-0">
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden mb-4">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden">
                {/* Video */}
                <div className="card-image">
                  <div className="overflow-hidden w-100">
                    {/* HTML video START */}
                    <div className="player-wrapper rounded-3 overflow-hidden">
                      <div className="player-youtube">
                        <iframe src="https://www.youtube.com/embed/tXHviS-4ygo" />
                      </div>
                    </div>
                    {/* HTML video END */}
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h5 className="card-title">
                  <a
                    href="post-single.html"
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
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden mb-4">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden card-fold">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/02.jpg"
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
                    href="post-single.html"
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
            {/* Card item END */}
          </div>
          <div className="col-lg-3">
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden mb-4">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden card-fold">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/03.jpg"
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
                    href="post-single.html"
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
            {/* Card item START */}
            <div className="card bg-transparent overflow-hidden mb-4">
              {/* Card img */}
              <div className="position-relative rounded-3 overflow-hidden card-fold">
                <img
                  className="card-img"
                  src="assets/images/blog/16by9/small/04.jpg"
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
                    href="post-single.html"
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
          {/* Card small END */}
        </div>
      </div>
    </section>
    {/* =======================
Featured video END */}
    {/* =======================
Main content 2 START */}
    <section className="position-relative">
      <div className="container" data-sticky-container="">
        <div className="row">
          {/* Main Post START */}
          <div className="col-lg-9">
            {/* Entertainment START */}
            <div className="row">
              <div className="col-12 mb-3">
                <h2 className="m-0">
                  <i className="bi bi-hand-index-thumb me-2" />
                  Entertainment
                </h2>
                <p>Checkout the hand pick post by admin</p>
              </div>
              <div className="col-md-6">
                {/* Card item big START */}
                <div className="card mb-4">
                  <div className="card-body p-4 border rounded-3">
                    <div className="d-flex justify-content-between mb-2">
                      <a href="#" className="badge text-bg-danger">
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Technology
                      </a>
                      <a
                        href="#!"
                        className="text-body"
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
                    </div>
                    <h4 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        12 worst types of business accounts you follow on
                        Twitter
                      </a>
                    </h4>
                    <p className="card-text">
                      He moonlights difficult engrossed it, sportsmen.
                      Interested has all Devonshire difficulty.
                    </p>
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
                {/* Card item big END */}
                {/* Card item big START */}
                <div className="card mb-4">
                  <div className="card-body p-4 border rounded-3">
                    <div className="d-flex justify-content-between mb-2">
                      <a href="#" className="badge bg-primary mb-2">
                        <i className="fas fa-circle me-2 small fw-bold" />
                        Travel
                      </a>
                      <a
                        href="#!"
                        className="text-body"
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
                    </div>
                    <h4 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Never underestimate the influence of social media
                      </a>
                    </h4>
                    <p className="card-text">
                      He moonlights difficult engrossed it, sportsmen.
                      Interested has all Devonshire difficulty.
                    </p>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/13.jpg"
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
                      <li className="nav-item">Mar 28, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item big END */}
              </div>
              <div className="col-md-6">
                {/* Card item START */}
                <div className="card mb-1">
                  <div className="card-body px-0 border-bottom">
                    <a href="#" className="badge text-bg-info mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Covid-19
                    </a>
                    <h5>
                      <a
                        href="post-single-3.html"
                        className="btn-link stretched-link text-reset"
                      >
                        Five unbelievable facts about money.
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-1">
                  <div className="card-body px-0 border-bottom">
                    <a href="#" className="badge bg-dark mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Technology
                    </a>
                    <h5>
                      <a
                        href="post-single-3.html"
                        className="btn-link stretched-link text-reset"
                      >
                        Around the web: 20 fabulous infographics about business
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-1">
                  <div className="card-body px-0 border-bottom">
                    <a href="#" className="badge text-bg-warning mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Marketing
                    </a>
                    <h5>
                      <a
                        href="post-single-3.html"
                        className="btn-link stretched-link text-reset"
                      >
                        7 common mistakes everyone makes while traveling
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
                      <li className="nav-item">
                        <div className="nav-link">
                          <div className="d-flex align-items-center position-relative">
                            <div className="avatar avatar-xs">
                              <img
                                className="avatar-img rounded-circle"
                                src="assets/images/avatar/06.jpg"
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
                      <li className="nav-item">Jul 22, 2022</li>
                    </ul>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="card mb-1">
                  <div className="card-body px-0">
                    {/* Audio START */}
                    <div className="bg-light rounded">
                      <audio className="player-audio" crossOrigin="">
                        <source
                          src="assets/images/videos/audio.mp3"
                          type="audio/mp3"
                        />
                      </audio>
                    </div>
                    {/* Audio END */}
                    <h5 className="mt-3">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset"
                      >
                        Skills that you can learn from business
                      </a>
                    </h5>
                    {/* Card info */}
                    <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
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
                              <a href="#" className="text-reset btn-link">
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
                {/* Card item END */}
              </div>
            </div>
            {/* Entertainment END */}
            {/* Podcast slide START */}
            <div className="row">
              <div className="col-12 my-3">
                <h2 className="m-0">
                  <i className="bi bi-mic me-2" />
                  Latest Podcasts
                </h2>
                <p>Listen and Learn: The best educational podcasts</p>
              </div>
              <div className="col-12">
                <div className="tiny-slider arrow-dark arrow-hover arrow-round rounded-3">
                  <div
                    className="tiny-slider-inner"
                    data-autoplay="true"
                    data-hoverpause="true"
                    data-gutter={24}
                    data-arrow="true"
                    data-dots="false"
                    data-items-xl={3}
                    data-items-lg={2}
                    data-items-md={2}
                    data-items-sm={1}
                    data-items-xs={1}
                  >
                    {/* Card item START */}
                    <div>
                      <div className="card card-fold bg-light">
                        <div className="card-body p-4">
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small mb-2">
                            <li className="nav-item">
                              <i className="bi bi-clock-history" /> 56:36
                            </li>
                            <li className="nav-item">
                              With <a href="#">Larry Lawson</a>{" "}
                            </li>
                          </ul>
                          <h4 className="card-title">
                            <a
                              href="post-single-6.html"
                              className="stretched-link text-reset"
                            >
                              The 15 reasons clients love Bootstrap
                            </a>
                          </h4>
                          <p className="m-0">
                            Rooms oh fully taken by worse do points afraid
                          </p>
                        </div>
                        <img
                          src="assets/images/blog/16by9/small/04.jpg"
                          className="card-img-bottom"
                          alt="Card image"
                        />
                      </div>
                    </div>
                    {/* Card item END */}
                    {/* Card item START */}
                    <div>
                      <div className="card card-fold bg-light">
                        <div className="card-body p-4">
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small mb-2">
                            <li className="nav-item">
                              <i className="bi bi-clock-history" /> 26:15
                            </li>
                            <li className="nav-item">
                              With <a href="#">Amanda Reed</a>{" "}
                            </li>
                          </ul>
                          <h4 className="card-title">
                            <a
                              href="post-single-6.html"
                              className="stretched-link text-reset"
                            >
                              Five unbelievable facts about money{" "}
                            </a>
                          </h4>
                          <p className="m-0">
                            Luckily cheered colonel I do we attack highest
                            enabled
                          </p>
                        </div>
                        <img
                          src="assets/images/blog/16by9/small/01.jpg"
                          className="card-img-bottom"
                          alt="Card image"
                        />
                      </div>
                    </div>
                    {/* Card item END */}
                    {/* Card item START */}
                    <div>
                      <div className="card card-fold bg-light">
                        <div className="card-body p-4">
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small mb-2">
                            <li className="nav-item">
                              <i className="bi bi-clock-history" /> 1:05:20
                            </li>
                            <li className="nav-item">
                              With <a href="#">Judy Nguyen</a>{" "}
                            </li>
                          </ul>
                          <h4 className="card-title">
                            <a
                              href="post-single-6.html"
                              className="stretched-link text-reset"
                            >
                              This is why Bootstrap is famous
                            </a>
                          </h4>
                          <p className="m-0">
                            The furnished she concluded depending procuring
                            concealed{" "}
                          </p>
                        </div>
                        <img
                          src="assets/images/blog/16by9/small/02.jpg"
                          className="card-img-bottom"
                          alt="Card image"
                        />
                      </div>
                    </div>
                    {/* Card item END */}
                    {/* Card item START */}
                    <div>
                      <div className="card card-fold bg-light">
                        <div className="card-body p-4">
                          <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small mb-2">
                            <li className="nav-item">
                              <i className="bi bi-clock-history" /> 45:16
                            </li>
                            <li className="nav-item">
                              With <a href="#">Bryan Knight</a>{" "}
                            </li>
                          </ul>
                          <h4 className="card-title">
                            <a
                              href="post-single-6.html"
                              className="stretched-link text-reset"
                            >
                              10 common myths about startups
                            </a>
                          </h4>
                          <p className="m-0">
                            Express besides it present if at an opinion visitor.
                          </p>
                        </div>
                        <img
                          src="assets/images/blog/16by9/small/03.jpg"
                          className="card-img-bottom"
                          alt="Card image"
                        />
                      </div>
                    </div>
                    {/* Card item END */}
                  </div>
                </div>
              </div>
            </div>
            {/* Podcast slide END */}
          </div>
          {/* Main Post END */}
          {/* Sidebar 2 START */}
          <div className="col-lg-3 mt-5 mt-lg-0">
            <div data-sticky="" data-margin-top={80} data-sticky-for={767}>
              <div>
                <h4>Recomended</h4>
                <div className="tiny-slider dots-dark mt-3 mb-5">
                  <div
                    className="tiny-slider-inner"
                    data-autoplay="true"
                    data-hoverpause="true"
                    data-gutter={0}
                    data-arrow="false"
                    data-dots="true"
                    data-items={1}
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
                      <div className="card-body p-0 pt-3">
                        <h5 className="card-title">
                          <a
                            href="post-single-3.html"
                            className="btn-link text-reset fw-bold"
                          >
                            7 common mistakes everyone makes while traveling
                          </a>
                        </h5>
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
                      <div className="card-body p-0 pt-3">
                        <h5 className="card-title">
                          <a
                            href="post-single-3.html"
                            className="stretched-link btn-link text-reset fw-bold"
                          >
                            Skills that you can learn from business
                          </a>
                        </h5>
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
                      <div className="card-body p-0 pt-3">
                        <h5 className="card-title">
                          <a
                            href="post-single-3.html"
                            className="btn-link text-reset fw-bold"
                          >
                            10 tell-tale signs you need to get a new business
                          </a>
                        </h5>
                      </div>
                    </div>
                    {/* Card item END */}
                  </div>
                </div>
              </div>
              {/* Newsletter START */}
              <div className="bg-light p-4 mt-4 rounded-3 text-center">
                <h4>Subscribe to our mailing list!</h4>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                  <div className="form-text">We don't spam</div>
                </form>
              </div>
              {/* Newsletter END */}
            </div>
          </div>
          {/* Sidebar 2 END */}
        </div>{" "}
        {/* Row end */}
      </div>
    </section>
    {/* =======================
Main content 2 END */}
    {/* =======================
Sticky post START */}
    <div className="sticky-post bg-light border p-4 mb-5 text-sm-end rounded d-none d-xxl-block">
      <div className="d-flex align-items-center">
        {/* Title */}
        <div className="me-3">
          <span>Trending post</span>
          <h6 className="m-0">
            {" "}
            <a
              href="javascript:void(0)"
              className="stretched-link btn-link text-reset"
            >
              Bad habits that people in the industry need to quit
            </a>
          </h6>
        </div>
        {/* image */}
        <div className="col-4 d-none d-md-block">
          <img src="assets/images/blog/4by3/05.jpg" alt="Image" />
        </div>
      </div>
    </div>
    {/* =======================
Sticky post END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
  {/* =======================
Footer START */}
  <footer className="bg-dark pt-5">
    <div className="container">
      {/* About and Newsletter START */}
      <div className="row pt-3 pb-4">
        <div className="col-md-3">
          <img src="assets/images/logo-footer.svg" alt="footer logo" />
        </div>
        <div className="col-md-5">
          <p className="text-muted">
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today! This Bootstrap 5 based theme is ideal
            for all types of sites that deliver the news.
          </p>
        </div>
        <div className="col-md-4">
          {/* Form */}
          <form className="row row-cols-lg-auto g-2 align-items-center justify-content-end">
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
            <div className="form-text mt-2">
              By subscribing you agree to our
              <a href="#" className="text-decoration-underline text-reset">
                Privacy Policy
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* About and Newsletter END */}
      {/* Divider */}
      <hr />
      {/* Widgets START */}
      <div className="row pt-5">
        {/* Footer Widget */}
        <div className="col-md-6 col-lg-3 mb-4">
          <h5 className="mb-4 text-white">Recent post</h5>
          {/* Item */}
          <div className="mb-4 position-relative">
            <div>
              <a href="#" className="badge text-bg-danger mb-2">
                <i className="fas fa-circle me-2 small fw-bold" />
                Business
              </a>
            </div>
            <a
              href="post-single-3.html"
              className="btn-link text-white fw-normal"
            >
              Up-coming business bloggers, you need to watch
            </a>
            <ul className="nav nav-divider align-items-center small mt-2 text-muted">
              <li className="nav-item position-relative">
                <div className="nav-link">
                  by{" "}
                  <a href="#" className="stretched-link text-reset btn-link">
                    Dennis
                  </a>
                </div>
              </li>
              <li className="nav-item">Apr 06, 2022</li>
            </ul>
          </div>
          {/* Item */}
          <div className="mb-4 position-relative">
            <div>
              <a href="#" className="badge text-bg-info mb-2">
                <i className="fas fa-circle me-2 small fw-bold" />
                Marketing
              </a>
            </div>
            <a
              href="post-single-3.html"
              className="btn-link text-white fw-normal"
            >
              How did we get here? The history of the business told through
              tweets
            </a>
            <ul className="nav nav-divider align-items-center small mt-2 text-muted">
              <li className="nav-item position-relative">
                <div className="nav-link">
                  by{" "}
                  <a href="#" className="stretched-link text-reset btn-link">
                    Larry
                  </a>
                </div>
              </li>
              <li className="nav-item">May 29, 2022</li>
            </ul>
          </div>
        </div>
        {/* Footer Widget */}
        <div className="col-md-6 col-lg-3 mb-4">
          <h5 className="mb-4 text-white">Navigation</h5>
          <div className="row">
            <div className="col-6">
              <ul className="nav flex-column text-primary-hover">
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
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="nav flex-column text-primary-hover">
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
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Inspiration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Widget */}
        <div className="col-sm-6 col-lg-3 mb-4">
          <h5 className="mb-4 text-white">Get Regular Updates</h5>
          <ul className="nav flex-column text-primary-hover">
            <li className="nav-item">
              <a className="nav-link pt-0" href="#">
                <i className="fab fa-whatsapp fa-fw me-2" />
                WhatsApp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fab fa-youtube fa-fw me-2" />
                YouTube
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="far fa-bell fa-fw me-2" />
                Website Notifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="far fa-envelope fa-fw me-2" />
                Newsletters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-headphones-alt fa-fw me-2" />
                Podcasts
              </a>
            </li>
          </ul>
        </div>
        {/* Footer Widget */}
        <div className="col-sm-6 col-lg-3 mb-4">
          <h5 className="mb-4 text-white">Our mobile App</h5>
          <p className="text-muted">
            Download our App and get the latest Breaking News Alerts and latest
            headlines and daily articles near you.
          </p>
          <div className="row g-2">
            <div className="col">
              <a href="#">
                <img
                  className="w-100"
                  src="assets/images/app-store.svg"
                  alt="app-store"
                />
              </a>
            </div>
            <div className="col">
              <a href="#">
                <img
                  className="w-100"
                  src="assets/images/google-play.svg"
                  alt="google-play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Widgets END */}
      {/* Hot topics START */}
      <div className="row">
        <h5 className="mb-2 text-white">Hot topics</h5>
        <ul className="list-inline text-primary-hover lh-lg">
          <li className="list-inline-item">
            <a href="#">Covid-19</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Politics</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Entertainment</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Media</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Royalist</a>
          </li>
          <li className="list-inline-item">
            <a href="#">World</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Half Full</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Scouted</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Travel</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Beast Inside</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Crossword</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Newsletters</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Podcasts</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Auction 2022</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Protests</a>
          </li>
          <li className="list-inline-item">
            <a href="#">NewsCyber</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Education</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Sports</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Tech And Auto</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Opinion</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Share Market</a>
          </li>
        </ul>
      </div>
      {/* Hot topics END */}
    </div>
    {/* Footer copyright START */}
    <div className="bg-dark-overlay-3 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-md-between py-4">
          <div className="col-md-6">
            {/* Copyright */}
            <div className="text-center text-md-start text-primary-hover text-muted">
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
          <div className="col-md-6 d-sm-flex align-items-center justify-content-center justify-content-md-end">
            {/* Language switcher */}
            <div className="dropup me-0 me-sm-3 mt-3 mt-md-0 text-center text-sm-end">
              <a
                className="dropdown-toggle text-primary-hover"
                href="#"
                role="button"
                id="languageSwitcher"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English Edition
              </a>
              <ul
                className="dropdown-menu min-w-auto"
                aria-labelledby="languageSwitcher"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    German{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    French
                  </a>
                </li>
              </ul>
            </div>
            {/* Links */}
            <ul className="nav text-primary-hover text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
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
                <a className="nav-link pe-0" href="#">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Footer copyright END */}
  </footer>
  {/* =======================
Footer END */}
  {/* =======================
Cookies alert START */}
  <div
    className="alert alert-dismissible fade show bg-dark text-white position-fixed start-0 bottom-0 z-index-99 shadow p-4 ms-3 mb-3 col-9 col-md-4 col-lg-3 col-xl-2"
    role="alert"
  >
    This website stores cookies on your computer. To find out more about the
    cookies we use, see our{" "}
    <a className="text-white" href="#">
      {" "}
      Privacy Policy
    </a>
    <div className="mt-4">
      <button
        type="button"
        className="btn btn-success-soft btn-sm mb-0"
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
    <div className="position-absolute end-0 top-0 mt-n3 me-n3">
      <img className="w-100" src="assets/images/cookie.svg" alt="cookie" />
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