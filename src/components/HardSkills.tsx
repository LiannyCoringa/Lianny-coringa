import github from '../images/git.svg';
import html from '../images/html.svg';
import css from '../images/css-3.png';
import javascript from '../images/script-java.png';
import typescript from '../images/typescript.png';
import react from '../images/icons8-react-48.png';
import redux from '../images/redux.png';
import jest from '../images/jest.png';
import vite from '../images/vite_logo_icon_249258.png';
import tailwind from '../images/tailwind_icon_131947.png';
import node from '../images/nodejs.png';
import docker from '../images/icons8-docker-50.png';
import mysql from '../images/icons8-mysql-50.png';
import sequelize from '../images/sequelize_icon_132004.png';
import mocha from '../images/mocha_plain_logo_icon_146426.png';
import python from '../images/icons8-python-50.png';

function HardSkills() {
  return (
    <div className="hard-skills-container" id="skills">
      <h1>Skills</h1>
      <div className="card-container">
        <h2>Hard Skills</h2>
        <p>Tecnologias que domino e tenho conhecimento.</p>
        <div className="card">
          <div className="card-filho">
            <img src={ github } alt="github" />
            <p>Git</p>
          </div>
          <div className="card-filho">
            <img src={ html } alt="html" />
            <p>HTML 5</p>
          </div>
          <div className="card-filho">
            <img src={ css } alt="css" />
            <p>CSS 3</p>
          </div>
          <div className="card-filho">
            <img src={ javascript } alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div className="card-filho">
            <img src={ typescript } alt="typescript" />
            <p>TypeScript</p>
          </div>
          <div className="card-filho">
            <img src={ react } alt="react" />
            <p>React</p>
          </div>
          <div className="card-filho">
            <img src={ redux } alt="redux" />
            <p>Redux</p>
          </div>
          <div className="card-filho">
            <img src={ jest } alt="jest" />
            <p>Jest</p>
          </div>
          <div className="card-filho">
            <img src={ vite } alt="vite" />
            <p>Vite</p>
          </div>
          <div className="card-filho">
            <img src={ tailwind } alt="tailwind" />
            <p>Tailwind</p>
          </div>
          <div className="card-filho">
            <img src={ node } alt="node" />
            <p>Node</p>
          </div>
          <div className="card-filho">
            <img src={ docker } alt="docker" />
            <p>Docker</p>
          </div>
          <div className="card-filho">
            <img src={ mysql } alt="mysql" />
            <p>MySQL</p>
          </div>
          <div className="card-filho">
            <img src={ sequelize } alt="sequelize" />
            <p>Sequelize</p>
          </div>
          <div className="card-filho">
            <img src={ mocha } alt="mocha" />
            <p>Mocha</p>
          </div>
          <div className="card-filho">
            <img src={ python } alt="python" />
            <p>Python</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <h2>Soft Skills</h2>
        <p>Habilidades comportamentais e relacionadas à minha personalidade.</p>
        <div className="card-soft">
          <li>Comunicação</li>
          <li>Inteligência Emocional</li>
          <li>Criatividade</li>
          <li>Colaboração</li>
          <li>Pensamento crítico</li>
          <li>Liderança</li>
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
