export default function hi(){
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
    href="assets/vendor/overlay-scrollbar/css/OverlayScrollbars.min.css"
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
        <a className="navbar-brand me-3" href="index">
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
Author list START */}
    <section className="py-4">
      <div className="container">
        {/* Author list title START */}
        <div className="row g-4 pb-4">
          <div className="col-12">
            <div className="d-sm-flex justify-content-between align-items-center">
              <h1 className="mb-sm-0 h2">Author list</h1>
              <a href="#" className="btn btn-sm btn-primary mb-0">
                <i className="fas fa-plus me-2" />
                Add new author
              </a>
            </div>
          </div>
        </div>
        {/* Author list title START */}
        <div className="row g-4">
          <div className="col-12">
            {/* Card START */}
            <div className="card border">
              {/* Card header START */}
              <div className="card-header border-bottom p-3">
                {/* Search and select START */}
                <div className="row g-3 align-items-center justify-content-between">
                  {/* Search bar */}
                  <div className="col-md-8">
                    <form className="rounded position-relative">
                      <input
                        className="form-control bg-transparent"
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
                  {/* Tab buttons */}
                  <div className="col-md-3">
                    {/* Tabs START */}
                    <ul
                      className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end"
                      id="pills-tab"
                      role="tablist"
                    >
                      {/* Grid tab */}
                      <li className="nav-item">
                        <a
                          href="#nav-list-tab"
                          className="nav-link mb-0 me-2 active"
                          data-bs-toggle="tab"
                        >
                          <i className="fas fa-fw fa-list-ul" />
                        </a>
                      </li>
                      {/* List tab */}
                      <li className="nav-item">
                        <a
                          href="#nav-grid-tab"
                          className="nav-link mb-0"
                          data-bs-toggle="tab"
                        >
                          <i className="fas fa-fw fa-th-large" />
                        </a>
                      </li>
                    </ul>
                    {/* Tabs end */}
                  </div>
                </div>
                {/* Search and select END */}
              </div>
              {/* Card header END */}
              {/* Card body START */}
              <div className="card-body p-3 pb-0">
                {/* Tabs content START */}
                <div className="tab-content py-0 my-0">
                  {/* Tabs content item START */}
                  <div className="tab-pane fade show active" id="nav-list-tab">
                    {/* Table START */}
                    <div className="table-responsive border-0">
                      <table className="table align-middle p-4 mb-0 table-hover">
                        {/* Table head */}
                        <thead className="table-dark">
                          <tr>
                            <th scope="col" className="border-0 rounded-start">
                              Author name
                            </th>
                            <th scope="col" className="border-0">
                              Join date
                            </th>
                            <th scope="col" className="border-0">
                              Total post
                            </th>
                            <th scope="col" className="border-0">
                              Total followers
                            </th>
                            <th scope="col" className="border-0">
                              Payment
                            </th>
                            <th scope="col" className="border-0 rounded-end">
                              Action
                            </th>
                          </tr>
                        </thead>
                        {/* Table body START */}
                        <tbody className="border-top-0">
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/09.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Lori Stevens
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td>Jan 22, 2022</td>
                            {/* Table data */}
                            <td>256</td>
                            {/* Table data */}
                            <td>5,354</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success mb-2">
                                Paid
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Block"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/01.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Carolyn Ortiz
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td>Jan 19, 2022</td>
                            {/* Table data */}
                            <td>56</td>
                            {/* Table data */}
                            <td>15,523</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success mb-2">
                                Paid
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-danger-soft btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Unblock"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/03.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Dennis Barrett
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td>Nov 11, 2022</td>
                            {/* Table data */}
                            <td>98</td>
                            {/* Table data */}
                            <td>2,546</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-warning bg-opacity-15 text-warning mb-2">
                                Pending
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Block"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/04.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Billy Vasquez
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td>Jan 22, 2022</td>
                            {/* Table data */}
                            <td>1258</td>
                            {/* Table data */}
                            <td>12,786</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success mb-2">
                                Paid
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Block"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/05.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Jacqueline Miller
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td>Jan 29, 2022</td>
                            {/* Table data */}
                            <td>2568</td>
                            {/* Table data */}
                            <td>21,245</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success mb-2">
                                Paid
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Block"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/06.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Amanda Reed
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td className="text-center text-sm-start">
                              Apr 25 2022
                            </td>
                            {/* Table data */}
                            <td>895</td>
                            {/* Table data */}
                            <td>8,546</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-success bg-opacity-10 text-success mb-2">
                                Paid
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Block"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          {/* Table row */}
                          <tr>
                            {/* Table data */}
                            <td>
                              <div className="d-flex align-items-center position-relative">
                                {/* Image */}
                                <div className="avatar avatar-md">
                                  <img
                                    src="assets/images/avatar/07.jpg"
                                    className="rounded-circle"
                                    alt=""
                                  />
                                </div>
                                <div className="mb-0 ms-2">
                                  {/* Title */}
                                  <h6 className="mb-0">
                                    <a href="#" className="stretched-link">
                                      Samuel Bishop
                                    </a>
                                  </h6>
                                </div>
                              </div>
                            </td>
                            {/* Table data */}
                            <td>Mar 17 2022</td>
                            {/* Table data */}
                            <td>856</td>
                            {/* Table data */}
                            <td>5,354</td>
                            {/* Table data */}
                            <td>
                              <span className="badge bg-danger bg-opacity-10 text-danger mb-2">
                                Cancel
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
                                  title=""
                                  data-bs-original-title="Message"
                                  aria-label="Message"
                                >
                                  <i className="bi bi-envelope" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-light btn-round mb-0"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Block"
                                  aria-label="Block"
                                >
                                  <i className="fas fa-ban" />
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        {/* Table body END */}
                      </table>
                    </div>
                    {/* Table END */}
                  </div>
                  {/* Tabs content item END */}
                  {/* Tabs content item START */}
                  <div className="tab-pane fade" id="nav-grid-tab">
                    <div className="row g-4">
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/10.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Frances Guerrero</a>
                                </h5>
                                <div className="small">Editor at Blogzine</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">5,354</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">846</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/01.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Carolyn Ortiz</a>
                                </h5>
                                <div className="small">Editor at eduport</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">2,545</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">586</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/02.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Louis Ferguson</a>
                                </h5>
                                <div className="small">Editor at folio</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">3,546</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">786</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/03.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Billy Vasquez</a>
                                </h5>
                                <div className="small">Editor at Wizixo</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">6,586</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">1,235</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/04.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Samuel Bishop</a>
                                </h5>
                                <div className="small">Editor at Realty</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">996</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">156</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/06.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Amanda Reed</a>
                                </h5>
                                <div className="small">Editor at Blogzine</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">2,586</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">665</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/07.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Lori Stevens</a>
                                </h5>
                                <div className="small">Editor at Eduport</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">1,586</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">458</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                      {/* Card item START */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card border p-2">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              {/* avatar */}
                              <div className="avatar avatar-lg me-3 flex-shrink-0">
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/images/avatar/12.jpg"
                                  alt=""
                                />
                              </div>
                              {/* Connections holder */}
                              <div className="flex-grow-1 d-block">
                                <h5 className="mb-1">
                                  <a href="#">Jacqueline Miller</a>
                                </h5>
                                <div className="small">Editor at Blogzine</div>
                              </div>
                            </div>
                            {/* Followers and Post */}
                            <div className="d-sm-flex justify-content-sm-between mt-3">
                              {/* Followers */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-people-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">9,586</h5>
                                  <h6 className="mb-0 fw-light">Followers</h6>
                                </div>
                              </div>
                              {/* Total post */}
                              <div className="d-flex text-start align-items-center mt-3">
                                <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                                  <i className="bi bi-file-earmark-text-fill fa-fw" />
                                </div>
                                <div className="ms-2">
                                  <h5 className="mb-0">2,586</h5>
                                  <h6 className="mb-0 fw-light">Total Blogs</h6>
                                </div>
                              </div>
                            </div>
                            {/* Buttons */}
                            <div className="d-sm-flex gap-2 mt-4">
                              <a
                                href="#"
                                className="btn btn-primary-soft w-100"
                              >
                                <i className="fab fa-facebook-messenger pe-2" />{" "}
                                Message
                              </a>
                              <a href="#" className="btn btn-danger-soft w-100">
                                <i className="fas fa-ban pe-2" /> Block
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card item END */}
                    </div>{" "}
                    {/* Row END */}
                  </div>
                  {/* Tabs content item END */}
                </div>
                {/* Tabs content END */}
              </div>
              {/* Card body END */}
              {/* Card Footer START */}
              <div className="card-footer p-3">
                {/* Pagination START */}
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
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
              {/* Card Footer END */}
            </div>
            {/* Card END */}
          </div>
          <div className="col-12">
            {/* Card START */}
            <div className="card border">
              {/* Card header START */}
              <div className="card-header border-bottom p-3">
                <h5 className="mb-2 mb-sm-0">New requests</h5>
              </div>
              {/* Card header END */}
              {/* Card body START */}
              <div className="card-body p-3">
                {/* Table START */}
                <div className="table-responsive border-0">
                  <table className="table align-middle p-4 mb-0 table-hover">
                    {/* Table head */}
                    <thead className="table-dark">
                      <tr>
                        <th scope="col" className="border-0 rounded-start">
                          Author name
                        </th>
                        <th scope="col" className="border-0">
                          Apply date
                        </th>
                        <th scope="col" className="border-0">
                          Company
                        </th>
                        <th scope="col" className="border-0 rounded-end">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* Table body START */}
                    <tbody className="border-top-0">
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img
                                src="assets/images/avatar/04.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="mb-0 ms-2">
                              {/* Title */}
                              <h6 className="mb-0">
                                <a href="#" className="stretched-link">
                                  Billy Vasquez
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>Jan 22, 2022</td>
                        {/* Table data */}
                        <td>Blogzine</td>
                        {/* Table data */}
                        <td>
                          <a
                            href="#"
                            className="btn btn-sm btn-success-soft me-1 mb-1 mb-lg-0"
                          >
                            Accept
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-secondary-soft me-1 mb-1 mb-lg-0"
                          >
                            Reject
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-primary-soft me-1 mb-0"
                          >
                            View App
                          </a>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img
                                src="assets/images/avatar/05.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="mb-0 ms-2">
                              {/* Title */}
                              <h6 className="mb-0">
                                <a href="#" className="stretched-link">
                                  Jacqueline Miller
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>Jan 29, 2022</td>
                        {/* Table data */}
                        <td>Wizixo</td>
                        {/* Table data */}
                        <td>
                          <a
                            href="#"
                            className="btn btn-sm btn-success-soft me-1 mb-1 mb-lg-0"
                          >
                            Accept
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-secondary-soft me-1 mb-1 mb-lg-0"
                          >
                            Reject
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-primary-soft me-1 mb-0"
                          >
                            View App
                          </a>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img
                                src="assets/images/avatar/06.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="mb-0 ms-2">
                              {/* Title */}
                              <h6 className="mb-0">
                                <a href="#" className="stretched-link">
                                  Amanda Reed
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td className="text-center text-sm-start">
                          Apr 25 2022
                        </td>
                        {/* Table data */}
                        <td>Eduport</td>
                        {/* Table data */}
                        <td>
                          <a
                            href="#"
                            className="btn btn-sm btn-success me-1 mb-1 mb-md-0 disabled"
                          >
                            Accepted
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-primary-soft me-1 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#appDetail"
                          >
                            View App
                          </a>
                        </td>
                      </tr>
                      {/* Table row */}
                      <tr>
                        {/* Table data */}
                        <td>
                          <div className="d-flex align-items-center position-relative">
                            {/* Image */}
                            <div className="avatar avatar-md">
                              <img
                                src="assets/images/avatar/07.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </div>
                            <div className="mb-0 ms-2">
                              {/* Title */}
                              <h6 className="mb-0">
                                <a href="#" className="stretched-link">
                                  Samuel Bishop
                                </a>
                              </h6>
                            </div>
                          </div>
                        </td>
                        {/* Table data */}
                        <td>Mar 17 2022</td>
                        {/* Table data */}
                        <td>Folio</td>
                        {/* Table data */}
                        <td>
                          <a
                            href="#"
                            className="btn btn-sm btn-secondary me-1 mb-1 mb-md-0 disabled"
                          >
                            Rejected
                          </a>
                          <a
                            href="#"
                            className="btn btn-sm btn-primary-soft me-1 mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#appDetail"
                          >
                            View App
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    {/* Table body END */}
                  </table>
                </div>
                {/* Table END */}
              </div>
              {/* Card body END */}
            </div>
            {/* Card END */}
          </div>
        </div>
      </div>
    </section>
    {/* =======================
Author list END */}
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