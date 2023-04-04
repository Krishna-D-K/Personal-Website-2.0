import { Link } from 'gatsby';
import React from 'react'
import BlogCards from './BlogCards';
import * as Styles from "../styles/categoryBlogStyle.module.css";

function CategoryBlogs({ blogs, category }) {
    // console.log(blogs.nodes)
    // console.log(blogs.nodes)
    return (
        <div className={Styles.band}>
            {blogs && blogs.nodes.map((item, index) => {
                const data = item.category.find(value => value.title === category)
                if (data) {
                    return (
                        <Link to={`/blogs/${item.slug.current}`} style={{ textDecoration: "none" }}>
                            <BlogCards title={item.title} image={item.coverImage.asset.gatsbyImageData} time={item.createdAt} description={item.description} index={index} />
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