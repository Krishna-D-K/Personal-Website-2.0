import { Link, graphql } from 'gatsby';
import React from 'react'
import Layout from './Components/Layout';
import * as Styles from "./styles/tagsPageStyle.module.css"
import BodyText from './Components/BodyText';
import BlogCards from './Components/BlogCards';

export const data = graphql`
query singleBlogQuery($tag: String!){
    contentfulTags(tags: {eq: $tag}) {
        shortContent {
          raw
        }
        blog_post {
          title
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
    console.log(pageContext, data);
    return (
        <>
            <Layout>
                <div className={Styles.container}>
                    <div className={Styles.heading}>
                        {pageContext.tag}
                    </div>
                    <div className={Styles.subHeading}>
                        {data.contentfulTags.shortContent && <BodyText raw={data.contentfulTags.shortContent} />}
                    </div>
                    <div className={Styles.band}>
                        {data && data.contentfulTags.blog_post.map((value, index) => {
                            return (
                                <Link to={`/blogs/${value.slug}`} style={{ textDecoration: "none" }} key={index}>
                                    <BlogCards title={value.title} categories={value.tags} image={value.coverImage.gatsbyImageData} time={value.createdAt} description={value.shortDescription} index={index} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
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