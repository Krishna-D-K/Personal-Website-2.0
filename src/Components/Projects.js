import React, { useEffect } from 'react'
import * as Styles from "../styles/projectStyle.module.css";
import averageSatti from "../Images/average-satti.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects(props) {
    
    const darkTheme = props.darkTheme;
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 400,
          easing: 'ease-out',
          delay: 100,
        });
      }, [])
    
    return (
        <div className={darkTheme?Styles.container:Styles.lightContainer} id="Projects">
            <h1>PROJECTS</h1>

            <div className={Styles.projectRight} data-aos="zoom-in">
                <div className={darkTheme?Styles.projectPreview:Styles.lightProjectPreview}>
                    <img src={averageSatti} alt="html" style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }} />
                </div>
                <div className={darkTheme?Styles.projectInfo:Styles.lightProjectInfo}>
                    <div className={darkTheme?Styles.featured:Styles.lightFeatured} style={{ textAlign: "right" }}>Featured Project</div>
                    <h1 style={{ textAlign: "right" }}>Average_Satti</h1>
                    <div className={Styles.rightDescription}>
                        <div className={Styles.descriptionText} style={{ textAlign: "right" }}>
                            <Paper style={{ backgroundColor: "#112240", padding: "2rem", color: "#a8b2d1", borderRadius: "1rem" }} elevation={3}>
                            A complete collection of useful resources mainly for the Electrical Engineering students. This is a collaborative platform where any user can upload the study material, while the admins can either delete it or modify it as per need.
                            </Paper>
                        </div>
                    </div>
                    <div className={darkTheme?Styles.stack:Styles.lightStack}>
                        <span>Reactjs</span>
                        <span>Nodejs</span>
                        <span>MongoDb</span>
                        <span>JWT</span>
                        <span>Drive API</span>
                    </div>
                    <div className={darkTheme?Styles.links:Styles.lightLinks}>
                        <a href="https://github.com/Krishna-D-K/Average_Satti-Frontend" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="https://average-satti.vercel.app/" target="_blank" rel="noreferrer"><LaunchIcon /></a>
                    </div>
                </div>
            </div>

            {/* <div className={Styles.projectLeft}>
                <div className={darkTheme?Styles.projectInfo:Styles.lightProjectInfo}>
                    <div className={darkTheme?Styles.featured:Styles.lightFeatured} style={{ textAlign: "left" }}>Featured Project</div>
                    <h1 style={{ textAlign: "left" }}>Average_Satti</h1>
                    <div className={Styles.leftDescription}>
                        <div className={Styles.descriptionText} style={{ textAlign: "left" }}>
                            <Paper style={{ backgroundColor: "#112240", padding: "2rem", color: "#a8b2d1", borderRadius: "1rem" }} elevation={3}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, assumenda. Dolores illum repudiandae nam, magni et architecto nisi eaque, dolorum eligendi mollitia voluptatem cupiditate nemo itaque praesentium! Quo, quam voluptate.
                            </Paper>
                        </div>
                    </div>
                    <div className={darkTheme?Styles.stack:Styles.lightStack}>
                        <span>Reactjs</span>
                        <span>Nodejs</span>
                        <span>MongoDb</span>
                        <span>JWT</span>
                        <span>Drive API</span>
                    </div>
                    <div className={darkTheme?Styles.links:Styles.lightLinks}>
                        <a href="" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="" target="_blank" rel="noreferrer"><LaunchIcon /></a>
                    </div>
                </div>
                <div className={darkTheme?Styles.projectPreview:Styles.lightProjectPreview}>
                    <img src={averageSatti} alt="html" style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }} />
                </div>
            </div> */}
            
        </div>
    )
}

export default Projects