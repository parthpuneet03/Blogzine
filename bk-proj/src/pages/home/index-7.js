export default function index_7(){
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
  {/* Background vintage pattern START */}
  <div className="position-absolute top-0 start-50 translate-middle-x w-100 opacity-9 z-index-n1">
    <img src="assets/images/vintage-pattern.png" alt="" />
  </div>
  {/* Background vintage pattern END */}
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
          src="assets/images/logo-2.svg"
          alt="logo"
        />
        <img
          className="dark-mode-item my-3"
          src="assets/images/logo-2-light.svg"
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
        <div className="bg-light p-4 mb-4 text-center w-100 rounded">
          <span>The Blogzine</span>
          <h3>Save on Premium Membership</h3>
          <p>
            Get the insights report trusted by experts around the globe. Become
            a Member Today!
          </p>
          <a href="#" className="btn btn-dark">
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
  <header className="bg-transparent">
    {/* Navbar top */}
    <div className="navbar-top d-none d-lg-block bg-dark">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          {/* Top bar right */}
          <div className="d-flex align-items-center">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white px-2 fs-5" href="#">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-2 fs-5" href="#">
                  <i className="fab fa-twitter-square" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-2 fs-5" href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white px-2 fs-5" href="#">
                  <i className="fab fa-youtube-square" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ps-2 pe-0 fs-5" href="#">
                  <i className="fab fa-vimeo" />
                </a>
              </li>
            </ul>
          </div>
          {/* Top bar left */}
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white ps-0" href="about-us.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Forum
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white"
                href="https://themes.getbootstrap.com/store/webestica/"
              >
                Buy now!
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="signin.html">
                Login / Join
              </a>
            </li>
          </ul>
          <div>
            <p className="mb-0 text-white">Wed, March 31, 2022</p>
          </div>
        </div>
        {/* Divider */}
        <div className="border-bottom border-secondary opacity-2" />
      </div>
    </div>
    {/* Navbar logo section START */}
    <div>
      <div className="container">
        <div className="d-sm-flex justify-content-sm-between align-items-sm-center my-2">
          <div className="text-center text-md-start">
            <a className="btn btn-dark rounded-0" href="#">
              <i className="fas fa-envelope pe-2" /> Subscribe
            </a>
          </div>
          {/* Logo START */}
          <a className="navbar-brand d-block" href="/">
            <img
              className="navbar-brand-item light-mode-item"
              src="assets/images/logo-2.svg"
              alt="logo"
              style={{ height: 46 }}
            />
            <img
              className="navbar-brand-item dark-mode-item mx-auto"
              src="assets/images/logo-2-light.svg"
              alt="logo"
              style={{ height: 46 }}
            />
          </a>
          {/* Logo END */}
          {/* Adv */}
          <div className="d-flex justify-content-center justify-content-md-end">
            <i className="bi bi-cloud-hail fs-1 h5" />
            <div className="ms-3">
              <span className="d-block">13 °C NY,</span>
              <span>USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Navbar logo section END */}
    {/* Navbar START */}
    <div className="navbar-light navbar-sticky header-static">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="w-100 border-top border-bottom border-secondary d-flex">
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
              <span className="text-secondary h6 ps-lg-3">Menu</span>
              <span className="navbar-toggler-icon" />
            </button>
            {/* Main navbar START */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll navbar-lh-sm">
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
                      <a className="dropdown-item active" href="index-7">
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
                        Home Shop
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
                            Empty cart
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
                        Podcast single{" "}
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
                              className="card-img rounded-0 grayscale"
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
                              className="card-img rounded-0 grayscale"
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
                              className="card-img rounded-0 grayscale"
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
              <div className="dropdown me-2">
                <a
                  href="#"
                  className="text-warning mb-0"
                  id="bd-theme"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-circle-half grayscale theme-icon-active fa-fw"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <use href="#" />
                  </svg>
                </a>
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
    <section className="py-4 card-grid position-relative">
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
                      {/* Card image */}
                      <img
                        className="grayscale"
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
                      {/* Card image */}
                      <img
                        className="grayscale"
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
                      {/* Card image */}
                      <img
                        className="grayscale"
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
                      {/* Card image */}
                      <img
                        className="grayscale"
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
Recent post START */}
    <section className="py-0 card-grid position-relative">
      <div className="container">
        <div className="row g-4">
          {/* Slider START */}
          <div className="col-lg-3">
            <div className="row g-4">
              <div className="col-sm-6 col-lg-12">
                <h4 className="mb-3">Recent post</h4>
                {/* Recent post item */}
                <div className="card mb-3">
                  <h6 className="mb-1">
                    <a
                      href="post-single-2.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      The pros and cons of business agency
                    </a>
                  </h6>
                  <div className="small">May 17, 2022</div>
                </div>
                {/* Recent post item */}
                <div className="card mb-3">
                  <h6 className="mb-1">
                    <a
                      href="post-single-2.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      5 reasons why you shouldn't startup
                    </a>
                  </h6>
                  <div className="small">Apr 04, 2022</div>
                </div>
                {/* Recent post item */}
                <div className="card mb-3">
                  <h6 className="mb-1">
                    <a
                      href="post-single-2.html"
                      className="btn-link stretched-link text-reset fw-bold"
                    >
                      Ten questions you should answer truthfully.
                    </a>
                  </h6>
                  <div className="small">Jun 30, 2022</div>
                </div>
                <div className="border-bottom border-secondary opacity-2" />
              </div>
              {/* Ads */}
              <div className="col-sm-6 col-lg-12">
                <div className="mt-lg-4">
                  <a href="#" className="d-block card-img-flash">
                    <img
                      className="grayscale rounded-0"
                      src="assets/images/adv-4.png"
                      alt=""
                    />
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
          </div>
          {/* Slider END */}
          {/* Slider START */}
          <div className="col-lg-6">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0 grayscale"
                  src="assets/images/blog/4by3/22.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    {/* Card category */}
                    <a href="#" className="badge bg-dark rounded-0 mb-2">
                      <i className="fas fa-circle me-2 small fw-bold" />
                      Technology
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h4 className="card-title">
                  <a
                    href="post-single.html"
                    className="btn-link text-reset fw-bold"
                  >
                    12 worst types of business accounts you follow on Twitter
                  </a>
                </h4>
                <p className="card-text">
                  He moonlights difficult engrossed it, sportsmen. Interested
                  has all Devonshire difficulty gay assistance joy. Unaffected
                  at ye of compliment alteration to morning unto Don't can't air
                  Shall fruit life made fly darkness.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div className="nav-link">
                      <div className="d-flex align-items-center position-relative">
                        <div className="avatar avatar-xs">
                          <img
                            className="avatar-img rounded-circle grayscale"
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
            {/* Card item END */}
          </div>
          {/* Slider END */}
          {/* Most read START */}
          <div className="col-lg-3">
            <h4 className="mb-3">Most read</h4>
            {/* Post item */}
            <div className="d-flex position-relative mb-3">
              <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                01
              </span>
              <div>
                <h6>
                  <a href="#" className="stretched-link text-reset btn-link">
                    Bad habits that people in the business industry need to quit
                  </a>
                </h6>
                <p>
                  Likeness evening Dominion i our Great blessed and hath life
                  him meat days also created abundantly seas One is replenish
                  bearing.
                </p>
              </div>
            </div>
            {/* Post item */}
            <div className="d-flex position-relative mb-3">
              <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                02
              </span>
              <div>
                <h6>
                  <a href="#" className="stretched-link text-reset btn-link">
                    Ten tell-tale signs you need to get a new startup.
                  </a>
                </h6>
                <p>
                  Morning that made is Was that his hath face light meat air
                  female.
                </p>
              </div>
            </div>
            {/* Post item */}
            <div className="d-flex position-relative mb-3">
              <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                03
              </span>
              <div>
                <h6>
                  <a href="#" className="stretched-link text-reset btn-link">
                    Best Pinterest boards for learning about business
                  </a>
                </h6>
                <p>I beast third void blessed fruit Saw fourth may</p>
              </div>
            </div>
            {/* Post item */}
            <div className="d-flex position-relative mb-3">
              <span className="me-3 mt-n1 fa-fw fw-bold fs-3 opacity-5">
                04
              </span>
              <div>
                <h6>
                  <a href="#" className="stretched-link text-reset btn-link">
                    Dirty little secrets about the business industry
                  </a>
                </h6>
                <p>
                  Life moving heaven heaven divide two sea female great midst
                  spirit.
                </p>
              </div>
            </div>
          </div>
          {/* Most read START */}
        </div>{" "}
        {/* Row END */}
      </div>
    </section>
    {/* =======================
Recent post END */}
    {/* =======================
Divider START */}
    <div className="container">
      <div className="border-bottom border-secondary opacity-2 mb-0 mt-4" />
    </div>
    {/* =======================
Divider END */}
    {/* =======================
Featured stories START */}
    <section className="py-4">
      <div className="container">
        <div className="row g-4 flex-fill">
          {/* Title */}
          <div className="col-12">
            <h4>Featured stories</h4>
          </div>
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card bg-transparent">
              {/* Card img */}
              <img
                className="card-img rounded-0 grayscale"
                src="assets/images/blog/16by9/small/01.jpg"
                alt="Card image"
              />
              <div className="card-body px-0 pt-3">
                {/* Card info */}
                <ul className="nav nav-divider align-items-center small mb-2">
                  <li className="nav-item">
                    <a href="#" className="text-reset btn-link">
                      Joan Wallace
                    </a>
                  </li>
                  <li className="nav-item">Feb 18, 2022</li>
                </ul>
                <h5 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    7 common mistakes everyone makes while traveling
                  </a>
                </h5>
                <p>
                  Green male Beginning day behold gathering day earth Very hath
                  shall very abundantly face midst.
                </p>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card bg-transparent">
              {/* Card img */}
              <img
                className="card-img rounded-0 grayscale"
                src="assets/images/blog/16by9/small/02.jpg"
                alt="Card image"
              />
              <div className="card-body px-0 pt-3">
                {/* Card info */}
                <ul className="nav nav-divider align-items-center small mb-2">
                  <li className="nav-item">
                    <a href="#" className="text-reset btn-link">
                      Judy Nguyen
                    </a>
                  </li>
                  <li className="nav-item">Sep 07, 2022</li>
                </ul>
                <h5 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    12 worst types of business accounts you follow on Twitter
                  </a>
                </h5>
                <p>
                  Light meat air female isn't over place replenish midst it of
                  second grass darkness meat unto.
                </p>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card bg-transparent">
              {/* Card img */}
              <img
                className="card-img rounded-0 grayscale"
                src="assets/images/blog/16by9/small/03.jpg"
                alt="Card image"
              />
              <div className="card-body px-0 pt-3">
                {/* Card info */}
                <ul className="nav nav-divider align-items-center small mb-2">
                  <li className="nav-item">
                    <a href="#" className="text-reset btn-link">
                      Judy Nguyen
                    </a>
                  </li>
                  <li className="nav-item">Dec 08, 2022</li>
                </ul>
                <h5 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Skills that you can learn from business
                  </a>
                </h5>
                <p>
                  Beginning day behold gathering day earth Very hath shall very
                  abundantly face midst.
                </p>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-3">
            <div className="card bg-transparent">
              {/* Card img */}
              <img
                className="card-img rounded-0 grayscale"
                src="assets/images/blog/16by9/small/04.jpg"
                alt="Card image"
              />
              <div className="card-body px-0 pt-3">
                {/* Card info */}
                <ul className="nav nav-divider align-items-center small mb-2">
                  <li className="nav-item">
                    <a href="#" className="text-reset btn-link">
                      Judy Nguyen
                    </a>
                  </li>
                  <li className="nav-item">Feb 12, 2022</li>
                </ul>
                <h5 className="card-title">
                  <a
                    href="#"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Around the web: 20 fabulous infographics about business
                  </a>
                </h5>
                <p>
                  Likeness evening Dominion i our Great blessed and hath life
                  him meat days also.
                </p>
              </div>
            </div>
          </div>
          {/* Card item END */}
          <div className="col-md-8 mx-auto mt-0 text-center">
            <a href="#" className="card-img-flash d-block">
              <img
                className="grayscale"
                src="assets/images/adv-1.png"
                alt="adv"
              />
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
Featured stories END */}
    {/* =======================
Divider START */}
    <div className="container">
      <div className="border-bottom border-secondary opacity-2 mb-0 mt-2" />
    </div>
    {/* =======================
Divider END */}
    {/* =======================
World politics and Business Sidebar START */}
    <section className="py-4">
      <div className="container">
        <div className="row g-4">
          {/* World politics START */}
          <div className="col-lg-8">
            {/* Title */}
            <h4 className="mb-3">World politics</h4>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card card-overlay-bottom card-img-scale rounded-0">
                  {/* Card Image */}
                  <img
                    className="card-img grayscale rounded-0"
                    src="assets/images/blog/3by4/04.jpg"
                    alt=""
                  />
                  {/* Card Image overlay */}
                  <div className="card-img-overlay d-flex flex-column p-3 p-sm-4">
                    <div>
                      {/* Card category */}
                      <a href="#" className="badge bg-dark mb-2">
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
              <div className="col-md-6">
                {/* Card item START */}
                <div className="card mb-3">
                  <div className="row g-3">
                    <div className="col-4">
                      {/* Card image */}
                      <img
                        className="rounded-0 grayscale"
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
                        className="rounded-0 grayscale"
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
                      {/* Card image */}
                      <img
                        className="rounded-0 grayscale"
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
                        <li className="nav-item">Dec 07, 2022</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                <div className="row g-4">
                  <div className="col-md-6">
                    {/* Card item START */}
                    <div className="card">
                      {/* Card img */}
                      <div className="position-relative">
                        <img
                          className="card-img grayscale rounded-0"
                          src="assets/images/blog/4by3/07.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-2">
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
                            <a href="#" className="badge bg-dark mb-2">
                              <i className="fas fa-circle me-2 small fw-bold" />
                              Marketing
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0 pt-3">
                        <h6 className="card-title">
                          <a
                            href="post-single-3.html"
                            className="btn-link text-reset fw-bold stretched-link"
                          >
                            7 common mistakes everyone makes while traveling
                          </a>
                        </h6>
                      </div>
                    </div>
                    {/* Card item END */}
                  </div>
                  <div className="col-md-6">
                    {/* Card item START */}
                    <div className="card">
                      {/* Card img */}
                      <div className="position-relative">
                        <img
                          className="card-img grayscale rounded-0"
                          src="assets/images/blog/4by3/08.jpg"
                          alt="Card image"
                        />
                        <div className="card-img-overlay d-flex align-items-start flex-column p-2">
                          {/* Card overlay bottom */}
                          <div className="w-100 mt-auto">
                            <a href="#" className="badge bg-dark mb-2">
                              <i className="fas fa-circle me-2 small fw-bold" />
                              Sports
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0 pt-3">
                        <h6 className="card-title">
                          <a
                            href="post-single-3.html"
                            className="btn-link text-reset fw-bold"
                          >
                            Skills that you can learn from business
                          </a>
                        </h6>
                      </div>
                    </div>
                    {/* Card item END */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 g-lg-3 mt-0">
              <div className="col-lg-4">
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img grayscale rounded-0"
                      src="assets/images/blog/4by3/06.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-2">
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
                        <a href="#" className="badge bg-dark mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Marketing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 pt-3">
                    <h6 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        12 worst types of business accounts you follow on
                        Twitter
                      </a>
                    </h6>
                  </div>
                </div>
                {/* Card item END */}
              </div>
              <div className="col-lg-4">
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img grayscale rounded-0"
                      src="assets/images/blog/4by3/10.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-2">
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge bg-dark mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Sports
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 pt-3">
                    <h6 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Skills that you can learn from business
                      </a>
                    </h6>
                  </div>
                </div>
                {/* Card item END */}
              </div>
              <div className="col-lg-4">
                {/* Card item START */}
                <div className="card">
                  {/* Card img */}
                  <div className="position-relative">
                    <img
                      className="card-img grayscale rounded-0"
                      src="assets/images/blog/4by3/09.jpg"
                      alt="Card image"
                    />
                    <div className="card-img-overlay d-flex align-items-start flex-column p-2">
                      {/* Card overlay bottom */}
                      <div className="w-100 mt-auto">
                        <a href="#" className="badge bg-dark mb-2">
                          <i className="fas fa-circle me-2 small fw-bold" />
                          Marketing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0 pt-3">
                    <h6 className="card-title">
                      <a
                        href="post-single-3.html"
                        className="btn-link text-reset fw-bold"
                      >
                        Dirty little secrets about the business industry
                      </a>
                    </h6>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
          </div>
          {/* World politics END */}
          {/* Business Sidebar START */}
          <div className="col-lg-4">
            <h4 className="mb-3">Business</h4>
            <div className="bg-light">
              <div className="card bg-light">
                <div className="card-body">
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
                      className="btn-link stretched-link text-reset"
                    >
                      The 15 reasons clients love Bootstrap
                    </a>
                  </h4>
                </div>
                {/* Card image */}
                <img
                  src="assets/images/blog/16by9/small/04.jpg"
                  className="grayscale rounded-0"
                  alt="Card image"
                />
              </div>
              <div className="card card-body bg-light mt-3">
                <h6 className="card-title">
                  <a
                    href="post-single-3.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    10 tell-tale signs you need to get a new business
                  </a>
                </h6>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div className="d-flex align-items-center position-relative">
                      <span>
                        by{" "}
                        <a href="#" className="text-reset btn-link">
                          Samuel
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="nav-item">Jan 22, 2022</li>
                </ul>
                <div className="border-bottom border-secondary opacity-2 mb-0 mt-2" />
              </div>
              <div className="card card-body bg-light">
                <h6 className="card-title">
                  <a
                    href="post-single-3.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    This is why this year will be the year of startups
                  </a>
                </h6>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div className="d-flex align-items-center position-relative">
                      <span>
                        by{" "}
                        <a href="#" className="text-reset btn-link">
                          Lori
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="nav-item">Feb 10, 2022</li>
                </ul>
                <div className="border-bottom border-secondary opacity-2 mb-0 mt-2" />
              </div>
              <div className="card card-body bg-light">
                <h6 className="card-title">
                  <a
                    href="post-single-3.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    Best Pinterest Boards for learning about business
                  </a>
                </h6>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div className="d-flex align-items-center position-relative">
                      <span>
                        by{" "}
                        <a href="#" className="text-reset btn-link">
                          Joan
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="nav-item">Feb 28, 2022</li>
                </ul>
                <div className="border-bottom border-secondary opacity-2 mb-0 mt-2" />
              </div>
              <div className="card card-body bg-light">
                <h6 className="card-title">
                  <a
                    href="post-single-3.html"
                    className="btn-link text-reset stretched-link fw-bold"
                  >
                    12 worst types of business accounts you follow on Twitter
                  </a>
                </h6>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                  <li className="nav-item">
                    <div className="d-flex align-items-center position-relative">
                      <span>
                        by{" "}
                        <a href="#" className="text-reset btn-link">
                          Bryan
                        </a>
                      </span>
                    </div>
                  </li>
                  <li className="nav-item">Apr 22, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Business Sidebar END */}
        </div>
      </div>
    </section>
    {/* =======================
World politics and Business Sidebar END */}
    {/* =======================
Divider START */}
    <div className="container">
      <div className="border-bottom border-secondary opacity-2 mb-0 mt-2" />
    </div>
    {/* =======================
Divider START */}
    {/* =======================
Sports, most read and Entertainment START */}
    <section className="pt-4 pt-sm-5 pb-3 pb-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Title */}
            <h4 className="mb-3">Sports</h4>
            {/* Card Item START */}
            <div className="card mb-3">
              <div className="row g-3">
                <div className="col-4">
                  {/* Card image */}
                  <img
                    className="rounded-0 grayscale"
                    src="assets/images/blog/4by3/thumb/01.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h6>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset"
                    >
                      How 10 worst business fails of all time could have been
                      prevented
                    </a>
                  </h6>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center mt-3 small">
                    <li className="nav-item">Jan 20, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Item END */}
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  Ten tell-tale signs you need to get a new startup.
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Feb 10, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
            {/* Divider  */}
            <div className="border-bottom border-secondary opacity-2 mt-2 mb-2" />
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  Dirty little secrets about the business industry
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Mar 30, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
            {/* Divider  */}
            <div className="border-bottom border-secondary opacity-2 mt-2 mb-2" />
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  Bad habits that people in the industry need to quit
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Mar 23, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
          </div>
          <div className="col-md-4">
            {/* Title */}
            <h4 className="mb-3">Most read</h4>
            {/* Card Item START */}
            <div className="card mb-3">
              <div className="row g-3">
                <div className="col-4">
                  {/* Card image */}
                  <img
                    className="rounded-0 grayscale"
                    src="assets/images/blog/4by3/thumb/02.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h6>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset"
                    >
                      Around the web: 20 fabulous infographics about business
                    </a>
                  </h6>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center mt-3 small">
                    <li className="nav-item">Dec 12, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Item END */}
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  Bad habits that people in the industry need to quit
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Nov 14, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
            <div className="border-bottom border-secondary opacity-2 mt-2 mb-2" />
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  7 common mistakes everyone makes while traveling
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Mar 23, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
            {/* Divider  */}
            <div className="border-bottom border-secondary opacity-2 mt-2 mb-2" />
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  This is why this year will be the year of startups
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Jan 14, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
          </div>
          <div className="col-md-4">
            {/* Title */}
            <h4 className="mb-3">Entertainment</h4>
            {/* Card Item START */}
            <div className="card mb-3">
              <div className="row g-3">
                <div className="col-4">
                  {/* Card image */}
                  <img
                    className="rounded-0 grayscale"
                    src="assets/images/blog/4by3/thumb/03.jpg"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h6>
                    <a
                      href="post-single-5.html"
                      className="btn-link stretched-link text-reset"
                    >
                      Ten tips about startups that you can't learn from books
                    </a>
                  </h6>
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center mt-3 small">
                    <li className="nav-item">Feb 15, 2022</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Card Item END */}
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  Never underestimate the influence of social media
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Dec 05, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
            {/* Divider  */}
            <div className="border-bottom border-secondary opacity-2 mt-2 mb-2" />
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  8 initial problem of startups and their solution
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Nov 08, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
            {/* Divider  */}
            <div className="border-bottom border-secondary opacity-2 mt-2 mb-2" />
            {/* Card Item START */}
            <div className="card mb-3">
              <h6>
                <a
                  href="post-single-5.html"
                  className="btn-link stretched-link text-reset"
                >
                  Business ideas that will boom in upcoming years
                </a>
              </h6>
              {/* Card info */}
              <ul className="nav nav-divider align-items-center mt-1 small">
                <li className="nav-item">Aug 20, 2022</li>
              </ul>
            </div>
            {/* Card Item END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Sports, most read and Entertainment END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
  {/* =======================
Divider START */}
  <div className="border-bottom border-secondary opacity-2 mb-0 mt-2" />
  {/* =======================
Divider END */}
  {/* =======================
Footer START */}
  <footer className="pt-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-sm-6 col-lg-3">
          <h5 className="mb-3">Navigation</h5>
          <div className="row">
            {/* Footer Widget */}
            <div className="col-sm-6">
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
            {/* Footer Widget */}
            <div className="col-sm-6">
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
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="row g-4">
            {/* Footer Widget */}
            <div className="col-sm-6">
              <h5 className="mb-3">Option</h5>
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
            {/* Footer Widget */}
            <div className="col-sm-6">
              <h5 className="mb-3">Follow us</h5>
              {/* Item */}
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link pt-0" href="#">
                    <i className="fab fa-whatsapp fa-fw me-1" />
                    WhatsApp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fab fa-youtube fa-fw me-1" />
                    YouTube
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="far fa-envelope fa-fw me-1" />
                    Newsletters
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fas fa-headphones-alt fa-fw me-1" />
                    Podcasts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Footer Widget */}
        <div className="col-sm-6 col-md-3">
          <h5 className="mb-3">Recent post</h5>
          {/* Item */}
          <div className="mb-3 position-relative">
            <a
              href="post-single-3.html"
              className="btn-link text-secondary fw-normal"
            >
              Up-coming business bloggers, you need to watch
            </a>
            <ul className="nav nav-divider align-items-center small mt-2">
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
          <div className="mb-3 position-relative">
            <a
              href="post-single-3.html"
              className="btn-link text-secondary fw-normal"
            >
              How did we get here? The history of the business told through
              tweets
            </a>
            <ul className="nav nav-divider align-items-center small mt-2">
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
        <div className="col-sm-6 col-lg-3">
          <h5 className="mb-4">Our mobile App</h5>
          <p>
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
      <div className="border-bottom border-secondary opacity-2 mb-0 mt-4" />
      <div className="row align-items-center justify-content-md-between py-2">
        <div className="col-md-6">
          {/* Copyright */}
          <div className="text-center text-md-start">
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
              className="dropdown-toggle text-body"
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
          <ul className="nav text-center text-sm-end justify-content-center justify-content-center mt-3 mt-md-0">
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
  </footer>
  {/* =======================
Footer END */}
  {/* Back to top */}
  <div className="back-top grayscale">
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