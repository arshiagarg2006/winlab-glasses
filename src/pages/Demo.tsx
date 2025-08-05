import videoDemo from "../assets/aria demo 1.webm";

export default function Demo() {
  return (
    <div className="demo-page">
      <h1>Aria Glasses Demo</h1>

      {/* YouTube Video Embed */}
      <div style={{ marginBottom: "2rem" }}>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/_ICmwEBYVN8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "12px", maxWidth: "800px" }}
        ></iframe>
      </div>

      {/* Local Video */}
      <video
        width="100%"
        height="auto"
        controls
        style={{ borderRadius: "12px", maxWidth: "800px", marginTop: "1rem" }}
      >
        <source src={videoDemo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
