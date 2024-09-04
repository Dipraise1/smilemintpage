// utils/wallet.js
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

// Create a connection to the Solana cluster
const network = WalletAdapterNetwork.Mainnet;
const connection = new Connection(clusterApiUrl(network), 'confirmed');

// Create an instance of the Phantom wallet adapter
const wallet = new PhantomWalletAdapter();

export { connection, wallet, PublicKey };
