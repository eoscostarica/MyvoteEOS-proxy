import { Scatter } from 'ual-scatter'
import { Ledger } from 'ual-ledger'
import { Lynx } from 'ual-lynx'
import { TokenPocket } from 'ual-token-pocket'
import { MeetOne } from 'ual-meetone'
import { Anchor } from 'ual-anchor'
import { Wombat } from 'ual-wombat'

const appName = process.env.REACT_APP_UAL_APP_NAME || 'my-vote-eos'
const network = {
  chainId:
    process.env.REACT_APP_UAL_CHAIN_ID ||
    '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
  rpcEndpoints: [
    {
      blockchain: 'eos',
      protocol: process.env.REACT_APP_UAL_API_PROTOCOL || 'https',
      host: process.env.REACT_APP_UAL_API_HOST || 'jungle.eosio.cr',
      port: parseInt(process.env.REACT_APP_UAL_API_PORT || '443')
    }
  ]
}
const authenticators = [
  new Lynx([network]),
  new Ledger([network]),
  new Scatter([network], { appName }),
  new Wombat([network], { appName }),
  new TokenPocket([network]),
  new MeetOne([network.chainId]),
  new Anchor([network], { appName })
]

export const ualConfig = {
  appName,
  network,
  authenticators
}
