import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const WriteupPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <section className="bg-gray-900 w-full h-screen text-white" style={{"font-family": "'Roboto Mono', monospace"}}>
      <Helmet>
        <title>Writeups - James Lowther</title>
        <meta name="description" content="Writeups written by James Lowther" />
        <html lang="en" />
      </Helmet>
      <div className="flex absolute">
        <Link
          className="text-white mt-5 ml-4 shadow-lg transition duration-200 ease-in-out bg-gray-700 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded-lg py-2 px-8"
          to="/"
        >
          Back
        </Link>
      </div>
      <div className="px-4 sm:px-12 md:px-16 xl:px-72">
        <h1 className="text-6xl text-center font-bold mb-10 pt-32">Writeups</h1>
        <div className="rounded-lg p-8 shadow-md" style={{ "background-color": "#182136" }}>
          <h1 className="text-5xl font-bold">Latest</h1>
          <hr className="my-2" />
          <div className="flex flex-wrap w-full justify-center">
            {posts.length > 0 ? (
              posts.map(({ node: post }) => {
                return (
                  <div key={post.id}>
                    <Link to={post.frontmatter.path}>
                      <button className="shadow-lg text-white px-4 py-2 rounded m-5 bg-gray-500 hover:bg-purple-600 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <h1 className="text-xl font-bold">{post.frontmatter.title}</h1>
                        <h2 className="text-lg">{post.frontmatter.date}</h2>
                      </button>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div className="text-2xl mt-2">There are currently no writeups</div>
            )}
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
          }
        }
      }
    }
  }
`;

export default WriteupPage;
