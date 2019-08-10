import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="bg-dark text-light text-center p-5">
        <Col>
          <header>
            <h1>Memory Game</h1>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
