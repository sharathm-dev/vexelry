import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {

  const projects = [
    "AI Resume Analyzer",
    "Job Portal",
    "Realtime Chat App"
  ];

  return (
    <section id="portfolio">

      <h2 className="title">
        Portfolio
      </h2>

      <div className="portfolio-grid">

        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Portfolio;