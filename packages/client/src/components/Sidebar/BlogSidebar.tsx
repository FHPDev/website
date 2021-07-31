import { graphql, useStaticQuery, Link } from 'gatsby'
import StyledSidebar from './BlogSidebarStyles'


const BlogSidebar = () => {
    const { tags } = useStaticQuery(graphql`
    query allTagQuery {
        tags: allSanityTags {
          edges {
            node {
              title
            }
          }
        }
      }
  `)

    const { edges } = tags;
    return (
        <StyledSidebar>
            <ul>
                {edges.map(item => {
                    return <li>
                        <Link to={`/blog/${item.node.title}`}>
                            {item.node.title}
                        </Link>
                    </li>
                })}
            </ul>
        </StyledSidebar>
    )
}

export default BlogSidebar