import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import Contact from '../components/Contact/Contact'


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroClass="about-background"
    />
    <InfoBlock heading="How Can We Help"/>
    <Contact/>
    <div className="col-10 col-sm-8 mx-auto my-4">
      <form action="https://formspree.io/mvokyroq" method="post">
        <div className="form-group">
          <input type="text" name="name" id="name" placeholder="Your Name" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="email" name="email" id="email" placeholder="Your Email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="text" name="phone" id="Phone" placeholder="Phone" className="form-control"/>
        </div>
        <div className="form-group">
          <textarea type="text" name="description" id="description" placeholder="Your Meassage" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-outline-info btn-block">SUBMIT</button>
      </form>
    </div>
  </Layout>
)

export const myQuery = graphql`
{
  img: file(relativePath: {eq: "contact.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
