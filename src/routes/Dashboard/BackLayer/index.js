import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import ProductBackLayer from './Product'
import UserBackLayer from './User'
import styles from '../styles'

const useStyles = makeStyles(styles)

const BackLayer = ({ ual }) => {
  const classes = useStyles()

  return (
    <Box className={classes.layer}>
      <Switch>
        <Route exact path="/dashboard/product" component={ProductBackLayer} />
        <Route exact path="/dashboard/user" component={UserBackLayer} />
        <Redirect from="/dashboard" to="/dashboard/product" />
      </Switch>
    </Box>
  )
}

BackLayer.propTypes = {
  ual: PropTypes.object
}

export default BackLayer
