import React, { useEffect } from 'react'
import * as Styles from "../styles/projectStyle.module.css";
import averageSatti from "../Images/average-satti.png";
import blogWebsite from "../Images/blog-website.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {

    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 400,
          easing: 'ease-out',
          delay: 100,
        });
      }, [])
    
    return (
        <div className={Styles.container} id="Projects">
            <span className={Styles.heading}><span>PROJECTS</span><hr /></span>

            <div className={Styles.projectRight} data-aos="zoom-in">
                <div className={Styles.projectPreview}>
                    <img src={averageSatti} alt="html" placeholder='blurred' style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }} />
                    {/* <StaticImage src="../Images/average-satti.png" alt="error" objectFit='cover' imgStyle={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }} /> */}
                </div>
                <div className={Styles.projectInfo}>
                    <div className={Styles.featured} style={{ textAlign: "right" }}>Featured Project</div>
                    <h1 style={{ textAlign: "right" }}>Average_Satti</h1>
                    <div className={Styles.rightDescription}>
                        <div className={Styles.descriptionText} style={{ textAlign: "right" }}>
                            <Paper style={{ backgroundColor: "#112240", padding: "2rem", color: "#a8b2d1", borderRadius: "1rem" }} elevation={3}>
                            A complete collection of useful resources mainly for the Electrical Engineering students. This is a collaborative platform where any user can upload the study material, while the admins can either delete it or modify it as per need.
                            </Paper>
                        </div>
                    </div>
                    <div className={Styles.stack}>
                        <span>Reactjs</span>
                        <span>Nodejs</span>
                        <span>MongoDb</span>
                        <span>JWT</span>
                        <span>Drive API</span>
                    </div>
                    <div className={Styles.links}>
                        <a href="https://github.com/Krishna-D-K/Average_Satti-Frontend" target="_blank" rel="noreferrer" aria-label="Link"><GitHubIcon /></a>
                        <a href="https://average-satti.vercel.app/" target="_blank" rel="noreferrer" aria-label="Link"><LaunchIcon /></a>
                    </div>
                </div>
            </div>

            <div className={Styles.projectLeft} data-aos="zoom-in">
                <div className={Styles.projectInfo}>
                    <div className={Styles.featured} style={{ textAlign: "left" }}>Featured Project</div>
                    <h1 style={{ textAlign: "left" }}>Blog Website</h1>
                    <div className={Styles.leftDescription}>
                        <div className={Styles.descriptionText} style={{ textAlign: "left" }}>
                            <Paper style={{ backgroundColor: "#112240", padding: "2rem", color: "#a8b2d1", borderRadius: "1rem" }} elevation={3}>
                                My personal blog website featuring blogs about my experiences, understandings and opinions about everything under the sun!!!
                            </Paper>
                        </div>
                    </div>
                    <div className={Styles.stack}>
                        <span>Gatsby</span>
                        <span>Sanity.io</span>
                        <span>MaterialUI</span>
                    </div>
                    <div className={Styles.links}>
                        <a href="" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="" target="_blank" rel="noreferrer"><LaunchIcon /></a>
                    </div>
                </div>
                <div className={Styles.projectPreview}>
                    <img src={blogWebsite} alt="html" style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%", border: "0.5px solid #64ffdb33" }} />
                </div>
            </div>
            
        </div>
    )
}

export default Projects