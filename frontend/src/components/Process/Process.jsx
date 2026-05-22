import "./Process.css";

function Process() {

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description:
        "Understanding business goals, project scope and technical requirements."
    },

    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Creating premium user interfaces and seamless user experiences."
    },

    {
      number: "03",
      title: "Development",
      description:
        "Building scalable frontend and backend systems using MERN stack."
    },

    {
      number: "04",
      title: "Testing & QA",
      description:
        "Ensuring performance, security and bug-free deployment."
    },

    {
      number: "05",
      title: "Deployment",
      description:
        "Deploying applications to cloud platforms with CI/CD pipelines."
    },

    {
      number: "06",
      title: "Maintenance",
      description:
        "Providing ongoing support, monitoring and feature updates."
    }
  ];

  return (
    <section id="process">

      <h2 className="title">
        Our Process
      </h2>

      <p className="subtitle">
        How we build premium digital products
      </p>

      <div className="process-container">

        {processSteps.map((step, index) => (
          <div className="process-card" key={index}>

            <div className="process-number">
              {step.number}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Process;