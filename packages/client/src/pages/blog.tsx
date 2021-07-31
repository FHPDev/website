import { graphql, Link } from "gatsby"

import Seo from "../components/seo"
import PageHeader from "../components/PageHeader/PageHeader"
import StyledBlogList from "../styles/BlogListStyles"
import dateFormat from "../library/dateFormat"
import BlogSidebar from "../components/Sidebar/BlogSidebar"

const SecondPage = ({ data, pageContext }) => {
  const { allSanityPost: { posts } } = data
  return (
    <>
      <Seo title="BLOG" />
      <section className="container">
        <PageHeader title="the blog page" text="blog title text longer string. Yadda yadda" />
        <StyledBlogList>
          <BlogSidebar />
          {pageContext.tag && (
            <p className="h2">Posts on {pageContext.tag}</p>
          )}
          <ul className="blog-list">
            {posts.map(post => {
              return (
                <li>
                  <Link to={`/blog/${post.slug.current}`}>
                    <div>
                      <p className="h2">{post.title}</p>
                    </div>
                    <span>Posted on: {dateFormat(post.publishedAt)}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </StyledBlogList>
      </section>
    </>
  )
}

export const query = graphql`
query PostQuery($tag: [String]) {
  allSanityPost(sort: {fields: publishedAt order: DESC} filter: { tags: { elemMatch: { title: { in: $tag } } } }) {
    posts: nodes {
      id
      publishedAt
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
