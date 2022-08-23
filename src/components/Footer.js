import React from 'react'
import { Link } from 'react-router-dom'
import footerImg from '../asset/image/footer-img.png'

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="container">
          <div className="row" id="border-footer">
            <div className="col-sm-4 col-md-3">
              <div className="footer-content">
                <h5>SITEMAP</h5>
                <br />
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/menu">Burger Menu</Link>
                  </li>
                  <li>
                    <a href="/location">Location</a>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="footer-content">
                <h5>DINE-IN OR TAKEOUT</h5>
                <br />
                <ul>
                  <li>+8801521431502</li>
                  <li>1301 34th ST South</li>
                  <li>St.Petersburg</li>
                  <li>FL 33711</li>
                  <li>
                    <a href="facebook.com">
                      <i class="fa-brands fa-square-facebook"></i>{' '}
                    </a>{' '}
                    <a href="instragram.com">
                      {' '}
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 col-md-6">
              <div className="footer-img">
                <img src={footerImg} alt="footerImg" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              Produced by{' '}
              <Link to="https://bayshorecommunication.com/">
                Bayshore Communication
              </Link>
            </span>
            <span className="float-right-footer">
              All contents copyright © 2022 <Link to="/">The Burger Shop</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
