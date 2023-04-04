import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function notFound() {

    if (isBrowser) {
        document.body.style.backgroundColor = "#0a192f";
    }

    return (
        <>
            <Helmet>
                <title>404 | Krishna's Blogs</title>
                <meta name="description" content="Logging my thoughts into my blogs..."></meta>
            </Helmet>
            <Navbar darkTheme={true} />
            <div style={{ height: "75vh", color: "#f5f5f5b5", display: "flex", "alignItems": "center", justifyContent: "center" }}>
                <h1>Oops!! You encountered a 404 error !! Kindly check the url.</h1>
            </div>
            <Footer darkTheme={true} />
        </>
    )
}

export default notFound