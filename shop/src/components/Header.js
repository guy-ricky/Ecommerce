import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { HiOutlineRefresh } from "react-icons/hi";
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className='text-white mb-0 px-3 '>Best Deals</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white'>Hotline: +254745932555</p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3 items-center'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-2'>
            <h5><Link className='text-white px-3'>Blessed Home Accessories.</Link></h5>
          </div>
          <div className='col-5'>
            <div className='input-group mb-3'>
              <input type='text' className='formcontrol' placeholder='Search for Products' aria-label='Search for Products' aria-describedby='basic-addon2'/>
              <span className='input-group-text' id='basic-addon2'> <CiSearch/></span>
            </div>
          </div>
          <div className='col-5 text-white'>
            <div> <HiOutlineRefresh/> <h6> Compare</h6> <h6>Products</h6></div>
          </div>
        </div>
      </div>
    </header>


  


    
    </>
  )
}

export default Header