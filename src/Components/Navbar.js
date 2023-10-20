import { Avatar, Tooltip } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from "../styles/navbarStyle.module.css";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import avatar from "../Images/avatar.png";
import { Link } from 'gatsby';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function Navbar() {
    const [visible, setVisible] = useState(false);
    if (isBrowser) {
        const scrollToView = (id) => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView();
            }
        }


        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 150) {
                setVisible(true)
            }
            else if (scrolled <= 150) {
                setVisible(false)
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('scroll', toggleVisible);
        if (window.location.pathname!=="/") {
            return (
                <>
                    <div className={Styles.container} id="Navbar">
                        <div className={Styles.avatar}>
                            <Link to="/">
                                <Avatar src={avatar} alt='avatar'/>
                            </Link>
                        </div>
                        <div className={Styles.options}>
                            <Link to="/"><span>Home</span></Link>
                            <Link to="/blogs"><span>Blogs&emsp;&emsp;</span></Link>
                        </div>
                    </div>
                    {visible &&
                        <Tooltip describeChild title={<div style={{ color: "azure", fontSize: "0.9rem", fontWeight: "bold" }}>Move To Top</div>} placement="left">
                            <KeyboardDoubleArrowUpIcon id={Styles.scrollToTop}
                                sx={{ position: 'fixed', bottom: 40, right: 40, backgroundColor: "#64ffda", color: "#0000009e", fontSize: "3rem", borderRadius: "3rem", zIndex: 10 }}
                                onClick={() => { scrollToTop() }} />
                        </Tooltip>
                    }
                </>
            )
        }
        else {
            return (
                <>
                    <div className={Styles.container} id="Navbar">
                        <div className={Styles.avatar}>
                            <a href="/">
                                <Avatar src={avatar} />
                            </a>
                        </div>
                        <div className={Styles.options}>
                            <span onClick={() => scrollToView("Blogs")} role="presentation">Blogs</span>
                            <span onClick={() => scrollToView("About")} role="presentation">About</span>
                            <span onClick={() => scrollToView("Connect")} role="presentation">Connect</span>
                        </div>
                    </div>
                    {visible &&
                        <Tooltip describeChild title={<div style={{ color: "azure", fontSize: "0.9rem", fontWeight: "bold" }}>Move To Top</div>} placement="left">
                            <KeyboardDoubleArrowUpIcon id={Styles.scrollToTop}
                                sx={{ position: 'fixed', bottom: 40, right: 40, backgroundColor: "#64ffda", color: "#0000009e", fontSize: "3rem", borderRadius: "3rem", zIndex: 10 }}
                                onClick={() => { scrollToTop() }} />
                        </Tooltip>
                    }
                </>
            )
        }
    }
    else {
        return null;
    }
}

export default Navbar