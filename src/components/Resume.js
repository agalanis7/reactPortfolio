import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p className="detail">
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               {/* <p>
               {resumeData.skillsDescription}
               </p> */}

   				<div className="bars">

   				   <ul className="skills">
                {/* {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return( */}
                      <li>
                      <span className={`bar-expand-html`}>
                      </span>
                      <em>html</em>
                    
                      </li>

                      <li>
                      <span className={`bar-expand-css`}>
                      </span>
                      <em>css</em>
                      </li>

                      <li>
                      <span className={`bar-expand-javascript`}>
                      </span>
                      <em>JavaScript</em>
                      </li>

                      <li>
                      <span className={`bar-expand-react`}>
                      </span>
                      <em>React.js</em>
                      </li>

                      <li>
                      <span className={`bar-expand-reactNative`}>
                      </span>
                      <em>React Native</em>
                      </li>

                      <li>
                      <span className={`bar-expand-rubyonrails`}>
                      </span>
                      <em>Ruby On Rails</em>
                      </li>

                      <li>
                      <span className={`bar-expand-wordpress`}>
                      </span>
                      <em>WordPress</em>
                      </li>
                

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}