const path = require("path");
const md5 = require("md5")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const markdownTemplate = path.resolve(`src/templates/markdown.jsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000)
      {
        edges {
          node {
            html
            frontmatter {
              path
              title
              enabled
              hidden
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    if (node.frontmatter.enabled) {
      let page_path = node.frontmatter.path;

      if (node.frontmatter.hidden) {
        page_path = "/hidden/" + md5(node.frontmatter.title);
      }

      createPage({
        path: page_path,
        component: markdownTemplate,
        context: {
          title: node.frontmatter.title,
        },
      });
    }
  });
};
