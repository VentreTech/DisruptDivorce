import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './bootstrap.min.css'
import './pe-icon-7-stroke.css'
import './font-awesome.min.css'
import './style.css'


const TemplateWrapper = (props) => {
  return (
    <MuiThemeProvider>
        <div>
            <Helmet
              title={props.data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Your Divorce - Better' },
                { name: 'keywords', content: 'divorce, marriage, separation, kentucky divorce' },
              ]}
            />
            <Header metaData={props.data.site.siteMetadata} location={props.location} />

            {props.children()}
            <Footer metaData={props.data.site.siteMetadata} />
        </div>
    </MuiThemeProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const indexQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
              title
            }
        },
        client2: imageSharp(id: { regex: "/client2/" }) {
          sizes(maxWidth: 241) {
            src
            sizes
            originalImg
            originalName
          }
        }
    }
`

export default TemplateWrapper
