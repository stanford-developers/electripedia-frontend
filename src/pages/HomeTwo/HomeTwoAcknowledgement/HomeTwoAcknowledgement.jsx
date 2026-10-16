import React from 'react';
import SingleExpartContent from '../../../components/SingleExpartContent/SingleExpartContent';
import HomeTwoSingleBlog from '../../../components/HomeTwoSingleBlog/HomeTwoSingleBlog';

const HomeTwoAcknowledgement = () => {
   const sponsor2 = 'assets/img/sponsor/pie-logo-v2.png';
   return (
      <>
         <section className="white-bg pt-100 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3 mb-40">
                        <h2>Acknowledgements</h2>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-xl-5">
                     <div className="section__title section__title-3">
                        <img src={sponsor2} alt="Stanford Energy, Precourt Institute for Energy"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoAcknowledgement;