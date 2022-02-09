export default (theme) => ({
  // sidebar
  nav: {
    marginBottom: theme.spacing(2)
  },
  noLinkBox: {
    display: 'flex'
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: `${theme.palette.primary.dark} !important`,
    padding: '10px 8px !important',
    justifyContent: 'flex-start !important',
    textTransform: 'none !important',
    letterSpacing: '0 !important',
    width: '100%'
  },
  icon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: '#F53844 !important',
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: '#F53844 !important'
    }
  },
  // top bar
  sessionText: {
    fontStyle: 'normal',
    fontWeight: '500 !important',
    fontSize: '16px !important',
    lineHeight: '20px !important',
    textAlign: 'center',
    letterSpacing: '-0.03em !important',
    color: '#EEEEEE'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    marginRight: `${theme.spacing(1)} !important`
  },
  loginBtn: {
    marginLeft: `${theme.spacing(1)} !important`
  },
  // Main Page
  rootMainPage: {
    width: '100%',
    height: '100%',
    overflowY: 'hidden'
  },
  // Main Page Backdrop
  backdrop: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflowY: 'hidden',
    [theme.breakpoints.up('sm')]: {
      height: '100vh'
    }
  },
  backLayer: {
    overflowY: 'auto'
  },
  headerBox: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(32),
      paddingLeft: theme.spacing(32)
    }
  },
  menu: {
    flexGrow: 1,
    marginTop: 80
  },
  menuButton: {
    marginRight: 16
  },
  title: {
    flexGrow: 1
  },
  frontLayerRoot: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    zIndex: 0
  },
  root: {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
    borderBottomWidth: 0,
    overflowX: 'hidden'
  },
  labelBackdrop: {
    fontSize: 20.2,
    fontWeight: 600,
    letterSpacing: '0.25px',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  headerBoxNone: {
    display: 'none'
  },
  alert: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: theme.palette.primary.contrastText,
    '& a': {
      color: theme.palette.primary.contrastText,
      lineBreak: 'anywhere'
    }
  },
  // Layers
  layer: {
    height: '100%',
    overflowY: 'auto'
  }
})
