import "./Testimonials.css";

function Testimonials() {

  const testimonials = [
    {
      name: "John Anderson",
      role: "CEO, TechNova",
      message:
        "Vexelry delivered an exceptional platform that transformed our business operations completely."
    },

    {
      name: "Sarah Williams",
      role: "Founder, StartupX",
      message:
        "The UI/UX quality and development speed were absolutely outstanding."
    },

    {
      name: "Michael Brown",
      role: "CTO, CloudSphere",
      message:
        "Professional team with deep technical expertise in MERN stack and DevOps."
    }
  ];

  return (
    <section id="testimonials">

      <h2 className="title">
        Client Testimonials
      </h2>

      <p className="subtitle">
        What our clients say about us
      </p>

      <div className="testimonials-grid">

        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>

            <div className="quote">
              “
            </div>

            <p className="message">
              {testimonial.message}
            </p>

            <div className="client-info">

              <div className="avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;