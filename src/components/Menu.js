import React from 'react'
import Footer from './Footer'
import MainNav from './MainNav'
import image1 from '../asset/image/menu-burgers.png'
import image2 from '../asset/image/menu-burgers2.png'
import image3 from '../asset/image/menu-burgers3.png'
import image4 from '../asset/image/menu-burgers4.png'
import image5 from '../asset/image/menu-burgers5.png'
import image6 from '../asset/image/menu-burgers6.png'

const Menu = () => {
  return (
    <>
      <div className="about-background-img">
        <MainNav />
        <div className="container about-content-1-outside">
          <div className="about-content-1">
            <h1>GALLERY</h1>
          </div>
        </div>
        <div className="about-content-2">
          <div className="container" id="menu-container">
            <div className="about-content-2-inside">
              <h2>Gallery</h2>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3-image">
                    <img src={image1} alt="burgers" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3-image">
                    <img src={image2} alt="burgers" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3-image">
                    <img src={image3} alt="burgers" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3-image">
                    <img src={image4} alt="burgers" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3-image">
                    <img src={image5} alt="burgers" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3-image">
                    <img src={image6} alt="burgers" />
                  </div>
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

export default Menu
