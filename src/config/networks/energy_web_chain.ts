import EwcLogo from 'src/config/assets/token_ewc.svg'
import { EnvironmentSettings, ETHEREUM_NETWORK, NetworkConfig, WALLETS } from 'src/config/networks/network.d'
import { env } from 'src/utils/env'

// @todo (agustin) we need to use fixed gasPrice because the oracle is not working right now and it's returning 0
// once the oracle is fixed we need to remove the fixed value
const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: env('REACT_APP_CLIENT_GATEWAY_URL', 'https://safe-client.ewc.gnosis.io/v1'),
  txServiceUrl: env('REACT_APP_TX_SERVICE_URL', 'https://safe-transaction.ewc.gnosis.io/api/v1'),
  safeUrl: env('REACT_APP_SAFE_URL', 'https://ewc.gnosis-safe.io/app'),
  safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://safe-apps-ewc.staging.gnosisdev.com'),
  gasPriceOracle: {
    url: 'https://station.energyweb.org',
    gasParameter: 'standard',
  },
  gasPrice: 1e6,
  rpcServiceUrl: env('REACT_APP_RPC_SERVICE_URL', 'https://rpc.energyweb.org'),
  networkExplorerName: 'Energy web explorer',
  networkExplorerUrl: 'https://explorer.energyweb.org',
  networkExplorerApiUrl: 'https://explorer.energyweb.org/api',
}

const mainnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
      safeAppsUrl: env('REACT_APP_SAFE_APPS_URL', 'https://apps-ewc.gnosis-safe.io'),
    },
  },
  network: {
    id: ETHEREUM_NETWORK.ENERGY_WEB_CHAIN,
    backgroundColor: '#A566FF',
    textColor: '#ffffff',
    label: 'EWC',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Energy web token',
      symbol: 'EWT',
      decimals: 18,
      logoUri: EwcLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.PORTIS,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
}

export default mainnet
