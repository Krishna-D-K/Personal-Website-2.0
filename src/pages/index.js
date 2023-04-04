import React from 'react'
import Connect from '../Components/Connect';
import Introduction from '../Components/Introduction';
import Layout from '../Components/Layout';
import Projects from '../Components/Projects';
import TechStack from '../Components/TechStack';
import "../styles/index.css";
import Blogs from '../Components/Blogs';

const Home = () => {

    document.body.style.backgroundColor = "#0a192f";
    return (
        <div className="App">
            <Layout>
                <Introduction />
                <TechStack/>
                <Projects />
                <Blogs />
                <Connect />
            </Layout>
        </div>
    );
}

export default Home