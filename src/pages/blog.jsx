import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { isMobile } from 'react-device-detect';

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const writeups = posts.filter(post =>
    post.node.frontmatter.category === "writeup"
    &&
    post.node.frontmatter.enabled
    &&
    !post.node.frontmatter.hidden
  )
  const projects = posts.filter(post =>
    post.node.frontmatter.category === "project"
    &&
    post.node.frontmatter.enabled
    &&
    !post.node.frontmatter.hidden
  )

  return (
    <section className="w-full h-screen overflow-y-auto text-white" style={{"fontFamily": "'Mulish', sans-serif", "backgroundColor": "#1b1b1b",
    "backgroundImage": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.09'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
      <Helmet>
        <title>Blog - James Lowther</title>
        <meta name="description" content="Blog content written by James Lowther" />
        <meta name="theme-color" content="#292723"/>
        <html lang="en" />
      </Helmet>
      <div className="flex fixed z-50">
        <Link
          className="text-white mt-5 ml-4 shadow-lg transition duration-75 ease-out bg-stone-700 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded-lg py-2 px-8"
          to="/"
        >
          Back
        </Link>
      </div>
      <div
        className="flex justify-end select-none py-6 px-12 text-3xl text-red-400 w-full h-16 overflow-hidden"
        style={{"fontFamily": "'Courier New', monospace"}}
      >
        <div className={`relative ${isMobile ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <div className="absolute transform duration-300 -translate-x-5 hover:-translate-x-88 w-96">
            <span className="mr-2">$</span>
            <span className="absolute transform duration-100 ease-in-out opacity-0 hover:opacity-100 w-full">
              <div className="pl-8 -translate-x-8">nmap -A 127.0.0.1</div>
            </span>
          </div>
          <div className="absolute transform animate-blink pointer-events-none">|</div>
        </div>
      </div>
      <div className="px-4 sm:px-12 md:px-16 xl:px-72">
        <div className="pt-32">
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
                          <button className="shadow-lg text-white px-4 py-2 rounded m-5 bg-zinc-600 hover:bg-zinc-500 transition duration-75 ease-out transform hover:-translate-y-1 hover:scale-110">
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
                        <button className="shadow-lg text-white px-4 py-2 rounded m-5 bg-zinc-600 hover:bg-zinc-500 transition duration-75 ease-out transform hover:-translate-y-1 hover:scale-110">
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
            hidden
          }
        }
      }
    }
  }
`;

export default BlogPage;
