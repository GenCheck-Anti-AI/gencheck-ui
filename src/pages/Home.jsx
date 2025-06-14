import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Link to="/text-check" className="card">Text Check</Link>
      <Link to="/image-check" className="card">Image Check</Link>
      <Link to="/video-check" className="card">Video Check</Link>
    </div>
  );
}
