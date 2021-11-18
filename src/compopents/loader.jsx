import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

const Loader = function () {
  return (
    <Container fluid="xxl" className="spinner-wrapper">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  )
}

export default Loader
