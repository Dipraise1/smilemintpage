// pages/index.js
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  max-width: 600px;
`;

const MintButton = styled.a`
  background: linear-gradient(45deg, #f3ec78, #af4261);
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export default function Home() {
  return (
    <Container>
      <Title>Welcome to Smile NFT Minting</Title>
      <Description>
        Mint your exclusive Smilet NFT on the Solana blockchain. Click the button below to start minting!
      </Description>
      <Link href="/mint" passHref>
        <MintButton>Mint Your NFT</MintButton>
      </Link>
    </Container>
  );
}
