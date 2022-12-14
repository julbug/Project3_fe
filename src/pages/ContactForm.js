// import React from 'react'
// const Contact = (props) => {

//   constructor(props){
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

// handleChange(event){
//   this.setState({
//     [event.target.name]: event.target.value
//   })
// }  
// handleSubmit(event){
//  event.preventDefault()
// const templateId = _ZQrBCLZv16829lB9WbsJ;
// this.sendContact(templateId,{
//   message_html: this.state.message,
//   from_name: this.state.name,
//   reply_to: this.state.email,
//   from_phone: this.state.phone})
// this.setState({
//   name: '',
//   email: '',
//   message: ''
// })
// }
// sendContact(templateId, variables){
//   window.emailjs.send(
//     'gmail', templateId,
//     variables
//   ).then(res => {
//     swal('Your Message Has Been Sent!', 'We will get back to you as soon as possible.', 'success')  
//   })
//   .catch(err => console.err('Error:', err))
// }




//   return (
//     <div className="container mt-5">
//       <h2 className="mb-3">Questions?</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="form-control" type="text" id="name" required onChange={this.handleChange} value={this.state.name} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="email">
//             Email
//           </label>
//           <input className="form-control" type="email" id="email" required onChange={this.handleChange} value={this.state.email} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="form-control" id="message" required onChange={this.handleChange} value={this.state.message} />
//         </div>
//         <center><button className="beforeAfterBtn" type="submit" onClick={this.handleSubmit}>
//           {formStatus}
//         </button></center>
//       </form>
//       <footer>

//       </footer>
//     </div>
//   )
// }
// export default Contact


  // const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   console.log(conFom)
  // }



//ATTEMPT 1
// import React from 'react'
// const Contact = () => {


//   const [formStatus, setFormStatus] = React.useState('Send')
//   const onSubmit = (e) => {
//     e.preventDefault()
//     setFormStatus('Submitting...')
//     const { name, email, message } = e.target.elements
//     let conFom = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     }
//     console.log(conFom)
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-3">Questions?</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             Name
//           </label>
//           <input className="form-control" type="text" id="name" required onChange={this.handleChange} value={this.state.name} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="email">
//             Email
//           </label>
//           <input className="form-control" type="email" id="email" required onChange={this.handleChange} value={this.state.email} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             Message
//           </label>
//           <textarea className="form-control" id="message" required onChange={this.handleChange} value={this.state.message} />
//         </div>
//         <center><button className="beforeAfterBtn" type="submit" onClick={this.handleSubmit}>
//           {formStatus}
//         </button></center>
//       </form>
//       <footer>

//       </footer>
//     </div>
//   )
// }
// export default Contact



//ATTEMPT 2

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






