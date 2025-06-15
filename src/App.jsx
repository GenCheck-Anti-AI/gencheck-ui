import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import TextCheck from './pages/TextCheck';
import ImageCheck from './pages/ImageCheck';
import VideoCheck from './pages/VideoCheck';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-check" element={<TextCheck />} />
        <Route path="/image-check" element={<ImageCheck />} />
        <Route path="/video-check" element={<VideoCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
