import React from 'react';
import '../styles/Projects.scss';


const Projects = () => {
    return (
      <section id="projects" className="projects">
        <div className="projects-content">
          <h2>Projects</h2>
          <div className="projects-item">
            <img src="https://www.mdpi.com/energies/energies-12-02692/article_deploy/html/images/energies-12-02692-g005.png" alt="Project 1" />
            <div className="item-details">
              <h3>Electric vehicle scheduling with load forecasting and real-time pricing using Deep learning</h3>
              <p>A user-friendly GUI was developed for EV users to schedule their EVs.</p>
              <p>Firstly, load at a particular station is forecasted, and dynamic pricing is obtained through which EVs are scheduled within the forecasted load limits.</p>
              <a href="https://www.linkedin.com/in/dnrk-charan/details/projects/">View Project</a>
            </div>
          </div>
          <div className="projects-item">
            <img src="https://cdn.techjockey.com/blog/wp-content/uploads/2021/09/Student-Information-Management-System-_Banner.jpg" alt="Project 2" />
            <div className="item-details">
              <h3>Student-Faculty Database Management</h3>
              <p>Created Database containing student and faculty information using MySQL and Python. Developed an algorithm to map the interest of students with the corresponding faculty specialization.</p>
                <p>The project allowed students to find a suitable project supervisor.</p>
              <a href="https://www.linkedin.com/in/dnrk-charan/details/projects/">View Project</a>
            </div>
          </div>
          {/* Add more projects items as needed */}
        </div>
      </section>
    );
  };
  
  export default Projects;