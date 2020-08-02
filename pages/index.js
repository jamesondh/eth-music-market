// UI elements
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default function Home() {
  return (
    <main>
      <Jumbotron className="text-center bg-transparent pt-1">
        <img src="iconshock/money_bag.svg" alt="Money bag" width="140px" className="mb-3"/>
        <h1 style={{letterSpacing: "1px"}}>Sell your music on the decentralized web and keep 100% of the cut.</h1>
        <br/>
        <p><b>ETH Music Market</b> is a simple but robust{' '}
          <OverlayTrigger overlay={
            <Tooltip>Decentralized application (DApp): An application with a distributed or peer-to-peer backend, e.g. BitTorrent, Bitcoin, Ethereum</Tooltip>
          }>
            <span className="d-inline-block">DApp<sup>[?]</sup></span>
          </OverlayTrigger> for selling and buying audio files for cryptocurrencies using the <a href="https://ethereum.org/en/">Ethereum</a> network and <a href="https://ipfs.io/">IPFS</a>. All your files are hosted on a peer-to-peer database and all payments go straight to your wallet, so you are in complete control of your data and funds. No sign-up necessary—all you need is a digital wallet to sell or buy songs.</p>
        <br/>
        <a href="/about"><Button variant="primary">Read more</Button></a>{' '}
        <a href="/dashboard"><Button variant="success">Try it out</Button></a>
      </Jumbotron>
    </main>
  )
}
