import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from "gatsby-background-image"
import StarfieldAnimation from "./starfield/starfield"

const BackgroundSection= ({ className, children }) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "space-bg.jpg"}) {
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
      <StarfieldAnimation 
        numParticles="400"
        lineWidth="1.0"
        alphaFactor="0.8"
        class="ril-image-current"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: botton center;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
`

export default StyledBackgroundSection;