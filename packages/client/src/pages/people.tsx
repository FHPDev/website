import { graphql, useStaticQuery } from "gatsby"

import PageHeader from "../components/PageHeader/PageHeader"
import DataGrid from "../components/DataGrid/DataGrid"

const peoplePage = () => {
  const data = useStaticQuery(
    graphql`
        query authorQuery {
            author: allSanityAuthor {
              post: nodes {
                image {
                  ...ImageWithPreview
                }
                bio {
                  _rawChildren
                }
                name
              }
            }
          }
        `
  )

  return (
    <>
      <section className="container">
        <PageHeader title="the blog page" text="blog title text longer string. Yadda yadda" />
        <DataGrid data={data.author.post} cardType='card' />
      </section>

    </>
  )
}

export default peoplePage