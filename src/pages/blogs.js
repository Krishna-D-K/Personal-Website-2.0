import { Link, graphql } from 'gatsby';
import React, { useState } from 'react'
import Layout from '../Components/Layout';
import BlogCards from "../Components/BlogCards"
import * as Styles from "../styles/blogPageStyle.module.css";
import CategoryBlogs from '../Components/CategoryBlogs';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function Blogs({ data }) {
  const { categories, featured, blogs } = data;
  const [category, setCategory] = useState(categories.nodes[0].title);
  const [Index, setIndex] = useState(0);

  if (isBrowser) {
    document.body.style.background = "#0a192f";
  }

  return (
    <Layout>
      <div className={Styles.container}>
        <div className={Styles.heading}>MY BLOGS</div>
        <div>
          <div className={Styles.subHeading}>
            <span>Featured</span><p><hr /></p>
          </div>
        </div>
        <div className={Styles.band}>
          {featured && featured.nodes.map((item, index) => {
            const value = item.featured[0];
            return (
              <Link to={`/blogs/${value.slug.current}`} style={{ textDecoration: "none" }}>
                <BlogCards title={value.title} image={value.coverImage.asset.gatsbyImageData} time={value.createdAt} description={value.description} index={index} />
              </Link>
            )
          })}
        </div>
        <div>
          <div className={Styles.subHeading}>
            <span>Categories </span><p><hr /></p>
          </div>
          <div className={Styles.categoryList}>
            {categories && categories.nodes.map((value, index) => {
              return <div className={Index === index ? Styles.activeCategoryListItem : Styles.categoryListItem} onClick={() => {
                setIndex(index);
                setCategory(value.title);
              }}>{value.title}</div>
            })}
          </div>
          <CategoryBlogs blogs={blogs} category={category} />
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
query MyQuery {
    featured: allSanityFeatured {
      nodes {
        featured {
          title
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
    categories: allSanityCategories {
          nodes {
            title
          }
    }
    blogs: allSanityBlog {
      nodes {
        category {
          title
        }
        slug {
          current
        }
        title
        coverImage {
          altText
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        description
        createdAt
      }
    }
  }
`
export default Blogs;
