export default function(){
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
    href="assets/vendor/apexcharts/css/apexcharts.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="assets/vendor/quill/css/quill.snow.css"
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
  <header className="navbar-light navbar-sticky header-static border-bottom navbar-dashboard">
    {/* Logo Nav START */}
    <nav className="navbar navbar-expand-xl">
      <div className="container">
        {/* Logo START */}
        <a className="navbar-brand me-3" href="/">
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
            <li className="nav-item">
              <a className="nav-link" href="dashboard">
                <i className="bi bi-house-door me-1" />
                Dashboard
              </a>
            </li>
            {/* Nav item 2 Post */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="postMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-pencil me-1" />
                Post
              </a>
              <ul className="dropdown-menu" aria-labelledby="postMenu">
                {/* dropdown submenu */}
                <li>
                  {" "}
                  <a className="dropdown-item" href="dashboard-post-list">
                    Post List
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="dashboard-post-categories"
                  >
                    Post Categories
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="dashboard-post-create"
                  >
                    Create a Post
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="dashboard-post-edit">
                    Edit Post
                  </a>{" "}
                </li>
              </ul>
            </li>
            {/* Nav item 3 Pages */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="bi bi-folder me-1" />
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="dashboard-author-list"
                  >
                    Author List
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="dashboard-author-single"
                  >
                    Author Single
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="dashboard-edit-profile"
                  >
                    Edit Profile
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="dashboard-reviews">
                    Reviews
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item" href="dashboard-settings">
                    Settings
                  </a>
                </li>
                <li className="dropdown-divider" />
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="https://support.webestica.com/"
                    target="_blank"
                  >
                    {" "}
                    <i className="text-warning fa-fw bi bi-life-preserver me-2" />
                    Support
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="docs/index.html"
                    target="_blank"
                  >
                    {" "}
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
                    {" "}
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
                    {" "}
                    <i className="text-success fa-fw bi bi-cloud-download-fill me-2" />
                    Buy blogzine!
                  </a>{" "}
                </li>
              </ul>
            </li>
          </ul>
          {/* Search dropdown START */}
          <div className="nav my-3 my-xl-0 px-4 px-lg-1 flex-nowrap align-items-center">
            <div className="nav-item w-100">
              <form className="position-relative">
                <input
                  className="form-control pe-5 bg-transparent"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                  type="submit"
                >
                  <i className="fas fa-search fs-6 " />
                </button>
              </form>
            </div>
          </div>
          {/* Search dropdown END */}
        </div>
        {/* Main navbar END */}
        {/* Nav right START */}
        <div className="nav flex-nowrap align-items-center">
          {/* Notification dropdown START */}
          <div className="nav-item ms-2 ms-md-3 dropdown">
            {/* Notification button */}
            <a
              className="btn btn-primary-soft btn-round mb-0"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <i className="bi bi-bell fa-fw" />
            </a>
            {/* Notification dote */}
            <span className="notif-badge animation-blink" />
            {/* Notification dropdown menu START */}
            <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
              <div className="card bg-transparent">
                <div className="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center">
                  <h6 className="m-0">
                    Notifications{" "}
                    <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                      2 new
                    </span>
                  </h6>
                  <a className="small" href="#">
                    Clear all
                  </a>
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-unstyled list-group-flush">
                    {/* Notif item */}
                    <li>
                      <a
                        href="#"
                        className="list-group-item-action border-0 border-bottom d-flex p-3"
                      >
                        <div className="me-3">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/08.jpg"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">12 new members joined</h6>
                          <span className="small">
                            {" "}
                            <i className="bi bi-clock" /> 3 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    {/* Notif item */}
                    <li>
                      <a
                        href="#"
                        className="list-group-item-action border-0 border-bottom d-flex p-3"
                      >
                        <div className="me-3">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/02.jpg"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Larry Lawson deleted account</h6>
                          <span className="small">
                            {" "}
                            <i className="bi bi-clock" /> 6 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    {/* Notif item */}
                    <li>
                      <a
                        href="#"
                        className="list-group-item-action border-0 border-bottom d-flex p-3"
                      >
                        <div className="me-3">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/05.jpg"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Byan commented on your post</h6>
                          <span className="small">
                            {" "}
                            <i className="bi bi-clock" /> 10 min ago
                          </span>
                        </div>
                      </a>
                    </li>
                    {/* Notif item */}
                    <li>
                      <a
                        href="#"
                        className="list-group-item-action border-0 border-bottom d-flex p-3"
                      >
                        <div className="me-3">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/images/avatar/03.jpg"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Settings updated</h6>
                          <span className="small">
                            {" "}
                            <i className="bi bi-clock" /> Yesterday
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Button */}
                <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                  <a href="#" className="stretched-link">
                    See all incoming activity
                  </a>
                </div>
              </div>
            </div>
            {/* Notification dropdown menu END */}
          </div>
          {/* Notification dropdown END */}
          {/* Profile dropdown START */}
          <div className="nav-item ms-2 ms-md-3 dropdown">
            {/* Avatar */}
            <a
              className="avatar avatar-sm p-0"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="avatar-img rounded-circle"
                src="assets/images/avatar/03.jpg"
                alt="avatar"
              />
            </a>
            {/* Profile dropdown START */}
            <ul
              className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
              aria-labelledby="profileDropdown"
            >
              {/* Profile info */}
              <li className="px-3">
                <div className="d-flex align-items-center">
                  {/* Avatar */}
                  <div className="avatar me-3">
                    <img
                      className="avatar-img rounded-circle shadow"
                      src="assets/images/avatar/03.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <a className="h6 mt-2 mt-sm-0" href="#">
                      {" "}
                      Louis Ferguson
                    </a>
                    <p className="small m-0">example@gmail.com</p>
                  </div>
                </div>
                <hr />
              </li>
              {/* Links */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-person fa-fw me-2" />
                  Edit Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-gear fa-fw me-2" />
                  Account Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-info-circle fa-fw me-2" />
                  Help
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-power fa-fw me-2" />
                  Sign Out
                </a>
              </li>
              <li className="dropdown-divider mb-3" />
              <li>
                <div className="align-items-center text-center py-0">
                  <span className="me-3">mode:</span>
                  <div
                    className="btn-group theme-icon-active"
                    role="group"
                    aria-label="Default button group"
                  >
                    <button
                      type="button"
                      className="btn btn-light btn-sm mb-0"
                      data-bs-theme-value="light"
                    >
                      <svg
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-brightness-high-fill fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        <use href="#" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-sm mb-0"
                      data-bs-theme-value="dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-moon-stars-fill fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        <use href="#" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light btn-sm mb-0 active"
                      data-bs-theme-value="auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-circle-half fa-fw mode-switch"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                        <use href="#" />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            {/* Profile dropdown END */}
          </div>
          {/* Profile dropdown END */}
          {/* Nav right END */}
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
Post list START */}
    <section className="py-4">
      <div className="container">
        <div className="row pb-4">
          <div className="col-12">
            {/* Title */}
            <div className="d-sm-flex justify-content-sm-between align-items-center">
              <h1 className="mb-2 mb-sm-0 h2">
                Post List{" "}
                <span className="badge bg-primary bg-opacity-10 text-primary">
                  110
                </span>
              </h1>
              <a href="#" className="btn btn-sm btn-primary mb-0">
                <i className="fas fa-plus me-2" />
                Add a post
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row g-4 mb-4">
              <div className="col-sm-4 col-lg-2">
                {/* Card START */}
                <div className="card card-body border h-100">
                  {/* Icon */}
                  <div className="fs-3 text-start text-success">
                    <i className="bi bi-file-earmark-text" />
                  </div>
                  {/* Content */}
                  <div className="ms-0">
                    <h3 className="mb-0">305</h3>
                    <h6 className="mb-0">Document</h6>
                  </div>
                </div>
                {/* Card END */}
              </div>
              <div className="col-sm-4 col-lg-2">
                {/* Card START */}
                <div className="card card-body border h-100">
                  {/* Icon */}
                  <div className="fs-3 text-start text-success">
                    <i className="bi bi-camera-reels" />
                  </div>
                  {/* Content */}
                  <div className="ms-0">
                    <h3 className="mb-0">120</h3>
                    <h6 className="mb-0">Videos</h6>
                  </div>
                </div>
                {/* Card END */}
              </div>
              <div className="col-sm-4 col-lg-2">
                {/* Card START */}
                <div className="card card-body border h-100">
                  {/* Icon */}
                  <div className="fs-3 text-start text-success">
                    <i className="bi bi-image" />
                  </div>
                  {/* Content */}
                  <div className="ms-0">
                    <h3 className="mb-0">475</h3>
                    <h6 className="mb-0">Images</h6>
                  </div>
                </div>
                {/* Card END */}
              </div>
              <div className="col-lg-6">
                {/* Card START */}
                <div className="card card-body border h-100">
                  <h3>Storage space </h3>
                  <div>
                    <div className="d-flex">
                      <h6 className="mt-0">Storage 80%</h6>
                      <span className="ms-auto">6.80GB of 10GB</span>
                    </div>
                    <div className="progress progress-percent-bg progress-md">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    {/* Card END */}
                  </div>
                </div>
              </div>
            </div>
            {/* Post list table START */}
            <div className="card border bg-transparent rounded-3">
              {/* Card body START */}
              <div className="card-body p-3">
                {/* Search and select START */}
                <div className="row g-3 align-items-center justify-content-between mb-3">
                  {/* Search */}
                  <div className="col-md-8">
                    <form className="rounded position-relative">
                      <input
                        className="form-control pe-5 bg-transparent"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit"
                      >
                        <i className="fas fa-search fs-6 " />
                      </button>
                    </form>
                  </div>
                  {/* Select option */}
                  <div className="col-md-3">
                    {/* Short by filter */}
                    <form>
                      <select
                        className="form-select z-index-9 bg-transparent"
                        aria-label=".form-select-sm"
                      >
                        <option value="">Sort by</option>
                        <option>Free</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                      </select>
                    </form>
                  </div>
                </div>
                {/* Search and select END */}
                {/* Post list table START */}
                <div className="table-responsive border-0">
                  <table className="table align-middle p-4 mb-0 table-hover table-shrink">
                    {/* Table head */}
                    <thead className="table-dark">
                      <tr>
                        <th scope="col" className="border-0 rounded-start">
                          Post Name
                        </th>
                        <th scope="col" className="border-0">
                          Author Name
                        </th>
                        <th scope="col" className="border-0">
                          Published Date
                        </th>
                        <th scope="col" className="border-0">
                          Category
                        </th>
                        <th scope="col" className="border-0">
                          Status
                        </th>
                        <th scope="col" className="border-0 rounded-end">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* Table body START */}
                    <tbody className="border-top-0">
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              12 worst types of business accounts you follow on
                              Twitter
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Lori Stevens</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Jan 22, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-warning mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Technology
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success mb-2">
                            Live
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              Dirty little secrets about the business industry
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Dennis Barrett</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Jan 19, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-info mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Marketing
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-warning bg-opacity-15 text-warning mb-2">
                            Draft
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              7 common mistakes everyone makes while traveling
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Billy Vasquez</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Nov 11, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-danger mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Photography
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success mb-2">
                            Live
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              5 investment doubts you should clarify
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Lori Stevens</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Jan 22, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-success mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Gadgets
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success mb-2">
                            Live
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              Bad habits that people in the industry need to
                              quit
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Larry Lawson</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Oct 14, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge bg-primary mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Sports
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-danger bg-opacity-10 text-danger mb-2">
                            Removed
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              Around the web: 20 fabulous infographics about
                              business
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Billy Vasquez</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Feb 23, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-danger mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Travel
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success mb-2">
                            Live
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              Best Pinterest boards for learning about business
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Amanda Reed</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Dec 16, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-success mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Business
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-success bg-opacity-10 text-success mb-2">
                            Live
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">Five unbelievable facts about money.</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Carolyn Ortiz</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Nov 10, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge bg-primary mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Sports
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-danger bg-opacity-10 text-danger mb-2">
                            Removed
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      {/* Table item */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <h6 className="course-title mt-2 mt-md-0 mb-0">
                            <a href="#">
                              Ten questions you should answer truthfully.
                            </a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>
                          <h6 className="mb-0">
                            <a href="#">Samuel Bishop</a>
                          </h6>
                        </td>
                        {/* Table data */}
                        <td>Mar 06, 2022</td>
                        {/* Table data */}
                        <td>
                          <a href="#" className="badge text-bg-info mb-2">
                            <i className="fas fa-circle me-2 small fw-bold" />
                            Marketing
                          </a>
                        </td>
                        {/* Table data */}
                        <td>
                          <span className="badge bg-warning bg-opacity-15 text-warning mb-2">
                            Draft
                          </span>
                        </td>
                        {/* Table data */}
                        <td>
                          <div className="d-flex gap-2">
                            <a
                              href="#"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Delete"
                            >
                              <i className="bi bi-trash" />
                            </a>
                            <a
                              href="dashboard-post-edit"
                              className="btn btn-light btn-round mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Edit"
                            >
                              <i className="bi bi-pencil-square" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    {/* Table body END */}
                  </table>
                </div>
                {/* Post list table END */}
                {/* Pagination START */}
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                  {/* Content */}
                  <p className="mb-sm-0 text-center text-sm-start">
                    Showing 1 to 8 of 20 entries
                  </p>
                  {/* Pagination */}
                  <nav
                    className="mb-sm-0 d-flex justify-content-center"
                    aria-label="navigation"
                  >
                    <ul className="pagination pagination-sm pagination-bordered mb-0">
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
                </div>
                {/* Pagination END */}
              </div>
            </div>
            {/* Post list table END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Main contain END */}
  </main>
  {/* **************** MAIN CONTENT END **************** */}
  {/* =======================
Footer START */}
  <footer className="mb-3">
    <div className="container">
      <div className="card card-body bg-light">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            {/* Copyright */}
            <div className="text-center text-lg-start">
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
          <div className="col-lg-6 d-sm-flex align-items-center justify-content-center justify-content-lg-end">
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