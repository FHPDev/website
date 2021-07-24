import { graphql, Link, navigate, useStaticQuery } from "gatsby"

import Seo from "../components/seo"
import PageHeader from "../components/PageHeader/PageHeader"
import DataGrid from "../components/DataGrid/DataGrid"

const SecondPage = () => {
  const data = useStaticQuery(
    graphql`
    query PostQuery {
      allSanityPost(sort: {fields: _createdAt, order: DESC}) {
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
          categories {
            title
          }
        }
      }
    }
    `
  )
  const { allSanityPost: { posts } } = data
  return (
    <>
      <Seo title="Page two" />
      <section className="container">
        <PageHeader title="the blog page" text="blog title text longer string. Yadda yadda" />
        <DataGrid data={posts} type="link" />
      </section>
    </>
  )
}

export default SecondPage
