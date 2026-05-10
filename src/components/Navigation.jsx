import "./CSS/Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <div>
        <p className='logo'>Frey</p>
        <p className='under-logo'>Full stack developer</p>
      </div>
      <div>
        <ul className='links'>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Skills</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
