var path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          slug {
            current
          }
          title
          author {
            name
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.posts.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.slug.current}`,
      component: path.resolve(`./src/templates/BlogTemplate.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug.current,
      },
    })
  })
}

// const turnPostsToPages = async ({ graphql, actions }) => {
//   const PostTemplate = path.resolve('./src/templates/BlogTemplate.tsx')
//   const { data } = await graphql(`
//     query {
//       posts: allSanityPost {
//         nodes {
//           id
//           slug {
//             current
//           }
//           title
//           author {
//             name
//           }
//         }
//       }
//     }
//   `)
//   data.posts.nodes.forEach(post => {
//     console.log('fuck?', post)
//     actions.createPage({
//       path: `./${post.slug.current}`,
//       component: PostTemplate,
//       context: {
//         slug: post.slug.current,
//       },
//     })
//   })
// }

// exports.createPages = async params => {
//   await Promise.all([turnPostsToPages(params)])
// }
  
