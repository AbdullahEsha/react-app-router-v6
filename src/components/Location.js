import React from 'react'
import Footer from './Footer'
import MainNav from './MainNav'

const Location = () => {
  return (
    <>
      <div className="about-background-img">
        <MainNav />
        <div className="container about-content-1-outside">
          <div className="about-content-1">
            <h1>LOCATION</h1>
          </div>
        </div>
        <div className="about-content-2">
          <div className="container">
            <div className="about-content-2-inside">
              <h2>Location</h2>
              <div className="row">
                <div
                  className="col-sm-12 col-md-6"
                  id="location-content-2-left"
                >
                  <div className="location-detail">
                    <h5>DINE-IN / TAKE OUT</h5>
                    <p>
                      1301 34th ST South
                      <br />
                      St.Petersburg
                      <br />
                      FL 33711
                    </p>
                    <a href="tel:+8801521431502">+8801521431502</a>
                  </div>
                  <div className="location-detail">
                    <h5>TAKE OUT (ALL SUMMER)</h5>
                    <p>
                      1301 34th ST South
                      <br />
                      St.Petersburg
                      <br />
                      FL 33711
                    </p>
                    <a href="tel:+8801521431502">+8801521431502</a>
                  </div>
                  <div className="location-detail">
                    <h5>WINTER HOURS</h5>
                    <div className="row">
                      <div className="col-sm-6">
                        Sunday <br />
                        Monday <br />
                        Tuesday <br />
                        Wednesday <br />
                        Thursday <br />
                        Friday <br />
                        Saturday <br />
                      </div>
                      <div className="col-sm-6">
                        11:00AM - 09:00PM <br />
                        11:00AM - 09:00PM <br />
                        11:00AM - 09:00PM <br />
                        11:00AM - 09:00PM <br />
                        11:00AM - 09:00PM <br />
                        11:00AM - 09:00PM <br />
                        11:00AM - 09:00PM <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-12 col-md-6"
                  id="location-content-2-right"
                >
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        title="any"
                        width="100%"
                        height="450px"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=1301%2034th%20ST%20South,%20St.Petersburg%20FL%2033711&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                      ></iframe>
                    </div>
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

export default Location
