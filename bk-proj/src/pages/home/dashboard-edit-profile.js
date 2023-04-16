export default function dash_edit_profile(){
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
              id="profileDropdown2"
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
              aria-labelledby="profileDropdown2"
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
Main contain START */}
    <section className="py-4">
      <div className="container">
        <div className="row g-4">
          {/* Profile cover and info START */}
          <div className="col-12">
            <div className="card mb-4 position-relative z-index-9">
              {/* Cover image */}
              <div
                className="py-5 h-200 rounded"
                style={{
                  backgroundImage: "url(assets/images/blog/16by9/big/07.jpg)",
                  backgroundPosition: "center bottom",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              ></div>
              <div className="card-body pt-3 pb-0">
                <div className="row d-flex justify-content-between">
                  {/* Avatar */}
                  <div className="col-sm-12 col-md-auto text-center text-md-start">
                    <div className="avatar avatar-xxl mt-n5">
                      <img
                        className="avatar-img rounded-circle border border-white border-3 shadow"
                        src="assets/images/avatar/03.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Profile info */}
                  <div className="col-sm-12 col-md text-center text-md-start d-md-flex justify-content-between align-items-center">
                    <div>
                      <h4 className="my-1">
                        Louis Ferguson{" "}
                        <i className="bi bi-patch-check-fill text-info small" />
                      </h4>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <i className="bi bi-person-fill me-1" /> An editor at
                          Blogzine
                        </li>
                        <li className="list-inline-item">
                          <i className="bi bi-geo-alt me-1" /> New York
                        </li>
                        <li className="list-inline-item">
                          <i className="bi bi-calendar2-plus me-1" /> Joined on
                          Jan 15, 2018
                        </li>
                      </ul>
                      <p className="m-0" />
                    </div>
                    {/* Links */}
                    <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                      <a href="#" className="btn btn-primary-soft me-3">
                        Follow
                      </a>
                      {/* Card action START */}
                      <div className="dropdown ms-3">
                        <a
                          className="text-secondary"
                          href="#"
                          id="profileDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          {/* Dropdown Icon */}
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              fill="currentColor"
                              cx={3}
                              cy={12}
                              r="2.5"
                            />
                            <circle
                              fill="currentColor"
                              opacity="0.5"
                              cx={12}
                              cy={12}
                              r="2.5"
                            />
                            <circle
                              fill="currentColor"
                              opacity="0.3"
                              cx={21}
                              cy={12}
                              r="2.5"
                            />
                          </svg>
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="profileDropdown"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-share me-2 fw-icon" />
                              Share profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-volume-mute me-2 fw-icon" />
                              Mute notification
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item text-danger" href="#">
                              <i className="bi bi-slash-circle me-2 fw-icon" />
                              Delete profile
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              <i className="bi bi-flag me-2 fw-icon" />
                              Report a bug
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Card action END */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Profile info END */}
        </div>
        <div className="row g-4">
          {/* Left sidebar START */}
          <div className="col-lg-7 col-xxl-8">
            {/* Profile START */}
            <div className="card border mb-4">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0">Profile</h5>
              </div>
              <div className="card-body">
                {/* Full name */}
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Louis"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Ferguson"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text">webestica.com</span>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="louisferguson"
                    />
                  </div>
                </div>
                {/* Profile picture */}
                <div className="mb-3">
                  <label className="form-label">Profile picture</label>
                  {/* Avatar upload START */}
                  <div className="d-flex align-items-center">
                    <div className="position-relative me-3">
                      {/* Avatar edit */}
                      <div className="position-absolute top-0 end-0  z-index-9">
                        <a
                          className="btn btn-sm btn-light btn-round mb-0 mt-n1 me-n1"
                          href="#"
                        >
                          {" "}
                          <i className="bi bi-pencil" />{" "}
                        </a>
                      </div>
                      {/* Avatar preview */}
                      <div className="avatar avatar-xl">
                        <img
                          className="avatar-img rounded-circle border border-white border-3 shadow"
                          src="assets/images/avatar/03.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* Avatar remove button */}
                    <div className="avatar-remove">
                      <button type="button" className="btn btn-light">
                        Delete
                      </button>
                    </div>
                  </div>
                  {/* Avatar upload END */}
                </div>
                {/* Job title */}
                <div className="mb-3">
                  <label className="form-label">Job title</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="An editor at Blogzine"
                  />
                </div>
                {/* Location */}
                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="New Hampshire"
                  />
                </div>
                {/* Bio */}
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={
                      "I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."
                    }
                  />
                  <div className="form-text">
                    Brief description for your profile.
                  </div>
                </div>
                {/* Birthday */}
                <div>
                  <label className="form-label">Birthday</label>
                  <input
                    type="text"
                    className="form-control flatpickr-input"
                    placeholder="DD/MM/YYYY"
                    defaultValue="12/10/1990"
                  />
                </div>
                {/* Save button */}
                <div className="d-flex justify-content-end mt-4">
                  <a href="#" className="btn text-secondary border-0 me-2">
                    Discard
                  </a>
                  <a href="#" className="btn btn-primary">
                    Save changes
                  </a>
                </div>
              </div>
            </div>
            {/* Profile END */}
            {/* Personal information START */}
            <div className="card border mb-4">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0">Personal information</h5>
              </div>
              <div className="card-body">
                {/* Skype */}
                <div className="mb-3">
                  <label className="form-label">Skype</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="iamlouisferguson"
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    defaultValue="loriferguson@wbs.com"
                  />
                </div>
                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="750 Sing Sing Rd, Horseheads, NY, 14845 "
                  />
                </div>
                {/* Save button */}
                <div className="d-flex justify-content-end mt-4">
                  <a href="#" className="btn btn-primary">
                    Save changes
                  </a>
                </div>
              </div>
            </div>
            {/* Personal information END */}
            {/* Social links START */}
            <div className="card border mb-4">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0"> Social links</h5>
              </div>
              <div className="card-body">
                {/* Skype */}
                <div className="mb-3">
                  <label className="form-label">Facebook</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="https://facebook.com/"
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">linkedin</label>
                  <input
                    className="form-control"
                    type="email"
                    defaultValue="https://www.linkedin.com/"
                  />
                </div>
                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Twitter</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="https://twitter.com/ "
                  />
                </div>
                {/* Save button */}
                <div className="d-flex justify-content-end mt-4">
                  <a href="#" className="btn btn-primary">
                    Save changes
                  </a>
                </div>
              </div>
            </div>
            {/* Social links END */}
            {/* Update password START */}
            <div className="card border">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0">Update password</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Current password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter current password"
                  />
                </div>
                {/* New password */}
                <div className="mb-3">
                  <label className="form-label" id="psw-strength-message" />
                  <div className="input-group">
                    <input
                      className="form-control fakepassword"
                      type="password"
                      id="psw-input"
                      placeholder="Enter new password"
                    />
                    <span className="input-group-text p-0">
                      <i className="fakepasswordicon far fa-eye cursor-pointer p-2 w-40px" />
                    </span>
                  </div>
                  <div className="rounded mt-1" id="psw-strength" />
                </div>
                {/* New password */}
                <div>
                  <label className="form-label">Confirm new password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <a href="#" className="btn btn-primary">
                    Change password
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Left sidebar END */}
          {/* Right sidebar START */}
          <div className="col-lg-5 col-xxl-4">
            {/* Profile Setting START */}
            <div className="card border mb-4">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0">Profile Setting</h5>
              </div>
              <div className="card-body">
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="availabilityCheck"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="availabilityCheck"
                  >
                    Visible profile to everyone
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="proCheck"
                    disabled=""
                  />
                  <label className="form-check-label" htmlFor="proCheck">
                    Disable ads{" "}
                    <span className="badge bg-primary align-middle">Pro</span>
                  </label>
                </div>
              </div>
            </div>
            {/* Profile Setting END */}
            {/* Notifications START */}
            <div className="card border mb-4">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0">Notifications</h5>
              </div>
              {/* Card body START */}
              <div className="card-body">
                <p>Choose type of notifications you want to receive</p>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="withdrawalCheck"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="withdrawalCheck">
                    Withdrawal activity
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="weeklyCheck"
                  />
                  <label className="form-check-label" htmlFor="weeklyCheck">
                    Weekly report
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="passwordCheck"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="passwordCheck">
                    Password change
                  </label>
                </div>
                <div className="form-check form-switch form-check-md mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="dataCheck"
                  />
                  <label className="form-check-label" htmlFor="dataCheck">
                    Data usage alert
                  </label>
                </div>
              </div>
              {/* Card body END */}
            </div>
            {/* Notifications START */}
            {/* Deactivate account START */}
            <div className="card border mb-4">
              <div className="card-header border-bottom p-3">
                <h5 className="card-header-title mb-0">Deactivate Account</h5>
              </div>
              <div className="card-body">
                <h6>Before you go...</h6>
                <ul>
                  <li>
                    Take backup of your data <a href="#">Here</a>{" "}
                  </li>
                  <li>
                    Account deletion is final. There will be no way to restore
                    your account
                  </li>
                </ul>
                <div className="form-check form-check-md my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="deleteaccountCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="deleteaccountCheck"
                  >
                    Yes, I'd really like to delete my account
                  </label>
                </div>
                <a href="#" className="btn btn-success-soft my-1">
                  Keep my account
                </a>
                <a href="#" className="btn btn-danger my-1">
                  Delete my account
                </a>
              </div>
            </div>
            {/* Deactivate account START */}
            <p>
              <i className="bi bi-info-circle me-2" />
              This account was created on Jan 15, 2018
            </p>
            <div className="card bg-transparent border rounded-3 mt-4">
              {/* Card header */}
              <div className="card-header bg-transparent border-bottom p-3">
                <h5 className="card-header-title mb-0">Linked account</h5>
              </div>
              {/* Card body START */}
              <div className="card-body">
                {/* Google */}
                <div className="position-relative mb-3 mt-3 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
                  {/* Title and content */}
                  <h2 className="fs-1 mb-0 me-3">
                    <i className="fab fa-google text-google-icon" />
                  </h2>
                  <div>
                    <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-15">
                      <i className="bi bi-check-circle-fill text-success fs-5" />
                    </div>
                    <h6 className="mb-1">Google</h6>
                    <p className="mb-1 small">
                      You are successfully connected to your Google account
                    </p>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mb-0 me-2"
                    >
                      Invoke
                    </button>
                    <a href="#" className="btn btn-sm btn-link text-body mb-0">
                      Learn more
                    </a>
                  </div>
                </div>
                {/* Blogger */}
                <div className="mb-3 d-sm-flex border p-3 rounded">
                  {/* Title and content */}
                  <h2 className="fs-1 mb-0 me-3">
                    <i className="fab fa-blogger text-warning" />
                  </h2>
                  <div>
                    <h6 className="mb-1">Blogger</h6>
                    <p className="mb-1 small">
                      Connect with Blogger account for a personalized experience
                    </p>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mb-0 me-2"
                    >
                      Connect Blogger{" "}
                    </button>
                    <a href="#" className="btn btn-sm btn-link text-body mb-0">
                      Learn more
                    </a>
                  </div>
                </div>
                {/* Facebook */}
                <div className="d-sm-flex border p-3 rounded mb-2">
                  {/* Title and content */}
                  <h2 className="fs-1 mb-0 me-3">
                    <i className="fab fa-facebook text-facebook" />
                  </h2>
                  <div>
                    <h6 className="mb-1">Facebook</h6>
                    <p className="mb-1 small">
                      Connect with Facebook account for a personalized
                      experience
                    </p>
                    {/* Button */}
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mb-0 me-2"
                    >
                      Connect Facebook
                    </button>
                    <a href="#" className="btn btn-sm btn-link text-body mb-0">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              {/* Card body END */}
            </div>
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