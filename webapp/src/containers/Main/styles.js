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
  active: {
    color: '#F53844 !important',
    fontWeight: 'bold !important'
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
    padding: theme.spacing(3, 1, 3, 1),
    backgroundColor: '#1C1C24',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1024,
    [theme.breakpoints.up('smd')]: {
      flexDirection: 'row',
      alignItems: 'baseline'
    }
  },
  noVote: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '60px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    background: 'linear-gradient(277.32deg, #43378F 2.34%, #F53844 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  footerLogo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& img': {
      width: 100,
      visibility: 'hidden'
    }
  },
  socialWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '& a': {
      margin: `${theme.spacing(0, 0, 1, 0)} !important`
    },
    [theme.breakpoints.up('smd')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      '& div': {
        alignItems: 'flex-start',
        marginLeft: theme.spacing(2)
      }
    }
  },
  socialTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: '73px',
    letterSpacing: '0.03em',
    color: '#FFFFFF'
  },
  sof: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'linear-gradient(277.32deg, #43378F 2.34%, #F53844 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  },
  toolbar: {
    maxWidth: 1024,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 !important',
    '& .menuDesktop': {
      display: 'none'
    },
    '& .logoName': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(0, 1)} !important`,
      '& .menuDesktop': {
        display: 'flex'
      }
    }
  },
  menuLink: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: theme.spacing(0, 1)
  },
  noActive: {
    color: '#EEEEEE !important'
  },
  footerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1C1C24'
  },
  menuLinkFooter: {
    textTransform: 'capitalize !important',
    fontSize: '20px !important',
    color: '#EEEEEE !important'
  }
})
