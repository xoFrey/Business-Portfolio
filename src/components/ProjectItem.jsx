import "./CSS/ProjectItem.css";

const ProjectItem = () => {
  return (
    <section className='project-item'>
      <p className='paragraph'>About</p>
      <div>
        <p>2024 - Solo Project</p>
        <div className='image-placeholder'>
          <p>[PokeDex App]</p>
        </div>
      </div>
      <div>
        <h3>Pokedex App</h3>
        <p>
          Search and explore Pokémon with full stats, evolutions, and type
          filtering. Live PokéAPI integration.
        </p>
        <div>
          <p>React</p>
          <p>API</p>
          <p>CSS</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
