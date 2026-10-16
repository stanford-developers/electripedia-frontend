import React from 'react';
import { FaFacebookF, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Markup } from 'interweave';

const SingleTeam = ({image,name,title, description}) => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team__item p-relative text-center fix mb-30">
               <div className="team__thumb mb-25">
                  <img src={image} alt="team"/>
                     <div className="team__info text-start">
                     <h3>{name}</h3>
                     <Markup content={description}/>
                     </div>
                     {/* <div className="team__social theme-social">
                        <ul>
                           <li>
                              <a href="#">
                                 <i > <FaFacebookF/> </i>
                                 <i > <FaFacebookF /> </i>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <i > <FaTwitter/> </i>
                                 <i > <FaTwitter /> </i>
                              </a>
                           </li>
                           <li>
                              <a href="#">
                                 <i > <FaVimeoV/> </i>
                                 <i > <FaVimeoV/> </i>
                              </a>
                           </li>
                        </ul>
                     </div> */}
               </div>
               <div className="team__content">
                  <h3>{name}</h3>
                  <span>{title}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleTeam;