import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);
    if (darkTheme) {
        document.body.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
    }
    else {
        document.body.style.background = "none"
        document.body.style.backgroundColor = "#f7ca757a";
    }
    return (
        <>
            <Navbar darkTheme={darkTheme} changeTheme={() => setDarkTheme(!darkTheme)} />
            <>
                {children}
            </>
            <Footer darkTheme={darkTheme} />
        </>
    )
}

export default Layout