import { graphql, useStaticQuery } from "gatsby"
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
        <DataGrid data={data.author.post} cardType='card' />
    )
}

export default peoplePage