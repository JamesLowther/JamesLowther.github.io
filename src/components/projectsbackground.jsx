import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from "gatsby-background-image"

const ProjectsBackground = ({ className, children }) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "projects-bg.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      fluid={data.file.childImageSharp.fluid}
      className={className}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledProjectsBackground = styled(ProjectsBackground)`
  width: 100%;
  background-position: botton center;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
`

export default StyledProjectsBackground;