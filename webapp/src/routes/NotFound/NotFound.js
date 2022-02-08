import React from 'react'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CustomRouterLink from 'components/CustomRouterLink'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    height: '100vh'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  centerText: {
    textAlign: 'center'
  }
}))

const NotFound = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} className={classes.content}>
          <div className={classes.centerText}>
            <Typography variant="h1">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography variant="subtitle2">
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Button
              variant="contained"
              color="primary"
              activeClassName={classes.active}
              component={CustomRouterLink}
              to="/"
            >
              Take me home
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default NotFound
