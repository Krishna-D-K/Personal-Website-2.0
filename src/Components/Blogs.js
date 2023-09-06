import { Link, graphql, useStaticQuery } from 'gatsby'
import * as Styles from "../styles/blogsStyle.module.css";
import React from 'react'
import BlogCards from './BlogCards';

function Blogs() {
  const data = useStaticQuery(graphql`
    {
        allSanityFeatured {
          nodes {
            featured {
              title
              category{
                title
              }
              slug {
                current
              }
              description
              coverImage {
                asset {
                  gatsbyImageData(placeholder: BLURRED)
                }
                altText
              }
              createdAt
            }
          }
        }
      }
    `)
  // console.log(data);

  return (
    <>
      <div className={Styles.blogContainer} id="Blogs">
        <span className={Styles.heading}><span>My Blogs</span><hr /></span>
        <p>
          Why do I write blog? First of all, it's a great way to express myself and share my thoughts with the world. And second, it's a nice feeling to see that people actually read and enjoy my blog. Here are some featured blogs of them...
        </p>
        <div className={Styles.band}>
          {data && data.allSanityFeatured.nodes.map((item, index) => {
            const value = item.featured[0];
            return (
              <Link to={`/blogs/${value.slug.current}`} style={{ textDecoration: "none" }} key={index}>
                <BlogCards title={value.title} categories={value.category} image={value.coverImage.asset.gatsbyImageData} time={value.createdAt} description={value.description} index={index} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
              </Link>
            )
          })}
        </div>
        <Link to="/blogs" className={Styles.linkTag}><h4 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} role="presentation">...and some more</h4></Link>
      </div>
    </>
  )
}


export default Blogs