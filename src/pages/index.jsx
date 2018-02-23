import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

export default ({ data }) => {
  const { site: { siteMetadata } } = data
  const { issues: { nodes: issues } } = data
  return (
    <Container>
      <h1>{siteMetadata.title}</h1>
      <h2>{siteMetadata.description}</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.number}>
            <Link to={issue.frontmatter.slug}>{issue.title}</Link>
            <p>{issue.labels.nodes.map(label => `#${label.name} `)}</p>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    issues {
      nodes {
        number
        title
        createdAt
        body
        frontmatter {
          slug
        }
        labels {
          nodes {
            name
            color
          }
        }
      }
    }
  }
`
