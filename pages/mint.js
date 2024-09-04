import React, { useEffect, useState } from 'react';
import { wallet, connection, PublicKey } from '../utils/wallet';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const MintContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
`;

const MintButton = styled(animated.button)`
  background: linear-gradient(45deg, #f3ec78, #af4261);
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

const MintedInfo = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #00ff00;
  background-color: #333333;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const AnimatedImage = styled(animated.img)`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 50%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
`;

export default function Mint() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [minting, setMinting] = useState(false);
  const [mintedCount, setMintedCount] = useState(0);

  const connectWallet = async () => {
    try {
      await wallet.connect();
      setWalletConnected(true);
    } catch (error) {
      console.error('Wallet connection failed', error);
    }
  };

  const mintNFT = async () => {
    setMinting(true);
    // Simulate minting logic with a timeout for this example
    setTimeout(() => {
      setMintedCount((prevCount) => prevCount + 1);
      setMinting(false);
    }, 2000);
  };

  const springProps = useSpring({
    transform: walletConnected ? 'scale(1)' : 'scale(0.8)',
    opacity: walletConnected ? 1 : 0,
  });

  const imageSpringProps = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 2000 },
    reset: true,
  });

  return (
    <MintContainer>
      <AnimatedImage
        src="../assets/Smiley NFT 1@4x.png" // Replace with your animated image path
        alt="Smilet NFT"
        style={imageSpringProps}
      />
      <h1>Mint Your Smile NFT</h1>
      {!walletConnected ? (
        <MintButton style={springProps} onClick={connectWallet}>
          Connect Wallet
        </MintButton>
      ) : (
        <MintButton style={springProps} onClick={mintNFT} disabled={minting}>
          {minting ? 'Minting...' : 'Mint Now'}
        </MintButton>
      )}
      <MintedInfo>
        {mintedCount} / 100 NFTs Minted
      </MintedInfo>
    </MintContainer>
  );
}
