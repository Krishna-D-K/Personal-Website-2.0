import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Helmet } from 'react-helmet';
import { SEO } from '../Components/Seo';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function notFound() {

    if (isBrowser) {
        // document.body.style.backgroundColor = "#000000";
    }

    return (
        <>
            <Helmet>
                <title>404 | Recuerdos</title>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
            </Helmet>
            <Navbar darkTheme={true} />
            <div style={{ height: "75vh", color: "#f5f5f5b5", display: "flex", "alignItems": "center", justifyContent: "center" }}>
                <h1>Oops!! You encountered a 404 error !! Kindly check the url.</h1>
            </div>
            <Footer darkTheme={true} />
        </>
    )
}

export default notFound;

export const Head = () => (
    <SEO title="404" pathname={"404"} />
)