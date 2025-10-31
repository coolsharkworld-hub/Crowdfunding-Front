// ** Web3 packages Import
import { http, createConfig } from 'wagmi'
import { bscTestnet } from 'wagmi/chains'
import { getDefaultConfig } from 'connectkit'

export const config = createConfig(
  getDefaultConfig({
    chains: [bscTestnet],
    transports: {
      [bscTestnet.id]: http()
    },
    walletConnectProjectId: 'e816c1918535a578a18dfe1953e9e49b',
    appName: 'RWA'
  })
)
