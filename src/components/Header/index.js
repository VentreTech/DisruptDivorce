import React from 'react'
import Link from 'gatsby-link'

const Header = ({data}) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
  </div>
)

export const query = graphql`
  query LayoutQuery {
     site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header;
