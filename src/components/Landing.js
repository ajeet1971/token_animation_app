import React, { useContext, useRef, useEffect } from "react";
import "../styles/landing.scss";
import Footer from "./Footer";
import Container from 'react-bootstrap/Container';
import { Button, Row, Col } from 'react-bootstrap';
import Header from "./Header";
import { gsap, ScrollTrigger } from "gsap/all";

export default function Landing() {

  let imgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.banner-wrapper',
        start: "top top",
        end: "400px",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          gsap.to(imgRef.current, {
            top: '50%',
            duration: 1,
            backgroundPosition: '0px 0px'
          })
        },
        onUpdate: ({ direction }) => {
          if (direction === 1) {
            gsap.to(imgRef.current, {
              top: '+=3%',
              duration: 1,
            })
          }
          if (direction === -1) {
            gsap.to(imgRef.current, {
              top: '-=3%',
              duration: 1,
            })
          }
        }
      }
    })

    let c = 0;
    gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "100px",
        end: '500px',
        scrub: true,
        pinSpacing: false,
        onUpdate: ({ direction }) => {
          c += 1
          if (direction === 1) {
            if (c <= 22) {
              gsap.to(imgRef.current, {
                top: '+=19px',
                duration: 0.01,
                backgroundPosition: '0px +=250px'
              })
            }
          }
          if (direction === -1) {
            gsap.to(imgRef.current, {
              top: '-=19px',
              duration: 0.01,
              backgroundPosition: '0px -=250px'
            })
          }
        }
      },
    })
  }, [])

  return (
    <>
      <Header />
      <section className="banner-wrapper">
        <div className="title-banner">
          <h1>Hatom Token</h1>
          <h5>Deep dive into the heart of Hatom Protocol</h5>
        </div>
        <div ref={imgRef} className="coin-wrapper">
          <img src="/assets/coin-sequence.png" alt="" />
        </div>
      </section>

      <section className="token-price-wrapper">
        <Container>
          <Row>
            <Col md={{ span: 9 }} className="mx-auto">
              <div className="price-wrap">
                <div className="token-content">
                  <h5>$9,449,627.26 <span>Dividends</span></h5>
                  <p>Paid out to Hatom Token Holders over 3 years</p>
                </div>
                <Button className="btn btn-buy">Buy Hatom Tokens</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-wrapper">
        <Container>
          <h5><span>Features</span> of Hatom Protocol</h5>
          <div className="protocol-wrap">
            <div className="feature-token-wrapper">
              <Row>
                <Col>
                  <div>
                    <div className="features-box">
                      <div className="title"><h5>Earn</h5> <div className="line right "></div></div>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                      <p>tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. </p>
                    </div>
                    <div className="features-box">
                      <div className="title"><h5>Borrow</h5><div className="line right up"></div></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                    </div>
                  </div>
                </Col>
                <Col xs={6}></Col>
                <Col>
                  <div className="features-box">
                    <div className="title"><h5>Dividends</h5><div className="line left"></div></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.</p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit ametent.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit amet.ectetur adip
                        from one ex-diivident date othe next</li>
                    </ul>

                  </div>
                </Col>
              </Row>


            </div>

          </div>
        </Container>
      </section>
      <section className="newsletter-section">
        <Container>
          <Row>
            <Col md={{ span: 7 }} className="mx-auto">
              <h4>Subscribe to Hatom newsletter</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit .</p>
              <div className="input-wrapper">
                <input type="text" placeholder="Enter your email" />
                <Button className="btn btn-buy">Subscribe</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
