import { Tooltip } from '@mui/material';
import React, { useState } from 'react'
import * as Styles from "../styles/navbarStyle.module.css";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
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
        return (
            <>
                <div className={Styles.rc_nav} id="centered_nav">
                    <Link to="/" title="Home">
                        <span className={Styles.navHead}>Recuerdos</span>
                    </Link>
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
        return null;
    }
}

export default Navbar