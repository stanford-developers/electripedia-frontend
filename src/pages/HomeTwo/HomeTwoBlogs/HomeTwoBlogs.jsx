import React from 'react';
import HomeTwoSingleBlog from '../../../components/HomeTwoSingleBlog/HomeTwoSingleBlog';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTwoBlogs = () => {
   return (
      <>
         <section id="latestNews" className="blog__area blog__area--dark pt-115 pb-135">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-65">
                        {/* <span>Latest News111</span> */}
                        <h2>Latest News</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <HomeTwoSingleBlog monthYear="Oct 2026" date="21" publisher="" desc="We presented ElectriPedia at the ET Summit." href="https://etcc.swoogo.com/etsummit26/program"/>
                  <HomeTwoSingleBlog monthYear="Oct 2026" date="6" publisher="" desc="We presented ElectriPedia at the STEER Sustainable Systems Seminar." href="https://steer.stanford.edu/sustainable-systems-lunch-seminar"/>
                  <HomeTwoSingleBlog monthYear="May 2025" date="22" publisher="" desc="Our building permit information extraction methodology paper is published in Energy and Buildings!" href="https://www.sciencedirect.com/science/article/pii/S0378778825006206"/>

               </div>
               {/* <div className="row">
                  <div className="col-xl-12">
                     <div className="blog__more mt-60">
                        <Link to="/blogs" className="z-btn z-btn-border">View all News
                           <i > <CgArrowLongRight /> </i>
                        </Link>
                     </div>
                  </div>
               </div> */}
            </div>
         </section>
      </>
   );
};

export default HomeTwoBlogs;