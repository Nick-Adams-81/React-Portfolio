import React from 'react';
import Wrapper from "../Wrapper";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Content from "../Content";
import Images from "../Images";
import Link from "../Link";
import Email from "../Email";
import TechSkills from "../TechSkills"
import "./style.css"


function Home() {
  return (

    <Wrapper>
      <Navbar />
      <Jumbotron />
      <h2>Home</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm-4" id="img">
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
          <div class="col-sm-12">
            <h2>Technical Skills</h2>
            <TechSkills />
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
}


export default Home;

