import "./Hero.css";

function Hero() {

  const scrollToContact = ()=>{

    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior:"smooth"
      });

  };

  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
          🚀 NEXT GENERATION DIGITAL AGENCY
        </p>

        <h1>

          We Create
          <span> Digital Products</span>
          That Grow Businesses.

        </h1>

        <p className="hero-description">

          Vexelry helps startups and businesses
          build scalable web applications,
          mobile apps and modern digital experiences
          using cutting-edge technologies.

        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={scrollToContact}
          >
            Start Your Project
          </button>

          <button
            className="secondary-btn"
            onClick={scrollToContact}
          >
            Explore Services
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-card">

            <h3>10+</h3>

            <p>Projects Building</p>

          </div>

          <div className="stat-card">

            <h3>100%</h3>

            <p>Modern Solutions</p>

          </div>

          <div className="stat-card">

            <h3>24/7</h3>

            <p>Support & Delivery</p>

          </div>

        </div>

      </div>

      <div className="hero-image-side">

        <div className="glass-card">

          <div className="glass-top">

            <span className="circle red"></span>

            <span className="circle yellow"></span>

            <span className="circle green"></span>

          </div>

          <div className="code-lines">

            <div className="line long"></div>

            <div className="line medium"></div>

            <div className="line short"></div>

            <div className="line long blue"></div>

            <div className="line medium"></div>

            <div className="line short blue"></div>

            <div className="line long"></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;