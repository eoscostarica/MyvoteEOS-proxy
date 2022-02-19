import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'

import HomeFrontLayer from './Home'
import styles from '../styles'

const useStyles = makeStyles(styles)

const FrontLayer = ({ ual }) => {
  const classes = useStyles()

  return (
    <Box className={classes.layer}>
      <Switch>
        <Route exact path="/home" component={HomeFrontLayer} />
        <Redirect exact path="/" to="/home"/>
      </Switch>
    </Box>
  )
}

FrontLayer.propTypes = {
  ual: PropTypes.object
}

export default FrontLayer
