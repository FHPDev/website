import { graphql, Link, navigate, useStaticQuery } from "gatsby"

import Seo from "../components/seo"
import PageHeader from "../components/PageHeader/PageHeader"
import DataGrid from "../components/DataGrid/DataGrid"

const SecondPage = ({ data }) => {
  const { allSanityPost: { posts } } = data
  return (
    <>
      <Seo title="BLOG" />
      <section className="container">
        <PageHeader title="the blog page" text="blog title text longer string. Yadda yadda" />
        <DataGrid data={posts} cardType="link" />
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
