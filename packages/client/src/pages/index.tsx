import { useEffect } from 'react';
import { graphql, navigate, useStaticQuery } from "gatsby"


import Seo from '../components/seo'
import BannerImage from '../components/Hero/Hero';

import HomepageBannerStyles from '../styles/HomepageBannerStyles';

const IndexPage = () => {
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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    `
  )


  useEffect(() => {
    if (process.env.DEV_ENV !== 'true') {
      navigate('/coming-soon/')
    }

  }, [])

  const { page: { pageName, hero: { heroTitle, heroSubtitle, image } } } = data
  return (
    <>
      <Seo title={pageName} />
      <BannerImage image={image.asset.gatsbyImageData} >
        <HomepageBannerStyles>
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </HomepageBannerStyles>
      </BannerImage>
      <p className="quote-display container">
        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
      </p>
    </>
  )
}

export default IndexPage
