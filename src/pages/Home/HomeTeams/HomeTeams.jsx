import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';
import { FaPlus } from 'react-icons/fa';
import { CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HomeTeams = () => {
   return (
      <>
         <section className="team__area pt-30 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Team</span>
                        <h2>We developed ElectriPedia.</h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4">
                     <div className="team__more d-flex justify-content-sm-end mb-85">
                        <Link to="/team" className="z-btn z-btn-border">View all<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
               <div className="row">

               <SingleTeam image="assets/img/team/June.jpeg" name="June Flora" title="Senior Research Scholar" description = "Senior Research Scholar in Civil and Environmental Engineering" href = "/profiles.stanford.edu/june-flora" />
                        <SingleTeam image="assets/img/team/Ram.jpeg" name="Ram Rajagopal" title="Faculty" description = "Professor of Civil and Environmental Engineering and of Electrical Engineering" href = "//profiles.stanford.edu/ram-rajagopal" />
                        <SingleTeam image="assets/img/team/Chad.png" name="Chad Zanocco" title="Research Engineer" description = "Research Engineer in Civil and Environmental Engineering" href = "//www.frias.uni-freiburg.de/en/people/fellows/current-fellows/zanocco-chad" />
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="team__item team__item-add p-relative text-center fix mb-30" >
                        <div className="team__add">
                           <Link to="/team"><i > <FaPlus/> </i></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTeams;