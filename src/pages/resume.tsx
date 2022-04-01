import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "./components/layout"

const Resume = () =>
  <Layout pageTitle="Title">
    <div className="content">
    <main>
      <StaticImage
        src="../assets/resume.png"
        alt="Oreoluwa Akinsanmi Resume"
        layout="constrained"
      />
      <a
        className="link"
        href="https://github.com/Speculate7/gatsbybasic/files/7585079/oreoluwa_akinsanmi_cr2.pdf"
        target="_blank"
        rel="noopener"
      >Download or Print PDF</a>
    </main>
    </div>
  </Layout>

export default Resume;