import "./Clients.css";

function Clients() {

  const technologies = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "AWS",
    "Docker",
    "JavaScript",
    "GitHub"
  ];

  return (
    <section className="clients-section">

      <div className="container">

        <p className="clients-title">
          Technologies We Work With
        </p>

        <div className="clients-grid">

          {technologies.map((tech, index) => (
            <div className="client-card" key={index}>
              {tech}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Clients;