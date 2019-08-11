import React from 'react';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import Images from './components/Images';

function App() {
  return (
    <Container>
      <Row className="bg-dark text-light">
        <Col>
          <header>
            <h1>Memory Game</h1>
          </header>
        </Col>
        <Col>
          <div id="score">
            <span id="score">Score: score</span>
            <span id="top-score">Top Score: score</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Jumbotron className="text-center">
          <h2>
            Click on an image to earn points, but don't click the same image twice - or you lose.
          </h2>
        </Jumbotron>
      </Row>
      <Images />
    </Container>
  );
}

export default App;
