import React from 'react'
import Layout from '../components/Layout'

import { graphql, useStaticQuery, Link } from 'gatsby'

export default () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  id
                  frontmatter {
                    title
                    date(formatString: "MMM Do YYYY")
                  }
                }
              }
            }
          }
        `
    )

    const posts = allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.frontmatter.date}</p>
        </article>
    ))

    return (
        <Layout>
            <h2>Blog Posts</h2>
            { posts }
        </Layout>
    )
}