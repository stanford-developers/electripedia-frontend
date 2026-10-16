import React, { useState } from 'react';

import TableauCom from '../../components/TableauCom';
import { useEffect, useRef } from 'react';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import featuredWorksData from "../../data/featuredWorksData";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import HomeThreeSecondServices from "../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices";
import HomeTeams from "../Home/HomeTeams/HomeTeams";
import TableauComZipcode from "../../components/TableauComZipcode";
const {tableau} = window;


const allCategories = ['State/County', 'Zipcode'];

const arr = featuredWorksData;
const uniqueItem = arr.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.img === arr.img && t.State === arr.State)))
const interactiveMapStateCountyURL =  "https://public.tableau.com/views/Book_augumented_2/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
const interactiveMapZipcodeURL =  "https://public.tableau.com/views/Book_augumented_2/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link";
const InteractiveMap = () => {
   return (
      <div>
         <HomeTwoHeader/>
         <section className="contact__help p-relative pt-115 pb-150">
            <div className="contact__shape">
               <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
               <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 offset-xl-1">
                     <div className="section__title section__title-3 mb-55">
                        <span >Instructions</span>
                        <h2 >Tips for Spatial Temporal Data Map</h2>
                         <ol>
                             <li>* </li>
                             <li>1. Adjust the <strong>parameter</strong> filter to customize your results.</li>
                             <li>2. Slide the <strong>Year</strong> slider or click play button to see the temporal results evolve over time from 2005 - 2017.</li>
                             <li>3. Toggle the <strong>Geographic Scale</strong> between <strong>state</strong> and <strong>county</strong> to see spatial results.</li>
                             <li>4. Note that <strong>zipcode</strong> spatial data takes a while to load for all zipcodes across the nation, please refer to the <strong>Spatial temporal data(Zipcode)</strong> tab for a smoother experience.</li>
                             <li>5. Hover over the state/county to get detailed information. But do not to click!</li>
                             <li>6. To undo all filters, click on the <strong>“reset” </strong>button at the bottom right.<img decoding="async" loading="lazy"
                                            src="https://www.psehealthyenergy.org/wp-content/uploads/2020/02/Revert-Icon-1.png"
                                            alt="" width="28" height="22"/>
                             </li>
                             <li>7. For best visualization, click on the <strong>“full screen” </strong>button at the
                                 bottom right corner.<strong><img decoding="async" loading="lazy"
                                                                  className="alignnone wp-image-4539"
                                                                  src="https://www.psehealthyenergy.org/wp-content/uploads/2020/02/Full-Screen-Icon.png"
                                                                  alt="" width="27" height="26"/></strong></li>
                             <li>8. If you have any other questions, click <strong>Contact Us</strong> tab to contact.</li>
                         </ol>
                     </div>
                  </div>
               </div>
            </div>
         </section>
          <div>
              <TableauCom/>
          </div>
         <HomeTwoFooter/>
      </div>
   );
};

export default InteractiveMap;