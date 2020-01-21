import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import CourseCart  from '../components/Cart/CourseCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="Learn Code Online"
      heroClass="hero-background"
    />
    <InfoBlock heading="About Us"/>
    <CourseCart courses={data.mycourses} />
    <DualInfoBlock heading="Our Team" imageUrl="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
  </Layout>
)

export const myQuery = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  mycourses: allContentfulCourses {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        image {
          fixed(width: 200, height: 120) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`
export default IndexPage
