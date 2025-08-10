import arshiaimg from "../assets/arshiaimg.png";
import neilimg from "../assets/neilimg.png";
import yaoimg from "../assets/yaoimg.png";

function Team() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Meet the Team</h2>
      <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
        This project is led by researchers at Rutgers WINLAB as part of the 2025 summer initiative.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Arshia */}
        <div style={{ minWidth: "150px" }}>
          <img
            src={arshiaimg}
            alt="Arshia Garg"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "0.5rem",
            }}
          />
          <h3 style={{ margin: 0 }}>Arshia Garg</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#aaa" }}>Researcher</p>
        </div>

        {/* Neil */}
        <div style={{ minWidth: "150px" }}>
          <img
            src={neilimg}
            alt="Neil Samant"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "0.5rem",
            }}
          />
          <h3 style={{ margin: 0 }}>Neil Samant</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#aaa" }}>Researcher</p>
        </div>

        {/* Yao */}
        <div style={{ minWidth: "150px" }}>
          <img
            src={yaoimg}
            alt="Yao Liu"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "0.5rem",
            }}
          />
          <h3 style={{ margin: 0 }}>Yao Liu</h3>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#aaa" }}>Faculty Advisor</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
