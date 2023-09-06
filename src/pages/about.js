import React from 'react'
import * as Styles from '../styles/aboutPageStyles.module.css';
import Layout from '../Components/Layout';
import { Helmet } from 'react-helmet';
import Projects from '../Components/Projects';
import TechStack from '../Components/TechStack';
import ImageCarousel from '../Components/ImageCarousel';

function AboutMe() {
  return (
    <Layout>
      <Helmet>
        <title>Blogs | Krishna's Blogs</title>
        <meta name="description" content="Logging my thoughts into my blogs..."></meta>
      </Helmet>
      <div className={Styles.container}>
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
              In my spare time, I write blogs on this platform, love to bing watch movies and sitcoms, and play sports sometimes.
            </p>
          </div>
          <div className={Styles.pageNav}>

          </div>
        </div>
        <div className={Styles.rightHalf}>
          <Projects />
          <TechStack />
          <ImageCarousel />
        </div>     
      </div>
    </Layout>
  )
}

export default AboutMe