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

const interactiveMapZipcodeURL =  "https://public.tableau.com/views/Book_augumented_2/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link";
const InteractiveMap = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    }

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
                                <h2 >Want to check out your neighbourhood?</h2>
                                <button onClick={handleToggle} style={{ zIndex: 99999 }}>
                                    {isVisible ? 'Hide' : 'Yes!'}
                                </button>

                                <div>
                                    {isVisible && (
                                        <div>
                                            {/* contents to be shown */}
                                            <ol>
                                                <li>* </li>
                                                <li>1. Click the <strong>state</strong> to see all zipcode spatial results of your state.</li>
                                                <li>2. After selecting the state, use the <strong>search bar</strong> on the top left, where you can input city/zipcode within the state you are interested. e.g, try <strong>Palo Alto</strong> or <strong>94305</strong>!</li>
                                                <li>3. Select the <strong>variable</strong> you want to see.</li>
                                                <li>4. Hover over the zipcode to get detailed information. But do not to click!</li>
                                                <li>5. Slide the <strong>Year</strong> slider or click play button to see the temporal results evolve over time from 2005 - 2017.</li>
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
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<div>*/}
            {/*    *Due to the large data size of the zipcode level, bear with us while we load the map.*/}
            {/*</div>*/}
            <div>
                {isVisible && (
                    <TableauComZipcode/>
                )}
            </div>
            <HomeTwoFooter/>
        </div>
    );
};

export default InteractiveMap;