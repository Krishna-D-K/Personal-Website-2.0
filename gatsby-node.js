exports.createPages = async ({ graphql, actions }) => {

    const blogTemplate = require.resolve("./src/blogTemplate.js")

    const { createPage } = actions;
    const result = await graphql(`
    {
        allSanityBlog {
          nodes {
            slug {
              current
            }
            id
          }
        }
      }
    `)

    if (result.error) throw result.error;
    const blogs = result.data.allSanityBlog.nodes;

    blogs.forEach((blog) => {
        createPage({
            path: `/blogs/${blog.slug.current}`,
            component: blogTemplate,
            context: { id: blog.id }
        })
    })
}