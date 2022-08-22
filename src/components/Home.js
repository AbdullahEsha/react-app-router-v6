import React from 'react'
import MainNav from './MainNav'
import image1 from '../asset/image/burger1.png'
import image2 from '../asset/image/burger2.png'
import image3 from '../asset/image/burger3.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  return (
    <>
      <div className="background-img-nav">
        <MainNav />
        <div className="container home-content-outside">
          <div className="home-content">
            <h1>ALWAYS FRESH</h1>
            <h2>NEVER FROZEN</h2>
          </div>
        </div>
        <div className="home-content-middel">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4" id="burger-wide-home-img">
                <div className="home-content-img">
                  <img src={image1} alt="home_burger" />
                  <h5>THE VALENTINE</h5>
                </div>
              </div>
              <div className="col-sm-4 col-md-4" id="burger-wide-home-img">
                <div className="home-content-img">
                  <img src={image2} alt="home_burger" />
                  <h5>MOUNTAIN BURGER</h5>
                </div>
              </div>
              <div className="col-sm-4 col-md-4" id="burger-wide-home-img">
                <div className="home-content-img">
                  <img src={image3} alt="home_burger" />
                  <h5>THE CANADIAN</h5>
                </div>
              </div>
              <div className="home-content-hr"></div>
              <div className="col-sm-12 col-md-3">
                <div className="home-content-inside">
                  <h6>A Little Bit About</h6>
                  <h5>OUR BURGERS</h5>
                </div>
              </div>
              <div className="col-sm-12 col-md-5">
                <div className="home-content-inside">
                  <p>
                    Our burgers are made with our special beef blend of sirlion,
                    round and prime rib Canadian Beef. Ground fresh daily and
                    hand pressed.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="home-content-inside">
                  <Link to="/menu">MORE FROM OUR MENU</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
