import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import TechCard from "./techcard"

const Skills = () => {

  const data = useStaticQuery(graphql`
  query {
    html: file(relativePath: {eq: "html5.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    tailwind: file(relativePath: {eq: "tailwind-css-logo.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    python: file(relativePath: {eq: "python.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    cpp: file(relativePath: {eq: "cpp.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    sqlite: file(relativePath: {eq: "sqlite.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    java: file(relativePath: {eq: "java.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    react: file(relativePath: {eq: "react.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    vue: file(relativePath: {eq: "vue.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    windows: file(relativePath: {eq: "windows.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    linux: file(relativePath: {eq: "tux.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    manjaro: file(relativePath: {eq: "manjaro.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    debian: file(relativePath: {eq: "debian.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    docker: file(relativePath: {eq: "docker.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    nginx: file(relativePath: {eq: "nginx.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    git: file(relativePath: {eq: "git.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    terraform: file(relativePath: {eq: "terraform.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    shell: file(relativePath: {eq: "shell.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    github: file(relativePath: {eq: "github-light.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    digitalocean: file(relativePath: {eq: "digitalocean.png"}) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`)

  return (
    <section id="skills" class="w-full bg-gray-900 pb-20">
      <div class="pt-8 w-2/3 mx-auto text-white">
        <p class="text-center text-6xl mb-8 font-header">Skills</p>
        <p class="text-5xl mb-2">Languages / Frameworks</p>
        <div class="flex flex-wrap">
          <TechCard
            fluid={data.python.childImageSharp.fluid}
            name="Python"
          />
          <TechCard
            fluid={data.cpp.childImageSharp.fluid}
            name="C++"
          />
          <TechCard
            fluid={data.java.childImageSharp.fluid}
            name="Java"
          />
          <TechCard
            fluid={data.sqlite.childImageSharp.fluid}
            name="SQLite"
          />
          <TechCard
            fluid={data.html.childImageSharp.fluid}
            name="HTML"
          />
          <TechCard
            fluid={data.tailwind.childImageSharp.fluid}
            name="Tailwind CSS"
          />
          <TechCard
            fluid={data.react.childImageSharp.fluid}
            name="React"
          />
          <TechCard
            fluid={data.vue.childImageSharp.fluid}
            name="Vue"
          />
        </div>
        <p class="text-5xl mb-2">Tools</p>
        <div class="flex flex-wrap">
          <TechCard
            fluid={data.docker.childImageSharp.fluid}
            name="Docker"
          />
          <TechCard
            fluid={data.nginx.childImageSharp.fluid}
            name="Nginx"
          />
          <TechCard
            fluid={data.git.childImageSharp.fluid}
            name="Git"
          />
          <TechCard
            fluid={data.terraform.childImageSharp.fluid}
            name="Terraform"
          />
          <TechCard
            fluid={data.shell.childImageSharp.fluid}
            name="Shell"
          />
        </div>
        <p class="text-5xl mb-2">Services</p>
        <div class="flex flex-wrap">
          <TechCard
            fluid={data.github.childImageSharp.fluid}
            name="GitHub"
          />
          <TechCard
            fluid={data.digitalocean.childImageSharp.fluid}
            name="Digital Ocean"
          />
        </div>
        <p class="text-5xl mb-2">Operating Systems</p>
        <div class="flex flex-wrap">
          <TechCard
              fluid={data.windows.childImageSharp.fluid}
              name="Windows"
          />
          <TechCard
            fluid={data.linux.childImageSharp.fluid}
            name="Linux"
          />
          <TechCard
            fluid={data.manjaro.childImageSharp.fluid}
            name="Manjaro"
          />
          <TechCard
            fluid={data.debian.childImageSharp.fluid}
            name="Debian"
          />
        </div>
      </div>
    </section>
  )

}

export default Skills;