import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Content() {
  return (
    <>
      <Container className="py-4">
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>React Router DOM</Card.Title>
                <Card.Text>
                  React Router is a standard library for routing in React applications. 
                  It enables navigation between views and manages URL changes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={8}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>Key Features</Card.Title>
                <Card.Text>
                  • Dynamic routing<br/>
                  • Nested routes<br/>
                  • Browser history support<br/>
                  • URL parameters
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
