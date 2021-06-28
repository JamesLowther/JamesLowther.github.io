import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import "../assets/css/writeups.css";

const WriteupTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <section className="writeup">
      <Helmet title={`James Lowther - ${post.frontmatter.title}`} />
      <div className="w-inner-div pb-10">
        <div className="mb-10 font-bold text-center py-16">
          <div className="text-7xl mb-4">{post.frontmatter.title}</div>
          <div className="text-4xl">{post.frontmatter.date}</div>
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
