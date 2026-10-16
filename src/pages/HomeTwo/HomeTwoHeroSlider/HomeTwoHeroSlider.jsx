import React from 'react';

// The sky above the house infographic is extended with a matching color so the
// title sits in it; scrolling down then passes over the full infographic.
const HomeTwoHeroSlider = () => {
    return (
        <>
          <section className="hero__infographic">
             <div className="hero__sky">
                <div className="container text-center">
                   <h1>ElectriPedia</h1>
                   <p>A nationwide, address-level electrification dataset built from building permits.</p>
                   <a href="#latestNews" className="z-btn">See what's New</a>
                </div>
             </div>
             <img src="assets/img/slider/02/electrification-house.png" alt="House showing the electrification technologies ElectriPedia tracks: solar, air source heat pump, electric dryer, induction cooktop, heat pump water heater, electric vehicle, and electric panel" />
          </section>
        </>
    );
};

export default HomeTwoHeroSlider;
