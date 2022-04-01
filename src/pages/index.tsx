import React from "react"
import { graphql } from "gatsby"
import Layout from "./components/layout"

export declare interface DatoQueryData {
 data: {
  datoCmsPage: {
     id: string,
     pageBody: string,
     pageTitle: string
   }
 }
}

const About = ({data}: DatoQueryData) => {
  
  const { id, pageBody, pageTitle } = data.datoCmsPage;

  return (
  <Layout pageTitle="About">
    <div id={id.toString()} className="content">
      <main>
        <h2 className="title">
          {pageTitle}
        </h2>

        <p>
          {pageBody}
        </p>
      </main>
    </div>
  </Layout>
  )};

export const query = graphql`
query AboutPageQuery {
  datoCmsPage {
    id
    pageBody
    pageTitle
  }
}`;

export default About;