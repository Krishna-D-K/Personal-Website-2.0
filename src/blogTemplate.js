import React from 'react'
import Layout from "./Components/Layout"
import { Link, graphql } from 'gatsby';
import * as Styles from "./styles/singleBlogPageStyle.module.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { GatsbyImage } from 'gatsby-plugin-image';
import BodyText from './Components/BodyText';
import BlogCards from './Components/BlogCards';
import Comments from './Components/Comments';
import Breadcrumb from './Components/Breadcrumb';
import { SEO } from './Components/Seo';
import { Helmet } from 'react-helmet';
import { DiscussionEmbed, Recommendations } from 'disqus-react';
import { FacebookRounded, Instagram, LinkedIn, Twitter } from '@mui/icons-material';


export const data = graphql`
query singleBlogQuery($id: String!){
  blog: contentfulBlogPost(id: {eq: $id}) {
    id
    slug
    title
    shortDescription
    fields {
      timeToRead
    }
    author
    coverImage {
      gatsbyImageData(layout: CONSTRAINED)
      url
    }
    createdAt
    blogContent {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          title
          description
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          __typename
        }
      }
    }
    tags {
      tags
    }
  },
  featured: allContentfulFeaturedBlogs(sort: {createdAt: DESC}) {
    nodes {
      blogs {
        title
        fields {
          timeToRead
        }
        slug
        tags {
          tags
        }
        shortDescription
        coverImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        createdAt
      }
    }
  }
}
`

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function blogTemplate({ data }) {
  const { blog, featured } = data;
  // console.log(data);
  let count = 0;
  const _time = new Date(blog.createdAt);
  const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayString = _time.toDateString();
  const date = dayString.substring(4) + ", " + day[_time.getDay()];
  const baseurl = "https://krishnadk.vercel.app/";
  const disqusShortName = "krishnadk";

  const disqusConfig = {
    identifier: blog.id,
    title: blog.title,
    url: baseurl + blog.slug
  }

  return (
    <Layout>
      <Helmet>
        <title>{blog.title} | Recuerdos</title>
      </Helmet>
      <div className={Styles.breadcrumb}>{typeof window !== "undefined" && <Breadcrumb path={window.location.pathname} />}</div>
      <div className={Styles.container}>
        <GatsbyImage image={blog.coverImage.gatsbyImageData} className={Styles.coverImage} alt="error" />
        <div className={Styles.title}>{blog.title}</div>
        <div className={Styles.subtitle}>
          <div>
            <div className={Styles.author}>
              <Link to="/about"><PersonIcon />&nbsp;{blog.author}&emsp;</Link>
            </div>
            <div className={Styles.date}>
              <CalendarMonthOutlinedIcon />&nbsp;{date}&emsp;
            </div>
            <div className={Styles.date}>
              <FiberManualRecordIcon style={{ fontSize: "15px" }} /> &nbsp;{blog.fields.timeToRead} min read
            </div>
          </div>
          <div className={Styles.categories}>
            {blog.tags.map((value, index) => {
              return <Link to={`/tags/${value.tags.substring(1)}`} key={index}><span> {value.tags} </span></Link>
            })}
          </div>
        </div>
        <span className={Styles.heading}><hr /></span>
        <div className={Styles.blogContent}>
          <BodyText raw={blog.blogContent} />
          <div className={Styles.social}>
            <span className={Styles.heading}><hr style={{ backgroundImage: "linear-gradient(to right, rgba(10, 25, 47, 1), rgba(15, 33, 59, 1), rgba(0, 0, 0, 0), rgba(15, 33, 59, 1), rgba(10, 25, 47, 1))" }} /></span>
            {/* <div>Share this post</div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://krishnadk.vercel.app/${blog.slug}`} target="_blank" rel="noreferrer" aria-label="Link"><FacebookRounded sx={{ fontSize: 50 }} /></a>
              <a href={`https://www.instagram.com/?url=https://krishnadk.vercel.app/${blog.slug}`} target="_blank" rel="noreferrer" aria-label="Link"><Instagram sx={{ fontSize: 50 }} /></a>
              <a href={`https://twitter.com/intent/tweet?text=${blog.title}&url=https://krishnadk.vercel.app/${blog.slug}`} target="_blank" rel="noreferrer" aria-label="Link"><Twitter sx={{ fontSize: 50 }} /></a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://krishnadk.vercel.app/${blog.slug}&title=${blog.title}`} target="_blank" rel="noreferrer" aria-label="Link"><LinkedIn sx={{ fontSize: 50 }} /></a>
            </div>
            <span className={Styles.heading}><hr style={{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75))" }} /></span> */}
          </div>
          <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
          {/* <Recommendations shortname={disqusShortName} config={disqusConfig} /> */}
        </div>
        {/* <Comments /> */}
      </div>
    </Layout>
  )
}

export default blogTemplate

export const Head = ({ data }) => (
  <SEO title={data.blog.title} description={data.blog.shortDescription} pathname={data.blog.slug} image={data.blog.coverImage.url} />
)