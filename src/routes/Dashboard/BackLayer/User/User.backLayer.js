import React from 'react'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import TitlePage from 'components/PageTitle'

import styles from './styles'

const useStyles = makeStyles(styles)

const UserBackLayer = () => {
  const classes = useStyles()
  const { t } = useTranslation('translations')

  return (
    <Box className={classes.userBackLayerRoot}>
      <TitlePage title={t('htmlTitle')} />
      <Box className={classes.titleBox}>
        <Typography variant="h4">{t('users')}</Typography>
      </Box>
    </Box>
  )
}

export default UserBackLayer
