import xDaiLogo from 'src/config/assets/token_xdai.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, FEATURES, NetworkConfig, WALLETS } from 'src/config/networks/network.d'
import { env } from 'src/utils/env'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: env('REACT_APP_CLIENT_GATEWAY_URL', 'https://safe-client.xdai.gnosis.io/v1'),
  txServiceUrl: env('REACT_APP_TX_SERVICE_URL', 'https://safe-transaction.xdai.gnosis.io/api/v1'),
  safeUrl: env('REACT_APP_SAFE_URL', 'https://xdai.gnosis-safe.io/app'),
  safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://safe-apps-xdai.staging.gnosisdev.com'),
  gasPrice: 1e9,
  rpcServiceUrl: env('REACT_APP_RPC_SERVICE_URL', 'https://dai.poa.network/'),
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://blockscout.com/poa/xdai',
  networkExplorerApiUrl: 'https://blockscout.com/poa/xdai/api',
}

const xDai: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
      safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://apps-xdai.gnosis-safe.io'),
    },
  },
  network: {
    id: ETHEREUM_NETWORK.XDAI,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'xDai',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'xDai',
      symbol: 'xDai',
      decimals: 18,
      logoUri: xDaiLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default xDai
