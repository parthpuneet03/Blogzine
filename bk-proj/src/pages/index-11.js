export default function index_11(){
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
  {/* Offcanvas START */}
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasMenu">
    {/* Offcanvas header */}
    <div className="offcanvas-header justify-content-between border-bottom px-3">
      <h3 className="mb-0">Your Cart</h3>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    {/* Offcanvas body */}
    <div className="offcanvas-body d-flex flex-column px-3">
      <div className="row g-3">
        {/* Image */}
        <div className="col-3">
          <img
            className="rounded-2 bg-light p-2"
            src="assets/images/shop/02.png"
            alt="avatar"
          />
        </div>
        <div className="col-6">
          <h6 className="mb-1">Osprey Packs Backpack</h6>
          <div className="d-flex justify-content-between">
            <h6 className="mb-0 text-success">$103</h6>
            <a href="#" className="btn btn-sm btn-link">
              Remove
            </a>
          </div>
        </div>
        <div className="col-3">
          {/* Select item */}
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option value={1}>01</option>
            <option value={2}>02</option>
            <option value={3}>03</option>
          </select>
        </div>
      </div>
      {/* Button and price */}
      <div className="mt-auto">
        <div className="d-flex justify-content-between mb-2">
          <h6 className="mb-0">Subtotal</h6>
          <h5 className="text-success mb-0">$103</h5>
        </div>
        {/* Button */}
        <div className="d-grid">
          <a href="checkout.html" className="btn btn-lg btn-primary-soft mb-0">
            Continue to Checkout
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Offcanvas END */}
  {/* =======================
Header START */}
  <header className="navbar-light navbar-sticky header-static">
    {/* Logo Nav START */}
    <nav className="navbar navbar-expand-xl">
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
                  placeholder="Search the products"
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
                  <a className="dropdown-item active" href="index-11">
                    Home Shop{" "}
                  </a>
                </li>
              </ul>
            </li>
            {/* Nav item 2 shop all */}
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="shop-grid.html">
                Shop all
              </a>
            </li>
            {/* Nav item 3 pages */}
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
            {/* Nav item 4 link*/}
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="contact-us.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Main navbar END */}
        <div className="nav flex-nowrap align-items-center ms-3 ms-lg-4">
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
          {/* Offcanvas menu toggler */}
          <div className="nav-item position-relative ms-3">
            <a
              className="nav-link btn btn-light btn-round mb-0"
              data-bs-toggle="offcanvas"
              href="#offcanvasMenu"
              role="button"
              aria-controls="offcanvasMenu"
            >
              <i
                className="bi bi-cart3 fa-fw"
                data-bs-target="#offcanvasMenu"
              />
            </a>
            <span className="position-absolute top-0 start-100 translate-middle badge smaller rounded-circle bg-dark mt-xl-2 ms-n1">
              2<span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
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
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Slider START */}
            <div className="tiny-slider tns-nav-line rounded-3">
              <div
                className="tiny-slider-inner"
                data-autoplay="true"
                data-hoverpause="true"
                data-arrow="false"
                data-dots="true"
                data-items={1}
              >
                {/* Slider Item START */}
                <div>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <h2 className="display-5">
                        AB Camera Foldable RC Drone Quadcopter{" "}
                      </h2>
                      <p>
                        For who thoroughly her boy estimating conviction.
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected
                      </p>
                      {/* Rating star */}
                      <ul className="list-inline">
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star-half-alt text-warning" />
                        </li>
                        <li className="list-inline-item me-0 h6">4.5/5.0</li>
                      </ul>
                      {/* Buttons & Price */}
                      <div className="hstack gap-4 align-items-center">
                        <a href="#" className="btn btn-primary mb-0">
                          <i className="bi bi-cart2 me-2" />
                          Add to cart
                        </a>
                        <h4 className="text-success mb-0">$568.00</h4>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="col-md-6">
                      <img src="assets/images/shop/11.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* Slider Item END */}
                {/* Slider Item START */}
                <div>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <h2 className="display-5">
                        Herschel luggage bag in gray
                      </h2>
                      <p>
                        For who thoroughly her boy estimating conviction.
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected
                      </p>
                      {/* Buttons & Price */}
                      <a href="#" className="btn btn-primary mb-0">
                        View this product
                      </a>
                      {/* Rating */}
                      <div className="d-flex mt-4">
                        <div className="icon-md rounded text-bg-warning">
                          <i className="fas fa-star text-white" />
                        </div>
                        <div className="ms-3">
                          <h5 className="mb-0">4.5 / 5.0</h5>
                          <small>More than 10K+ USers</small>
                        </div>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="col-md-6">
                      <img src="assets/images/shop/09.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* Slider Item END */}
                {/* Slider Item START */}
                <div>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                      <h2 className="display-5">Nike Air Jordan V Mid</h2>
                      <p>
                        For who thoroughly her boy estimating conviction.
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected
                      </p>
                      {/* Rating star */}
                      <ul className="list-inline">
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star text-warning" />
                        </li>
                        <li className="list-inline-item me-0">
                          <i className="fas fa-star-half-alt text-warning" />
                        </li>
                        <li className="list-inline-item me-0 h6">4.5/5.0</li>
                      </ul>
                      {/* Buttons & Price */}
                      <div className="hstack gap-4 align-items-center">
                        <a href="#" className="btn btn-primary mb-0">
                          <i className="bi bi-cart2 me-2" />
                          Add to cart
                        </a>
                        <h4 className="text-success mb-0">$185.00</h4>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="col-md-6">
                      <img src="assets/images/shop/10.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* Slider Item END */}
              </div>
            </div>
            {/* Slider END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Main hero END */}
    {/* =======================
Features END */}
    <section>
      <div className="container">
        <div className="row g-4 g-xl-5">
          {/* Title */}
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex align-items-center">
              <div className="icon-lg fs-4 text-success bg-success bg-opacity-10 rounded flex-shrink-0">
                {" "}
                <i className="bi bi-piggy-bank" />{" "}
              </div>
              <h6 className="mb-0 ms-3">Saving Your Money to be useful</h6>
            </div>
          </div>
          {/* Title */}
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex align-items-center">
              <div className="icon-lg fs-4 text-warning bg-warning bg-opacity-15 rounded flex-shrink-0">
                {" "}
                <i className="bi bi-truck" />{" "}
              </div>
              <h6 className="mb-0 ms-3">Fast delivery to save your time</h6>
            </div>
          </div>
          {/* Title */}
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex align-items-center">
              <div className="icon-lg fs-4 text-danger bg-danger bg-opacity-10 rounded flex-shrink-0">
                {" "}
                <i className="bi bi-lightning-charge" />{" "}
              </div>
              <h6 className="mb-0 ms-3">You can order very quickly</h6>
            </div>
          </div>
          {/* Title */}
          <div className="col-sm-6 col-lg-3">
            <div className="d-flex align-items-center">
              <div className="icon-lg fs-4 text-info bg-info bg-opacity-10 rounded flex-shrink-0">
                {" "}
                <i className="bi bi-emoji-smile" />{" "}
              </div>
              <h6 className="mb-0 ms-3">
                Customer Satisfaction is more important
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Features END */}
    {/* =======================
Category START */}
    <section className="pt-0 pt-md-5">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            {/* Title */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="m-0">Select Categories</h3>
              <a href="#" className="text-body small">
                <u>View all</u>
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
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/shop/01.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">
                        <a href="#" className="stretched-link">
                          Camera Gear
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/shop/02.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">
                        <a href="#" className="stretched-link">
                          Electronics Gear
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/shop/03.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">
                        <a href="#" className="stretched-link">
                          Basic Travel Gear
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/shop/04.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">
                        <a href="#" className="stretched-link">
                          Guide Book
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/shop/05.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">
                        <a href="#" className="stretched-link">
                          Photo Presets
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Category item */}
                <div>
                  <div className="card bg-transparent">
                    <img
                      className="card-img"
                      src="assets/images/shop/06.jpg"
                      alt="card image"
                    />
                    <div className="card-body ps-0">
                      <h5 className="mb-0">
                        <a href="#" className="stretched-link">
                          Hiking &amp; Campaign
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
Category END */}
    {/* =======================
Best selling product START */}
    <section className="pt-0 pt-md-5">
      <div className="container">
        {/* Title */}
        <div className="d-sm-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Our Best Selling Products</h2>
          <a href="#" className="text-body small">
            <u>View all</u>
          </a>
        </div>
        {/* Product START */}
        <div className="row g-4">
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              <div className="position-relative">
                {/* Image */}
                <a
                  href="shop-detail.html"
                  className="position-relative z-index-9"
                >
                  <img
                    className="card-img"
                    src="assets/images/shop/02.png"
                    alt=""
                  />
                </a>
                {/* Overlay */}
                <div className="card-img-overlay p-0">
                  <span className="badge text-bg-success">New Arrival</span>
                </div>
              </div>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">Osprey Packs Backpack</a>
                </h5>
                <h6 className="mb-0 text-success">$103.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/03.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">Plain Colored T-Shirts</a>
                </h5>
                <h6 className="mb-0 text-success">$85.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/04.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">Men's Watertight Jacket</a>
                </h5>
                <h6 className="mb-0 text-success">$98.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/08.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">Hiking Pants</a>
                </h5>
                <h6 className="mb-0 text-success">$105.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/06.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">Classic Boat Shoes</a>
                </h5>
                <div className="d-flex align-items-center justify-content-center">
                  <h6 className="text-success mb-0 me-2">$75.00</h6>
                  <small className="text-decoration-line-through">$95.00</small>
                </div>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/07.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">Backpacking Stove</a>
                </h5>
                <h6 className="mb-0 text-success">$81.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/05.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="#">Sigma DN Lens</a>
                </h5>
                <h6 className="mb-0 text-success">$70.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
          {/* Product item START */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border p-3 h-100">
              {/* Image */}
              <a href="shop-detail.html">
                <img
                  className="card-img"
                  src="assets/images/shop/01.png"
                  alt=""
                />
              </a>
              {/* Card body */}
              <div className="card-body text-center p-3 px-0">
                {/* Badge and price */}
                <div className="d-flex justify-content-center mb-2">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star text-warning" />
                    </li>
                    <li className="list-inline-item me-0 small">
                      <i className="fas fa-star-half-alt text-warning" />
                    </li>
                  </ul>
                </div>
                {/* Title */}
                <h5 className="card-title">
                  <a href="shop-detail.html">2 Person Tent</a>
                </h5>
                <h6 className="mb-0 text-success">$250.00</h6>
              </div>
              {/* Card footer */}
              <div className="card-footer text-center p-0">
                {/* Button */}
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="bi bi-cart me-2" />
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          {/* Product item END */}
        </div>
        {/* Product END */}
      </div>
    </section>
    {/* =======================
Best selling product END */}
    {/* =======================
Adv START */}
    <section className="pt-0 pt-md-5">
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
Presets START */}
    <section className="pt-0 pt-md-5">
      <div className="container">
        <div className="row g-4">
          {/* Title */}
          <div className="col-md-3">
            <h2>Amazing Photo Presets</h2>
            <p>
              Drawings offended yet answered Jennings perceive laughing six did
              far.
            </p>
            <a href="#" className="btn btn-dark mb-0">
              View all preset
            </a>
          </div>
          {/* Slider item START */}
          <div className="col-md-9">
            <div className="tiny-slider arrow-hover arrow-dark arrow-blur arrow-round">
              <div
                className="tiny-slider-inner"
                data-autoplay="false"
                data-hoverpause="true"
                data-gutter={24}
                data-edge={2}
                data-arrow="true"
                data-dots="false"
                data-items-xl={3}
                data-items-lg={2}
                data-items-xs={1}
              >
                {/* Slider item START */}
                <div>
                  <div className="card border">
                    {/* Image */}
                    <div className="position-relative">
                      <img
                        className="card-img-top"
                        src="assets/images/shop/14.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay d-flex">
                        <div className="w-100 mt-auto">
                          <span className="badge fs-6 text-bg-success">
                            $25.00
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="shop-detail.html" className="stretched-link">
                          5x Urban Moody Presets
                        </a>
                      </h5>
                      <p className="mb-3">
                        Rooms oh fully Points afraid but may end law lasted.
                      </p>
                      <h6 className="mb-0">
                        <i className="bi bi-patch-check text-primary me-2" />
                        For Mobile &amp; Computer
                      </h6>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pb-3 d-grid">
                      <a href="#" className="btn btn-sm btn-dark mb-0">
                        See Presets
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slider item END */}
                {/* Slider item START */}
                <div>
                  <div className="card border">
                    {/* Image */}
                    <div className="position-relative">
                      <img
                        className="card-img-top"
                        src="assets/images/shop/15.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay d-flex">
                        <div className="w-100 mt-auto">
                          <span className="badge fs-6 text-bg-success">
                            $30.00
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="shop-detail.html" className="stretched-link">
                          6x Green Moody Presets
                        </a>
                      </h5>
                      <p className="mb-3">
                        {" "}
                        Luckily cheered colonel I do we enabled.
                      </p>
                      <h6 className="mb-0">
                        <i className="bi bi-patch-check text-primary me-2" />
                        For Mobile &amp; Computer
                      </h6>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pb-3 d-grid">
                      <a href="#" className="btn btn-sm btn-dark mb-0">
                        See Presets
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slider item END */}
                {/* Slider item START */}
                <div>
                  <div className="card border">
                    {/* Image */}
                    <div className="position-relative">
                      <img
                        className="card-img-top"
                        src="assets/images/shop/16.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay d-flex">
                        <div className="w-100 mt-auto">
                          <span className="badge fs-6 text-bg-success">
                            Free
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="shop-detail.html" className="stretched-link">
                          Polaroid Photo Print
                        </a>
                      </h5>
                      <p className="mb-3">
                        Was out laughter raptures returned outweigh.
                      </p>
                      <h6 className="mb-0">
                        <i className="bi bi-patch-check text-primary me-2" />
                        For Mobile Only
                      </h6>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pb-3 d-grid">
                      <a href="#" className="btn btn-sm btn-dark mb-0">
                        See Presets
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slider item END */}
                {/* Slider item START */}
                <div>
                  <div className="card border">
                    {/* Image */}
                    <div className="position-relative">
                      <img
                        className="card-img-top"
                        src="assets/images/shop/17.jpg"
                        alt=""
                      />
                      <div className="card-img-overlay d-flex">
                        <div className="w-100 mt-auto">
                          <span className="badge fs-6 text-bg-success">
                            $25.00
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Card body */}
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="shop-detail.html" className="stretched-link">
                          Earthy tones Video luts
                        </a>
                      </h5>
                      <p className="mb-3">
                        Rooms oh fully Points afraid but may end law lasted.
                      </p>
                      <h6 className="mb-0">
                        <i className="bi bi-patch-check text-primary me-2" />
                        For Mobile &amp; Computer
                      </h6>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pb-3 d-grid">
                      <a href="#" className="btn btn-sm btn-dark mb-0">
                        See Presets
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slider item END */}
              </div>
            </div>
          </div>
          {/* Slider item END */}
        </div>
      </div>
    </section>
    {/* =======================
Presets END */}
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
          <h5 className="mb-4 text-white">Our Mobile App</h5>
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