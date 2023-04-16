import React from "react";

export default function Home1(){
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
 <link rel="stylesheet" type="text/css" href="assets/vendor/plyr/plyr.css" />
 {/* Theme CSS */}
 <link
   id="style-switch"
   rel="stylesheet"
   type="text/css"
   href="assets/css/style.css"
 />
 {/* Top alert START */}
 <div
   className="alert alert-warning py-2 m-0 bg-primary border-0 rounded-0 alert-dismissible fade show text-center overflow-hidden"
   role="alert"
 >
   {/* SVG shape START */}
   <figure className="position-absolute top-50 start-50 translate-middle">
     <svg
       width={1848}
       height={481}
       viewBox="0 0 1848.9 481.8"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         className="fill-success"
         d="m779.4 251c-10.3-11.5-19.9-23.8-29.4-36.1-9-11.6-18.4-22.8-27.1-34.7-15.3-21.2-30.2-45.8-54.8-53.3-10.5-3.2-21.6-3.2-30.6 2.5-7.6 4.8-13 12.6-17.3 20.9-10.8 20.6-16.1 44.7-24.6 66.7-7.9 20.2-19.4 38.6-33.8 54.3-14.7 16.2-31.7 30-50.4 41-15.9 9.4-33.4 17.2-52 19.3-18.4 2-38-2.5-56.5-6.2-22.4-4.4-45.1-9.7-67.6-10.9-9.8-0.5-19.8-0.3-29.1 2.3-9.8 2.8-18.7 8.6-26.6 15.2-17.3 14.5-30.2 34.4-43.7 52.9-12.9 17.6-26.8 34.9-45.4 45.4-19.5 11-42.6 12.1-65 6.6-52.3-13.1-93.8-56.5-127.9-101.5-8.8-11.6-17.3-23.4-25.6-35.4-0.6-0.9-1.1-1.8-1.6-2.7-1.1-2.4-0.9-2.6 0.6-1.2 1 0.9 1.9 1.9 2.7 3 35.3 47.4 71.5 98.5 123.2 123.9 22.8 11.2 48.2 17.2 71.7 12.2 23-5 40.6-21.2 55.3-39.7 24.5-30.7 46.5-75.6 87.1-83 19.5-3.5 40.7 0.1 60.6 3.7 21.2 3.9 42.3 9.1 63.6 11.7 17.8 2.3 35.8-0.1 52.2-7 20-8.1 38.4-20.2 54.8-34.6 16.2-14.1 31-30.7 41.8-50.4 11.1-20.2 17-43.7 24.9-65.7 6.1-16.9 13.8-36.2 29.3-44.5 16.1-8.6 37.3-1.9 52.3 10.6 18.7 15.6 31.2 39.2 46.7 58.2"
       />
       <path
         className="fill-warning"
         d="m1157.9 344.9c9.8 7.6 18.9 15.8 28.1 24 8.6 7.7 17.6 15.2 26 23.2 14.8 14.2 29.5 30.9 51.2 34.7 9.3 1.6 18.8 0.9 26.1-3.8 6.1-3.9 10.2-9.9 13.2-16.2 7.6-15.6 10.3-33.2 15.8-49.6 5.2-15.1 13.6-29 24.7-41.3 11.4-12.6 24.8-23.6 40-32.8 12.9-7.8 27.3-14.6 43.1-17.3 15.6-2.6 32.8-0.7 49 0.7 19.6 1.7 39.4 4 58.8 3.4 8.4-0.3 17-1.1 24.8-3.6 8.2-2.7 15.4-7.4 21.6-12.7 13.7-11.6 23.1-26.7 33.3-40.9 9.6-13.5 20.2-26.9 35.3-35.6 15.8-9.2 35.6-11.6 55.2-9.1 45.7 5.8 84.8 34.3 117.6 64.4 8.7 8 17.2 16.2 25.6 24.6 2.5 3.2 1.9 3-1.2 1-34.3-32-69.7-66.9-116.5-81.9-20.5-6.5-42.7-9.2-62.4-4-19.3 5.1-33.1 17.9-44.3 32.2-18.5 23.7-33.9 57.5-68.1 65.5-16.5 3.8-34.9 2.6-52.3 1.3-18.5-1.4-37-3.7-55.4-4.2-15.5-0.5-30.7 2.5-44.2 8.5-16.5 7.2-31.3 17.1-44.3 28.5-12.8 11.2-24.1 24.1-31.9 39-7.9 15.3-11.1 32.5-16.2 48.9-3.9 12.6-9 26.9-21.6 33.9-13.1 7.3-31.9 3.8-45.7-4.1-17.2-10-29.9-26.1-44.6-38.8"
       />
       <path
         className="fill-warning"
         d="m1840.8 379c-8.8 40.3-167.8 79.9-300.2 45.3-42.5-11.1-91.4-32-138.7-11.6-38.7 16.7-55 66-90.8 67.4-25.1 1-48.6-20.3-58.1-39.8-31-63.3 50.7-179.9 155.7-208.1 50.4-13.5 97.3-3.2 116.1 1.6 36.3 9.3 328.6 87.4 316 145.2z"
       />
       <path
         className="fill-success"
         d="M368.3,247.3C265.6,257.2,134,226,110.9,141.5C85,47.2,272.5-9.4,355.5-30.7s182.6-31.1,240.8-18.6    C677.6-31.8,671.5,53.9,627,102C582.6,150.2,470.9,237.5,368.3,247.3z"
       />
     </svg>
   </figure>
   {/* SVG shape END */}
   <div className="position-relative">
     <p className="text-white m-0">
       Unlimited download! Starting from just $15/m{" "}
       <a href="#" className="btn btn-xs btn-dark ms-3 mb-0">
         Grab now!
       </a>
     </p>
   </div>
   {/* Close button */}
   <button
     type="button"
     className="btn-close btn-close-white opacity-9 p-3"
     data-bs-dismiss="alert"
     aria-label="Close"
   />
 </div>
 {/* Top alert END */}
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
           <a className="nav-link" href="about-us">
             About
           </a>
         </li>
         <li className="nav-item h5">
           <a className="nav-link" href="post-grid">
             Our Journal
           </a>
         </li>
         <li className="nav-item h5">
           <a className="nav-link" href="contact-us">
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
   <div className="navbar-top d-none d-lg-block small">
     <div className="container">
       <div className="d-md-flex justify-content-between align-items-center my-2">
         {/* Top bar left */}
         <ul className="nav">
           <li className="nav-item">
             <a className="nav-link ps-0" href="about-us">
               About
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">
               Forum
             </a>
           </li>
           <li className="nav-item">
             <a
               className="nav-link"
               href="https://themes.getbootstrap.com/store/webestica/"
             >
               Buy now!
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="./signin">
               Login / Join
             </a>
           </li>
         </ul>
         {/* Top bar right */}
         <div className="d-flex align-items-center">
           {/* Font size accessibility START */}
           <div
             className="btn-group me-3"
             role="group"
             aria-label="font size changer"
           >
             <input
               type="radio"
               className="btn-check"
               name="fntradio"
               id="font-sm"
             />
             <label
               className="btn btn-xs btn-outline-primary mb-0"
               htmlFor="font-sm"
             >
               A-
             </label>
             <input
               type="radio"
               className="btn-check"
               name="fntradio"
               id="font-default"
               defaultChecked=""
             />
             <label
               className="btn btn-xs btn-outline-primary mb-0"
               htmlFor="font-default"
             >
               A
             </label>
             <input
               type="radio"
               className="btn-check"
               name="fntradio"
               id="font-lg"
             />
             <label
               className="btn btn-xs btn-outline-primary mb-0"
               htmlFor="font-lg"
             >
               A+
             </label>
           </div>
           {/* Dark mode options START */}
           <div className="nav-item dropdown mx-2">
             {/* Switch button */}
             <button
               className="modeswitch show"
               id="bd-theme"
               type="button"
               aria-expanded="true"
               data-bs-toggle="dropdown"
               data-bs-display="static"
             >
               <svg className="theme-icon-active">
                 <use href="#" />
               </svg>
             </button>
             {/* Dropdown items */}
      
           </div>
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
           {/* Dark mode options END */}
           <ul className="nav">
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
       {/* Divider */}
       <div className="border-bottom border-2 border-primary opacity-1" />
     </div>
   </div>
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
                 <a className="dropdown-item active" href="/">
                   Home default
                 </a>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="/home/index-lazy">
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
                 <a className="dropdown-item" href="about-us">
                   About
                 </a>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="contact-us">
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
                     <a className="dropdown-item" href="shop-grid">
                       Shop grid
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="shop-detail">
                       Shop detail
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="checkout">
                       Checkout
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="my-cart">
                       Cart
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="empty-cart">
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
                     <a className="dropdown-item" href="author">
                       Author Page
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="categories">
                       Category page 1
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="categories-2">
                       Category page 2
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="tag">
                       # tag
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="search-result">
                       Search result
                     </a>{" "}
                   </li>
                 </ul>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="404">
                   Error 404
                 </a>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="./signin">
                   signin
                 </a>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="./signup">
                   signup
                 </a>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="offline">
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
                   href="/"
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
                     <a className="dropdown-item" href="post-grid">
                       Post grid
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a className="dropdown-item" href="post-grid-4-col">
                       Post grid 4 col
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a
                       className="dropdown-item"
                       href="post-grid-masonry"
                     >
                       Post grid masonry
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a
                       className="dropdown-item"
                       href="post-grid-masonry-filter"
                     >
                       Post grid masonry filter
                     </a>{" "}
                   </li>
                   <li>
                     {" "}
                     <a
                       className="dropdown-item"
                       href="post-large-and-grid"
                     >
                       Post mixed large than grid
                     </a>{" "}
                   </li>
                 </ul>
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-list">
                   Post list
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-list-2">
                   Post list 2
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-cards">
                   Post card
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-overlay">
                   Post Overlay
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-types">
                   Post types
                 </a>{" "}
               </li>
               <li className="dropdown-divider" />
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-single">
                   Post single magazine
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-single-2">
                   Post single classic
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-single-3">
                   Post single minimal
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-single-4">
                   Post single card
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-single-5">
                   Post single review
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="post-single-6">
                   Post single video
                 </a>{" "}
               </li>
               <li>
                 {" "}
                 <a className="dropdown-item" href="podcast-single">
                   Podcast single
                 </a>{" "}
               </li>
               <li className="dropdown-divider" />
               <li>
                 {" "}
                 <a className="dropdown-item" href="pagination-styles">
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
             <a className="nav-link" href="dashboard">
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
Trending START */}
   <section className="py-2">
     <div className="container">
       <div className="row g-0">
         <div className="col-12 bg-primary bg-opacity-10 p-2 rounded">
           <div className="d-sm-flex align-items-center text-center text-sm-start">
             {/* Title */}
             <div className="me-3">
               <span className="badge bg-primary p-2 px-3">Trending:</span>
             </div>
             {/* Slider */}
             <div className="tiny-slider arrow-end arrow-xs arrow-white arrow-round arrow-md-none">
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
                     The most common business debate isn't as black and white
                     as you might think
                   </a>
                 </div>
                 <div>
                   {" "}
                   <a href="#" className="text-reset btn-link">
                     How the 10 worst business fails of all time could have
                     been prevented{" "}
                   </a>
                 </div>
                 <div>
                   {" "}
                   <a href="#" className="text-reset btn-link">
                     The most common business debate isn't as black and white
                     as you might think{" "}
                   </a>
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
Trending END */}
   {/* =======================
Main hero START */}
   <section className="pt-4 pb-0 card-grid">
     <div className="container">
       <div className="row g-4">
         {/* Left big card */}
         <div className="col-lg-6">
           <div
             className="card card-overlay-bottom card-grid-lg card-bg-scale"
             style={{
               backgroundImage: "url(assets/images/blog/1by1/01.jpg)",
               backgroundPosition: "center left",
               backgroundSize: "cover"
             }}
           >
             {/* Card featured */}
             <span className="card-featured" title="Featured post">
               <i className="fas fa-star" />
             </span>
             {/* Card Image overlay */}
             <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
               <div className="w-100 mt-auto">
                 {/* Card category */}
                 <a href="#" className="badge text-bg-danger mb-2">
                   <i className="fas fa-circle me-2 small fw-bold" />
                   Lifestyle
                 </a>
                 {/* Card title */}
                 <h2 className="text-white h1">
                   <a
                     href="post-single-4"
                     className="btn-link stretched-link text-reset"
                   >
                     Ten tell-tale signs you need to get a new startup.
                   </a>
                 </h2>
                 <p className="text-white">
                   No visited raising gravity outward subject my cottage Mr be.
                   Hold do at tore in park feet near my case.{" "}
                 </p>
                 {/* Card info */}
                 <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                   <li className="nav-item">
                     <div className="nav-link">
                       <div className="d-flex align-items-center text-white position-relative">
                         <div className="avatar avatar-sm">
                           <img
                             className="avatar-img rounded-circle"
                             src="assets/images/avatar/11.jpg"
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
         {/* Right small cards */}
         <div className="col-lg-6">
           <div className="row g-4">
             {/* Card item START */}
             <div className="col-12">
               <div
                 className="card card-overlay-bottom card-grid-sm card-bg-scale"
                 style={{
                   backgroundImage: "url(assets/images/blog/1by1/02.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 {/* Card Image */}
                 {/* Card Image overlay */}
                 <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                   <div className="w-100 mt-auto">
                     {/* Card category */}
                     <a href="#" className="badge text-bg-warning mb-2">
                       <i className="fas fa-circle me-2 small fw-bold" />
                       Technology
                     </a>
                     {/* Card title */}
                     <h4 className="text-white">
                       <a
                         href="post-single-4"
                         className="btn-link stretched-link text-reset"
                       >
                         Best Pinterest boards for learning about business
                       </a>
                     </h4>
                     {/* Card info */}
                     <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
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
             <div className="col-md-6">
               <div
                 className="card card-overlay-bottom card-grid-sm card-bg-scale"
                 style={{
                   backgroundImage: "url(assets/images/blog/1by1/03.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 {/* Card Image overlay */}
                 <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                   <div className="w-100 mt-auto">
                     {/* Card category */}
                     <a href="#" className="badge text-bg-success mb-2">
                       <i className="fas fa-circle me-2 small fw-bold" />
                       Business
                     </a>
                     {/* Card title */}
                     <h4 className="text-white">
                       <a
                         href="post-single-4"
                         className="btn-link stretched-link text-reset"
                       >
                         Five intermediate guide to business
                       </a>
                     </h4>
                     {/* Card info */}
                     <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
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
             <div className="col-md-6">
               <div
                 className="card card-overlay-bottom card-grid-sm card-bg-scale"
                 style={{
                   backgroundImage: "url(assets/images/blog/1by1/04.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 {/* Card Image overlay */}
                 <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                   <div className="w-100 mt-auto">
                     {/* Card category */}
                     <a href="#" className="badge text-bg-info mb-2">
                       <i className="fas fa-circle me-2 small fw-bold" />
                       Sports
                     </a>
                     {/* Card title */}
                     <h4 className="text-white">
                       <a
                         href="post-single-4"
                         className="btn-link stretched-link text-reset"
                       >
                         15 reasons to choose startup
                       </a>
                     </h4>
                     {/* Card info */}
                     <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                       <li className="nav-item position-relative">
                         <div className="nav-link">
                           by{" "}
                           <a
                             href="#"
                             className="stretched-link text-reset btn-link"
                           >
                             Amanda
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
           </div>
         </div>
       </div>
     </div>
   </section>
   {/* =======================
Main hero END */}
   {/* =======================
Main content START */}
   <section className="position-relative">
     <div className="container" data-sticky-container="">
       <div className="row">
         {/* Main Post START */}
         <div className="col-lg-9">
           {/* Title */}
           <div className="mb-4">
             <h2 className="m-0">
               <i className="bi bi-hourglass-top me-2" />
               Today's top highlights
             </h2>
             <p>Latest breaking news, pictures, videos, and special reports</p>
           </div>
           <div className="row gy-4">
             {/* Card item START */}
             <div className="col-sm-6">
               <div className="card">
                 {/* Card img */}
                 <div className="position-relative">
                   <img
                     className="card-img"
                     src="assets/images/blog/4by3/01.jpg"
                     alt="Card image"
                   />
                   <div className="card-img-overlay d-flex align-items-start flex-column p-3">
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
                   {/* Sponsored Post */}
                   <a
                     href="#!"
                     className="mb-0 text-body small"
                     tabIndex={0}
                     role="button"
                     data-bs-container="body"
                     data-bs-toggle="popover"
                     data-bs-trigger="focus"
                     data-bs-placement="top"
                     data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                   >
                     <i className="bi bi-info-circle ps-1" /> Sponsored
                   </a>
                   <h4 className="card-title mt-2">
                     <a
                       href="post-single"
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
                   </ul>
                 </div>
               </div>
             </div>
             {/* Card item END */}
             {/* Card item START */}
             <div className="col-sm-6">
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
                       href="post-single"
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
                   </ul>
                 </div>
               </div>
             </div>
             {/* Card item END */}
             {/* Card item START */}
             <div className="col-sm-6">
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
                       href="post-single"
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
                   </ul>
                 </div>
               </div>
             </div>
             {/* Card item END */}
             {/* Card item START */}
             <div className="col-sm-6">
               <div className="card">
                 {/* Card img */}
                 <div className="position-relative">
                   <img
                     className="card-img"
                     src="assets/images/blog/4by3/04.jpg"
                     alt="Card image"
                   />
                   <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                     {/* Card overlay bottom */}
                     <div className="w-100 mt-auto">
                       {/* Card category */}
                       <a href="#" className="badge bg-primary mb-2">
                         <i className="fas fa-circle me-2 small fw-bold" />
                         Sports
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="card-body px-0 pt-3">
                   <h4 className="card-title">
                     <a
                       href="post-single"
                       className="btn-link text-reset fw-bold"
                     >
                       Around the web: 20 fabulous infographics about business
                     </a>
                   </h4>
                   <p className="card-text">
                     Projection favorable Mrs can be projecting own. Thirty it
                     matter enable become admire in giving. See resolved
                     goodness felicity shy civility domestic had but.
                   </p>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                     <li className="nav-item">
                       <div className="nav-link">
                         <div className="d-flex align-items-center position-relative">
                           <div className="avatar avatar-xs">
                             <div className="avatar-img rounded-circle bg-success">
                               <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold small">
                                 SL
                               </span>
                             </div>
                           </div>
                           <span className="ms-3">
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
                     <li className="nav-item">Dec 29, 2022</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* Card item END */}
             {/* Card item START */}
             <div className="col-sm-6">
               <div className="card">
                 {/* Card img */}
                 <div className="position-relative">
                   {/* <img class="card-img" src="assets/images/blog/4by3/05.jpg" alt="Card image"> */}
                   <div className="card-image position-relative">
                     <img
                       className="card-img"
                       src="assets/images/blog/4by3/05.jpg"
                       alt="Card image"
                     />
                     <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                       {/* Card overlay */}
                       <div className="w-100 my-auto">
                         {/* Audio START */}
                         <div className="player-wrapper bg-light rounded">
                           <audio className="player-audio" crossOrigin="">
                             <source
                               src="assets/images/videos/audio.mp3"
                               type="audio/mp3"
                             />
                           </audio>
                         </div>
                         {/* Audio END */}
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="card-body px-0 pt-3">
                   <h4 className="card-title">
                     <a
                       href="post-single"
                       className="btn-link text-reset fw-bold"
                     >
                       7 common mistakes everyone makes while traveling
                     </a>
                   </h4>
                   <p className="card-text">
                     Drawings offended yet answered Jennings perceive laughing
                     six did far. Rooms oh fully taken by worse do. Points
                     afraid but may end law lasted.{" "}
                   </p>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
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
             {/* Card item START */}
             <div className="col-sm-6">
               <div className="card">
                 {/* Card img */}
                 <div className="position-relative">
                   <img
                     className="card-img"
                     src="assets/images/blog/4by3/12.jpg"
                     alt="Card image"
                   />
                   <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                     {/* Card overlay bottom */}
                     <div className="w-100 mt-auto">
                       {/* Card category */}
                       <a href="#" className="badge text-bg-danger mb-2">
                         <i className="fas fa-circle me-2 small fw-bold" />
                         Photography
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="card-body px-0 pt-3">
                   <h4 className="card-title">
                     <a
                       href="post-single"
                       className="btn-link text-reset fw-bold"
                     >
                       5 investment doubts you should clarify
                     </a>
                   </h4>
                   <p className="card-text">
                     Was out laughter raptures returned outweigh. Luckily
                     cheered colonel I do we attack highest enabled. Tried law
                     yet style child. The bore of true of no be deal.
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
                               Carolyn
                             </a>
                           </span>
                         </div>
                       </div>
                     </li>
                     <li className="nav-item">Sep 01, 2022</li>
                   </ul>
                 </div>
               </div>
             </div>
             {/* Card item END */}
             {/* Load more START */}
             <div className="col-12 text-center mt-5">
               <button type="button" className="btn btn-primary-soft">
                 Load more post{" "}
                 <i className="bi bi-arrow-down-circle ms-2 align-middle" />
               </button>
             </div>
             {/* Load more END */}
           </div>
         </div>
         {/* Main Post END */}
         {/* Sidebar START */}
         <div className="col-lg-3 mt-5 mt-lg-0">
           <div data-sticky="" data-margin-top={80} data-sticky-for={767}>
             {/* Social widget START */}
             <div className="row g-2">
               <div className="col-4">
                 <a
                   href="#"
                   className="bg-facebook rounded text-center text-white-force p-3 d-block"
                 >
                   <i className="fab fa-facebook-square fs-5 mb-2" />
                   <h6 className="m-0">1.5K</h6>
                   <span className="small">Fans</span>
                 </a>
               </div>
               <div className="col-4">
                 <a
                   href="#"
                   className="bg-instagram-gradient rounded text-center text-white-force p-3 d-block"
                 >
                   <i className="fab fa-instagram fs-5 mb-2" />
                   <h6 className="m-0">1.8M</h6>
                   <span className="small">Followers</span>
                 </a>
               </div>
               <div className="col-4">
                 <a
                   href="#"
                   className="bg-youtube rounded text-center text-white-force p-3 d-block"
                 >
                   <i className="fab fa-youtube-square fs-5 mb-2" />
                   <h6 className="m-0">22K</h6>
                   <span className="small">Subs</span>
                 </a>
               </div>
             </div>
             {/* Social widget END */}
             {/* Trending topics widget START */}
             <div>
               <h4 className="mt-4 mb-3">Trending topics</h4>
               {/* Category item */}
               <div
                 className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4 "
                 style={{
                   backgroundImage: "url(assets/images/blog/4by3/01.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 <div className="p-3">
                   <a
                     href="#"
                     className="stretched-link btn-link fw-bold text-white h5"
                   >
                     Travel
                   </a>
                 </div>
               </div>
               {/* Category item */}
               <div
                 className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                 style={{
                   backgroundImage: "url(assets/images/blog/4by3/02.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 <div className="bg-dark-overlay-4 p-3">
                   <a
                     href="#"
                     className="stretched-link btn-link fw-bold text-white h5"
                   >
                     Business
                   </a>
                 </div>
               </div>
               {/* Category item */}
               <div
                 className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                 style={{
                   backgroundImage: "url(assets/images/blog/4by3/03.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 <div className="bg-dark-overlay-4 p-3">
                   <a
                     href="#"
                     className="stretched-link btn-link fw-bold text-white h5"
                   >
                     Marketing
                   </a>
                 </div>
               </div>
               {/* Category item */}
               <div
                 className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                 style={{
                   backgroundImage: "url(assets/images/blog/4by3/04.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 <div className="bg-dark-overlay-4 p-3">
                   <a
                     href="#"
                     className="stretched-link btn-link fw-bold text-white h5"
                   >
                     Photography
                   </a>
                 </div>
               </div>
               {/* Category item */}
               <div
                 className="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded"
                 style={{
                   backgroundImage: "url(assets/images/blog/4by3/05.jpg)",
                   backgroundPosition: "center left",
                   backgroundSize: "cover"
                 }}
               >
                 <div className="bg-dark-overlay-4 p-3">
                   <a
                     href="#"
                     className="stretched-link btn-link fw-bold text-white h5"
                   >
                     Sports
                   </a>
                 </div>
               </div>
               {/* View All Category button */}
               <div className="text-center mt-3">
                 <a href="#" className="fw-bold text-body text-primary-hover">
                   <u>View all categories</u>
                 </a>
               </div>
             </div>
             {/* Trending topics widget END */}
             <div className="row">
               {/* Recent post widget START */}
               <div className="col-12 col-sm-6 col-lg-12">
                 <h4 className="mt-4 mb-3">Recent post</h4>
                 {/* Recent post item */}
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
                       <h6>
                         <a
                           href="post-single-2"
                           className="btn-link stretched-link text-reset fw-bold"
                         >
                           The pros and cons of business agency
                         </a>
                       </h6>
                       <div className="small mt-1">May 17, 2022</div>
                     </div>
                   </div>
                 </div>
                 {/* Recent post item */}
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
                       <h6>
                         <a
                           href="post-single-2"
                           className="btn-link stretched-link text-reset fw-bold"
                         >
                           5 reasons why you shouldn't startup
                         </a>
                       </h6>
                       <div className="small mt-1">Apr 04, 2022</div>
                     </div>
                   </div>
                 </div>
                 {/* Recent post item */}
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
                       <h6>
                         <a
                           href="post-single-2"
                           className="btn-link stretched-link text-reset fw-bold"
                         >
                           Ten questions you should answer truthfully.
                         </a>
                       </h6>
                       <div className="small mt-1">Jun 30, 2022</div>
                     </div>
                   </div>
                 </div>
                 {/* Recent post item */}
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
                       <h6>
                         <a
                           href="post-single-2"
                           className="btn-link stretched-link text-reset fw-bold"
                         >
                           Five unbelievable facts about money.
                         </a>
                       </h6>
                       <div className="small mt-1">Nov 29, 2022</div>
                     </div>
                   </div>
                 </div>
               </div>
               {/* Recent post widget END */}
               {/* ADV widget START */}
               <div className="col-12 col-sm-6 col-lg-12 my-4">
                 <a href="#" className="d-block card-img-flash">
                   <img src="assets/images/adv.png" alt="" />
                 </a>
                 <div className="smaller text-end mt-2">
                   ads via{" "}
                   <a href="#" className="text-body">
                     <u>Bootstrap</u>
                   </a>
                 </div>
               </div>
               {/* ADV widget END */}
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
   {/* Divider */}
   <div className="container">
     <div className="border-bottom border-primary border-2 opacity-1" />
   </div>
   {/* =======================
Section START */}
   <section className="pt-4">
     <div className="container">
       <div className="row">
         <div className="col-md-12">
           {/* Title */}
           <div className="mb-4 d-md-flex justify-content-between align-items-center">
             <h2 className="m-0">
               <i className="bi bi-megaphone" /> Sponsored news
             </h2>
             <a href="#" className="text-body small">
               <u>Content by: Bootstrap</u>
             </a>
           </div>
           <div className="tiny-slider arrow-hover arrow-blur arrow-dark arrow-round">
             <div
               className="tiny-slider-inner"
               data-autoplay="true"
               data-hoverpause="true"
               data-gutter={24}
               data-arrow="true"
               data-dots="false"
               data-items-xl={4}
               data-items-md={3}
               data-items-sm={2}
               data-items-xs={1}
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
                 <div className="card-body px-0 pt-3">
                   <h5 className="card-title">
                     <a
                       href="post-single-3"
                       className="btn-link text-reset fw-bold"
                     >
                       7 common mistakes everyone makes while traveling
                     </a>
                   </h5>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
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
                             <a
                               href="#"
                               className="stretched-link text-reset btn-link"
                             >
                               Lori
                             </a>
                           </span>
                         </div>
                       </div>
                     </li>
                     <li className="nav-item">Mar 07, 2022</li>
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
                   <h5 className="card-title">
                     <a
                       href="post-single-3"
                       className="btn-link text-reset fw-bold"
                     >
                       Skills that you can learn from business
                     </a>
                   </h5>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
                     <li className="nav-item">
                       <div className="nav-link">
                         <div className="d-flex align-items-center position-relative">
                           <div className="avatar avatar-xs">
                             <div className="avatar-img rounded-circle bg-warning">
                               <span className="text-dark position-absolute top-50 start-50 translate-middle fw-bold small">
                                 MK
                               </span>
                             </div>
                           </div>
                           <span className="ms-3">
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
                 <div className="card-body px-0 pt-3">
                   <h5 className="card-title">
                     <a
                       href="post-single-3"
                       className="btn-link text-reset fw-bold"
                     >
                       10 tell-tale signs you need to get a new business
                     </a>
                   </h5>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
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
                     <li className="nav-item">Jun 01, 2022</li>
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
                     src="assets/images/blog/4by3/10.jpg"
                     alt="Card image"
                   />
                   <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                     {/* Card overlay Top */}
                     <div className="w-100 mb-auto d-flex justify-content-end">
                       <div className="text-end ms-auto">
                         {/* Card format icon */}
                         <div
                           className="icon-md bg-white-soft bg-blur text-white rounded-circle"
                           title="This post has images"
                         >
                           <i className="fas fa-image" />
                         </div>
                       </div>
                     </div>
                     {/* Card overlay bottom */}
                     <div className="w-100 mt-auto">
                       <a href="#" className="badge bg-primary mb-2">
                         <i className="fas fa-circle me-2 small fw-bold" />
                         Photography
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="card-body px-0 pt-3">
                   <h5 className="card-title">
                     <a
                       href="post-single-3"
                       className="btn-link text-reset fw-bold"
                     >
                       This is why this year will be the year of startups
                     </a>
                   </h5>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
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
                     <li className="nav-item">Dec 07, 2022</li>
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
                     src="assets/images/blog/4by3/11.jpg"
                     alt="Card image"
                   />
                   <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                     {/* Card overlay bottom */}
                     <div className="w-100 mt-auto">
                       <a href="#" className="badge text-bg-warning mb-2">
                         <i className="fas fa-circle me-2 small fw-bold" />
                         Technology
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="card-body px-0 pt-3">
                   <h5 className="card-title">
                     <a
                       href="post-single-3"
                       className="btn-link text-reset fw-bold"
                     >
                       Best Pinterest Boards for learning about business
                     </a>
                   </h5>
                   {/* Card info */}
                   <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
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
               {/* Card item END */}
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   {/* =======================
Section END */}
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
             href="post-single-3"
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
             href="post-single-3"
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