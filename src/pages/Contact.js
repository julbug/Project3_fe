import React from 'react'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Questions?</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
      <footer>

      </footer>
    </div>
  )
}
export default Contact

// import React, { useState } from "react";

// const FORM_ENDPOINT = ""; // TODO - fill on the later step

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = () => {
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };

//   if (submitted) {
//     return (
//       <>
//         <h2>Thank you!</h2>
//         <div>We'll be in touch soon.</div>
//       </>
//     );
//   }

//   return (
//     <form
//       action={FORM_ENDPOINT}
//       onSubmit={handleSubmit}
//       method="POST"
//       target="_blank"
//     >
//       <div>
//         <input type="text" placeholder="Your name" name="name" required />
//       </div>
//       <div>
//         <input type="email" placeholder="Email" name="email" required />
//       </div>
//       <div>
//         <textarea placeholder="Your message" name="message" required />
//       </div>
//       <div>
//         <button type="submit"> Send a message </button>
//       </div>
//     </form>
//   );
// };

// export default Contact;