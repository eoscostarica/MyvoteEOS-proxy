import React from 'react'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import TitlePage from 'components/PageTitle'

import styles from './styles'

const useStyles = makeStyles(styles)

const ProductBackLayer = () => {
  const classes = useStyles()
  const { t } = useTranslation('translations')

  return (
    <Box className={classes.productBackLayerRoot}>
      <TitlePage title={t('htmlTitle')} />
      <Box className={classes.titleBox}>
        <Typography variant="h4">{t('products')}</Typography>
      </Box>
    </Box>
  )
}

export default ProductBackLayer
