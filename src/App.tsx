import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Demo from './pages/Demo';
import Resources from './pages/Resources';
import Team from './pages/Team';
import './App.css';
import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="app card">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/team">Team</Link>
        <button
          onClick={toggleTheme}
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: 'var(--accent-color)',
            padding: '0 0.5rem',
            transition: 'color 0.2s',
          }}
          aria-label="Toggle theme"
          title="Toggle light/dark mode"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
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
