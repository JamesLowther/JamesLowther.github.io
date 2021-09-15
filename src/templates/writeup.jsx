import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import "../assets/css/writeups.css";
import "katex/dist/katex.min.css";

const WriteupTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <section className="writeup overflow-x-auto" style={{"fontFamily": "'Mulish', sans-serif"}}>
      <Helmet> 
        <title>{`${post.frontmatter.title} - James Lowther`}</title>
        <meta name="theme-color" content="#111827"/>
      </Helmet>
      <div className="flex absolute z-50">
        <Link
          className="text-white mt-5 ml-4 shadow-lg transition duration-200 ease-in-out bg-gray-700 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded-lg py-2 px-8"
          style={{"color": "white", "textDecoration": "none"}}
          to=".."
        >
          Back
        </Link>
      </div>
      <div className="w-inner-div pb-10">
        <div className="mb-10 font-bold text-center py-32 px-0 sm:px-12 md:px-16 xl:px-24">
          <div className="border-4 py-10 rounded shadow-lg overflow-x-auto" style={{"borderColor": "#e2aa00"}}>
            <div className="text-4xl sm:text-5xl lg:text-7xl mb-4">{post.frontmatter.title}</div>
            <div className="text-3xl sm:text-4xl lg:text-5xl">{post.frontmatter.date}</div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  );
};

export const pageQuery = graphql`
  query WriteupByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default WriteupTemplate;
