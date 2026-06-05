import ProjectItem from "./ProjectItem";
import "./CSS/ProjectItem.css";

const Projects = () => {
  return (
    <section className='projects'>
      <p className='paragraph'>Projects</p>
      <div>
        <ProjectItem
          date={"2024"}
          typeOfProject={"Solo Project"}
          title={"Pokedex App"}
          description={
            "Search and explore Pokémon with full stats, evolutions, and type filtering. Live PokéAPI integration."
          }
          techstack={["React", "API", "CSS"]}
          imgUrl={"Placeholder"}
          link={"Github"}
        />
        <ProjectItem
          date={"2025"}
          typeOfProject={"Team Project"}
          title={"Silent Moon App"}
          description={
            "Search and explore Pokémon with full stats, evolutions, and type filtering. Live PokéAPI integration."
          }
          techstack={["React", "API", "CSS", "Express", "Mongoose"]}
          imgUrl={"Placeholder"}
          link={"Github"}
        />
      </div>
    </section>
  );
};

export default Projects;
