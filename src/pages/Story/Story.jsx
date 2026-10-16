import React, { useState } from 'react';

import { useEffect, useRef } from 'react';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import featuredWorksData from "../../data/featuredWorksData";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import HomeThreeSecondServices from "../HomeThree/HomeThreeSecondServices/HomeThreeSecondServices";
import HomeTeams from "../Home/HomeTeams/HomeTeams";
import TableauComZipcode from "../../components/TableauComZipcode";
import Story1 from "../../components/Story1";
import Story2 from "../../components/Story2";

const Story = () => {
    return (
        <div>
            <style>{`
  ...
  .example-text {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    text-decoration: underline;
    color: #007BFF; // You can choose a color for the text
  }
  .example-text:hover {
    color: #0056b3; // You can choose a hover color for the text
  }
  ...
`}</style>

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
                                <h2 >Tips for Searching with ZIP Code and Year</h2>
                                <ol>
                                    <li>* </li>
                                    <li>1. Input any <strong>ZIP Code</strong> in US except zipcodes in Alaska and Hawaii</li>
                                    <li>2. Input any <strong>Year</strong> from 2005 - 2017.</li>
                                    <li>3. Fetch data!</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Story1/>
            </div>
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
                                <h2 >Tips for analysing with chatGPT</h2>
                                <ol>
                                    <li>* </li>

                                    <li><strong>Example1:</strong>My zipcode is 94025, can you show me cumulative installations and Gini Index for my area from 2015 to 2017?</li>
                                    <li><strong>Example2:</strong>My zipcode is 94305, can you show me residential PV incentives, income, and saturation fraction for my area from 2014 to 2016?</li>
                                    <li>There is a word length limitation for chatGPT. If you do not hear anything back after the sliding bar finishes, ask something else.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Story2/>
            </div>
            <HomeTwoFooter/>
        </div>
    );
};

export default Story;