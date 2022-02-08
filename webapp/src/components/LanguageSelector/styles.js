export default (theme) => ({
  wrapper: {
    color: 'inherit'
  },
  languageText: {
    fontSize: '1rem',
    marginLeft: 3,
    display: 'none',
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
      display: 'inline'
    }
  },
  iconLanguage: {
    width: 24,
    height: 24,
    color: 'white'
  },
  laguangeMobile: {
    display: 'inline',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  languageDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  menuBox: {
    height: 'fit-content',
    padding: theme.spacing(0, 1),
    '& span': {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '17px',
      letterSpacing: '-0.03em',
      color: '#EEEEEE'
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  menuDivider: {
    borderLeft: '1px solid #333333'
  },
  languageSelected: {
    fontWeight: 'bold !important'
  }
})
