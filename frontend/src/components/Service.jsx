import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import pipe from '../assets/hero/hero_2.png';
import plumber_house from '../assets/hero/hero_3.png';

const ServiceHero = () => {
  return (
    <section className="bg-transparent py-5" style={{ marginTop: '-12rem' }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={10} lg={8} className="d-flex flex-column flex-md-row gap-4">

            {/* Service Box 1 */}
            <Card className="flex-fill rounded-top-4 rounded-md-start-4 border-0 shadow-sm" style={{ minHeight: '142px' }}>
              <Card.Body className="d-flex align-items-center gap-3 p-4">
                <div style={{ width: '50px', height: '75px' }}>
                  <img src={pipe} alt="pipe-icon" className="img-fluid" />
                </div>
                <div className="text-black fw-semibold small">
                  We offer plumbing system installation & support, certified custom panel building.
                </div>
              </Card.Body>
            </Card>

            {/* Service Box 2 */}
            <Card className="flex-fill rounded-bottom-4 rounded-4 border-0" style={{ backgroundColor: '#facc15', minHeight: '240px' }}>
              <Card.Body className="text-center d-flex flex-column align-items-center justify-content-between p-4 h-100">
                <div>
                  <img src={plumber_house} alt="plumber-icon" className="img-fluid mb-3" style={{ width: '60px', height: '60px' }} />
                  <div className="fw-semibold small mb-3">
                    Industry-Leading Plumbers since 1994
                  </div>
                </div>
                <Button
                  variant="dark"
                  className="rounded-pill text-uppercase px-4 py-2"
                  href="#"
                >
                  Hire us
                </Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceHero;
