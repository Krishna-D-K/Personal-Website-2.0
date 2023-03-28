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

function TechStack(props) {

  const darkTheme = props.darkTheme;
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-out',
      delay: 100,
    });
  }, [])

  return (
    <div id="TechStack" className={darkTheme ? Styles.container : Styles.lightContainer}>
      <h1>TECH_STACK</h1>
      <div className={Styles.stack} data-aos="fade-up">
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={HTML} alt="html" /> HTML
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={CSS} alt="html" /> CSS
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={JAVASCRIPT} alt="html" /> JAVASCRIPT
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={C} alt="html" /> C
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={CPP} alt="html" /> CPP
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={BOOTSTRAP} alt="html" /> BOOTSTRAP
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={GIT} alt="html" /> GIT
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={GITHUB} alt="html" /> GITHUB
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={MONGODB} alt="html" /> MONGODB
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={NODEJS} alt="html" /> NODEJS
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={PYTHON} alt="html" /> PYTHON
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={REACT} alt="html" /> REACT
        </div>
        <div className={darkTheme ? Styles.stackObject : Styles.lightStackObject} >
          <img src={SQL} alt="html" /> SQL
        </div>
        <br />
        <div id={Styles.expanding}>...and expanding</div>
      </div>
    </div>
  )
}

export default TechStack