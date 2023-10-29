const { documentToPlainTextString } = require("@contentful/rich-text-plain-text-renderer")
const words = require('lodash/words');

exports.createPages = async ({ graphql, actions }) => {

  const blogTemplate = require.resolve("./src/blogTemplate.js");
  const tagsTemplate = require.resolve("./src/tagsTemplate.js");

  const { createPage } = actions;
  const blogData = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
          id
        }
      }
    }`)

  const allTags = await graphql(`
    {
      allContentfulTags {
        nodes {
          tags
        }
      }
    }`)

  if (blogData.error) throw blogData.error;
  const blogs = blogData.data.allContentfulBlogPost.nodes;

  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: blogTemplate,
      context: { id: blog.id }
    })
  })

  if (allTags.error) throw allTags.error;
  const tags = allTags.data.allContentfulTags.nodes;
  console.log(tags);

  tags.forEach((item) => {
    createPage({
      path: `/tags/${item.tags.substring(1)}`,
      component: tagsTemplate,
      context: { tag: item.tags }
    })
  })
}