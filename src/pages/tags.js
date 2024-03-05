import { Link, graphql } from 'gatsby';
import React from 'react'
import Layout from '../Components/Layout';
import * as Styles from "../styles/tagsPageStyles.module.css";
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Components/Breadcrumb';
import { SEO } from '../Components/Seo';

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"

function Blogs({ data }) {
    const { categories } = data;

    if (isBrowser) {
        // document.body.style.background = "#000000";
    }

    return (
        <Layout>
            <Helmet>
                <title>Tags | Recuerdos</title>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
            </Helmet>
            <div className={Styles.container}>
                <div className={Styles.breadcrumb}>{typeof window !== "undefined" && <Breadcrumb path={window.location.pathname} />}</div>
                <div>
                    <div className={Styles.subHeading}>
                        <span>TAGS </span>
                    </div>
                    <div className={Styles.categoryList}>
                        {categories && categories.nodes.map((value, index) => {
                            return <Link to={`/tags/${value.tags.substring(1)}`} key={index}>{value.tags}</Link>
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const Head = () => (
    <SEO title="Tags" />
)

export const data = graphql`
{
  categories: allContentfulTags(sort: {tags: ASC}) {
    nodes {
      tags
    }
  }
}
`
export default Blogs;
