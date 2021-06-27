import React from "react";

import { ParallaxProvider } from "react-scroll-parallax";

import SiteMetadata from "../components/SEO";

import Navbar from "../components/home/navbar";
import Layout from "../components/home/layout";
import About from "../components/home/about";
import Landing from "../components/home/landing";
import Projects from "../components/home/projects";
import Skills from "../components/home/skills";
import Contact from "../components/home/contact";
import Footer from "../components/home/footer";

const Home = () => {
  return (
    <Layout>
      <SiteMetadata title="James Lowther - Home" />
      <ParallaxProvider>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Skills />

        <Contact />
        <Footer />
      </ParallaxProvider>
    </Layout>
  );
};

export default Home;
