export default (theme) => ({
  optionBtn: {
    width: 280,
    height: 80,
    background: 'linear-gradient(94.32deg, #F53844 0%, #43378F 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15) !important',
    borderRadius: '20px !important',
    fontStyle: 'normal',
    fontWeight: '600 !important',
    fontSize: '18px !important',
    lineHeight: '22px !important',
    textAlign: 'center',
    letterSpacing: '-0.03em !important',
    color: '#FFFFFF !important',
    marginTop: `${theme.spacing(1)} !important`,
    textTransform: 'none !important'
  },
  headerSection: {
    padding: theme.spacing(4, 0, 20, 0),
    backgroundColor: '#15151B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleHeader: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '50px',
    lineHeight: '61px',
    letterSpacing: '0.01em',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  headerLogo: {
    width: 126,
    height: 189,
    margin: theme.spacing(3, 0)
  },
  headerMessage: {
    width: '100%',
    maxWidth: 600,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#FFFFFF',
    marginBottom: theme.spacing(2)
  },
  headerHashtag: {
    margin: theme.spacing(1, 0),
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 50,
    lineHeight: '110px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    background: 'linear-gradient(277.32deg, #43378F 2.34%, #F53844 100%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    [theme.breakpoints.up('sm')]: {
      fontSize: 70
    }
  },
  headerDownloadBtn: {
    width: '214px',
    height: '30px',
    border: '1px solid #E3E6E8 !important',
    boxSizing: 'border-box !important',
    borderRadius: '20px !important',
    fontStyle: 'normal !important',
    fontWeight: '600 !important',
    fontSize: '18px !important',
    lineHeight: '22px !important',
    letterSpacing: '-0.03em !important',
    color: '#43378F !important',
    textTransform: 'none !important'
  },
  headerOptionsBtns: {
    padding: theme.spacing(4, 0),
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(2),
    maxWidth: 1024,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .boxGroup': {
      display: 'flex',
      flexDirection: 'column',
      width: 291,
      marginBottom: theme.spacing(8),
      alignItems: 'center'
    },
    '& .textLabel': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '20px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#FFFFFF'
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(15),
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row'
    }
  },
  marginExtra: {
    marginBottom: 12
  },
  headerOptionsInfo: {
    padding: theme.spacing(5, 0),
    maxWidth: 1024,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .boxGroup': {
      display: 'flex',
      flexDirection: 'column',
      width: 291,
      marginBottom: theme.spacing(8)
    },
    '& .coloredLabel': {
      marginBottom: theme.spacing(2),
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '90px',
      lineHeight: '110px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      background: 'linear-gradient(277.32deg, #43378F 2.34%, #F53844 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    },
    '& .infoLabel': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '22px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#EEEEEE'
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(10),
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexDirection: 'row',
      '& .coloredLabel': {
        marginBottom: theme.spacing(5)
      }
    }
  },
  joinLabel: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '28px',
    textAlign: 'center',
    letterSpacing: '0.01em',
    color: '#EEEEEE',
    marginBottom: theme.spacing(4)
  },
  joinBox: {
    width: '100%',
    maxWidth: 1024,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    '& .textField': {
      width: '100%',
      maxWidth: 518,
      height: 60,
      background: '#E3E6E8',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
      borderRadius: 20,
      marginBottom: theme.spacing(2),
      '& input': {
        height: 27,
        '&::placeholder': {
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '15px',
          lineHeight: '18px',
          letterSpacing: '-0.03em',
          color: '#999999'
        }
      },
      '& p': {
        color: theme.palette.common.white,
        fontWeight: '500'
      }
    },
    '& .joinBtn': {
      width: '100%',
      height: 60,
      background: 'linear-gradient(94.32deg, #F53844 0%, #43378F 100%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
      borderRadius: 20,
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '22px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#FFFFFF',
      textTransform: 'none !important',
      marginTop: `${theme.spacing(1)}`
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      '& .textField': {
        marginBottom: 0
      },
      '& .joinBtn': {
        width: 100,
        marginLeft: '10px !important',
        marginTop: 0
      }
    }
  },
  aboutSection: {
    backgroundColor: '#15151B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .aboutTitle': {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 45,
      lineHeight: '73px',
      textAlign: 'center',
      letterSpacing: '0.01em',
      color: '#FFFFFF',
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        fontSize: 60
      }
    },
    '& .aboutInfo': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '25px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#999999',
      width: '100%',
      maxWidth: 796,
      marginTop: theme.spacing(1),
      padding: theme.spacing(0, 1)
    },
    '& .secondaryBoxColor': {
      padding: theme.spacing(24, 0),
      margin: theme.spacing(1, 0),
      backgroundColor: '#1C1C24',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        height: 210
      }
    },
    '& .infoLabel': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '25px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#999999',
      width: '100%',
      maxWidth: 623
    },
    '& .valuesWrapper': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& .coreTitle': {
      display: 'flex',
      alignItems: 'center',
      margin: theme.spacing(4, 0)
    },
    '& .coreTitleLabel': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '25px',
      lineHeight: '30px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#505050',
      marginLeft: theme.spacing(1)
    }
  },
  extraMarginBttom: {
    marginTop: theme.spacing(1)
  },
  coreValueTitle: {
    marginTop: theme.spacing(5)
  },
  valuesBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1200,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row'
    }
  },
  coreInfo: {
    width: 300,
    height: 176,
    backgroundColor: '#1C1C24',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: 265
    }
  },
  coreInfoLabel: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    color: '#999999',
    width: 288,
    [theme.breakpoints.up('sm')]: {
      width: 230
    }
  },
  generalTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    lineHeight: '73px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',
    [theme.breakpoints.up('md')]: {
      fontSize: 60
    }
  },
  bpsSection: {
    padding: theme.spacing(9, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .boxExampleBps': {
      background: 'rgba(238, 238, 238, 0.6)',
      width: 107,
      margin: theme.spacing(1)
    }
  },
  bpsBox: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: 1024,
    width: '100%',
    marginTop: theme.spacing(7)
  },
  secondaryColorTitle: {
    color: '#15151B'
  },
  bpsCriteria: {
    padding: theme.spacing(7, 0),
    backgroundColor: '#15151B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .criteriaLabel': {
      fontWeight: '500',
      fontSize: 16,
      maxWidth: 260
    },
    '& .subTitleCriteria': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '28px',
      lineHeight: '34px',
      letterSpacing: '-0.03em',
      color: '#707070',
      margin: theme.spacing(6, 0, 5, 0),
      textAlign: 'center',
      maxWidth: 900,
      width: '100%'
    }
  },
  exchageSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 0),
    '& .divisorTwitBtn': {
      height: 20,
      borderLeft: '1px solid #FFFFFF'
    },
    '& .messageIcon': {
      marginRight: theme.spacing(1)
    },
    '& .twitBtn': {
      background: '#43378F',
      boxShadow: '0px 4px 4px #EEEEEE',
      borderRadius: 15,
      width: 272,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: theme.spacing(2),
      padding: theme.spacing(0, 4),
      '& span': {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '-0.05em',
        color: '#FFFFFF',
        display: 'flex'
      },
      '&:hover': {
        cursor: 'pointer'
      }
    },
    '& .exchangeBox': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: 500,
      justifyContent: 'space-between',
      margin: theme.spacing(2, 0, 3, 0),
      flexDirection: 'column',
      '& img': {
        maxWidth: 170,
        width: 'auto'
      }
    },
    [theme.breakpoints.up('sm')]: {
      '& .exchangeBox': {
        width: '50%'
      }
    },
    [theme.breakpoints.up('lg')]: {
      '& .exchangeBox': {
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      '& .twitBtn': {
        marginTop: 0
      }
    }
  },
  exchangeBox: {
    justifyContent: 'space-between'
  },
  membersSection: {
    padding: theme.spacing(7, 0),
    backgroundColor: '#15151B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .boxExampleMembers': {
      width: 170,
      height: 91,
      margin: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    '& .memberLabel': {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '20px',
      textAlign: 'center',
      letterSpacing: '-0.03em',
      color: '#FFF'
    },
    '& .memberAmount': {
      color: '#808080'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7, 1)
    }
  },
  patnerSection: {
    padding: theme.spacing(7, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .boxExamplePartner': {
      width: '100%',
      height: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(1),
      '& img': {
        width: '66%'
      }
    },
    [theme.breakpoints.up('sm')]: {
      '& .boxExamplePartner': {
        width: '45%'
      }
    }
  },
  aBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none'
  },
  unableUnderline: {
    textDecoration: 'none !important'
  },
  pagination: {
    '& button, & div': {
      color: theme.palette.common.white
    },
    '& .Mui-selected': {
      fontWeight: 'bold !important'
    }
  },
  paginationWrapper: {
    marginBottom: theme.spacing(2)
  }
})
