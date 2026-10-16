import React from 'react';

const HomeTwoExpertArea = () => {
   return (
      <>
         <section className="expart__area pt-60 pb-100 wow fadeInUp" data-wow-delay=".4s">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="expart__wrapper">
                        <div className="expart__tab">
                           <div className="expart__tab-content white-bg">
                              <div className="expart__content expart__content-full">
                                 <h3>About the Dataset</h3>
                                 <p>ElectriPedia is a nationwide, address-level electrification dataset derived from unstructured building permit descriptions. Our research team at Stanford developed a scalable pipeline with small, open-weight large language models (LLMs) and retrieval-based in-context learning for technology identification and structured extraction of 86 attributes across seven electrification technologies. Applied nationwide, ElectriPedia identifies 33.3 million technology instances across 12.8 million addresses, covering residential, commercial, and industrial buildings. By providing spatially and temporally detailed visibility into electrification adoption, ElectriPedia can enable applications that are difficult or impossible with less granular datasets, including more targeted infrastructure planning, improved grid operations, equitable policy design, and electrification progress tracking.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeTwoExpertArea;