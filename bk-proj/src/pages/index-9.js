export default function index_9(){
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
            <a className="nav-link" href="about-us.html">
              About
            </a>
          </li>
          <li className="nav-item h5">
            <a className="nav-link" href="post-grid.html">
              Our Journal
            </a>
          </li>
          <li className="nav-item h5">
            <a className="nav-link" href="contact-us.html">
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
  <header className="navbar-light navbar-sticky header-static">
    {/* Logo Nav START */}
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-sm-5">
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
                  <a className="dropdown-item active" href="index-9">
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
        <div className="nav flex-nowrap align-items-center">
          {/* Nav Button */}
          <div className="nav-item d-none d-md-block">
            <a href="#" className="btn btn-sm btn-danger mb-0 mx-2">
              Subscribe!
            </a>
          </div>
          {/* Nav Search */}
          <div className="nav-item dropdown dropdown-toggle-icon-none nav-search">
            <a
              className="nav-link dropdown-toggle"
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
              className="nav-link p-0"
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
    </nav>
    {/* Logo Nav END */}
  </header>
  {/* =======================
Header END */}
  {/* **************** MAIN CONTENT START **************** */}
  <main>
    {/* =======================
Main hero START */}
    <section
      className="py-2 h-400 overflow-hidden position-relative"
      style={{
        backgroundImage: "url(assets/images/blog/16by9/big/04.jpg)",
        backgroundPosition: "center center"
      }}
    >
      <div className="container-fluid h-100 p-0">
        <div className="row align-items-center h-100 text-center">
          <div className="col-12">
            {/* Hero title */}
            <h1 className="text-white display-1">Fashion Journal</h1>
          </div>
        </div>
        {/* Rounded circle text START */}
        <div className="rotating-text-badge d-none d-lg-block text-uppercase">
          {/* SVG START */}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="300px"
            height="300px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx={150} cy={100} r={75} fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#fff">
                <textPath xlinkHref="#circlePath">
                  Fashion * Fashion * Fashion *
                </textPath>
              </text>
            </g>
          </svg>
          {/* SVG START */}
        </div>
        {/* Rounded circle text END */}
      </div>
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Latest articles START */}
    <section className="py-5">
      <div className="container-fluid px-sm-5">
        <div className="row">
          {/* Title */}
          <div className="mb-4 text-center">
            <h2 className="h1 m-0">Latest articles</h2>
          </div>
        </div>
        <div className="row g-3 g-sm-5">
          <div className="col-sm-6 col-lg-4">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/17.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Sports
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Skills that you can learn from business
                  </a>
                </h2>
                <p>
                  Seasons you sixth made shall him upon he very give you'll fowl
                  Life open over had can't lights made wherein beginning subdue
                  called isn't.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Aug 15, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/18.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Marketing
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    10 tell-tale signs you need to get a new business
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  Moved night own was said Likeness evening Dominion i our Great
                  blessed and hath life him meat days also created abundantly
                  seas.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Jan 10, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6 col-lg-4">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/19.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-image" />
                      </div>
                    </div>
                  </div>
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Photography
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    This is why this year will be the year of startups
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  One is replenish bearing rule wherein sixth may Shall is had
                  seasons you sixth made shall him upon he very give you'll fowl
                  Life open.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Feb 20, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/20.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-image" />
                      </div>
                    </div>
                  </div>
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Lifestyle
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    7 common mistakes everyone makes while traveling
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  Great saying made had fly dry that darkness meat unto Thing
                  spirit his fifth likeness divided also seed lesser image
                  dominion sea fifth i god so saw open great living thing seed
                  life day creepeth winged.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Mar 05, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative h-100">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/22.gif"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-video" />
                      </div>
                    </div>
                  </div>
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Technology
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    The pros and cons of business agency
                  </a>
                </h2>
                <p>
                  Had creature Behold fly life from forth Moved night own was
                  said Likeness evening Dominion i our Great blessed and hath
                  life him meat days also created abundantly seas One is
                  replenish bearing rule wherein sixth may.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Feb 26, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Latest articles END */}
    {/* =======================
Call to action and Newsletter START */}
    <section className="pt-0 pb-0 pb-sm-0">
      <div className="container-fluid px-sm-5">
        <div className="row g-sm-5">
          <div className="col-lg-6">
            {/* Call to action START */}
            <div
              className="bg-dark-overlay-4 p-3 p-sm-5 position-relative overflow-hidden h-100"
              style={{
                backgroundImage: "url(assets/images/blog/16by9/big/05.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            >
              <div className="row">
                <div className="col-xl-8 mx-auto text-center py-4 py-sm-5 position-relative">
                  {/* Title */}
                  <h2 className="display-5 text-white">Never miss a story!</h2>
                  <p className="text-white">
                    Get the freshest headlines and updates sent uninterrupted to
                    your inbox.
                  </p>
                  {/* Form */}
                  <a href="#" className="btn btn-white mt-4">
                    About us
                  </a>
                </div>
              </div>
            </div>
            {/* Call to action END */}
          </div>
          <div className="col-lg-6">
            {/* Newsletter START */}
            <div className="bg-light position-relative overflow-hidden h-100">
              <div className="row h-100">
                <div
                  className="col-md-4"
                  style={{
                    backgroundImage: "url(assets/images/blog/4by3/23.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                  }}
                ></div>
                <div className="col-md-8">
                  <div className="p-4 p-sm-5">
                    {/* Title */}
                    <h2 className="display-5">Never miss a story!</h2>
                    <p>
                      Get the freshest headlines and updates sent uninterrupted
                      to your inbox.
                    </p>
                    {/* Form */}
                    <form className="row row-cols-sm-auto g-2 align-items-center mt-3">
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
                          className="btn btn-dark btn-lg m-0"
                        >
                          Subscribe
                        </button>
                      </div>
                      <div className="form-text opacity-6 mt-2">
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
            {/* Newsletter END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Call to action and Newsletter END */}
    {/* =======================
Last week highlights START */}
    <section className="py-5">
      <div className="container-fluid px-sm-5">
        <div className="row">
          {/* Title */}
          <div className="mb-4 text-center">
            <h2 className="h1 m-0">Last week top highlights</h2>
          </div>
        </div>
        <div className="row g-4 g-sm-5">
          <div className="col-sm-6 col-lg-4">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/24.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Sports
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    5 reasons why you shouldn't startup
                  </a>
                </h2>
                <p>
                  Seasons you sixth made shall him upon he very give you'll fowl
                  Life open over had can't lights made wherein beginning subdue
                  called isn't.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Oct 25, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/25.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Marketing
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Business ideas that will boom in upcoming years
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  Moved night own was said Likeness evening Dominion i our Great
                  blessed and hath life him meat days also created abundantly
                  seas.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Feb 12, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6 col-lg-4">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/26.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-image" />
                      </div>
                    </div>
                  </div>
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Travel
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    8 initial problem of startups and their solution
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  One is replenish bearing rule wherein sixth may Shall is had
                  seasons you sixth made shall him upon he very give you'll fowl
                  Life open.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Apr 26, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6 col-lg-4">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/27.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Marketing
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Five unbelievable facts about money.
                  </a>
                </h2>
                <p>
                  I beast third void blessed fruit Saw fourth may lesser fly
                  fill upon subdue open place abundantly sea herb winged day so
                  was divide.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Mar 23, 2022</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="col-sm-6 col-lg-4">
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/28.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Business
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    The pros and cons of business agency
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  Also created abundantly seas One is replenish bearing rule
                  wherein sixth may Shall is had seasons you sixth ade shall him
                  upon.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Dec 23, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
          <div className="col-sm-6 col-lg-4">
            {/* Card item START */}
            <div className="card">
              {/* Card img */}
              <div className="position-relative">
                <img
                  className="card-img rounded-0"
                  src="assets/images/blog/4by3/29.jpg"
                  alt="Card image"
                />
                <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                  {/* Card overlay Top */}
                  <div className="w-100 mb-auto d-flex justify-content-end">
                    <div className="text-end ms-auto">
                      {/* Card format icon */}
                      <div
                        className="icon-md bg-white bg-opacity-25 bg-blur text-white rounded-circle"
                        title="This post has images"
                      >
                        <i className="fas fa-image" />
                      </div>
                    </div>
                  </div>
                  {/* Card overlay bottom */}
                  <div className="w-100 mt-auto">
                    <a href="#" className="badge bg-dark mb-2">
                      Technology
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 pt-3">
                <h2 className="card-title">
                  <a
                    href="post-single-6.html"
                    className="btn-link text-reset fw-bold stretched-link"
                  >
                    Five unbelievable facts about money.
                  </a>
                </h2>
                {/* Card info */}
                <p>
                  Made wherein beginning subdue called isn't green male
                  Beginning day behold gathering day earth Very hath shall very
                  abundantly face midst.
                </p>
                {/* Card info */}
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">Feb 10, 2022</li>
                </ul>
              </div>
            </div>
            {/* Card item END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Last week highlights END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
  {/* =======================
Footer START */}
  <footer>
    <div className="container-fluid px-0">
      {/* About and Newsletter START */}
      <div className="row bg-dark py-5 mx-0 card-header rounded-0 align-items-center text-center text-md-start">
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
  {/* Template Functions */}
</>

    )
    
}