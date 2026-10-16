import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import TeamArea from './TeamArea/TeamArea';

const Team = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Page" />

         <HomeTwoHeader/>
         <PageTitle title="Our Team" />
         <TeamArea/>
         <HomeTwoFooter/>
      </>
   );
};

export default Team;
