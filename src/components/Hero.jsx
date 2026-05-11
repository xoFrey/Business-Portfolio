import "./CSS/Hero.css";

const skills = [
  "React",
  "React Native",
  "JavaScript",
  "HTML/CSS",
  "Python",
  "Java",
  "ExpressJS",
  "Mongoose",
  "SQL",
  "ThreeJS",
  "Kotlin",
];

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-headline'>
          <p>Open to Work</p>
          <h1>
            Frey,
            <br /> <span>Developer</span>& creator.
          </h1>
        </div>
        <div className='profile'>
          <div className='image-placeholder'>
            <p>[profile photo]</p>
          </div>
          <p className='body-text'>
            Full stack developer passionate about building clean, functional
            apps. Always learning — currently diving into mobile with React
            Native & Kotlin.
          </p>
        </div>
      </section>
      <section>
        <div className='skill-divider'>
          {skills.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
