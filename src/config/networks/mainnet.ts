import EtherLogo from 'src/config/assets/token_eth.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'
import { ETHGASSTATION_API_KEY } from 'src/utils/constants'
import { env } from 'src/utils/env'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: env('REACT_APP_CLIENT_GATEWAY_URL', 'https://safe-client.mainnet.staging.gnosisdev.com/v1'),
  txServiceUrl: env('REACT_APP_TX_SERVICE_URL', 'https://safe-transaction.mainnet.staging.gnosisdev.com/api/v1'),
  safeUrl: env('REACT_APP_SAFE_URL', 'https://gnosis-safe.io/app'),
  safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://safe-apps.dev.gnosisdev.com'),
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: env('REACT_APP_RPC_SERVICE_URL', 'https://mainnet.infura.io:443/v3'),
  networkExplorerName: 'Etherscan',
  networkExplorerUrl: 'https://etherscan.io',
  networkExplorerApiUrl: 'https://api.etherscan.io/api',
}

const mainnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://safe-apps.staging.gnosisdev.com'),
    },
    production: {
      ...baseConfig,
      clientGatewayUrl: env('REACT_APP_CLIENT_GATEWAY_URL', 'https://safe-client.mainnet.gnosis.io/v1'),
      txServiceUrl: env('REACT_APP_TX_SERVICE_URL', 'https://safe-transaction.mainnet.gnosis.io/api/v1'),
      safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://apps.gnosis-safe.io'),
    },
  },
  network: {
    id: ETHEREUM_NETWORK.MAINNET,
    backgroundColor: '#E8E7E6',
    textColor: '#001428',
    label: 'Mainnet',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      logoUri: EtherLogo,
    },
  },
}

console.log(mainnet)

export default mainnet
