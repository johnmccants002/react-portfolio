import React, { useState } from "react";
import { contact, section5Title, social } from "../../profile";
import emailjs from "@emailjs/browser";
import {
  NEXT_EMAILJS_PUBLIC_KEY,
  NEXT_EMAILJS_SERVICE_ID,
  NEXT_EMAILJS_TEMPLATE_ID,
} from "../../env";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    // Use EmailJS logic here to send the message
    // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual values from EmailJS
    emailjs
      .send(
        NEXT_EMAILJS_SERVICE_ID,
        NEXT_EMAILJS_TEMPLATE_ID,
        formData,
        NEXT_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        // Clear the form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });
  };

  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form onSubmit={sendMessage}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button
                  style={{ cursor: "pointer" }}
                  type="submit"
                  onClick={sendMessage}
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Other content */}
          </div>
        </div>
      </div>
      {/* Additional content */}
    </div>
  );
};

export default Contact;
