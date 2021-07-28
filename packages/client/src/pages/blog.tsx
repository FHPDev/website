import { graphql, Link } from "gatsby"

import Seo from "../components/seo"
import PageHeader from "../components/PageHeader/PageHeader"

const SecondPage = ({ data }) => {
  const { allSanityPost: { posts } } = data
  console.log(posts)
  return (
    <>
      <Seo title="BLOG" />
      <section className="container">
        <PageHeader title="the blog page" text="blog title text longer string. Yadda yadda" />
        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={`/blog/${post.slug.current}`}>
                  <div>
                    <p className="h2">{post.title}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export const query = graphql`
query PostQuery($tag: [String]) {
  allSanityPost(sort: {fields: _createdAt, order: DESC} filter: { tags: { elemMatch: { title: { in: $tag } } } }) {
    posts: nodes {
      id
      slug {
        current
      }
      title
      author {
        name
        slug {
          current
        }
      }
      tags {
        title
      }
    }
  }
}
`

export default SecondPage
