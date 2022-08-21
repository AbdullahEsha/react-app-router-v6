import React from 'react'
import Footer from './Footer'
import MainNav from './MainNav'
import image1 from '../asset/image/menu-burgers.png'
import image2 from '../asset/image/menu-sandwich.png'
import image3 from '../asset/image/menu-fries.png'

const Menu = () => {
  return (
    <>
      <div className="about-background-img">
        <MainNav />
        <div className="container about-content-1-outside">
          <div className="about-content-1">
            <h1>BURGER MENU</h1>
          </div>
        </div>
        <div className="about-content-2">
          <div className="container">
            <div className="menu-content-2-inside">
              <h1>BURGER MEALS (ALL MEALS COME WITH FRIES)</h1>
              <h3>UPGRADE YOUR BURGER TO A 1/2 POUND FOR $7</h3>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="menu-content-3">
                    <h4>Classic Burger (Burger Only)</h4>
                    <p>
                      Mustard, Ketchup, Lettuce, Tomato, Onion ADD CHEESE $1.95
                      ADD BACON $1.95
                    </p>
                    <span>$9.95</span>
                  </div>
                  <div className="menu-content-3">
                    <h4>Traditional</h4>
                    <p>
                      Fresh Lettuce, Onion, Tomatoes with Pickles, Ketchup &
                      Mayo
                    </p>
                    <span>$15.75</span>
                  </div>
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="menu-content-3-image">
                    <img src={image1} alt="burgers" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Extras</h4>
                    <p>
                      Sweet Potato Fries +$3.49 <br />
                      Poutine +$4.49 <br />
                      Gluten Free Bun +$1.75 <br />
                      Onion Rings +$3.95
                    </p>
                  </div>
                </div>
              </div>
              <h2>SANDWICHES</h2>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="menu-content-3">
                    <h4>Classic Burger (Burger Only)</h4>
                    <p>
                      Mustard, Ketchup, Lettuce, Tomato, Onion ADD CHEESE $1.95
                      ADD BACON $1.95
                    </p>
                    <span>$9.95</span>
                  </div>
                  <div className="menu-content-3">
                    <h4>Traditional</h4>
                    <p>
                      Fresh Lettuce, Onion, Tomatoes with Pickles, Ketchup &
                      Mayo
                    </p>
                    <span>$15.75</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="menu-content-3-image">
                    <img src={image2} alt="sandwich" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Extras</h4>
                    <p>
                      Sweet Potato Fries +$3.49 <br />
                      Poutine +$4.49 <br />
                      Gluten Free Bun +$1.75 <br />
                      Onion Rings +$3.95
                    </p>
                  </div>
                </div>
              </div>
              <h2>FRIES</h2>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="menu-content-3">
                    <h4>Classic Burger (Burger Only)</h4>
                    <p>
                      Mustard, Ketchup, Lettuce, Tomato, Onion ADD CHEESE $1.95
                      ADD BACON $1.95
                    </p>
                    <span>$9.95</span>
                  </div>
                  <div className="menu-content-3">
                    <h4>Traditional</h4>
                    <p>
                      Fresh Lettuce, Onion, Tomatoes with Pickles, Ketchup &
                      Mayo
                    </p>
                    <span>$15.75</span>
                  </div>
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="menu-content-3-image">
                    <img src={image3} alt="fries" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Extras</h4>
                    <p>
                      Sweet Potato Fries +$3.49 <br />
                      Poutine +$4.49 <br />
                      Gluten Free Bun +$1.75 <br />
                      Onion Rings +$3.95
                    </p>
                  </div>
                </div>
              </div>
              <h2>KIDS</h2>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Extras</h4>
                    <p>
                      Sweet Potato Fries +$3.49 <br />
                      Poutine +$4.49 <br />
                      Gluten Free Bun +$1.75 <br />
                      Onion Rings +$3.95
                    </p>
                  </div>
                </div>
              </div>
              <h2>DRINKS</h2>
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Mountain Burger</h4>
                    <p>
                      Fresh Arugula & Tomatoes with Goat Cheese, Pickled Red
                      Onions & Truffle Aioli
                    </p>
                    <span>$16.25</span>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="menu-content-3">
                    <h4>Extras</h4>
                    <p>
                      Sweet Potato Fries +$3.49 <br />
                      Poutine +$4.49 <br />
                      Gluten Free Bun +$1.75 <br />
                      Onion Rings +$3.95
                    </p>
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
