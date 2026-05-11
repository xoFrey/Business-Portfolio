import "./CSS/About.css";

const About = () => {
  return (
    <section className='about'>
      <p className='paragraph'>About</p>
      <div>
        <h2>
          I build things I'm <span>proud of.</span>
        </h2>
        <div className='about-description'>
          <p className='body-text'>
            I'm a self-driven full stack developer who finds joy in the full
            journey — from designing a system architecture to polishing a UI
            interaction. I believe the best software feels invisible.
          </p>
          <p className='body-text'>
            Currently expanding into mobile development with React Native and
            Kotlin. I'm looking for a team where I can grow fast, contribute
            meaningfully, and build things people actually use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
