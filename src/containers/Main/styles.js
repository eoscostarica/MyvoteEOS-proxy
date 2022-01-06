export default (theme) => ({
  root: {
    padding: 0,
    display: 'flex'
  },
  appBar: {
    boxShadow: 'none'
  },
  logo: {
    height: 36
  },
  drawer: {
    width: 0,
    transition: 'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
  },
  drawerDesktop: {
    width: 240
  },
  drawerPaper: {
    width: 240,
    [theme.breakpoints.up('md')]: {
      marginTop: 64
    }
  },
  drawerToggle: {
    marginLeft: -12
  },
  drawerContent: {
    backgroundColor: theme.palette.white,
    height: '100%',
    padding: theme.spacing(2)
  }
})
