import React, { useState } from 'react'
import Connect from '../Components/Connect';
import Footer from '../Components/Footer';
import Introduction from '../Components/Introduction';
import Layout from '../Components/Layout';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects';
import TechStack from '../Components/TechStack';
import "../styles/index.css";

const Home = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    if (darkTheme) {
        document.body.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
    }
    else {
        document.body.style.background = "none"
        document.body.style.backgroundColor = "#f7ca757a";
    }
    return (
        <div className="App">
            <Layout>
            {/* <Navbar darkTheme={darkTheme} changeTheme={() => setDarkTheme(!darkTheme)} /> */}
            <Introduction darkTheme={darkTheme} />
            <TechStack darkTheme={darkTheme} />
            <Projects darkTheme={darkTheme} />
            <Connect darkTheme={darkTheme} />
            {/* <Footer darkTheme={darkTheme} /> */}
            </Layout>
        </div>
    );
}

export default Home