import EtherLogo from 'src/config/assets/token_eth.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig, WALLETS } from 'src/config/networks/network.d'
import { ETHGASSTATION_API_KEY } from 'src/utils/constants'
import { env } from 'src/utils/env'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: env('CLIENT_GATEWAY_URL', 'https://safe-client.rinkeby.staging.gnosisdev.com/v1'),
  txServiceUrl: env('TX_SERVICE_URL', 'https://safe-transaction.rinkeby.staging.gnosisdev.com/api/v1'),
  safeUrl: env('SAFE_URL', 'https://rinkeby.gnosis-safe.io/app'),
  safeAppsUrl: env('SAFE_APPS_URL', 'https://safe-apps.dev.gnosisdev.com'),
  gasPriceOracle: {
    url: `https://ethgasstation.info/json/ethgasAPI.json?api-key=${ETHGASSTATION_API_KEY}`,
    gasParameter: 'average',
  },
  rpcServiceUrl: env('RPC_SERVICE_URL', 'https://rinkeby.infura.io:443/v3'),
  networkExplorerName: 'Etherscan',
  networkExplorerUrl: 'https://rinkeby.etherscan.io',
  networkExplorerApiUrl: 'https://api-rinkeby.etherscan.io/api',
}

const rinkeby: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
      safeAppsUrl: env('SAFE_APPS_URL', 'https://safe-apps.staging.gnosisdev.com'),
    },
    production: {
      ...baseConfig,
      clientGatewayUrl: env('CLIENT_GATEWAY_URL', 'https://safe-client.rinkeby.gnosis.io/v1'),
      txServiceUrl: env('TX_SERVICE_URL', 'https://safe-transaction.rinkeby.gnosis.io/api/v1'),
      safeAppsUrl: env('SAFE_APPS_URL', 'https://apps.gnosis-safe.io'),
    },
  },
  network: {
    id: ETHEREUM_NETWORK.RINKEBY,
    backgroundColor: '#E8673C',
    textColor: '#ffffff',
    label: 'Rinkeby',
    isTestNet: true,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      logoUri: EtherLogo,
    },
  },
  disabledWallets: [WALLETS.FORTMATIC],
}

export default rinkeby
