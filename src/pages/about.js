import React, { useState } from 'react'
import * as Styles from '../styles/aboutPageStyles.module.css';
import Layout from '../Components/Layout';
import { Helmet } from 'react-helmet';
import Projects from '../Components/Projects';
import TechStack from '../Components/TechStack';
import ImageCarousel from '../Components/ImageCarousel';

function AboutMe() {
  // document.body.style.backgroundColor = "#000000";
  const scrollToView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.parentNode.scrollTop = element.offsetTop - element.parentNode.offsetTop;
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Blogs | Krishna's Blogs</title>
        <meta name="description" content="Logging my thoughts into my blogs..."></meta>
      </Helmet>
      <div className={Styles.container} id = "about-container">
        <div className={Styles.leftHalf}>
          <div className={Styles.name}>
            Krishna Kolte
          </div>
          <div className={Styles.subname}>
            Third year UG at IITKGP
          </div>
          <div className={Styles.shortIntro}>
            <p>
              Currently pursuing B.Tech in Electrical Engineering, I am a software developer by passion, and compassionate soul by heart :)  
            </p>
            <p>
              In my spare time, I write blogs on this platform, love to binge watch movies and sitcoms, and play sports sometimes.
            </p>
          </div>
          <div className={Styles.pageNav}>
            <div className={Styles.navOption} onClick={()=>{scrollToView("Projects")}}>01 <hr/>PROJECTS</div>
            <div className={Styles.navOption} onClick={()=>{scrollToView("TechStack")}}>02 <hr/>TECH STACK</div>
            <div className={Styles.navOption} onClick={()=>{scrollToView("Gallery")}}>03 <hr/>GALLERY</div>
          </div>
        </div>
        <div className={Styles.rightHalf}>
          <div id="Projects"><Projects/></div> 
          <div id="TechStack"><TechStack/></div>
          <div id="Gallery"><ImageCarousel/></div>
        </div>     
      </div>
    </Layout>
  )
}

export default AboutMe;