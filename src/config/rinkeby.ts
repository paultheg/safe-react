import EtherLogo from 'src/assets/icons/icon_etherTokens.svg'
import { NetworkConfig } from 'src/config/network'
import { ETHEREUM_NETWORK } from 'src/logic/wallets/getWeb3'

const baseConfig = {
  TX_SERVICE_HOST: 'https://safe-transaction.staging.gnosisdev.com/api/v1/',
  SAFE_APPS_URL: 'https://safe-apps.dev.gnosisdev.com/',
  GAS_PRICE_ORACLE_URL: 'https://ethgasstation.info/json/ethgasAPI.json',
  RPC_SERVICE_URL: 'https://rinkeby.infura.io:443/v3/',
  NETWORK_EXPLORER_URL: 'https://rinkeby.etherscan.io/',
  NETWORK_EXPLORER_API_URL: 'https://api-rinkeby.etherscan.io/api'
}

const rinkeby: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      SAFE_APPS_URL: 'https://safe-apps.staging.gnosisdev.com',
    },
    production: {
      ...baseConfig,
      TX_SERVICE_HOST: 'https://safe-transaction.rinkeby.gnosis.io/api/v1/',
      SAFE_APPS_URL: 'https://apps.gnosis-safe.io/',
    },
  },
  network: {
    ID: ETHEREUM_NETWORK.RINKEBY,
    COLOR: '#E8673C',
    LABEL: 'Rinkeby',
    NATIVE_COIN: {
      address: '0x000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      logoUri: EtherLogo,
    },
  }
}

export default rinkeby