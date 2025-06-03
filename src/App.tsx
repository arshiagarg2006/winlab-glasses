import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Demo from './pages/Demo';
import Resources from './pages/Resources';
import Team from './pages/Team';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/team">Team</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
