import EtherLogo from 'src/config/assets/token_eth.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'
import { env } from 'src/utils/env'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: env('REACT_APP_CLIENT_GATEWAY_URL', 'http://localhost:8001/v1'),
  txServiceUrl: env('REACT_APP_TX_SERVICE_URL', 'http://localhost:8000/api/v1'),
  relayApiUrl: env('REACT_APP_RELAY_API_URL', 'https://safe-relay.staging.gnosisdev.com/api/v1'),
  safeUrl: env('REACT_APP_SAFE_URL', 'http://localhost:3000/app'),
  safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'http://localhost:3002'),
  gasPriceOracle: {
    url: 'https://ethgasstation.info/json/ethgasAPI.json',
    gasParameter: 'average',
  },
  rpcServiceUrl: env('REACT_APP_RPC_SERVICE_URL', 'http://localhost:4447'),
  networkExplorerName: 'Etherscan',
  networkExplorerUrl: 'https://rinkeby.etherscan.io',
  networkExplorerApiUrl: 'https://api-rinkeby.etherscan.io/api',
}

const local: NetworkConfig = {
  environment: {
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.LOCAL,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'LocalRPC',
    isTestNet: true,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      logoUri: EtherLogo,
    },
  },
}

export default local
