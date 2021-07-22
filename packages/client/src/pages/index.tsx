import { useEffect } from 'react';
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from '../components/seo'

const IndexPage = () => {
  useEffect(() => {
    console.log(process.env.DEV_ENV)
    if (process.env.DEV_ENV !== 'true') {
      navigate('/coming-soon/')
    }

  }, [])
  return (
    <>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site. TEST DEPLOY</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </>
  )
}

export default IndexPage
