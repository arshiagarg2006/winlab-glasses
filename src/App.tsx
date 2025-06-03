import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>WINLAB Project Aria Blog – 2025</h1>
        <p className="tagline">Research updates from Rutgers WINLAB</p>
      </header>

      <main className="blog">
        <article className="post">
          <h2>Week 1: Project Setup & Data Collection</h2>
          <p>
            We configured the Gen 1 Meta Aria glasses and began recording isolated sign gestures using SLAM-based camera tracking. Initial hand-tracking results look promising!
          </p>
        </article>

        <article className="post">
          <h2>Week 2: Processing with MPS</h2>
          <p>
            Using Meta’s Machine Perception Services (MPS), we converted the VRS files into hand landmark data. Next step: feature extraction and sign labeling.
          </p>
        </article>

        <p className="footer">More updates coming soon...</p>
      </main>
    </div>
  );
}

export default App;
