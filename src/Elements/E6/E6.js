import React from 'react'
import { Link } from 'react-router-dom'

function E6() {
  return (
    <>
      <div className="main-class">
        <div className="bg-6-img">
        <div className='bg-img-fonsts'>
          <p>Blue T-Shirt</p>
          <br />
          <div className='span-tag-center-yojna'><span className='border-span'></span></div>
          <h6>$<h3><b>10</b></h3>.90</h6>
          <span><h6>or 9 x</h6><h6><b>$1.21</b></h6></span>
          
          <Link aria-current='page' to='/B6' className='Buy-Button'>Buy</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default E6