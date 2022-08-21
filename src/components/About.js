import React from 'react'
import Footer from './Footer'
import MainNav from './MainNav'
import image from '../asset/image/about-berger.png'

const About = () => {
  return (
    <>
      <div className="about-background-img">
        <MainNav />
        <div className="container about-content-1-outside">
          <div className="about-content-1">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className="about-content-2">
          <div className="container">
            <div className="about-content-2-inside">
              <h2>About Us</h2>
              <div className="row">
                <div className="col-sm-12 col-md-8" id="about-content-2-left">
                  <h4>
                    Long before we opened the doors, we started in our kitchen.
                    We were aiming for nothing short of perfection.
                  </h4>
                  <p>
                    Today, every hand-pressed burger that leaves our kitchen is
                    made from our unique blend of sirloin, round and prime
                    Canadian Beef. It’s authentic, free of preservatives and
                    flame-grilled to juicy perfection.
                  </p>
                  <p>But we didn’t stop…</p>
                  <div className="about-content-image">
                    <img src={image} alt="burgar" />
                  </div>
                  <br />
                  <p>
                    How could we? Fries were about to be reimagined. Every meal
                    we serve with fries comes from real Russet potatoes cut with
                    the skin on. They’re washed in a cycle to remove the starch
                    and cooked in peanut oil for a crispy taste and golden
                    exterior.
                  </p>
                  <p>
                    If you’re staying for desert (or maybe you’re having desert
                    first!)…
                  </p>
                  <p>
                    We serve only Country Smith Ice Cream. Since 1979 they’ve
                    been serving creamy goodness. What began as a local farmer’s
                    cooperation in the late 1800’s (for butter and cheese) is
                    now on the foremost manufacturers of premium ice cream
                    located in Peterborough, Ontario. This is the finest in the
                    industry and if you’ve ever visited the Keg you’ll recognize
                    the selection.
                  </p>
                  <p>
                    Of course, if soft serve is your soft spot, we have Gaylea
                    ice cream for you!
                  </p>
                  <p>
                    Enjoy real fruit, real waffle cones and really friendly
                    staff!
                  </p>
                  <h4>We look forward to serving you!</h4>
                </div>
                <div className="col-sm-12 col-md-4" id="about-content-2-right">
                  <h3>A little bit about Our Burgers & Ice Cream</h3>
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

export default About
