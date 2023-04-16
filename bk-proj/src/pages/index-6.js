export default function index_6(){
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
  {/* =======================
Header START */}
  <header className="navbar-light header-static">
    {/* Logo Nav START */}
    <nav className="navbar navbar-expand-lg navbar-vertical-compact flex-column bg-dark vh-100">
      {/* Logo START */}
      <a className="navbar-brand me-0" href="/">
        <img
          className="navbar-brand-item light-mode-item"
          src="assets/images/logo-icon.svg"
          alt="logo"
        />
        <img
          className="navbar-brand-item dark-mode-item"
          src="assets/images/logo-icon.svg"
          alt="logo"
        />
      </a>
      {/* Logo END */}
      <div className="w-100 border-top border-white opacity-1" />
      {/* Nav right START */}
      <div className="nav flex-column align-items-center w-100 py-3">
        {/* Offcanvas menu toggler */}
        <div className="nav-item">
          <a
            className="nav-link text-white p-0"
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
      <div className="w-100 mt-auto">
        <div className="border-top border-white opacity-1" />
        <div className="nav flex-column align-items-center py-4 gap-4">
          {/* Nav Search */}
          <div className="nav-item nav-search">
            <a
              className="nav-link text-white pe-0"
              role="button"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="bi bi-search fs-4"> </i>
            </a>
          </div>
          {/* Dark mode options START */}
          <div className="dropdown dropup mx-2">
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
                className="bi bi-circle-half theme-icon-active fa-fw"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                <use href="#" />
              </svg>
            </a>
            <ul className="dropdown-menu min-w-auto" aria-labelledby="bd-theme">
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
      </div>
    </nav>
    {/* Logo Nav END */}
  </header>
  {/* =======================
Header END */}
  {/* Modal Search START */}
  <div className="modal fade" id="searchModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content">
        {/* Modal header */}
        <div className="modal-header border-0 pt-sm-5 pe-sm-5">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="row align-items-center h-100">
            <div className="col-lg-5 mx-auto mb-5">
              <h2 className="mb-4">Search stories from Blogzine</h2>
              {/* Search form START */}
              <form className="position-relative w-100">
                <div className="mb-2 input-group-lg mb-0">
                  {/* Search input */}
                  <input
                    className="form-control mb-0 pe-6"
                    type="text"
                    name="search"
                    placeholder="What are you looking for?"
                  />
                </div>
                {/* Search button */}
                <button
                  type="button"
                  className="position-absolute end-0 top-0 btn h-100 border-0"
                >
                  <i className="bi bi-search display-8" />
                </button>
              </form>
              {/* Search form END */}
              <p className="small mb-0">
                e.g. Template, Bootstrap, Blog theme{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search END */}
  {/* Offcanvas START */}
  <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasMenu">
    <div className="offcanvas-header justify-content-end pb-0">
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
  {/* **************** MAIN CONTENT START **************** */}
  <main className="spilt-content">
    {/* =======================
  Main content START */}
    <section className="card-grid pt-0 pb-0">
      <div className="container-fluid ps-lg-0">
        <div className="spilt-fixed bg-primary bg-opacity-10 vh-100 p-2 p-sm-5 text-center">
          {/* Author profile image */}
          <img src="assets/images/avatar/big/01.jpg" alt="" />
          {/* Author profile info */}
          <div className="p-2 p-sm-4">
            <h2 className="m-0 h1">Louis Ferguson</h2>
            <small>Blogger | Author | A father | Influencer</small>
            <p className="my-2">
              Louis Ferguson is a senior editor for the blogzine and also
              reports on breaking news based in London.
            </p>
            {/* Social START */}
            <ul className="nav justify-content-center">
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
            {/* Social END */}
          </div>
        </div>
        <div className="py-5">
          <div className="row g-4">
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Mar 07, 2022</li>
                    <li className="nav-item">5 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      7 common mistakes everyone makes
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Called isn't green male Beginning day behold gathering day
                    earth Very hath shall.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Aug 28, 2022</li>
                    <li className="nav-item">10 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      Skills that you can learn from business
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Dry that darkness meat unto Thing spirit his fifth likeness
                    divided also seed lesser.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Jun 01, 2022</li>
                    <li className="nav-item">6 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      15 reasons to choose startup
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Green male Beginning day behold gathering day earth Very
                    hath shall very abundantly.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
                    src="assets/images/blog/4by3/10.jpg"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Dec 29, 2022</li>
                    <li className="nav-item">5 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      The pros and cons of business agency
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Coved night own was said Likeness evening Dominion i our
                    Great blessed and hath.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
                    src="assets/images/blog/4by3/11.jpg"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Aug 15, 2022</li>
                    <li className="nav-item">10 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      5 reasons why you shouldn't startup
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Beginning day behold gathering day earth Very hath shall
                    very abundantly face midst.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
                    src="assets/images/blog/4by3/12.jpg"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Feb 14, 2022</li>
                    <li className="nav-item">30 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      Five unbelievable facts about money.
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Subdue Made beast their life moving heaven heaven divide two
                    sea female great.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-12">
              <a href="#" className="d-block card-img-flash">
                <img src="assets/images/adv-3.png" alt="" />
              </a>
              <small className="text-end d-block mt-1">Advertisement</small>
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
                    src="assets/images/blog/4by3/13.jpg"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Apr 02, 2022</li>
                    <li className="nav-item">26 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      Ten questions you should answer truthfully.
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Bring over fruit don't morning unto Don't can't air Shall
                    fruit life made fly.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
                    src="assets/images/blog/4by3/14.jpg"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Jan 24, 2022</li>
                    <li className="nav-item">08 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      Best Pinterest boards for learning about business.
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    Lights made wherein beginning subdue called isn't green male
                    Beginning day behold.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-sm-6 col-xxl-4">
              {/* Card item START */}
              <div className="card text-center">
                {/* Card img */}
                <div className="position-relative">
                  <img
                    className="card-img rounded-0"
                    src="assets/images/blog/4by3/15.jpg"
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
                  {/* Card info */}
                  <ul className="nav nav-divider align-items-center d-none d-sm-inline-block mb-3">
                    <li className="nav-item">Jun 23, 2022</li>
                    <li className="nav-item">30 min read</li>
                  </ul>
                  {/* Card Title */}
                  <h5 className="card-title">
                    <a
                      href="post-single-3.html"
                      className="btn-link text-reset fw-bold"
                    >
                      10 tell-tale signs you need to get a new business
                    </a>
                  </h5>
                  {/* Card short dec */}
                  <p>
                    To don't may give void forth created fruitful bearing
                    creepeth fish god.
                  </p>
                </div>
              </div>
              {/* Card item END */}
            </div>
            <div className="col-12">
              {/* Pagination START */}
              <nav
                className="mt-4 d-flex justify-content-center"
                aria-label="navigation"
              >
                <ul className="pagination flex-wrap justify-content-center pagination-bordered mb-0">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      ..
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      15
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Pagination END */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* =======================
  Main content END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
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