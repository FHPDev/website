import { graphql, Link } from 'gatsby'
import PortableText from '@sanity/block-content-to-react'
import BlogHero from '../components/Hero/BlogHero'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const SingleBlogTemplate = ({ data: { post } }) => {
  const serializers = {
    types: {
      block(props) {
        switch (props.node.style) {
          case 'h1':
            return <h1>{props.children}</h1>
          case 'h2':
            return <h2>{props.children}</h2>
          case 'h3':
            return <h3>{props.children}</h3>

          default:
            return <p>{props.children}</p>
        }
      },
      // eslint-disable-next-line react/display-name
      bodyImage: ({ node }) => (
        <img src={node.asset.url} alt={node.alt ? node.alt : '#'} />
      ),
      youtube: ({ node }) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} containerClassName='youtube-blog' />)
      }
    }
  }

  console.log(post.mainImage)

  return (
    <>
      <BlogHero
        title={post.title}
        image={post.mainImage.asset.gatsbyImageData}
        author={post.author}
        tags={post.tags}
        date={post.publishedAt}
        portrait={post.isImageVertical}
      />
      <div className="container">
        <PortableText blocks={post._rawBody} serializers={serializers} />
      </div>
    </>
  )
}

export default SingleBlogTemplate

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: {current: {eq: $slug}}) {
      author {
        name
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(width: 100, height: 100)
          }
        }
      }
      mainImage {
        asset {
          gatsbyImageData
        }
      }
      isImageVertical
      title
      tags {
        title
      }
      _rawBody(resolveReferences: {maxDepth: 10})
      publishedAt
    }
  }
`

