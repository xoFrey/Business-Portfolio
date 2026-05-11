import "./CSS/Skills.css";

const Skills = () => {
  return (
    <section className='skills'>
      <p className='paragraph'>Skills</p>
      <div className='skills-content'>
        <div className='skill-table'>
          <p>Frontend</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>HTML/CSS</p>
          <p>Tailwind</p>
          <p>ThreeJS</p>
        </div>
        <div className='skill-table'>
          <p>Backend</p>
          <p>NodeJS</p>
          <p>Express</p>
          <p>Python</p>
          <p>Java</p>
          <p>MongoDB/Mongoose</p>
          <p>SQL</p>
        </div>
        <div className='skill-table'>
          <p>Mobile</p>
          <p>React Native</p>
          <p>Kotlin (in Progress)</p>
        </div>
        <div className='skill-table'>
          <p>Tools</p>
          <p>Figma</p>
          <p>3D Sculpting</p>
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
