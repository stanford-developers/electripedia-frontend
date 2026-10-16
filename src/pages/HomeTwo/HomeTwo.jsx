import React from 'react';
import PageHelmet from '../../components/shared/PageHelmet';
import TeamArea from '../Team/TeamArea/TeamArea';
import HomeTwoAchievement from './HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoAcknowledgement from './HomeTwoAcknowledgement/HomeTwoAcknowledgement';
import HomeTwoBlogs from './HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCounter from './HomeTwoCounter/HomeTwoCounter';
import HomeTwoExpertArea from './HomeTwoExpertArea/HomeTwoExpertArea';
import HomeTwoFaq from './HomeTwoFaq/HomeTwoFaq';
import HomeTwoFeatures from './HomeTwoFeatures/HomeTwoFeatures';
import HomeTwoFooter from './HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from './HomeTwoHeader/HomeTwoHeader';
import HomeTwoHeroSlider from './HomeTwoHeroSlider/HomeTwoHeroSlider';

const HomeTwo = () => {
   return (
      <>
         <PageHelmet pageTitle="Home Two" />
         <HomeTwoHeader/>
         <HomeTwoHeroSlider/>
         <HomeTwoExpertArea/>
         <HomeTwoBlogs/>
         <HomeTwoAcknowledgement/>
         {/* <HomeTwoFeatures/> */}
         {/* <HomeTwoFaq/> */}
         {/* <HomeTwoAchievement/> */}
         {/* <HomeTwoCounter/> */}
         <HomeTwoFooter/>
      </>
   );
};

export default HomeTwo;