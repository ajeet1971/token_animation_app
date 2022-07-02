import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
   <footer>
    <Container>
        <Row>
            <Col>
            <div className='footer-logo'>
                <img src='/assets/logo-square.png' alt="logo" />
            </div>
            </Col>
            <Col>
                <div className='menu-wrapper'>
                    <h5>Protocol</h5>
                    <ul>
                        <li>Markets</li>
                        <li>Prices</li>
                        <li>Docs</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div className='menu-wrapper'>
                    <h5>Governance</h5>
                    <ul>
                        <li>Overview</li>
                        <li>Hatom token</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <div className='menu-wrapper'>
                    <h5>Security</h5>
                    <ul>
                        <li>Audits</li>
                        <li>Formal Verifications</li>
                        <li>Economic Security</li>
                        <li>Bug Bounty</li>
                    </ul>
                </div>
            </Col>
            <Col>
            <div className='footer-btn'>
                <Button className='btn-app'>App</Button>
            </div>
            </Col>
        </Row>
        <div className='copyright-sec'>
            <p>© 2022 Hatom ,LLC.</p>
        </div>
    </Container>
    <div className='footer-bottom'>
        <h6>Latest Block: 14296113</h6>
    </div>
   </footer>
  )
}

export default Footer