import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Announcement() {
  return (
    <section className="bg-dark text-white py-3">
      <Container>
        <Row className="align-items-center justify-content-between">
          
          {/* Hours and Address */}
          <Col xs={12} lg={9} className="mb-3 mb-lg-0">
            <Row className="align-items-center text-center text-lg-start">
              
              {/* Hours */}
              <Col xs={12} sm={6} className="mb-2 mb-sm-0">
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-2">
                  <i className="fa-regular fa-clock text-white"></i>
                  <span className="small">Open: 9am - 5pm (Mon - Sat)</span>
                </div>
              </Col>

              {/* Address */}
              <Col xs={12} sm={6}>
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-2">
                  <i className="fa-solid fa-location-dot text-white"></i>
                  <span className="small">653A Solomon Cres, Regina, Saskatchewan, Canada, S4N 6H9</span>
                </div>
              </Col>

            </Row>
          </Col>

          {/* Social Icons */}
          <Col xs={12} lg={3}>
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              <i className="fa-brands fa-facebook text-white"></i>
              <i className="fa-brands fa-x-twitter text-white"></i>
              <i className="fa-brands fa-linkedin text-white"></i>
              <i className="fa-brands fa-youtube text-white"></i>
              <i className="fa-brands fa-instagram text-white"></i>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}