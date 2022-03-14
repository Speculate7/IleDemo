import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "./components/layout"

const TuitionFund = () =>
  <Layout>
    <Helmet>
    <title>Mutual Aid Request</title>
        <meta property="og:image" content="../public/MATop.png"></meta>
        <meta property="og:description" content="Hi folks! I’m a Black Trans
  techie/herbalist raising funds to help cover the cost of travel/tuition
  so I can attend the herbal program of my dreams."></meta>
        <meta property="og:title" content="Mutal Aid Request"></meta>
    </Helmet>
    <div className="content">
    <main>
      <StaticImage
      src="../assets/mutualAidImg.png"
      alt="Ore's tuition fund! Hi folks! I’m a Black Trans techie/herbalist raising funds to help cover the cost of tuition and travel so I can attend the herbal program of my dreams. I work part-time and  freelance website/CMS gigs but, that still isn’t enough so any donations are geatly appreciated. Venmo: @ore-akins"
      layout="constrained"
      />
    </main>
    </div>
  </Layout>

export default TuitionFund