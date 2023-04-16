import { useState } from "react";
import axios from "axios";


export default function dashCreatePost() {
  const [postName, setpostName] = useState("");
  //const [postType, setpostType]= usestate('')
  const [description, setDescription] = useState("");
  const [postBody, setpostBody] = useState("");
  const [file, setFile] = useState('')
  const [tags, settags] = useState('')

  const handlePost = async(event) => {
    event.preventDefault();
    console.log(postName, description, file);
    const url = 'http://localhost:1337/api/posts'

  if ( postName!=null) {
    const res = await axios.post(url, {
    "data": {
        "Name": postName,
        "Description":description,
        "Body":postBody,
        "Tags": tags
    }
}).then(
      function (response) {
        console.log(response)
      },
      alert("posted")
      ,
    )
        .catch(
          function (error) {
      console.log(error)
    }
        )
  }
  else{
    alert("Password Do Not match")
  }
};



  return (
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
              <span className="text-body h6 d-none d-sm-inline-block">
                Menu
              </span>
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
                      <a className="dropdown-item" href="dashboard-post-create">
                        Create a Post
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-post-edit"
                      >
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
                      <a
                        className="dropdown-item"
                        href="dashboard-reviews"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-settings"
                      >
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
                              <h6 className="mb-1">
                                Larry Lawson deleted account
                              </h6>
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
                              <h6 className="mb-1">
                                Byan commented on your post
                              </h6>
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
Main contain START */}
        <section className="py-4">
          <div className="container">
            <div className="row pb-4">
              <div className="col-12">
                {/* Title */}
                <h1 className="mb-0 h2">Create a post</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* Chart START */}
                <div className="card border">
                  {/* Card body */}
                  <div className="card-body">
                    {/* Form START */}
                    <form>
                      {/* Main form */}
                      <div className="row">
                        <div className="col-12">
                          {/* Post name */}
                          <div className="mb-3">
                            <label className="form-label">Post name</label>
                            <input
                              required=""
                              id="con-name"
                              value={postName}
                              onChange={(event) =>
                                setpostName(event.target.value)
                              }
                              name="name"
                              type="text"
                              className="form-control"
                              placeholder="Post name"
                            />
                            <small>
                              Moving heaven divide two sea female great midst
                              spirit
                            </small>
                          </div>
                        </div>
                        {/* Post type START */}
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Post type</label>
                            <div className="d-flex flex-wrap gap-3">
                              {/* Post type item */}
                              <div className="flex-fill">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="poll"
                                  id="option"
                                />
                                <label
                                  className="btn btn-outline-light w-100"
                                  htmlFor="option"
                                >
                                  <i className="bi bi-chat-left-text fs-1" />
                                  <span className="d-block"> Post </span>
                                </label>
                              </div>
                              {/* Post type item */}
                              <div className="flex-fill">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="poll"
                                  id="option2"
                                />
                                <label
                                  className="btn btn-outline-light w-100"
                                  htmlFor="option2"
                                >
                                  <i className="bi bi-patch-question fs-1" />
                                  <span className="d-block"> Question </span>
                                </label>
                              </div>
                              {/* Post type item */}
                              <div className="flex-fill">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="poll"
                                  id="option3"
                                  defaultChecked=""
                                />
                                <label
                                  className="btn btn-outline-light w-100"
                                  htmlFor="option3"
                                >
                                  <i className="bi bi-chat-right-dots fs-1" />
                                  <span className="d-block"> Poll </span>
                                </label>
                              </div>
                              {/* Post type item */}
                              <div className="flex-fill">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="poll"
                                  id="option4"
                                />
                                <label
                                  className="btn btn-outline-light w-100"
                                  htmlFor="option4"
                                >
                                  {" "}
                                  <i className="bi bi-ui-checks-grid fs-1" />
                                  <span className="d-block"> Images </span>
                                </label>
                              </div>
                              {/* Post type item */}
                              <div className="flex-fill">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="poll"
                                  id="option5"
                                />
                                <label
                                  className="btn btn-outline-light w-100"
                                  htmlFor="option5"
                                >
                                  <i className="bi bi-camera-reels fs-1" />
                                  <span className="d-block"> Video </span>
                                </label>
                              </div>
                              {/* Post type item */}
                              <div className="flex-fill">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="poll"
                                  id="option6"
                                />
                                <label
                                  className="btn btn-outline-light w-100"
                                  htmlFor="option6"
                                >
                                  <i className="bi bi-chat-square fs-1" />
                                  <span className="d-block"> Other </span>
                                </label>
                              </div>
                              {/* Post type item */}
                            </div>
                          </div>
                        </div>
                        {/* Post type END */}
                        {/* Short description */}
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Short description{" "}
                            </label>
                            <textarea
                              value={description}
                              onChange={(event) =>
                                setDescription(event.target.value)
                              }
                              className="form-control"
                              rows={3}
                              placeholder="Add description"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        {/* Main toolbar */}
                        <div className="col-md-12">
                          {/* Subject */}
                          <div className="mb-3">
                            <label className="form-label">Post body</label>
                            {/* Editor toolbar */}
                            <div
                              className="bg-light border border-bottom-0 rounded-top py-3"
                              id="quilltoolbar"
                            >
                              <span></span>
                            </div>

                            {/* Main toolbar */}
                            <div
                              className="bg-body border rounded-bottom h-300 overflow-hidden"
                              id="quilleditor"
                            >
                              <textarea
                                className="form-control"
                                value={postBody}
                                onChange={(event) =>
                                  setpostBody(event.target.value)
                                }
                                rows={12}
                                placeholder=" Body"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            {/* Image */}
                            <div className="position-relative">
                              <h6 className="my-2">
                                Upload post image here, or
                                <a href="#!" onChange={(event) =>
                                setpostName(event.target.value)
                              } value className="text-primary">
                                  {" "}
                                  Browse
                                </a>
                              </h6>
                              <label
                                className="w-100"
                                style={{ cursor: "pointer" }}
                              >
                                <span>
                                  <input
                                    className="form-control stretched-link"
                                    type="file"
                                    name="my-image"
                                    value={file}
                                    onChange={(event)=> setFile(event.target.value)}
                                    id="image"
                                    accept="image/gif, image/jpeg, image/png"
                                  />
                                </span>
                              </label>
                            </div>
                            <p className="small mb-0 mt-2">
                              <b>Note:</b> Only JPG, JPEG and PNG. Our suggested
                              dimensions are 600px * 450px. Larger image will be
                              cropped to 4:3 to fit our thumbnails/previews.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          {/* Tags */}
                          <div className="mb-3">
                            <label className="form-label">Tags</label>
                            <textarea
                              className="form-control"
                              value={tags}
                              onChange={(event)=> settags(event.target.value)}
                              rows={1}
                              placeholder="business, sports ..."
                            // defaultValue={""}
                            />
                            <small>
                              Maximum of 14 keywords. Keywords should all be in
                              lowercase and separated by commas. e.g.
                              javascript, react, marketing.
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          {/* Message */}
                          <div className="mb-3">
                            <label className="form-label">Category</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option value={0}>Lifestyle</option>
                              <option value={1}>Technology</option>
                              <option value={2}>Travel</option>
                              <option value={3}>Business</option>
                              <option value={4}>Sports</option>
                              <option value={5}>Marketing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="postCheck"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="postCheck"
                            >
                              Make this post featured?
                            </label>
                          </div>
                        </div>
                        {/* Create post button */}
                        <div className="col-md-12 text-start">
                          <button
                            className="btn btn-primary w-100"
                            onClick={handlePost}
                            type="submit"
                          >
                            Create post
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Form END */}
                  </div>
                </div>
                {/* Chart END */}
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
  );
}
