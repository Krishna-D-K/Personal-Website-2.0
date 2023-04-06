import React from 'react'
import Layout from "./Components/Layout"
import { Link, graphql } from 'gatsby';
import * as Styles from "./styles/singleBlogPageStyle.module.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { GatsbyImage } from 'gatsby-plugin-image';
import BodyText from './Components/BodyText';
import BlogCards from './Components/BlogCards';
import { Helmet } from 'react-helmet';

export const data = graphql`
query singleBlogQuery($id: String!){
    blog: sanityBlog(id: {eq: $id}) {
        id
        title
        author
        coverImage {
          asset {
            id
            gatsbyImageData(placeholder: BLURRED)
            altText
          }
        }
        _rawPostContent
        createdAt
        category {
          title
        }
    },
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
  }
`
function blogTemplate({ data }) {
  const { blog, featured } = data;
  const date = new Date(blog.createdAt);
  return (
    <Layout>
      <Helmet>
        <title>Blogs | Krishna's Blogs</title>
        <meta name="description" content="Logging my thoughts into my blogs..."></meta>
      </Helmet>
      <div className={Styles.container}>
        <GatsbyImage image={blog.coverImage.asset.gatsbyImageData} className={Styles.coverImage} alt={blog.coverImage.asset.altText || "error"} />
        <div className={Styles.title}>{blog.title}</div>
        <div className={Styles.subtitle}>
          <div>
            <div className={Styles.author}>
              <PersonIcon />&nbsp; {blog.author}&emsp;
            </div>
            <div className={Styles.date}>
              <CalendarMonthOutlinedIcon />&nbsp;{date.toDateString()}
            </div>
          </div>
          <div className={Styles.categories}>
            {blog.category.length && blog.category.map((value, index) => {
              return <span key={index}> {value.title} &nbsp;</span>
            })}
          </div>
        </div>
        <span className={Styles.heading}><hr /></span>
        <div className={Styles.blogContent}>
          <BodyText data={blog._rawPostContent} />
        </div>
      </div>
      <div className={Styles.otherBlogs}>
        <span className={Styles.heading1}><span>OTHER BLOGS</span><hr /></span>
      </div>
      <div className={Styles.band}>
        {featured && featured.nodes.map((item, index) => {
          const value = item.featured[0];
          return (
            <Link to={`/blogs/${value.slug.current}`} style={{ textDecoration: "none" }} key={index}>
              <BlogCards title={value.title} image={value.coverImage.asset.gatsbyImageData} time={value.createdAt} description={value.description} index={index} />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default blogTemplate