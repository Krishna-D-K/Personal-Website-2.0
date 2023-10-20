import React from 'react'
import Connect from '../Components/Connect';
import Introduction from '../Components/Introduction';
import Layout from '../Components/Layout';
import About from "../Components/About";
import "../styles/index.css";
import Blogs from '../Components/Blogs';
import { Helmet } from 'react-helmet';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

const Home = () => {

    if (isBrowser) {
        // document.body.style.backgroundColor = "#000000";
    }

    return (
        <div className="App">
            <Helmet>
                <title>Home | Krishna's Blogs</title>
                <meta name="description" content="Logging my thoughts into my blogs..."></meta>
            </Helmet>
            <Layout>
                <Introduction />
                <Blogs />
                <About />
                <Connect />
            </Layout>
        </div>
    );
}

export default Home