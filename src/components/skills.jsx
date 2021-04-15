import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TechCard from "./techcard"

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      html: file(relativePath: { eq: "skill-icons/html5.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      tailwind: file(
        relativePath: { eq: "skill-icons/tailwind-css-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      python: file(relativePath: { eq: "skill-icons/python.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      cpp: file(relativePath: { eq: "skill-icons/cpp.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      sqlite: file(relativePath: { eq: "skill-icons/sqlite.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      java: file(relativePath: { eq: "skill-icons/java.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      react: file(relativePath: { eq: "skill-icons/react.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      vue: file(relativePath: { eq: "skill-icons/vue.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      windows: file(relativePath: { eq: "skill-icons/windows.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      linux: file(relativePath: { eq: "skill-icons/tux.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      manjaro: file(relativePath: { eq: "skill-icons/manjaro.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      debian: file(relativePath: { eq: "skill-icons/debian.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      docker: file(relativePath: { eq: "skill-icons/docker.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      nginx: file(relativePath: { eq: "skill-icons/nginx.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      git: file(relativePath: { eq: "skill-icons/git.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      terraform: file(relativePath: { eq: "skill-icons/terraform.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      shell: file(relativePath: { eq: "skill-icons/shell.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      github: file(relativePath: { eq: "skill-icons/github-light.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
      digitalocean: file(relativePath: { eq: "skill-icons/digitalocean.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: TRACED_SVG
            layout: CONSTRAINED
          )
        }
      }
    }
  `)

  return (
    <section id="skills" class="w-full bg-gray-900 pb-20">
      <div class="pt-8 w-2/3 mx-auto text-white">
        <p class="text-center text-6xl mb-8 font-header">Skills</p>
        <p class="text-5xl mb-4">Languages / Frameworks</p>
        <div class="flex flex-wrap">
          <TechCard image={data.python} name="Python" />
          <TechCard image={data.cpp} name="C++" />
          <TechCard image={data.java} name="Java" />
          <TechCard image={data.sqlite} name="SQLite" />
          <TechCard image={data.html} name="HTML" />
          <TechCard image={data.tailwind} name="Tailwind CSS" />
          <TechCard image={data.react} name="React" />
          <TechCard image={data.vue} name="Vue" />
        </div>
        <p class="text-5xl mb-4">Tools</p>
        <div class="flex flex-wrap">
          <TechCard image={data.docker} name="Docker" />
          <TechCard image={data.nginx} name="Nginx" />
          <TechCard image={data.git} name="Git" />
          <TechCard image={data.terraform} name="Terraform" />
          <TechCard image={data.shell} name="Shell" />
        </div>
        <p class="text-5xl mb-4">Services</p>
        <div class="flex flex-wrap">
          <TechCard image={data.github} name="GitHub" />
          <TechCard image={data.digitalocean} name="Digital Ocean" />
        </div>
        <p class="text-5xl mb-4">Operating Systems</p>
        <div class="flex flex-wrap">
          <TechCard image={data.windows} name="Windows" />
          <TechCard image={data.linux} name="Linux" />
          <TechCard image={data.manjaro} name="Manjaro" />
          <TechCard image={data.debian} name="Debian" />
        </div>
      </div>
    </section>
  )
}

export default Skills
