// src/components/Education/Education.js
import React from 'react';
import '../styles/Education.scss';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-item">
          <h3>National Institute of Technology, Andhra Pradesh</h3>
          <p>Degree in Electrical and Electronics Engineering</p>
          <p>Graduation Year: 2022</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary School Certificate</h3>
          <p>Intermediate - Maths, Physics, Chemistry</p>
          <p>Graduation Year: 2017</p>
        </div>
        <div className="education-item">
          <h3>Secondary School Certificate</h3>
          <p>SSC - 10th</p>
          <p>Graduation Year: 2015</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
