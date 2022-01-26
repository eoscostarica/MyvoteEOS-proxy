import React from 'react'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import TitlePage from 'components/PageTitle'
import { mockBps, BPSArray, membersArray, partnersArray } from 'utils/mockData'

import styles from './styles'

const useStyles = makeStyles(styles)

const HomeFrontLayer = () => {
  const classes = useStyles()
  const { t } = useTranslation('translations')

  return (
    <div className={classes.HomeFrontLayerRoot}>
      <TitlePage title={t('htmlTitle')} />
      <div className={classes.headerSection}>
        <span className={classes.titleHeader}>{t('htmlTitle')}</span>
        <img
          className={classes.headerLogo}
          alt="Logo"
          src="/images/logo-dark.png"
        />
        <span className={classes.headerMessage}>{t('secondaryText')}</span>
        <span className={classes.headerHashtag}>{t('noVoteBuy')}</span>
        <Button className={classes.headerDownloadBtn}>
          Download intro PDF
        </Button>

        <div className={classes.headerOptionsBtns}>
          <div className="boxGroup">
            <span className={clsx('textLabel', classes.marginExtra)}>
              Are you a BP?
            </span>
            <Button className={classes.optionBtn} variant="contained">
              Join the Alliance
            </Button>
          </div>
          <div className="boxGroup">
            <span className="textLabel">
              Do you keep your EOS on centralized exhanges?
            </span>
            <Button className={classes.optionBtn} variant="contained">
              Tell your exchange
            </Button>
          </div>
          <div className="boxGroup">
            <span className={clsx('textLabel', classes.marginExtra)}>
              Are you an on-chain account holder?
            </span>
            <Button className={classes.optionBtn} variant="contained">
              Delegate your vote
            </Button>
          </div>
        </div>

        <span className={classes.titleHeader}>Join the Movement</span>

        <div className={classes.headerOptionsInfo}>
          <div className="boxGroup">
            <span className="coloredLabel">17</span>
            <span className="infoLabel">BPs joined the alliance</span>
          </div>
          <div className="boxGroup">
            <span className="coloredLabel">12,246</span>
            <span className="infoLabel">Number of Hashtags</span>
          </div>
          <div className="boxGroup">
            <span className="coloredLabel">152</span>
            <span className="infoLabel">Holders delegating their vote</span>
          </div>
        </div>

        <div className={classes.joinBox}>
          <TextField
            className="textField"
            placeholder="If you support #NoVoteBuy enter your email and sign up here"
            variant="outlined"
          />
          <Button className="joinBtn" variant="contained">
            Join
          </Button>
        </div>
      </div>
      <div className={classes.aboutSection}>
        <div className="secondaryBoxColor">
          <span className="aboutTitle">What is Soul of EOS proxy</span>
          <span className="aboutInfo">
            The EOS based proxy facilitates the transition into a truly
            democratic based chain that is free from Pareto control by voting
            for BP’s that do not engage with direct vote rebate.
          </span>
        </div>

        <span className="aboutTitle">Why?</span>
        <span className={clsx('infoLabel', classes.extraMarginBttom)}>
          EOS came with the vision of becoming a governed blockchain.
        </span>
        <span className={clsx('infoLabel', classes.extraMarginBttom)}>
          But without no-vote-buy rule, DPoS isn’t much different than all PoW
          or PoS in which the consensus is captured by the pareto distribution.
        </span>
        <span className={clsx('infoLabel', classes.extraMarginBttom)}>
          EOS is on the verge of becoming the only blockchain that is free from
          the grip of pareto distribution with fractal democracy.
        </span>
        <span className={clsx('infoLabel', classes.extraMarginBttom)}>
          But it needs support from the BPs.
        </span>

        <div className="secondaryBoxColor">
          <span className="aboutTitle">Vision</span>
          <span className="infoLabel">Holders delegating their vote</span>
        </div>

        <span className={clsx('aboutTitle', classes.coreValueTitle)}>
          Core Values
        </span>

        <div className={classes.valuesBox}>
          <div className="valuesWrapper">
            <div className="coreTitle">
              <img alt="legitimacy" src="/images/legitimacy.svg" />
              <span className="coreTitleLabel">Legitimacy</span>
            </div>
            <div className={classes.coreInfo}>
              <span className={classes.coreInfoLabel}>
                Strengthen the legitimacy of the consensus by unsold votes
              </span>
            </div>
          </div>
          <div className="valuesWrapper">
            <div className="coreTitle">
              <img alt="accountability" src="/images/accountability.svg" />
              <span className="coreTitleLabel">Accountability</span>
            </div>
            <div className={classes.coreInfo}>
              <span className={classes.coreInfoLabel}>
                Hold BPs accountable with regular integrity check up calls and
                reports
              </span>
            </div>
          </div>
          <div className="valuesWrapper">
            <div className="coreTitle">
              <img alt="interest alignment" src="/images/interest.svg" />
              <span className="coreTitleLabel">Interest Alignment</span>
            </div>
            <div className={classes.coreInfo}>
              <span className={classes.coreInfoLabel}>
                Heal the governance with greater alignment of interests
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bpsSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          BPs joining #novotebuy Alliance
        </span>
        {/* remove this map when add BE integration */}
        <div className={classes.bpsBox}>
          {BPSArray.map((i, index) => (
            <div key={`${i}-${index}`} className="boxExampleBps" />
          ))}
        </div>
      </div>
      <div className={classes.bpsCriteria}>
        <span className={classes.generalTitle}>BP Selection Criteria</span>
        <span className="subTitleCriteria">Eligibility</span>

        <div className={classes.valuesBox}>
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              Disclose existing vote rebate relationships and provide reasonable
              cessation plan
            </span>
          </div>
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              Have a real person's presence publicly available for regular check
              up calls and be held accountable
            </span>
          </div>
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              Actively engage with the community to find a suitable way to align
              interest of different players in the community via allocating
              funds, etc.
            </span>
          </div>
        </div>
        <Button className={classes.optionBtn} variant="contained">
          Join the Alliance
        </Button>
      </div>
      <div className={classes.exchageSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          Exchange Status
        </span>
        {/* remove this map when add BE integration */}
        <div className={clsx(classes.bpsBox, classes.exchangeBox)}>
          {mockBps.map((image, index) => (
            <div key={`img-${index}`} className="exchangeBox">
              <img alt="exchage" src={image} />
              <div className="twitBtn">
                <span>Tweet to urge them</span>
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
        <span className={classes.generalTitle}>Participating EOS members</span>
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
          Delegate your vote
        </Button>
      </div>
      <div className={classes.patnerSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          Supporting Partners
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
