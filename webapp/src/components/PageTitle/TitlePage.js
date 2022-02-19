import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const TitlePage = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
)

TitlePage.propTypes = {
  title: PropTypes.string
}

TitlePage.defaultProps = {
  title: 'MyvoteEOS - The EOS BP Proxy and DAO to replace vote buying'
}

export default TitlePage
