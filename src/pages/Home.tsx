import ariaImage from "../assets/meta aria image 1.webp";
function Home() {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>WINLAB Project Aria 2025</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 2rem" }}>
          This blog documents our research on sign language translation using Meta Aria glasses.
          Explore weekly updates, tech demos, and learn about the team.
        </p>
        <img
          src={ariaImage}
          alt="Meta Aria Glasses"
          style={{
            maxWidth: "90%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    );
  }
  
  export default Home;
  