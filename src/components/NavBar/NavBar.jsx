import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/starships-list" >Star Wars Starships</Link>
    </header>
  );
}

export default NavBar;