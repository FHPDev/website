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
    query  {
      file(relativePath: {eq: "fhpPlaceholder.jpg"}) {
        childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
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

  const handleClick = () => {
    toggler();
  }

  return (
    <>
      <Seo title="Home" />
      <BannerImage image={data.file.childImageSharp.fluid} >
        <HomepageBannerStyles>
          <h1>Finding Hair Peace</h1>
          <p>A sort of sub heading</p>
        </HomepageBannerStyles>
      </BannerImage>
      {
        modalOpen && (
          <Modal click={toggler}>
            <h1>Oh hai</h1>
          </Modal>
        )
      }
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <Button config='primary' onClick={handleClick}>OH HAI</Button>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </>
  )
}

export default IndexPage
