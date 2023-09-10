import React, { useEffect } from 'react'
import * as Styles from "../styles/aboutStyle.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'gatsby';

function About() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-out',
      delay: 100,
    });
  }, [])

  return (
    <div id="About" className={Styles.container}>
      <span className={Styles.heading}><span>Well, who am I?</span><hr /></span>
      <div className={Styles.prose}>
        <p>
            A question such deep, Makes me wonder and seek <br />
            Am I a drop in the ocean of life? Or a spark in the fire of strife? <br />
            Am I a dreamer or a doer? A follower or a leader? <br />
            A seeker or a finder? A loser or a winner? <br />
            Who am I? A mystery to solve <br />
            But maybe there's some <Link to = "/about">answer</Link> after all . . .
        </p>
      </div>
    </div>
  )
}

export default About;