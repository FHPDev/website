import { graphql, Link } from 'gatsby'

import BlogHero from '../components/Hero/BlogHero'

const SingleBlogTemplate = ({ data: { post } }) => {
  console.log('blog data', post)

  return (
    <BlogHero
      title={post.title}
      image={post.mainImage.asset.gatsbyImageData}
      author={post.author}
      tags={post.categories}
      date={post.publishedAt}
    />
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
              gatsbyImageData(placeholder: DOMINANT_COLOR, 
                width: 100
                height: 100
                formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        mainImage {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        title
        categories {
          title
        }
        _rawBody(resolveReferences: {maxDepth: 10})
        publishedAt
      }
  }
`