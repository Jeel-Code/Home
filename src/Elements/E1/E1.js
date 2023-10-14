import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Elements.css'

function E1() {
  return (
    <>
      <div className="main-class">
        <div className="bg-1-img">
        <div className='bg-img-fonsts'>
          <p>Cropped Stay Groovy off</p>
          <p>white</p>
          <div className='span-tag-center-yojna'><span className='border-span'></span></div>
          <h6>$<h3><b>10</b></h3>.90</h6>
          <span><h6>or 9 x</h6><h6><b>$1.21</b></h6></span>

          <Link aria-current='page' to='/B1' className='Buy-Button'>Buy</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default E1