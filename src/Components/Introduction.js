import React, { useEffect } from 'react'
import Typewriter from "typewriter-effect";
import * as styles from "../styles/introductionStyle.module.css"
import my_img from "../Images/my_img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Introduction() {

    const introMessage1 = `<span style="color: whitesmoke">This is</span><br />Krishna Kolte, <br />`;
    const introMessage2 = `<span style="color: whitesmoke">passionate full-stack developer</span>`;
    const introMessage3 = `<span style="color: whitesmoke"><br />currently, a second year student of Electrical Engineering.</span>`;

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-out',
            delay: 3000,
        });
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer} data-aos="fade">
                <div></div>
            </div>
            <div className={styles.introduction}>
                {<Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString(`<span id="welcomeMessage">Welcome !!!<br /></span>`)
                        .pauseFor(1000)
                        .changeDelay(80)
                        .typeString(introMessage1)
                        .typeString(`<span style="color: whitesmoke">A full-stack</span>`)
                        .pauseFor(600)
                        .deleteChars(10)
                        .typeString(introMessage2)
                        .pauseFor(600)
                        .typeString(introMessage3)
                        .start();
                }} />}
            </div>
        </div>
    )
}

export default Introduction