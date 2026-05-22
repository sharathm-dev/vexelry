import "./Pricing.css";

function Pricing() {

  const plans = [
    {
      name: "Starter",
      price: "$499",
      features: [
        "Responsive Website",
        "3 Pages",
        "Basic SEO",
        "Email Support"
      ],
      button: "Get Started",
      featured: false
    },

    {
      name: "Professional",
      price: "$1499",
      features: [
        "Full MERN Application",
        "Authentication System",
        "Admin Dashboard",
        "API Integration",
        "Priority Support"
      ],
      button: "Most Popular",
      featured: true
    },

    {
      name: "Enterprise",
      price: "$4999",
      features: [
        "Custom SaaS Platform",
        "Cloud Deployment",
        "CI/CD Pipeline",
        "DevOps Setup",
        "Dedicated Team",
        "24/7 Support"
      ],
      button: "Contact Us",
      featured: false
    }
  ];

  return (
    <section id="pricing">

      <h2 className="title">
        Pricing Plans
      </h2>

      <p className="subtitle">
        Flexible pricing for every business
      </p>

      <div className="pricing-grid">

        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${
              plan.featured ? "featured" : ""
            }`}
            key={index}
          >

            <h3>{plan.name}</h3>

            <h1>{plan.price}</h1>

            <ul>

              {plan.features.map((feature, i) => (
                <li key={i}>
                  ✓ {feature}
                </li>
              ))}

            </ul>

            <button>
              {plan.button}
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Pricing;