// import { Scatter } from 'ual-scatter'
import { Ledger } from 'ual-ledger'
import { Lynx } from 'ual-lynx'
import { TokenPocket } from 'ual-token-pocket'
import { MeetOne } from 'ual-meetone'
// import { Wombat } from 'ual-wombat'
import { Anchor } from 'ual-anchor'

const appName = process.env.REACT_APP_UAL_APP_NAME || 'my-vote-eos'
const network = {
  chainId:
    process.env.REACT_APP_UAL_CHAIN_ID ||
    'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  rpcEndpoints: [
    {
      blockchain: 'eos',
      protocol: process.env.REACT_APP_UAL_API_PROTOCOL || 'https',
      host: process.env.REACT_APP_UAL_API_HOST || 'eos.greymass.com',
      port: parseInt(process.env.REACT_APP_UAL_API_PORT || '443')
    }
  ]
}
const authenticators = [
  new Lynx([network]),
  new Ledger([network]),
  // new Scatter([network], { appName }),
  // new Wombat([network], { appName }),
  new TokenPocket([network]),
  new MeetOne([network.chainId]),
  new Anchor([network], { appName })
]

export const ualConfig = {
  appName,
  network,
  authenticators
}
