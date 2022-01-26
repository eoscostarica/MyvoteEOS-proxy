export default (theme) => ({
  root: {
    padding: '0 !important',
    display: 'flex !important',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '100% !important'
  },
  appBar: {
    boxShadow: 'none !important',
    backgroundColor: '#15151B',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center'
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
    marginLeft: -12,
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    }
  },
  drawerContent: {
    backgroundColor: theme.palette.white,
    height: '100%',
    padding: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 1, 1, 1),
    backgroundColor: '#1C1C24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleFooter: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: '-0.05em',
    color: '#EEEEEE'
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 400,
    margin: theme.spacing(3, 0)
  },
  sof: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  toolbar: {
    maxWidth: 1024,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important'
  },
  menuLink: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '-0.03em',
    color: '#EEEEEE',
    textTransform: 'uppercase',
    textDecoration: 'none',
    margin: '0 8px'
  }
})
