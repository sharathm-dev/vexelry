import "./Contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/enquiries",
        formData
      );

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section id="contact">

      <div className="contact-wrapper">

        <div className="contact-info">

          <h2>
            LET'S BUILD SOMETHING
            AMAZING TOGETHER!
          </h2>

          <p>
            Have an idea or project in mind?
            Let's turn it into reality.
          </p>

          <div className="contact-details">

            <p>📞 9342347936</p>

            <p>✉️ vexelry@gmail.com</p>

            <p>📸 @vexelry</p>

            <p>📍 Your Trusted Tech Partner</p>

          </div>

        </div>

        <form
          className="enquiry-form"
          onSubmit={handleSubmit}
        >

          <h3>
            Send Enquiry
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >

            <option value="">
              Select Service
            </option>

            <option value="Web Development">
              Web Development
            </option>

            <option value="Mobile App Development">
              Mobile App Development
            </option>

            <option value="Portfolio Website">
              Portfolio Website
            </option>

          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">

            {loading
              ? "Sending..."
              : "Send Enquiry"}

          </button>

          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;