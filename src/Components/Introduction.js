import React, { useEffect } from 'react'
import Typewriter from "typewriter-effect";
import * as styles from "../styles/introductionStyle.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Introduction() {

    const introMessage1P1 = `<i>" </i><span style="color: whitesmoke">There is</span> proving, `;
    const introMessage1P2 = `<span style="color: whitesmoke">then there is</span> knowing.<i>"</i>`;
    const introMessage2P1 = `<i>" </i><span style="color: whitesmoke">The hardest </span> choices `;
    const introMessage2P2 = `<span style="color: whitesmoke">require the strongest </span>wills.<i>"</i>`;
    const introMessage3 = `<i>" </i><span style="color: whitesmoke; font-style: italic">This too, shall </span><i>PASS."</i>`

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
            {/* <div className={styles.imgContainer} data-aos="fade">
                <div></div>
            </div> */}
            <div className={styles.introduction}>
                {<Typewriter onInit={(typewriter) => {
                    typewriter
                        .changeDelay(110)
                        .typeString(introMessage1P1)
                        .pauseFor(1000)
                        .typeString(introMessage1P2)
                        .pauseFor(1500)
                        .deleteAll(30)
                        .pauseFor(1000)
                        .typeString(introMessage2P1)
                        .pauseFor(500)
                        .typeString(introMessage2P2)
                        .pauseFor(1500)
                        .deleteAll(30)
                        .pauseFor(1500)
                        .typeString(introMessage3)
                        .start()
                }} />}
            </div>
        </div>
    )
}

export default Introduction