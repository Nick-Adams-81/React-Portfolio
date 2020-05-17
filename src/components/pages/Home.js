import React from 'react';
import Wrapper from "../Wrapper";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Content from "../Content";
import Images from "../Images";
import Link from "../Link";
import Email from "../Email"


function Home() {
  return (

    <Wrapper>
      <Navbar />
      <Jumbotron />
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <Images />
            <br></br>
            <Email />
          </div>
          <div class="col-sm-4">
            <Content />
          </div>
          <div class="col-sm-4">
            <Link />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">

          </div>
          <div class="col-sm-4">

          </div>
          <div class="col-sm-4">

          </div>
        </div>

      </div>
      <Footer />
    </Wrapper>
  );
}


export default Home;

