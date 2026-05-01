import React from 'react'
import { Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <Container className="py-5">
      <Card className="text-center shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
        <Card.Body>
          <h1 className="display-1 text-primary">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-4">Sorry, the page you're looking for doesn't exist.</p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Go Home
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
