import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/image/logo.png'

const MainNav = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <Link className="navbar-logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-sm-8 col-md-8">
            <div className="right-position-nav">
              <label>MENU</label> <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainNav
