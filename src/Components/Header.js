import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { AiOutlineLaptop } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { DiGitCompare } from "react-icons/di";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-1'>
          <div className='container-l'>
              <div className='row'>
                  <div className='col-sm-2'>
                      <p className='text-end text-white mb-0'>Welcome to the emporium!</p>
                  </div>
                  <div className='col-sm-9'>
                      <p className='text-end text-white mb-0'>
                          Hotline: <a className='text-white' href='tel: +40 70 000 0000'>+40 700000000</a>
                      </p>
                  </div>
              </div>
          </div>
      </header>
      <header className='header-upper py-2'>
        <div className='container-xxl'>
            <div className='row align-items-center'>
                <div className='col-sm-3'>
                    <h1 className='justify-content-between d-flex'>
                    <AiOutlineLaptop className='bigger-icon'/>
                        <Link className='text-white fs-4'>ByteQuake Emporium</Link>
                    </h1> 
                </div>
                <div className='col-sm-5'>
                    <div className="input-group">
                    <input type="text" 
                           className="form-control py-2" 
                           placeholder="Search items here..." 
                           aria-label="Search items here..." 
                           aria-describedby="basic-addon2"/>
                    <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-5'/></span>
                    </div>    
                </div>
                <div className='col-sm-4'> 
                <div className='header-upper-links d-flex align-items-center justify-content-between gap-15'>
                    <div>
                    <Link className='d-flex align-items-center gap-10 text-white'>
                    <DiGitCompare className='bigger-icon'/>
                    <p className='mb-0'>Compare~<br/>Products</p>
                    </Link>
                    </div>
                    <div>
                    <Link className='d-flex align-items-center gap-10 text-white'>
                    <MdFavoriteBorder className='bigger-icon'/>
                    <p className='mb-0'>Favorite<br/>Wishlist</p>
                    </Link>
                    </div>
                    <div>
                    <Link className='d-flex align-items-center gap-10 text-white'>
                    <FiUser className='bigger-icon'/>
                    <p className='mb-0'>Login<br/>Profile</p>
                    </Link>
                    </div>
                    <div>
                    <Link className='d-flex align-items-center gap-10 text-white'>
                    <CgShoppingCart className='bigger-icon'/>
                    <div className='d-flex flex-column'>
                        <span className='badge badge-pill bg-red text-white'>2</span>
                        <p className='mb-0'>$500</p>
                    </div>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </header>
      <header className='header-bottom py-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-sm-12'>
                   <div className='menu-bottom d-flex align-items-center gap-30'>
                    <div>
                    <div class="dropdown">
                        <BiMenuAltLeft className='bigger-icon'/>
                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center"
                         type="button" id="dropdownMenuButton1" 
                         data-bs-toggle="dropdown" 
                         aria-expanded="false">
                          <span className='me-5 d-inline-block'>Categories</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item text-white" to=''>Action</Link></li>
                            <li><Link className="dropdown-item text-white" to=''>Another action</Link></li>
                            <li><Link className="dropdown-item text-white" to=''>Something else here</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className='menu-links'>
                        <div className='d-flex align-items-center gap-15'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/'>Our Store</NavLink>
                            <NavLink to='/'>Blogs~</NavLink>
                            <NavLink to='/'>Content~</NavLink>
                        </div>
                    </div>
                   </div> 
                </div>
            </div>
        </div>
      </header>
      </>
  )
}

export default Header