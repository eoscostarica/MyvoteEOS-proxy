import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import ProductFrontLayer from './Product'
import UserFrontLayer from './User'
import styles from '../styles'

const useStyles = makeStyles(styles)

const FrontLayer = ({ ual }) => {
  const classes = useStyles()

  return (
    <Box className={classes.layer}>
      <Switch>
        <Route exact path="/dashboard/product" component={ProductFrontLayer} />
        <Route exact path="/dashboard/user" component={UserFrontLayer} />
        <Redirect from="/dashboard" to="/dashboard/product" />
      </Switch>
    </Box>
  )
}

FrontLayer.propTypes = {
  ual: PropTypes.object
}

export default FrontLayer
