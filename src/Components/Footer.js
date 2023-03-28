import React from 'react'
import * as Styles from "../styles/footerStyle.module.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(props) {

    const darkTheme = props.darkTheme;
    const date = new Date()

    return (
        <div className={Styles.container}>
            {darkTheme && <div className={Styles.social}>
                <a href="https://github.com/Krishna-D-K" target="_blank" rel="noreferrer"><GitHubIcon sx={{fontSize: 30, color: "aliceblue"}} /></a>
                <a href="https://www.facebook.com/profile.php?id=100074550491680" target="_blank" rel="noreferrer"><FacebookOutlinedIcon sx={{fontSize: 30, color: "aliceblue"}} /></a>
                <a href="https://www.instagram.com/krishna_d_k/" target="_blank" rel="noreferrer"><InstagramIcon sx={{fontSize: 30, color: "aliceblue"}} /></a>
                <a href="https://www.linkedin.com/in/krishna-d-k/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{fontSize: 30, color: "aliceblue"}} /></a>
                <a href="https://twitter.com/krishna_d_k" target="_blank" rel="noreferrer"><TwitterIcon sx={{fontSize: 30, color: "aliceblue"}} /></a>
            </div>}
            {!darkTheme && <div className={Styles.social}>
                <a href="https://github.com/Krishna-D-K" target="_blank" rel="noreferrer"><GitHubIcon sx={{fontSize: 30, color: "#242b8f"}} /></a>
                <a href="https://www.facebook.com/profile.php?id=100074550491680" target="_blank" rel="noreferrer"><FacebookOutlinedIcon sx={{fontSize: 30, color: "#242b8f"}} /></a>
                <a href="https://www.instagram.com/krishna_d_k/" target="_blank" rel="noreferrer"><InstagramIcon sx={{fontSize: 30, color: "#242b8f"}} /></a>
                <a href="https://www.linkedin.com/in/krishna-d-k/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{fontSize: 30, color: "#242b8f"}} /></a>
                <a href="https://twitter.com/krishna_d_k" target="_blank" rel="noreferrer"><TwitterIcon sx={{fontSize: 30, color: "#242b8f"}} /></a>
            </div>}
            <div className={darkTheme?Styles.copyright:Styles.lightCopryright}>
                Copyright © {date.getFullYear()} Krishna Kolte <div><a href='mailto:krishnadk8203@gmail.com' target="_blank" rel="noreferrer">krishnadk8203@gmail.com</a></div>
            </div>
        </div>
    )
}

export default Footer