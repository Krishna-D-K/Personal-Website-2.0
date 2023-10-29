import { Link } from 'gatsby';
import React from 'react'
import BlogCards from './BlogCards';
import * as Styles from "../styles/categoryBlogStyle.module.css";

function CategoryBlogs({ blogs, category }) {
    // console.log(blogs)

    return (
        <div className={Styles.band}>
            {blogs && blogs.nodes.map((item, index) => {
                const data = item.tags.find(value => value.tags === category)
                if (data) {
                    return (
                        <Link to={`/blogs/${item.slug}`} style={{ textDecoration: "none" }} key={index}>
                            <BlogCards title={item.title} categories={item.tags} image={item.coverImage.gatsbyImageData} time={item.createdAt} description={item.shortDescription} index={index} />
                        </Link>
                    )
                }
                else{
                    return null;
                }
            })}
        </div>
    )
}

export default CategoryBlogs