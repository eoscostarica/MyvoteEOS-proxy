import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import TitlePage from 'components/PageTitle'
import { mockBps, BPSArray, membersArray, partnersArray } from 'utils/mockData'
import { useSharedState } from 'context/state.context'

import { novotebuyeosUtil, axiosUtil } from '../../../../utils'

import styles from './styles'

const useStyles = makeStyles(styles)

const HomeFrontLayer = () => {
  const classes = useStyles()
  const { t } = useTranslation('homePage')
  const [state] = useSharedState()
  // const getBps = useImperativeQuery(GET_REFERRAL_BY_INVITEE)

  useEffect(() => {
    console.log('USER', state)
  }, [state.user])

  useEffect(() => {
    const loadBps = async () => {
      const bpNames = await novotebuyeosUtil.getBps()
      const bps = await Promise.resolve(
        bpNames.reduce(async (previous, current) => {
          const resolvedPrevious = await Promise.resolve(previous)
          try {
            const bpInfo = await novotebuyeosUtil.getBpInfo(current)
            const bpjson = await axiosUtil.get(`${bpInfo.url}/bp.json`)

            return [...resolvedPrevious, bpjson]
          } catch (err) {
            console.log(err)
            return resolvedPrevious
          }
        }, [])
      )
      console.log('BPS', bps)
    }

    try {
      loadBps()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className={classes.HomeFrontLayerRoot}>
      <TitlePage title={t('htmlTitle')} />
      <div className={classes.headerSection}>
        <img
          className={classes.headerLogo}
          alt="Logo"
          src="/images/logo-dark.png"
        />
        <span className={classes.headerHashtag}>{t('noVoteBuy')}</span>
        <span className={classes.headerMessage}>{t('secondaryText')}</span>
        <div className={classes.headerOptionsBtns}>
          <div className="boxGroup">
            <span className={clsx('textLabel', classes.marginExtra)}>
              {t('homeText.text1')}
            </span>
            <Button className={classes.optionBtn} variant="contained">
              {t('joinAlliance')}
            </Button>
          </div>
          <div className="boxGroup">
            <span className="textLabel">{t('homeText.text2')}</span>
            <Button className={classes.optionBtn} variant="contained">
              {t('tellExchange')}
            </Button>
          </div>
          <div className="boxGroup">
            <span className={clsx('textLabel', classes.marginExtra)}>
              {t('homeText.text3')}
            </span>
            <Button className={classes.optionBtn} variant="contained">
              {t('delegateVote')}
            </Button>
          </div>
        </div>
        <span className={classes.titleHeader}>{t('joinMovement')}</span>
        <div className={classes.headerOptionsInfo}>
          <div className="boxGroup">
            <span className="coloredLabel">17</span>
            <span className="infoLabel"> {t('homeText.text4')}</span>
          </div>
          <div className="boxGroup">
            <span className="coloredLabel">12,246</span>
            <span className="infoLabel"> {t('homeText.text5')}</span>
          </div>
          <div className="boxGroup">
            <span className="coloredLabel">152</span>
            <span className="infoLabel"> {t('homeText.text6')}</span>
          </div>
        </div>
        <div className={classes.joinLabel}> {t('homeText.joinLabel')}</div>
        <div className={classes.joinBox}>
          <TextField
            className="textField"
            placeholder={t('placeholder')}
            variant="outlined"
          />
          <Button className="joinBtn" variant="contained">
            {t('join')}
          </Button>
        </div>
      </div>
      <div id="about" className={classes.aboutSection}>
        <div className="secondaryBoxColor">
          <span className="aboutTitle">{t('noVoteProxy')}</span>
          <span className="infoLabel">{t('homeText.text12')}</span>
        </div>
        <span className={clsx('aboutTitle', classes.coreValueTitle)}>
          {t('keepBps')}
        </span>
        <span className="infoLabel">{t('homeText.text13')}</span>
        <span className="infoLabel">{t('homeText.text14')}</span>
      </div>

      <div className={classes.bpsCriteria}>
        <span className={classes.generalTitle}>{t('selectionCriteria')}</span>
        <span className="subTitleCriteria">{t('eligibility')}</span>

        <div className={classes.valuesBox}>
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              {t('homeText.text16')}
            </span>
          </div>
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              {t('homeText.text17')}
            </span>
          </div>
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              {t('homeText.text18')}
            </span>
          </div>
        </div>
        <Button className={classes.optionBtn} variant="contained">
          {t('joinAlliance')}
        </Button>
      </div>

      <div className={classes.bpsSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          {t('joinTitle')}
        </span>
        {/* remove this map when add BE integration */}
        <div className={classes.bpsBox}>
          AAAA
          {BPSArray.map((i, index) => (
            <div key={`${i}-${index}`} className="boxExampleBps" />
          ))}
        </div>
      </div>

      <div className={classes.exchageSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          {t('exchangeStatus')}
        </span>
        {/* remove this map when add BE integration */}
        <div className={clsx(classes.bpsBox, classes.exchangeBox)}>
          {mockBps.map((image, index) => (
            <div key={`img-${index}`} className="exchangeBox">
              <img alt="exchage" src={image} />
              <div className="twitBtn">
                <span>{t('twitToUrge')}</span>
                <div className="divisorTwitBtn" />
                <span>
                  <img
                    alt="message"
                    className="messageIcon"
                    src="/images/evaMessage.svg"
                  />
                  1,500
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.membersSection}>
        <span className={classes.generalTitle}>{t('participating')}</span>
        {/* remove this map when add BE integration */}
        <div className={classes.bpsBox}>
          {membersArray.map((member, index) => (
            <div key={`${member.name}-${index}`} className="boxExampleMembers">
              <span className="memberLabel">{member.name}</span>
              <span className={clsx('memberLabel', 'memberAmount')}>
                {member.amount}
              </span>
            </div>
          ))}
        </div>
        <Button className={classes.optionBtn} variant="contained">
          {t('delegateVote')}
        </Button>
      </div>
      <div className={classes.patnerSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          {t('supportPartner')}
        </span>
        {/* remove this map when add BE integration */}
        <div className={classes.bpsBox}>
          {partnersArray.map((partner, index) => (
            <div key={`partner-${index}`} className="boxExamplePartner">
              {partner.isValid && <img alt="exchage" src={partner.src} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeFrontLayer
