import React from "react";
import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";
import projects from "./projects.json"
import "./style.css"



function Portfolio () {

    return (
        <Wrapper>
            <Navbar />
            <Jumbotron />
            <h2>Portfolio</h2>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <ProjectCard
                        id={projects[3].id}
                        name={projects[3].name}
                        image={projects[3].image}
                        link={projects[3].link}
                        />
                       
                    </div>
                    <div class="col-sm-6">
                          <ProjectCard
                          id={projects[0].id}
                          name={projects[0].name}
                          image={projects[0].image}
                          link={projects[0].link}
                          />
                     
                    </div>
                   
                </div>
                <br></br>
                <div class="row">
                    <div class="col-sm-6">
                        <ProjectCard
                        id={projects[1].id}
                        name={projects[1].name}
                        image={projects[1].image}
                        link={projects[1].link}
                        />
                       
                    </div>
                    <div class="col-sm-6">
                          <ProjectCard
                          id={projects[2].id}
                          name={projects[2].name}
                          image={projects[2].image}
                          link={projects[2].link}
                          />
                     
                    </div>
                   
                </div>
            </div>
            <Footer />
        </Wrapper>
    )
    
}

export default Portfolio;