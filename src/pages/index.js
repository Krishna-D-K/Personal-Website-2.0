import React from 'react'
import Connect from '../Components/Connect';
import Introduction from '../Components/Introduction';
import Layout from '../Components/Layout';
import Projects from '../Components/Projects';
import TechStack from '../Components/TechStack';
import "../styles/index.css";
import Blogs from '../Components/Blogs';
import { Helmet } from 'react-helmet';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

const Home = () => {

    if (isBrowser) {
        document.body.style.backgroundColor = "#0a192f";
    }

    return (
        <div className="App">
            <Helmet>
                <title>Home | Krishna's Blogs</title>
                <meta name="description" content="Logging my thoughts into my blogs..."></meta>
            </Helmet>
            <Layout>
                <Introduction />
                <TechStack />
                <Projects />
                <Blogs />
                <Connect />
            </Layout>
        </div>
    );
}

export default Home