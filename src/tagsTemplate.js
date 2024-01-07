import { Link, graphql } from 'gatsby';
import React from 'react'
import Layout from './Components/Layout';
import * as Styles from "./styles/tagsPageStyle.module.css"
import BodyText from './Components/BodyText';
import BlogCards from './Components/BlogCards';
import { Helmet } from 'react-helmet';
import Breadcrumb from './Components/Breadcrumb';

export const data = graphql`
query singleBlogQuery($tag: String!){
    contentfulTags(tags: {eq: $tag}) {
        shortContent {
          raw
        }
        blog_post {
          title
          fields {
            timeToRead
          }
          shortDescription
          slug
          publishingDate(locale: "en-GB")
          tags {
            tags
          }
          coverImage {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
          createdAt
        }
      }
}
`
const tagsTemplate = ({ pageContext, data }) => {
    // console.log(pageContext, data);
    return (
        <>
            <Layout>
                <Helmet>
                    <title>{pageContext.tag.substring(1)} | Recuerdos</title>
                    <meta name="description" content="Logging my thoughts into my blogs..."></meta>
                </Helmet>
                <div className={Styles.container}>
                    <div className={Styles.breadcrumb}><Breadcrumb path={window.location.pathname} /></div>
                    <div className={Styles.heading}>
                        {pageContext.tag}
                    </div>
                    <div className={Styles.subHeading}>
                        {data.contentfulTags.shortContent && <BodyText raw={data.contentfulTags.shortContent} />}
                    </div>
                    <div className={Styles.band}>
                        {data && data.contentfulTags.blog_post.map((value, index) => {
                            return (
                                <Link to={`/${value.slug}`} style={{ textDecoration: "none" }} key={index}>
                                    <BlogCards title={value.title} categories={value.tags} image={value.coverImage.gatsbyImageData} time={value.createdAt} readingTime={value.fields.timeToRead} description={value.shortDescription} index={index} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default tagsTemplate