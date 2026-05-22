import "./WhyChoose.css";

function WhyChoose() {

  const points = [

    "Experienced & passionate team",

    "On-time delivery & communication",

    "Scalable modern solutions",

    "Client satisfaction priority",

    "Affordable professional pricing"

  ];

  return (
    <section id="whychoose">

      <div className="why-container">

        <div className="why-left">

          <h2>
            WHY CHOOSE VEXELRY?
          </h2>

          <ul>

            {points.map((point, index) => (

              <li key={index}>
                ✓ {point}
              </li>

            ))}

          </ul>

        </div>

        <div className="why-right">

          <h3>
            Turning ideas into
            powerful digital
            experiences.
          </h3>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;