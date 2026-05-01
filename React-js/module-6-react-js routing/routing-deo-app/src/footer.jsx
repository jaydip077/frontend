import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-4 mt-auto">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p className="mb-0">Email: info@example.com</p>
            <p className="mb-0">Phone: +1 234 567 890</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center mb-0">&copy; 2024 My Website. All rights reserved.</p>
      </Container>
    </footer>
  )
}
