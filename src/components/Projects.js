import React from 'react';
import PROJECTS from '../data/projects';
import Project from './Project';

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {
        PROJECTS.map(PROJECT => (
          <Project key={PROJECT.id} project={PROJECT}/>
        ))
      }
    </div>
  </div>
)

export default Projects;
