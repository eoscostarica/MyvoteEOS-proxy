export default (theme) => ({
  HomeFrontLayerRoot: {
    padding: theme.spacing(3, 1, 0, 1),
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      marginTop: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3, 0)
    }
  },
  titleBox: {
    width: 225,
    paddingLeft: theme.spacing(2),
    '& h4': {
      fontSize: 33,
      letterSpacing: '-0.49px',
      color: '#000000',
      fontWeight: 'bold'
    },
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      width: '70% !important',
      '& h4': {
        fontSize: '33px !important',
        letterSpacing: '-0.49px !important',
        color: '#000000',
        fontWeight: 'bold'
      }
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      paddingLeft: 0,
      '& h4': {
        letterSpacing: '-0.91px',
        fontSize: 59.2
      }
    }
  }
})
