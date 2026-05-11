import "./CSS/ProjectItem.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const ProjectItem = ({
  date,
  typeOfProject,
  title,
  description,
  techstack,
  imgUrl,
  link,
}) => {
  return (
    <>
      <section className='project-item'>
        {/* <p className='paragraph'>Projects</p> */}
        <div className='project-hero'>
          <div className='project-img'>
            <p>
              {date} - {typeOfProject}
            </p>

            <div className='project-img-placeholder '>
              <p>[{title}]</p>
            </div>
          </div>
          <div className='project-info'>
            <div className='project-headline'>
              <h3>{title}</h3>
              <LiaLongArrowAltRightSolid
                className='icon'
                fill='#c97c20'
                size={"30px"}
              />
            </div>

            <p className='body-text'>
              Search and explore Pokémon with full stats, evolutions, and type
              filtering. Live PokéAPI integration.
            </p>
            <div className='techstack'>
              {techstack.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectItem;
