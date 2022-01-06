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
    height: 24
  }
})
