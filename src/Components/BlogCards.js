import React from 'react';
import * as Styles from "../styles/blogCardStyle.module.css";
import { GatsbyImage } from 'gatsby-plugin-image';

function BlogCards({ title, time, image, description, altText, index }) {
    const date = new Date(time);
    return (
        <>
            <div className={Styles.item1}>
                <div className={Styles.card}>
                    <div className={Styles.thumb}>
                        <GatsbyImage image={image} alt={altText||"error"} className={Styles.gatsbyImage}/>
                    </div>
                    <article>
                        <h1>{title}</h1>
                        <span className={Styles.date}>{date.toDateString()}</span>
                        <span className={Styles.desc}>{description}</span>
                    </article>
                </div>
            </div>
        </>
    )
}

export default BlogCards