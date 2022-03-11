import React from "react"
import Layout from "./components/layout"

export default () =>
  <Layout>
    <div className="content">
      <main>
        <h1 className="title">
          About me
        </h1>

        <p>
          I'm based in the DMV area (DC, MD, VA) and I’ve been working in tech for over 6 years. Over that time, I've built websites using <b>javascript,
            html, and css</b> and developed webapps using tools amd frameworks such as <b>React, NextJs, Git and Docker</b>.
          I have also worked with various CMS platforms such as <b>Wordpress, Squarespace, Wix</b>.
          </p>
        <br />
        <h2>Let's create</h2>
        <p style={{ marginLeft: '30px' }} className="services">

          <b>Need to update your site?</b> I can perform platform, plugin and content updates for any CMS (wix, squarespace, etc) <br /><br />
          <b>Wanna switch up your domain name?</b> I can help you select, setup and redirect all web or email traffic to the new address.<br /><br />
          <b>Got a brand new design you want the world to see?</b> I use mobile-friendly CSS to implement responsive custom designs and layouts.<br /><br />
          <b>Wanna make your page do something funky, outside the box?</b> I can help you with that too!I write custom code to integrate third-party tools and APIs with your site.
        </p>
      </main>
    </div>
  </Layout>