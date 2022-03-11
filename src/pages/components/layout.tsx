import React from "react";
import Link from "gatsby-link";
//import type { PageProps } from "gatsby"
import "../../styles/global.css";

export declare interface AppProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AppProps) =>
  <div className="container">
    <header>
      <div className="navbar">
        <Link to="/">
          <h1 className="sitename"><span style={{ color: '#1ca086' }}>Remo</span> Kingdom</h1>
        </Link>
        <ul className="navitems">
          <li className="navitem"><Link className="link" activeStyle={{textDecoration: "underline"}} to="/">Home</Link></li>
          <li className="navitem"><Link className="link" activeStyle={{textDecoration: "underline"}} to="/servicesncontact/">Services & Contact</Link></li>
          <li className="navitem"><Link className="link" activeStyle={{textDecoration: "underline"}} to="/resume/">Resume</Link></li>
        </ul>
      </div>
    </header>
    {children}
  </div>

export default Layout;

/*design notes
- add border to the nav bar and body container, just outline divs. Making
nav bar float and fixed in postioin as the page scrolls.
*/
