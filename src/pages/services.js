import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Learn Code Online"
      subtitle=""
      heroClass="about-background"
    />
    <DualInfoBlock heading="A Message From CEO" imageUrl="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    <InfoBlock heading="Our Vison"/>
    <TeamPhotoSection/>
  </Layout>
)

export const myQuery = graphql`
{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
