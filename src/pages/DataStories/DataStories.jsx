import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageHelmet from '../../components/shared/PageHelmet';
import dataStoriesData from '../../data/dataStoriesData';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';

const DataStories = () => {
   return (
      <>
         <PageHelmet pageTitle="Data" />

         <HomeTwoHeader/>
         <PageTitle title="Data">
            <p className="data-stories__intro">Analyses and interactive maps built with the ElectriPedia dataset.</p>
         </PageTitle>
         <section className="data-stories pb-100">
            <div className="container">
               {dataStoriesData.map((story) => (
                  <article key={story.id} className="data-story">
                     {story.image && (
                        <a href={story.href} className="data-story__thumb">
                           <img src={story.image} alt="" />
                        </a>
                     )}
                     <div className="data-story__content">
                        <h3><a href={story.href}>{story.title}</a></h3>
                        <p>{story.blurb}</p>
                     </div>
                  </article>
               ))}
            </div>
         </section>
         <HomeTwoFooter/>
      </>
   );
};

export default DataStories;
