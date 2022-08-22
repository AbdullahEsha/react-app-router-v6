import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/image/logo.png'
import menuli from '../asset/image/menu-li.png'

const MainNav = () => {
  const [navData, setNavData] = useState('true')
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4" id="menubar-width">
            <Link className="navbar-logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-sm-8 col-md-8" id="menubar-width">
            <div className="right-position-nav">
              <label>MENU</label>{' '}
              {navData === 'true' && (
                <i
                  className="fa fa-bars"
                  onClick={() => setNavData('false')}
                ></i>
              )}
              {navData === 'false' && (
                <>
                  <i
                    class="fa-solid fa-xmark"
                    onClick={() => setNavData('true')}
                  ></i>
                  <ul className="menu-ber-content">
                    <li>
                      <Link to="/">
                        <img src={menuli} alt="menuli" className="menuli" />{' '}
                        Welcome
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <img src={menuli} alt="menuli" className="menuli" />{' '}
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/menu">
                        <img src={menuli} alt="menuli" className="menuli" />{' '}
                        Burger Menu
                      </Link>
                    </li>
                    <li>
                      <Link to="/location">
                        <img src={menuli} alt="menuli" className="menuli" />{' '}
                        Location
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainNav
