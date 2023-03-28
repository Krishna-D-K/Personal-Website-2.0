import { Avatar, Fab, Tooltip } from '@mui/material';
import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import * as Styles from "../Styles/NavbarStyle.module.css";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import avatar from "../Images/avatar.png";
import { Link } from 'gatsby';

function Navbar(props) {
    const darkTheme = props.darkTheme;
    const toggleTheme = () => {
        props.changeTheme();
    }

    const scrollToView = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }

    const [visible, setVisible] = useState(false)

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
            <div className={(darkTheme) ? Styles.container : Styles.lightContainer} id="Navbar" onScroll={() => { console.log(document.getElementById("Navbar").scrollTop) }}>
                <div className={Styles.avatar}>
                    <a href="/">
                        <Avatar sx={{ width: "3rem", height: "3rem" }} src={avatar} />
                    </a>
                </div>
                <div className={darkTheme ? Styles.options : Styles.lightOptions}>
                    <Link to="/blogs" style={{textDecoration: "none"}}><span>Blogs</span></Link>
                    <span onClick={() => scrollToView("Projects")}>Projects</span>
                    <span onClick={() => scrollToView("Connect")}>Connect</span>
                    <div className={Styles.toggleMode}>
                        <Fab sx={(darkTheme) ? { color: "black" } : { color: "wheat", backgroundColor: "grey" }} aria-label="add" size="medium" onClick={() => toggleTheme()}>
                            {!props.darkTheme && <DarkModeIcon />}
                            {props.darkTheme && <WbSunnyIcon />}
                        </Fab>
                    </div>
                </div>
            </div>
            {visible && darkTheme &&
                <Tooltip describeChild title={<div style={{ color: "azure", fontSize: "0.9rem", fontWeight: "bold" }}>Move To Top</div>} placement="left">
                    <KeyboardDoubleArrowUpIcon id={Styles.scrollToTop}
                        sx={{ position: 'fixed', bottom: 40, right: 40, backgroundColor: "#1ea6f2", color: "azure", fontSize: "3rem", borderRadius: "3rem", zIndex: 10 }}
                        onClick={() => { scrollToTop() }} />
                </Tooltip>
            }
            {visible && !darkTheme &&
                <Tooltip describeChild title={<div style={{ color: "azure", fontSize: "0.9rem", fontWeight: "bold" }}>Move To Top</div>} placement="left">
                    <KeyboardDoubleArrowUpIcon id={Styles.scrollToTop}
                        sx={{ position: 'fixed', bottom: 40, right: 40, backgroundColor: "#242b8f", color: "azure", fontSize: "3rem", borderRadius: "3rem", zIndex: 10 }}
                        onClick={() => { scrollToTop() }} />
                </Tooltip>
            }
        </>
    )
}

export default Navbar