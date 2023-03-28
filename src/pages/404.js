import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

function notFound() {
    document.body.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
    return (
        <>
            <Navbar darkTheme={true} />
            <div style={{height: "75vh", color: "#f5f5f5b5", display: "flex", "alignItems": "center", justifyContent: "center"}}>
                <h1>Oops!! You encountered a 404 error!! Kindly check the url.</h1>
            </div>
            <Footer darkTheme={true} />
        </>
    )
}

export default notFound