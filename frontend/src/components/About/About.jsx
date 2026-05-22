import "./About.css";

function About() {

  return (
    <section className="about-section">

      <div className="container about-content">

        <div className="about-left">

          <h2>About Vexelry</h2>

          <p>
            Vexelry is a modern digital engineering startup focused on building
            scalable web applications, SaaS platforms and cloud solutions.
          </p>

          <p>
            We are passionate about creating high-quality software using modern
            technologies and clean user experiences.
          </p>

        </div>

        <div className="about-right">

          <div className="about-box">
            <h3>Modern Stack</h3>
            <p>React, Node.js, MongoDB, AWS & DevOps</p>
          </div>

          <div className="about-box">
            <h3>Startup Focused</h3>
            <p>Helping startups launch scalable products faster</p>
          </div>

          <div className="about-box">
            <h3>Future Ready</h3>
            <p>Cloud-native and scalable architecture</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;