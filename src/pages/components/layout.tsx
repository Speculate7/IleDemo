import React from "react";
import { Helmet } from "react-helmet"
import "../../styles/global.css";
import { useStaticQuery, Link, graphql } from "gatsby";

export declare interface AppProps {
  children: React.ReactNode,
  pageTitle: string,
  pageDescription?: string,
  pageImage?: string,
}

const Layout = ({ children, pageTitle, pageDescription, pageImage}: AppProps) => {
  const data = useStaticQuery(graphql`
  query {
  site {
    siteMetadata {
      title
      description
      image
    }
  }
}
  `);
  const {title, description, image} = data.site.siteMetadata;

  console.log(data);
  return (
    <>
      <Helmet>
        <title>{`${pageTitle} | ${title}`}</title>
        <meta property="og:description" content={`${pageDescription || description}`}></meta>
        <meta property="og:image" content={`${pageImage || image}`}></meta>
        <meta property="og:title" content={`${pageTitle} | ${title}`}></meta>
      </Helmet>
      <div className="container">
        <header>
          <div className="navbar">
            <Link to="/">
              <h1 className="sitename"><span style={{ color: '#1ca086' }}>Remo</span> Kingdom</h1>
            </Link>
            <ul className="navitems">
              <li className="navitem"><Link className="link" activeStyle={{ textDecoration: "underline" }} to="/about/">About</Link></li>
              <li className="navitem"><Link className="link" activeStyle={{ textDecoration: "underline" }} to="/">Services</Link></li>
              <li className="navitem"><Link className="link" activeStyle={{ textDecoration: "underline" }} to="/resume/">Resume</Link></li>
              <li className="navitem"><Link className="link" activeStyle={{ textDecoration: "underline" }} to="/tuitionfund/">Tuition Fund</Link></li>
            </ul>
          </div>
        </header>
        {children}
      </div>
    </>
  )
}

export default Layout;

/*design notes
- add border to the nav bar and body container, just outline divs. Making
nav bar float and fixed in postioin as the page scrolls.
*/
