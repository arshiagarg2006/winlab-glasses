import videoDemo from "../assets/aria demo 1.webm";

export default function Demo() {
  return (
    <div className="demo-page">
      <h1>Aria Glasses Demo</h1>
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