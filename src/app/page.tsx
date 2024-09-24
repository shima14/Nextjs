// app/page.tsx
import React from 'react';
import './globals.css';

const projects = [
  { name: 'WiFi Survey Heatmap', description: 'Visualisiere die WiFi-Signalstärke in einem Gebäude.', link: '/projects/wifi-survey' },
  { name: 'React Showcase', description: 'Eine React-basierte Anwendung zur Präsentation verschiedener Projekte.', link: '/projects/react-showcase' },
];

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1>Willkommen auf meiner Homepage!</h1>
      <p>Hier sind einige meiner Projekte:</p>
      {projects.map((project, index) => (
        <div key={index} className="tile">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link}>Details</a>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

          
          
          
          
          
