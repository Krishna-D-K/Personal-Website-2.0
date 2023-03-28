import React from 'react'
import Layout from '../Components/Layout';

function Blogs(props) {
    const darkTheme = props.darkTheme;
    console.log(darkTheme)
    if (darkTheme) {
        document.body.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
    }
    else {
        document.body.style.background = "none"
        document.body.style.backgroundColor = "#f7ca757a";
    }
    return (
        <Layout>
            BLOGS
        </Layout>
    )
}

export default Blogs