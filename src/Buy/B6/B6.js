import React from 'react'

import Img1 from '../../Assets/6F.webp'
import Img2 from '../../Assets/6B.webp'

function B6() {
    return (
        <>

            <section>
                <title>Buy This Blue T-Shirt || Thanks For Visit CheapKart</title>
            </section>

            <section>
                <div className="main-div-for-f">
                    <div className="fimage-left">
                        <img src={Img1} alt="..." />
                    </div>
                    <div className="fimage-right">
                        <div className="main-class" style={{ width: '100%' }}>
                            <div className='bg-img-fonsts' style={{ padding: 0 }}>
                                <p>London Hills Solid Men's Round Neck Cotton Blend Half Sleeve T-Shirts</p>
                                <h6 className='bg-img-fonsts-h6'>$<h3><b>10</b></h3>.90</h6>
                                <span><h6>or 9 x</h6><h6><b>$1.21</b></h6></span>

                                <small style={{ textAlign: 'left' }}>
                                    <p>About this item</p>
                                    <ul>
                                        <li>Care Instructions: Hand Wash Only</li>
                                        <li>Fit Type: Regular Fit</li>
                                        <li>Fabric: Cotton</li>
                                        <li>Style: Regular</li>
                                        <li>Neck Style: Round Neck</li>
                                        <li>Pattern: Striped</li>
                                        <li>Sleeve Type: Half Sleeve</li>
                                    </ul>
                                </small>

                                <a href='/' className='Buy-Button'>Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className="fimage-left">
                        <img src={Img2} alt="..." />
                    </div>
                </div>
            </section>
        </>
    )
}

export default B6