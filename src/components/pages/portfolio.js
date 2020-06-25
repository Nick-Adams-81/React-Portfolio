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
                          repo={projects[0].repo}
                          repoName={projects[0].repoName}
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
                        repo={projects[1].repo}
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
                <br></br>
                <div class="row">
                    <div class="col-sm-6">
                        <ProjectCard
                        id={projects[4].id}
                        name={projects[4].name}
                        image={projects[4].image}
                        link={projects[4].link}
                        />
                       
                    </div>
                    <div class="col-sm-6">
                    <ProjectCard
                        id={projects[5].id}
                        name={projects[5].name}
                        image={projects[5].image}
                        link={projects[5].link}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    )
    
}

export default Portfolio;