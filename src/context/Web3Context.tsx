// ** React Imports
import { FC, ReactNode } from 'react'

// ** Query Imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// ** Wagmi && Connectkit Imports
import { WagmiProvider } from 'wagmi'
import { ConnectKitProvider } from 'connectkit'

// ** Config Imports
import { config } from 'src/configs/web3'

interface Web3ProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const Web3Provider: FC<Web3ProviderProps> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme='midnight'>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
