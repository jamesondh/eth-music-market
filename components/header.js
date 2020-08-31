import React, { useState, useEffect } from 'react';

// UI elements
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import ProfileHover from 'profile-hover';

import Onboard from 'bnc-onboard';
import Web3 from 'web3';
import { apiKeys } from "../api-keys"
// import dynamic from 'next/dynamic'

// Store instantiated web3
let web3;

// Initialize Onboard
// const Onboard = dynamic(
//   () => import('bnc-onboard'),
//   { ssr: false }
// )


export default function Header() {
  
  const [onboard, setOnboard] = useState(null)
  
  useEffect(() => {
//     const onboard = ;
    setOnboard(Onboard({
      dappId: apiKeys.blocknativeKey,
      networkId: 3,
      subscriptions: {
        wallet: wallet => {
          // Instantiate web3 when the user has selected a wallet
          web3 = new Web3(wallet.provider);
          console.log(`${wallet.name} connected!`);
        }
      }
    }))
  });
  
  let [addr, updateAddr] = useState(null);

  async function walletLogin() {

    // Connect to Onboard
    await onboard.walletSelect();
//     await onboard.walletCheck();

//     // Get account
//     const accounts = await web3.eth.getAccounts();
//     const address = accounts[0];
//     updateAddr(address);
  }  
  return (
    <header data-testid="header">
      <Navbar expand="lg" className="my-3">
      <Container>
        <Navbar.Brand>
          <a className="text-body mr-4" href="/">ETH Music Market</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <a className="text-body mr-3" href="/about">About</a>
            <a className="text-body mr-3" href="/dashboard">Dashboard</a>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="primary" onClick={walletLogin}>Connect to wallet</Button><br/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </header>
  )
}