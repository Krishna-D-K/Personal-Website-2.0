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
  console.log(data);
  let count = 0;
  const _time = new Date(blog.createdAt);
  const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayString = _time.toDateString();
  const date = dayString.substring(4) + ", " + day[_time.getDay()];

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
              return <Link to={`/tags/${value.tags.substring(1)}`} key={index}><span> {value.tags} &nbsp;</span></Link>
            })}
          </div>
        </div>
        <span className={Styles.heading}><hr /></span>
        <div className={Styles.blogContent}>
          <BodyText raw={blog.blogContent} />
        </div>
        <Comments />
      </div>
      <div className={Styles.otherBlogs}>
        <span className={Styles.heading1}><span>Other Blogs</span><hr /></span>
      </div>
      <div className={Styles.band}>
        {featured && featured.nodes[0].blogs.map((value, index) => {
          if (value.slug !== blog.slug && count < 3) {
            count++;
            return (
              <Link to={`/${value.slug}`} style={{ textDecoration: "none" }} key={index}>
                <BlogCards title={value.title} categories={value.tags} image={value.coverImage.gatsbyImageData} time={value.createdAt} readingTime={value.fields.timeToRead} description={value.shortDescription} index={index} />
              </Link>
            )
          }
          else {
            return null;
          }
        })}
      </div>
    </Layout>
  )
}

export default blogTemplate

export const Head = ({data}) => (
  <SEO title = {data.blog.title} description={data.blog.shortDescription} pathname = {data.blog.slug}/>
)