import React, { useEffect } from 'react'
import * as Styles from "../styles/techStackStyle.module.css"
import HTML from "../Images/html.png";
import CSS from "../Images/css.png";
import JAVASCRIPT from "../Images/js.png";
import REACT from "../Images/react.png";
import BOOTSTRAP from "../Images/bootstrap.png";
import C from "../Images/c.png";
import CPP from "../Images/cpp.png";
import GIT from "../Images/git.png";
import GITHUB from "../Images/github.png";
import MONGODB from "../Images/mongodb.png";
import NODEJS from "../Images/nodejs.png";
import PYTHON from "../Images/python.png";
import SQL from "../Images/sql.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const urls = [HTML, CSS, JAVASCRIPT,REACT, BOOTSTRAP,C,CPP,GIT,GITHUB,MONGODB,NODEJS,PYTHON,SQL];
function TechStack() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-out',
      delay: 100,
    });
  }, [])

  return (
    <div id="TechStack" className={Styles.container}>
      <div className={Styles.slider}>
        <div className={Styles.slideTrack}>
          {urls && urls.map((url,index)=>{
            return (
              <div className={Styles.slide} key={index}>
                <img src={url} alt="error_loading_image" />
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default TechStack