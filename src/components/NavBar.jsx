import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">GenCheck–Anti–AI</Link>
    </nav>
  );
}
