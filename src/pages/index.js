import { Link, graphql } from 'gatsby';
import React, { useState } from 'react'
import Layout from '../Components/Layout';
import BlogCards from "../Components/BlogCards";
import "../styles/index.css";
import * as Styles from "../styles/blogPageStyle.module.css";
import CategoryBlogs from '../Components/CategoryBlogs';
import { SEO } from '../Components/Seo';
import { Helmet } from 'react-helmet';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function Blogs({ data }) {
  const { categories, featured, blogs } = data;
  const [category, setCategory] = useState(categories.nodes[0].tags);
  const [Index, setIndex] = useState(0);

  if (isBrowser) {
    // document.body.style.background = "#000000";
  }

  return (
    <Layout>
      <Helmet>
        <title>Home | Recuerdos</title>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      </Helmet>
      <div className={Styles.container}>
        <div className={Styles.quote}>
          <span className={Styles.heading}>"
            I wish there was a way to know you're in the good old days, before you've actually left them.
            "</span>
          ~ Andy Bernard, The Office
        </div>
        <div>
          <div className={Styles.subHeading}>
            <span>Featured</span><section><hr /></section>
          </div>
        </div>
        <div className={Styles.band}>
          {featured && featured.nodes[0].blogs.map((value, index) => {
            return (
              <Link to={`/${value.slug}`} style={{ textDecoration: "none" }} key={index}>
                <BlogCards title={value.title} categories={value.tags} image={value.coverImage.gatsbyImageData} time={value.createdAt} readingTime={value.fields.timeToRead} description={value.shortDescription} index={index} />
              </Link>
            )
          })}
        </div>
        <div>
          <div className={Styles.subHeading}>
            <span>Categories </span><section><hr /></section>
          </div>
          <div className={Styles.categoryList}>
            {categories && categories.nodes.map((value, index) => {
              return <div className={Index === index ? Styles.activeCategoryListItem : Styles.categoryListItem} onClick={() => {
                setIndex(index);
                setCategory(value.tags);
              }} role="presentation" key={index}>{value.tags}</div>
            })}
          </div>
          <CategoryBlogs blogs={blogs} category={category} />
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <SEO />
)

export const data = graphql`
{
  featured: allContentfulFeaturedBlogs(sort: {createdAt: DESC}) {
    nodes {
      blogs {
        title
        fields {
          timeToRead
        }
        tags {
          tags
        }
        slug
        shortDescription
        coverImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        createdAt
      }
    }
  }
  categories: allContentfulTags(sort: {tags: ASC}) {
    nodes {
      tags
    }
  }
  blogs: allContentfulBlogPost {
    nodes {
      tags {
        tags
      }
      title
      fields {
        timeToRead
      }
      slug
      coverImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      shortDescription
      createdAt
    }
  }
}
`
export default Blogs;
