import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import { useQuery, useLazyQuery } from '@apollo/client'
import clsx from 'clsx'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import TitlePage from 'components/PageTitle'
import { partnersArray } from 'utils/mockData'
import {
  myvoteeosUtil,
  axiosUtil,
  charactersUtil,
  useImperativeQuery
} from 'utils'
import { useSharedState } from 'context/state.context'
import { mainConfig } from 'config'
import { GET_VOTERS_QUERY, GET_EXCHANGES_QUERY, FILTER_BP_QUERY } from 'gql'

import styles from './styles'

const useStyles = makeStyles(styles)

const HomeFrontLayer = () => {
  const classes = useStyles()
  const { t } = useTranslation('homePage')
  const [loadVoters, { loading = true, data: dataGetVoters = {} }] =
    useLazyQuery(GET_VOTERS_QUERY)
  const { data: exchangesData } = useQuery(GET_EXCHANGES_QUERY, {
    fetchPolicy: 'network-only'
  })
  const filterBp = useImperativeQuery(FILTER_BP_QUERY)
  const [bpsData, setBpsData] = useState([])
  const [state, { showMessage }] = useSharedState()
  const [totalProxyVotes, setTotalProxyVotes] = useState(0)
  const [proxyVoters, setProxyVoters] = useState([])
  const [exchanges, setExchanges] = useState([])
  const [pagOption, setPagOption] = useState({
    page: 1,
    limit: 15,
    totalPages: 0
  })

  const joinFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLScLQHUtZrx8JMdVhk32x0rIEh78t4HkdplxcbTG0f7UoTRR7w/viewform'

  const joinAlliance = () => {
    window.open(joinFormUrl, '_blank')
  }

  const delegateVote = async () => {
    if (!state.user) {
      showMessage({
        type: 'warning',
        content: <span>{t('loginWarning')}</span>
      })

      return
    }

    const transaction = {
      actions: [
        {
          account: 'eosio',
          name: 'voteproducer',
          authorization: [
            {
              actor: state.user?.accountName,
              permission: 'active'
            }
          ],
          data: {
            voter: state.user?.accountName,
            proxy: mainConfig.myvoteeosAccount,
            producers: []
          }
        }
      ]
    }

    try {
      const { transactionId } = await state.ual.activeUser.signTransaction(
        transaction,
        {
          broadcast: true
        }
      )

      showMessage({
        type: 'success',
        content: (
          <a
            href={`${mainConfig.blockExplorer}/transaction/${transactionId}`}
            target="_blank"
            rel="noreferrer"
          >
            {`${t('success')} ${charactersUtil.getLastCharacters(
              transactionId
            )}`}
          </a>
        )
      })
    } catch (error) {
      showMessage({
        type: 'error',
        content: <span>{error.message}</span>
      })
    }
  }

  const handleOnPageChange = (_, page) => {
    setPagOption((prev) => ({
      ...prev,
      page
    }))
  }

  useEffect(() => {
    if (!dataGetVoters) return

    const { voters = [], pagination } = dataGetVoters

    setProxyVoters(voters)
    setTotalProxyVotes(pagination?.aggregate?.count)
    setPagOption((prev) => ({
      ...prev,
      totalPages: Math.ceil(pagination?.aggregate?.count / pagOption.limit)
    }))
  }, [dataGetVoters])

  useEffect(() => {
    if (!exchangesData) return

    setExchanges(exchangesData.exchange)
  }, [exchangesData])

  useEffect(() => {
    loadVoters({
      variables: {
        offset: (pagOption.page - 1) * pagOption.limit,
        limit: pagOption.limit
      }
    })
  }, [pagOption.page, pagOption.limit])

  const loadBpJson = async (bpInfo) => {
    try {
      return await axiosUtil.get(
        `${!bpInfo.url.includes('http') ? 'https://' : ''}${bpInfo.url}/bp.json`
      )
    } catch (err) {
      console.log(
        `Fail to fetch for ${bpInfo.owner} caused by CORS, trying to solve locally`
      )
    }

    try {
      const {
        data: { bp }
      } = await filterBp({ account: bpInfo.owner })

      if (!bp.length) return

      const { image_url: imageUrl, website } = bp[0]

      return {
        data: {
          org: {
            branding: {
              logo_256: imageUrl
            },
            website
          }
        }
      }
    } catch (err) {
      console.log('ERROR', err)
      return null
    }
  }

  useEffect(() => {
    const loadBps = async () => {
      const bpNames = await myvoteeosUtil.getBps()
      const bps = (
        await Promise.resolve(
          bpNames.reduce(async (previous, current) => {
            const resolvedPrevious = await Promise.resolve(previous)
            try {
              const bpInfo = await myvoteeosUtil.getBpInfo(current)
              const bpjson = await loadBpJson(bpInfo)

              if (!bpjson) return resolvedPrevious

              return [...resolvedPrevious, bpjson]
            } catch (err) {
              console.log(err)
              return resolvedPrevious
            }
          }, [])
        )
      ).map(({ data }) => data)

      setBpsData(bps)
    }

    try {
      loadBps()
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    if (loading) return

    loadVoters({
      variables: {
        offset: (pagOption.page - 1) * pagOption.limit,
        limit: pagOption.limit
      }
    })
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
        <span className={classes.headerHashtag}>{t('myVoteEos')}</span>
        <span className={classes.headerMessage}>{t('secondaryText')}</span>
        <div className={classes.headerOptionsBtns}>
          <div className="boxGroup">
            <span className={clsx('textLabel', classes.marginExtra)}>
              {t('homeText.text1')}
            </span>
            <a
              className={clsx(classes.optionBtn, classes.aBtn)}
              href={joinFormUrl}
              target="_blank"
            >
              {t('joinAlliance')}
            </a>
          </div>
          <div className="boxGroup">
            <span className="textLabel">{t('homeText.text2')}</span>
            <a className={classes.unableUnderline} href="#exchanges">
              <Button className={classes.optionBtn} variant="contained">
                {t('tellExchange')}
              </Button>
            </a>
          </div>
          <div className="boxGroup">
            <span className={clsx('textLabel', classes.marginExtra)}>
              {t('homeText.text3')}
            </span>
            <Button
              className={classes.optionBtn}
              variant="contained"
              onClick={delegateVote}
            >
              {t('delegateVote')}
            </Button>
          </div>
        </div>
        <span className={classes.titleHeader}>{t('joinMovement')}</span>
        <div className={classes.headerOptionsInfo}>
          <div className="boxGroup">
            <span className="coloredLabel">{bpsData.length}</span>
            <span className="infoLabel"> {t('homeText.text4')}</span>
          </div>
          <div className="boxGroup">
            <span className="coloredLabel">
              {exchanges.find(
                ({ t_username: tUsername }) =>
                  tUsername === mainConfig.twitterAccount
              )?.total_mention || 0}
            </span>
            <span className="infoLabel"> {t('homeText.text5')}</span>
          </div>
          <div className="boxGroup">
            <span className="coloredLabel">{totalProxyVotes}</span>
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
          <span className="aboutTitle">{t('myVoteProxy')}</span>
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
          <div className={classes.coreInfo}>
            <span className={clsx(classes.coreInfoLabel, 'criteriaLabel')}>
              {t('homeText.text19')}
            </span>
          </div>
        </div>
        <Button
          className={classes.optionBtn}
          variant="contained"
          onClick={joinAlliance}
        >
          {t('joinAlliance')}
        </Button>
      </div>

      <div id="bps" className={classes.bpsSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          {t('joinTitle')}
        </span>
        <div className={classes.bpsBox}>
          {bpsData.map(({ org: { branding, website } }, index) => (
            <a key={`img-${index}`} href={website}>
              <img
                src={branding.logo_256}
                className="boxExampleBps"
                alt="BP logo"
              />
            </a>
          ))}
        </div>
      </div>

      <div id="exchanges" className={classes.exchageSection}>
        <span
          className={clsx(classes.generalTitle, classes.secondaryColorTitle)}
        >
          {t('exchangeStatus')}
        </span>
        <div className={clsx(classes.bpsBox, classes.exchangeBox)}>
          {exchanges.map(
            (
              {
                t_username: tUsername,
                image_url: img,
                total_mention: mentions
              },
              index
            ) => {
              if (tUsername === mainConfig.twitterAccount) return <></>

              return (
                <div key={`img-${index}`} className="exchangeBox">
                  <img alt="exchage" src={img} />
                  <div className="twitBtn">
                    <a
                      className={classes.unableUnderline}
                      target="_blank"
                      href={`https://twitter.com/intent/tweet?text=${t(
                        'twitterContent',
                        { exchange: tUsername }
                      )}`}
                    >
                      <span>{t('twitToUrge')}</span>
                    </a>
                    <div className="divisorTwitBtn" />
                    <span>
                      <img
                        alt="message"
                        className="messageIcon"
                        src="/images/evaMessage.svg"
                      />
                      {mentions}
                    </span>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
      <div id="holders" className={classes.membersSection}>
        <span className={classes.generalTitle}>{t('participating')}</span>
        <div className={classes.bpsBox}>
          {proxyVoters.map(({ voter, balance }, index) => (
            <div key={`${voter}-${index}`} className="boxExampleMembers">
              <span className="memberLabel">{voter}</span>
              <span className={clsx('memberLabel', 'memberAmount')}>
                {balance}
              </span>
            </div>
          ))}
        </div>
        <Stack spacing={2} className={classes.paginationWrapper}>
          <Pagination
            count={pagOption.totalPages}
            siblingCount={0}
            className={classes.pagination}
            onChange={handleOnPageChange}
          />
        </Stack>

        <Button
          className={classes.optionBtn}
          variant="contained"
          onClick={delegateVote}
        >
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
              {partner.isValid && <img alt="Partner" src={partner.src} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeFrontLayer
