import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import CourseCart from '../components/Cart/CourseCart'

const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Our Services"
      subtitle=""
      heroClass="about-background"
    />
    <CourseCart courses={data.mycourses} />
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
  mycourses: allContentfulCourses {
    edges {
      node {
        category
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
export default ServicesPage
