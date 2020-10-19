import React from "react"

import SiteMetadata from "../components/SEO"

import Navbar from "../components/navbar"
import Layout from "../components/layout"
import About from "../components/about"
import Landing from "../components/landing"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"

const Home = () => {
  
  return (
    <Layout>
      <SiteMetadata title="James Lowther - Home" />
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  )
} 

export default Home;
