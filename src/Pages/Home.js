import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='main-banner position-relative '>
              <img src='images/main-banner-1.jpg' className='img-fluid rounderd-3' alt='main banner'/>
              <div className='main-banner-content position-absolute'>
                <h4>New era of online shopping</h4>
                <h5>All the new technology, here!</h5>
                <p>Best Prices!!</p>
                <Link className='button-banner'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-15'>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-01.jpg' className='img-fluid rounderd-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>Best sale</h4>
                <h5>Most viewed items</h5>
                <p>Take a look!</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src='images/catbanner-03.jpg' className='img-fluid rounderd-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New arrival !!</h4>
                <h5>Limited offer only</h5>
                <p>Best value!</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src='images/catbanner-02.jpg' className='img-fluid rounderd-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>Try something new</h4>
                <h5>Discover new items</h5>
                <p>Get out of your confort zone</p>
              </div>
            </div>
            <div className='small-banner position-relative'>
              <img src='images/catbanner-04.jpg' className='img-fluid rounderd-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>Stay in style</h4>
                <h5>Accessories for you</h5>
                <p>Customize your experience</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-12'>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home