import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs
      .sendForm(
        "service_e7dpkeg",
        "template_awjvuvr",
        form.current,
        "r-lx2CTio6-0toT44"
      )
      .then(
        (result) => {
          console.log(result.text, submitted);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="column-container centered futura">
      <form ref={form} onSubmit={sendEmail} className="column-container centered">
        <label className="label">Name</label>
        <input type="text" name="user_name" />
        <label className="label">Email</label>
        <input type="email" name="user_email" />
        <label className="label">Message</label>
        <textarea name="message" />
        <input
            className="submit"
            type="submit"
            value="Send"
            onClick={() => {
              setSubmitted(true);
              setTimeout(() => {
                setSubmitted(false);
              }, 5000);
            }}
          />
        {submitted ? (
          <div className="label submitted">Email submitted</div>
        ) : (
            null
        )}
        <div className="alt-info"> <strong>Or use my contact info:</strong>
          <br></br>
          <strong>E-mail:</strong> denahyaidan@gmail.com
          <br></br>
          <strong>Phone:</strong> (914) 330-6870
        </div>

      </form>
    </div>
  );
}

export default Contact;
