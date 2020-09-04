// UI elements
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function About() {
  return (
    <main>
      <Jumbotron className="text-center bg-transparent">
      <Row>
	    	<Col md={4}>
	    		<img src="iconshock/collaboration.svg" alt="Decentralized" width="80px" className="mb-3"/>
	    		<h3>Decentralized</h3>
	    		<p>All audio files, cover art, and metadata is uploaded to <a href="https://ipfs.io/">IPFS</a>, a peer-to-peer database where data is distributed and censorship-resistant. This application does not host any user-uploaded files and has zero ownership of user data—it merely assists in uploading and decoding data and metadata on the decentralized web.</p>
	    	</Col>
	    	<Col md={4}>
	    		<img src="iconshock/wallet.svg" alt="Simple & UX friendly" width="80px" className="mb-3"/>
	    		<h3>Simple & UX friendly</h3>
	    		<p>No sign-ups; the only requirements are a digital wallet (like <a href="https://metamask.io/">MetaMask</a> or <a href="https://www.argent.xyz/">Argent</a>) and some Ether (bought through a centralized exchange like <a href="https://www.coinbase.com">Coinbase</a> or <a href="https://www.kraken.com/">Kraken</a> or a{' '}
	    			<OverlayTrigger overlay={
	    			<Tooltip>Decentralized exchange (DEX): An exchange based on peer-to-peer technologies or smart contracts. Others include Uniswap, 1inch</Tooltip>
	    			}>
	    				<span className="d-inline-block">DEX<sup>[?]</sup></span>
	    			</OverlayTrigger> like <a href="https://kyberswap.com/swap/">Kyber Swap</a>). Buyers send transactions directly to sellers' wallet using the interface and can download files once the transaction is confirmed on the Ethereum network.</p>
	    	</Col>
	    	<Col md={4}>
	    		<img src="iconshock/innovation.svg" alt="Open & transparent" width="80px" className="mb-3"/>
	    		<h3>Open & transparent</h3>
	    		<p>All data is publicly accessible given the address (CID) of the release is known, but in order to download files through the application, one must make a payment to the content creator with the specified amount of cryptocurrency and included metadata of the release. This process is made painless through this application.</p>
	    	</Col>
	    </Row>

	    <br/><br/>

	    <h1>Questions & Answers</h1>
	    <div className="my-5">
	    	<i className="blockquote">Why would I sell my music on here?</i>
	    	<br/>
	    	<p className="mt-2">...</p>
	    </div>
	    <div className="my-5">
	    	<i className="blockquote">Why would I buy music on here?</i>
	    	<br/>
	    	<p className="mt-2">...</p>
	    </div>

    	<br/><br/>

    	<h1>How does it work?</h1>
      <p>Diagram here</p>

    	<br/><br/><br/>

    	<a href="/dashboard"><Button variant="success">Try it out</Button></a>
    	
    </Jumbotron>
    <p className="small mt-5 text-center"><a href="https://www.iconshock.com">Icons made by Iconshock</a></p>
    </main>
  )
}
