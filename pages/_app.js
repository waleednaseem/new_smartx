// import react, { useEffect } from 'react'
// import '../styles/globals.css'
// import store from '../redux/Store'
// import { Provider } from 'react-redux'
// import '@rainbow-me/rainbowkit/styles.css';
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   lightTheme,
//   connectorsForWallets
// } from '@rainbow-me/rainbowkit';
// import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi';
// import { bsc,bscTestnet,sepolia } from 'wagmi/chains';
// import { publicProvider } from 'wagmi/providers/public';
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';

// const { chains, publicClient,webSocketPublicClient } = configureChains(
//   [
//     bsc,
//     bscTestnet,
//     sepolia,
//     mainnet
//   ],
//   [
//     publicProvider()
//   ]
// );

// const projectId = '324304fba50b4e52dd420b48d2404f07';

// const { wallets } = getDefaultWallets({
//   appName: 'My RainbowKit App',
//   projectId,
//   chains,
// });

// const connectors = connectorsForWallets([
//   wallets,
//   {
//     groupName: 'Other',
//     wallets: [
//       argentWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       ledgerWallet({ projectId, chains }),
//     ],
//   },
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     const use = async () => {
//       (await import('tw-elements')).default;
//     };
//     use();
//   }, []);

//   if (!connectors) {
//     // The connectors object is not defined, so we cannot use it.
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <WagmiConfig config={wagmiConfig}>
//         <RainbowKitProvider theme={lightTheme({
//           accentColor: 'primary',
//           accentColorForeground: 'white',
//           borderRadius: 'medium',
//           // fontStack: 'system',
//         })} chains={chains}>
//           <Component {...pageProps} />
//         </RainbowKitProvider>
//       </WagmiConfig>
//     </Provider>
//   );
// }

// export default MyApp;

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  metaMaskWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  bsc, sepolia
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import store from '../redux/Store'
import { Provider } from 'react-redux'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    bsc,
    sepolia
  ],
  [publicProvider()]
);

const projectId = '324304fba50b4e52dd420b48d2404f07';

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </Provider>
  );
}

export default MyApp;

