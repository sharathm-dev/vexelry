import "./Services.css";

function Services() {

  const services = [

    {
      title: "Web Development",
      desc:
        "Responsive and modern websites tailored for businesses."
    },

    {
      title: "Mobile App Development",
      desc:
        "High-performance Android and iOS applications."
    },

    {
      title: "Portfolio Website Development",
      desc:
        "Professional portfolio websites that help you stand out."
    }

  ];

  return (
    <section id="services">

      <h2 className="title">
        Our Services
      </h2>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <h3>
              {service.title}
            </h3>

            <p>
              {service.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;