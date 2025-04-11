import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import plumber from '../assets/hero/hero_1.png';

const Hero = () => {
  return (
    <section style={{ backgroundColor: '#172554' }} className="py-5 font-poppins">
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col md={6} className="text-white mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <div style={{ width: '24px', borderBottom: '2px solid white' }}></div>
              <small className="ms-3 text-uppercase fw-bold">Best Plumbing Services</small>
            </div>

            <h1 className="fw-bold text-center text-md-start mb-4" style={{ fontSize: '2.5rem' }}>
              Expert In Fix Your <span style={{ color: '#facc15' }}>Plumbing</span> Problems
            </h1>

            <p className="text-center text-md-start mb-4 small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis non quia animi officia voluptate nam perspiciatis pariatur.
            </p>

            <div className="text-center text-md-start">
              <Button
                variant="warning"
                className="text-uppercase rounded-pill px-4 py-2"
                style={{ backgroundColor: '#facc15', borderColor: '#facc15' }}
                href="#"
              >
                Learn more
              </Button>
            </div>
          </Col>

          {/* Image */}
          <Col md={6}>
            <img
              src={plumber}
              alt="plumber"
              className="img-fluid"
              style={{ objectFit: 'cover', width: '100%', maxHeight: '746px' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
