import { useEffect } from 'react';
import { graphql, Link, navigate, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import UseModal from '../library/UseModal';

import Seo from '../components/seo'
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import BannerImage from '../components/Hero/Hero';

import HomepageBannerStyles from '../styles/HomepageBannerStyles';

const IndexPage = () => {
  const [modalOpen, toggler] = UseModal("test");
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      page: sanityPages(pageName: {eq: "Home"}) {
        pageName
        hero {
          heroTitle
          heroSubtitle
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
    `
  )


  useEffect(() => {
    console.log(process.env.DEV_ENV)
    if (process.env.DEV_ENV !== 'true') {
      navigate('/coming-soon/')
    }

  }, [])

  const { page: { pageName, hero: { heroTitle, heroSubtitle, image } } } = data

  return (
    <>
      <Seo title={pageName} />
      <BannerImage image={image.asset.gatsbyImageData.images.fallback} >
        <HomepageBannerStyles>
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </HomepageBannerStyles>
      </BannerImage>
      <section className="container">
        <p className="quote-display">
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
        </p>
      </section>
    </>
  )
}

export default IndexPage
