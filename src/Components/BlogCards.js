import React from 'react';
import * as Styles from "../styles/blogCardStyle.module.css";
import { GatsbyImage } from 'gatsby-plugin-image';

function BlogCards({ title, time, image, description, altText, index, categories }) {
    const _time = new Date(time);
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayString = _time.toDateString();
    const date = dayString.substring(4) + ", " + day[_time.getDay()];
    // console.log(categories);
    return (
        <>
            <div className={Styles.item1}>
                <div className={Styles.card}>
                    <div className={Styles.thumb}>
                        <GatsbyImage image={image} alt={altText||"error"} className={Styles.gatsbyImage}/>
                    </div>
                    <article>
                        <h1>{title}</h1>
                        <span className={Styles.date}>{date}</span>
                        <span className={Styles.category}>
                            {categories && categories.map((val)=>{
                                return <>{val.title} </>
                            })}
                        </span>
                        <span className={Styles.desc}>{description}</span>
                    </article>
                </div>
            </div>
        </>
    )
}

export default BlogCards