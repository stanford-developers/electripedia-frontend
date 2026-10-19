import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

const TeamArea = () => {
   return (
      <>
         <section className="team__area pt-100 pb-80">
            <div className="container">
                     <h3 className="team__group-title">Principal Investigators</h3>
                     <div className="row">
                        <SingleTeam image="assets/img/team/Ram.jpeg" name="Ram Rajagopal" title="Faculty" description = "Professor of Civil and Environmental Engineering and of Electrical Engineering" href = "//profiles.stanford.edu/ram-rajagopal" />
                        <SingleTeam image="assets/img/team/Hunt.jpg" name="Hunt Allcott" title="Faculty" description = "Professor of Global Environmental Policy" href = "https://profiles.stanford.edu/hunt-allcott" />
                        <SingleTeam image="assets/img/team/Omer.jpg" name="Ömer Karaduman" title="Faculty" description = "Assistant Professor of Operations, Information and Technology" href = "https://www.gsb.stanford.edu/faculty-research/faculty/omer-karaduman" />
                     </div>
                     <h3 className="team__group-title">PhD Students</h3>
                     <div className="row">
                        <SingleTeam image="assets/img/team/Claire.jpg" name="Claire Petersen" title="PhD Student" description = "PhD student in the Emmett Interdisciplinary Program in Environment and Resources (E-IPER)" href = "https://s3l.stanford.edu/people/claire-petersen" />
                        <SingleTeam image="assets/img/team/Tony.jpg" name="Tony Liu" title="PhD Student" description = "PhD student in Civil and Environmental Engineering" href = "https://s3l.stanford.edu/people/tony-liu" />
                        <SingleTeam image="assets/img/team/Samuel.jpg" name="Samuel Bobick" title="PhD Student" description = "PhD student in Civil and Environmental Engineering" href = "https://s3l.stanford.edu/people/samuel-bobick" />
                     </div>
                     <h3 className="team__group-title">Researchers</h3>
                     <div className="row">
                        <SingleTeam image="assets/img/team/June.jpeg" name="June Flora" title="Senior Research Scholar" description = "Senior Research Scholar in Civil and Environmental Engineering" href = "//profiles.stanford.edu/june-flora" />
                        <SingleTeam image="assets/img/team/Chad.png" name="Chad Zanocco" title="Research Engineer" description = "Research Engineer in Civil and Environmental Engineering" href = "//www.frias.uni-freiburg.de/en/people/fellows/current-fellows/zanocco-chad" />
                        <SingleTeam image="assets/img/team/Tao.jpg" name="Tao Sun" title="Postdoctoral Scholar" description = "Postdoctoral Scholar; PhD in Civil and Environmental Engineering (2025)" href = "https://s3l.stanford.edu/people/tao-sun" />
                        <SingleTeam image="assets/img/team/Carlos.jpg" name="Carlos Hsieh" title="Undergraduate Researcher" description = "Undergraduate in Data Science & Social Systems and Public Policy" href = "" />
                        {/* <SingleTeam image="assets/img/team/" name="" title="" description = "" href = "" /> */}
                     </div>
                     <h3 className="team__group-title">Alumni</h3>
                     <div className="row">
                        <SingleTeam image="assets/img/team/Zhecheng.jpg" name="Zhecheng Wang" title="" description = "Postdoctoral Scholar; PhD in Civil and Environmental Engineering (2022)" href = "//wangzhecheng.github.io" />
                        <SingleTeam image="assets/img/team/Tianyuan.jpg" name="Tianyuan Huang" title="" description = "PhD in Civil and Environmental Engineering (2024)" href = "" />
                     </div>
            </div >
         </section >
      </>
   );
};

export default TeamArea;