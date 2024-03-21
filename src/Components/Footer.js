import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-5 align-items-center'>
            <div className='footer-top-data d-flex gap-15 align-items-center'>
            <FaEnvelope className='bigger-icon gap-10'/>
            <h2 className='text-white'>
              Sign up to our newsletter
            </h2>
            </div>
          </div>
          <div className='col-sm-7'>
            <div className="input-group">
                    <input type="text" 
                           className="form-control py-1" 
                           placeholder="Your email here" 
                           aria-label="Your email here" 
                           aria-describedby="basic-addon2"/>
                    <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-4'>
            <h4 className='text-white mb-4'>Contact us</h4>
            <div className='text-white fs-6'>
              <address>Blv. Vasile Parvan 2 <br/> Timisoara, Timis, Romania</address>
              <a href='tel: +40700000000' className='mt-3 d-block mb-1 text-white'><FaPhoneAlt className='fs-5'/> +40 700000000</a>
              <a href='mailto:Bytequake_emporium@gmail.com' className='mt-2 d-block mb-0 text-white'><HiOutlineMailOpen className='fs-4'/> Bytequake_emporium@gmail.com</a>
          
          <div className='social_icons d-flex align-items-center gap-30 mt-4'>
            <a className='text-white' href=''><BsLinkedin className='fs-4'/></a>
            <a className='text-white' href=''><BsInstagram className='fs-4'/></a>
            <a className='text-white' href=''><BsYoutube className='fs-4'/></a>
            <a className='text-white' href=''><BsGithub className='fs-4'/></a>
          </div>
          </div>
          </div>
          <div className='col-sm-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
              <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
            </div>
          </div>
          <div className='col-sm-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About us</Link>
              <Link className='text-white py-2 mb-1'>FAQ</Link>
              <Link className='text-white py-2 mb-1'>Content</Link>
            </div>
          </div>
          <div className='col-sm-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Components</Link>
              <Link className='text-white py-2 mb-1'>Accessories</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by DotNext-Bubble
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer