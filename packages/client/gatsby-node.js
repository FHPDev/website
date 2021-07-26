var path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const posts = graphql(`
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
  `).then(result => {
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
  });

  const tags = graphql(`
      query {
        tags: allSanityCategory {
          nodes {
            title
          }
        }
      }
    `).then(result => {
      console.log(result)
      result.data.tags.nodes.forEach(node => {
        actions.createPage({
          path: `blog/${node.title}`,
          component: path.resolve(`./src/pages/blog.tsx`),
          context: { 
            tag: node.title
          },
        })
      })
    })

    console.log('tags', tags)
  
  return Promise.all([posts, tags])
}

// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       tags: allSanityCategory {
//         nodes {
//           title
//         }
//       }
//     }
//   `)
//   data.tags.nodes.forEach(node => {
//     actions.createPage({
//       path: `blog/${node.title}`,
//       component: path.resolve(`./src/templates/BlogTemplate.tsx`),
//       context: { 
//         slug: node.slug.current,
//         tag: node.title
//       },
//     })
//   })
// }



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
  
