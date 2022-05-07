import { eosApi } from './eosapi'
import { mainConfig } from '../config'

const getBps = async () => {
  const { rows } = await eosApi.getTableRows({
    code: mainConfig.myvoteeosAccount,
    scope: mainConfig.myvoteeosAccount,
    table: 'producer',
    json: true,
    limit: 30
  })

  return rows.length > 0 ? rows.map((bp) => bp.producer) : []
}

const getBpInfo = async (bp) => {
  const { rows } = await eosApi.getTableRows({
    code: 'eosio',
    scope: 'eosio',
    table: 'producers',
    json: true,
    lower_bound: bp,
    upper_bound: bp
  })

  return rows.length ? { owner: rows[0].owner, url: rows[0].url } : null
}

export const myvoteeosUtil = { getBps, getBpInfo }
