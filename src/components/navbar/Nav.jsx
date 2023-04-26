import React from 'react'

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Leathern by <span className='text-primary'>Jyde</span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Slippers</a></li>
            <li><a class="dropdown-item" href="#">Sandals</a></li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="#">Shoes</a></li>
            <li><a class="dropdown-item" href="#">Boots</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/blog'>Blog</a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav