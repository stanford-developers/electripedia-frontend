import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';

const Contact = () => {
   return (
      <>
         <PageHelmet pageTitle="Contact Page" />

         <HomeTwoHeader/>
         <CommonCtaArea className="cta__area--page" />
         <HomeTwoFooter/>
      </>
   );
};

export default Contact;