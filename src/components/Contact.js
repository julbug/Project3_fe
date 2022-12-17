
import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3af6b2c0-7bfa-11ed-ae39-e5d94069e299" ; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
    <div className="container mt-5">
    <h1 className="mb-3">Contact Us</h1>
    <h5>Send us a message and we’ll get back to you as soon as possible!</h5>
      <div>
        <input className="form-control" type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input className="form-control" type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea className="form-control" placeholder="Your message" name="message" required />
      </div>
      <br></br>
      <div>
      <center><button className="beforeAfterBtn" type="submit"> Send a message </button></center>
      </div>
      </div>
    </form>

  );
};

export default Contact;