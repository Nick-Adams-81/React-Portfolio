import React from 'react';
import { Container, Row, Col} from "./components/Grid"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Content from "./components/Content";
import Images from "./components/Images";
import Link from "./components/Link"
import './App.css';






function App() {
  return (

    <Wrapper>
      <Navbar />
      <Container>
        <Row>
          <Col sm="6">
          <Jumbotron />
          </Col>
          </Row>
          <Row>
          <Col sm="4">
          <Images />
          </Col>
          <Col sm="4">
            <Content />
          </Col>
          <Col sm="4">
           <Link />
          </Col>
        </Row>
        <Footer />
      </Container>
      </Wrapper>
     

    


  );
}


export default App;
