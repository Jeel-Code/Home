import React from 'react'

import './Home.css'
import '../../Elements/Css/Elements.css'

import E1 from '../../Elements/E1/E1'
import E2 from '../../Elements/E2/E2'
import E3 from '../../Elements/E3/E3'
import E4 from '../../Elements/E4/E4'

import E5 from '../../Elements/E5/E5'
import E6 from '../../Elements/E6/E6'
import E7 from '../../Elements/E7/E7'
import E8 from '../../Elements/E8/E8'

import E9 from '../../Elements/E9/E9'
import E10 from '../../Elements/E10/E10'
import E11 from '../../Elements/E11/E11'
import E12 from '../../Elements/E12/E12'

import E13 from '../../Elements/E13/E13'
import E14 from '../../Elements/E14/E14'
import E15 from '../../Elements/E15/E15'
import E16 from '../../Elements/E16/E16'


function Home() {
   return (
      <>

         <section>
            <title>Home || Buy Any In From To The Cheapkart</title>
         </section>

         <div className="e-1-f">

            <section>
               <div className="dd-flex flex-margin">
                  <E1 />
                  <E2 />
                  <E3 />
                  <E4 />
               </div>
            </section>

            <section>
               <div className="dd-flex flex-margin">
                  <E5 />
                  <E6 />
                  <E7 />
                  <E8 />
               </div>
            </section>

            <section>
               <div className="dd-flex flex-margin">
                  <E9 />
                  <E10 />
                  <E11 />
                  <E12 />
               </div>
            </section>

            <section>
               <div className="dd-flex flex-margin">
                  <E13 />
                  <E14 />
                  <E15 />
                  <E16 />
               </div>
            </section>

         </div>


      </>
   )
}

export default Home