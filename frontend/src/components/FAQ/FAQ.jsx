import { useState } from "react";
import "./FAQ.css";

function FAQ() {

  const faqs = [
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in MERN stack, React Native, Node.js, MongoDB, Docker, AWS and DevOps."
    },

    {
      question: "How long does a project take?",
      answer:
        "Project timelines depend on complexity. Usually 2 to 12 weeks."
    },

    {
      question: "Do you provide deployment support?",
      answer:
        "Yes. We provide full deployment support using AWS, Render, Vercel and Docker."
    },

    {
      question: "Do you provide maintenance?",
      answer:
        "Yes. We provide long-term support and maintenance for all projects."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">

      <h2 className="title">
        Frequently Asked Questions
      </h2>

      <p className="subtitle">
        Common questions from our clients
      </p>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <h3>{faq.question}</h3>

              <span>
                {activeIndex === index ? "-" : "+"}
              </span>

            </div>

            <div className="faq-answer">

              <p>{faq.answer}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;