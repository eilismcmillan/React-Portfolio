import Project from './Project';
import Travelwise from '../images/travelwise.png'
import Billease from '../images/billease.png'
import Weather from '../images/weather-dashboard.png'
import CSSPortfolio from '../images/css-portfolio.png'
import NoteTaker from '../images/note-taker.png'
import Quiz from '../images/coding-quiz.png'


const projects = [
  {
    title: 'TravelWise',
    imageUrl: Travelwise,
    applicationLink: 'https://joshua-watson96.github.io/Travel-Wise/index.html',
    githubLink: 'https://github.com/Joshua-Watson96/Travel-Wise'
  },
  {
    title: 'BillEase',
    imageUrl: Billease,
    applicationLink: '#',
    githubLink: 'https://github.com/Joshua-Watson96/BillManagement'
  },
  {
    title: 'Weather Dashboard',
    imageUrl: Weather,
    applicationLink: 'https://eilismcmillan.github.io/Weather-Dashboard/',
    githubLink: 'https://github.com/eilismcmillan/Weather-Dashboard'
  },
  {
    title: 'CSS Portfolio',
    imageUrl: CSSPortfolio,
    applicationLink: 'https://eilismcmillan.github.io/Eilis-McMillan-Portfolio/',
    githubLink: 'https://github.com/eilismcmillan/Eilis-McMillan-Portfolio'
  },
  {
    title: 'Express.js Note Taker',
    imageUrl: NoteTaker,
    applicationLink: 'https://expressjs-note-taker2.herokuapp.com/',
    githubLink: 'https://github.com/eilismcmillan/note-taker'
  },
  {
    title: 'Coding Quiz',
    imageUrl: Quiz,
    applicationLink: 'https://eilismcmillan.github.io/coding-quiz/',
    githubLink: 'https://github.com/eilismcmillan/coding-quiz'
  },

  
];

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            applicationLink={project.applicationLink}
            githubLink={project.githubLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;