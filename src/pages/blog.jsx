import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const writeups = posts.filter(post => 
    post.node.frontmatter.category === "writeup"
    &&
    post.node.frontmatter.enabled
  )
  const projects = posts.filter(post => 
    post.node.frontmatter.category === "project"
    &&
    post.node.frontmatter.enabled  
  )

  return (
    <section className="w-full h-screen overflow-y-auto text-white" style={{"fontFamily": "'Mulish', sans-serif", "backgroundColor": "#1b1b1b"}}>
      <Helmet>
        <title>Blog - James Lowther</title>
        <meta name="description" content="Blog content written by James Lowther" />
        <meta name="theme-color" content="#292723"/>
        <html lang="en" />
      </Helmet>
      <div className="flex fixed z-50">
        <Link
          className="text-white mt-5 ml-4 shadow-lg transition duration-200 ease-in-out bg-stone-700 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded-lg py-2 px-8"
          to="/"
        >
          Back
        </Link>
      </div>
      <div className="px-4 sm:px-12 md:px-16 xl:px-72">
        {/* <h1 className="text-6xl text-center font-bold mb-10 pt-32">Projects & Guides</h1> */}
        <div className="pt-36">
          <div className="rounded-lg p-8 shadow-md mb-10" style={{ "backgroundColor": "#312f2a" }}>
            <h1 id="writeups" className="text-4xl sm:text-5xl font-bold">Writeups</h1>
            <hr className="my-2" />
            <div className="flex flex-wrap w-full justify-center">
              {
                writeups.length > 0 ? (
                  writeups.map(({ node: post }) => {
                    return (
                      <div key={post.frontmatter.path}>
                        <Link to={post.frontmatter.path}>
                          <button className="shadow-lg text-white px-4 py-2 rounded m-5 bg-zinc-600 hover:bg-zinc-500 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <h1 className="text-xl font-bold">{post.frontmatter.title}</h1>
                            <h2 className="text-lg">{post.frontmatter.date}</h2>
                          </button>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-2xl mt-2">There are currently no writeups</div>
                )
              }
            </div>
          </div>
        </div>
        <div className="rounded-lg p-8 shadow-md mb-10" style={{ "backgroundColor": "#312f2a" }}>
          <h1 id="projects" className="text-4xl sm:text-5xl font-bold">Projects</h1>
          <hr className="my-2" />
          <div className="flex flex-wrap w-full justify-center">
            {
              projects.length > 0 ? (
                projects.map(({ node: post }) => {
                  return (
                    <div key={post.frontmatter.path}>
                      <Link to={post.frontmatter.path}>
                        <button className="shadow-lg text-white px-4 py-2 rounded m-5 bg-zinc-600 hover:bg-zinc-500 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                          <h1 className="text-xl font-bold">{post.frontmatter.title}</h1>
                          <h2 className="text-lg">{post.frontmatter.date}</h2>
                        </button>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="text-2xl mt-2">There are currently no projects</div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            category
            enabled
          }
        }
      }
    }
  }
`;

export default BlogPage;
