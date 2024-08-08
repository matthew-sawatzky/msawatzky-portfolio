import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactStyles.module.css";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f26vze5",
        "template_wnibapf",
        e.target,
        "4llMy19sim247RR1u"
      )
      .then(
        (result) => {
          console.log("EmailJS result:", result);
          setStatus("Message sent successfully!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };


  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
