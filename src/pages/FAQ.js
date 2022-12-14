// import React, { Component } from "react";
// class FAQ extends Component {
   

//   render() {
//     return (
//       <div>
//       <h1>Please take a moment to read the following before booking an appointment:</h1>
//       <br></br>
//       <div className="profile">
//         <h2>Qualifications</h2>
//         <p className="ptag">
//         <ul>Age requirements: 21-45 years old. Please send photos of brows.</ul>
//         <ul>Must NOT HAVE any of the following conditions:</ul>
//         <li>Transmittable blood related conditions or diseases such as Hepatitis or HIV/AIDS</li>
//         <li>Be pregnant or nursing</li>
//         <li>Skin allergies to pigments or make up</li>
//         <li>Glaucoma and/or taking blood thinning medicines</li>
//         <li>Skin concerns such as eczema, psoriasis or keloids in treatment area</li>
//         <li>Active skin cancer</li>
//         <li>Experience with post inflammatory hyper-pigmentation</li>
//         <li>Undiagnosed rashes or blisters in brow or lip area</li>
//         <li>Someone who is under or scheduled for radiotherapy or chemotherapy</li>
//         <li>Someone who is epileptic who has experienced faint spell or seizure</li>
//         <ul>If you are diabetic, please have a doctors note with medication + controlled diet</ul>
//         <ul>If you received botox 3 months before</ul>
//         </p>
//       </div>

//       <div className="profile">
//       <h2>Things to Avoid Before Your Appointment</h2>
//       <p className="ptag">
//       <ul>Blood thinners: vitamin E, fish oil, blood thinning medications, & etc. Avoid these substances for 48 hours prior to your appointment. Avoid caffeine (coffee/tea) and alcohol for 72 hours prior. These substances cause excessive bleeding that will affect the outcome.</ul>

//       <ul>Smoking any substances for 72 hours prior.</ul>

//       <ul>Exfoliating, chemical peels, and retinol for at least 2 weeks prior to your appointment date.</ul>

//       <ul>Waxing, threading, plucking your brows for 2 weeks prior to your appointment date.</ul>
//       </p>
//       </div>
      

//       <div className="profile">
//       <h2>Brow Cover Up/ Correction</h2>
//       <p className="ptag">
//       <ul>This applies to you if you have any style brow tattoo that was done by another artist.</ul>

//       <ul>Please email us 3 pictures of your bare brows in good lighting. (left 3/4. front facing, right 3/4)</ul>

//       <ul>DO NOT BOOK UNTIL YOU GET CLEARANCE FROM US. Unfortunately, not all brows can be corrected. We cannot work on compromised skin.</ul>
//       </p>
//       </div>


//       <div className="profile">
//       <h2>Contradictions</h2>
//       <p className="ptag">

//       <ul>Permanent cosmetic procedures are not recommended if any of the contraindications listed below apply to you. Please consult with your physician prior to booking.</ul>

//       <ul>Under 18 years of age.</ul>

//       <ul>Pregnant and/or breastfeeding.</ul>

//       <ul>History of allergy to makeup and pigmentation.</ul>

//       <ul>Skin disorders such as eczema or psoriasis in the area to be treated (acne, sunburn, rashes, etc)</ul>

//       <ul>Had Botox/Injections in the past 2 months in the area to be treated</ul>

//       <ul>Active skin cancer in treated area</ul>

//       <ul>History of post inflammatory hyperpigmentation/keloid scarring</ul>

//       <ul>Prescribed blood thinning medications</ul>

//       <ul>Hemophiliac</ul>

//       <ul>Healing disorders</ul>

//       <ul>On accutane, antasure, or steroids</ul>

//       <ul>Undergoing chemotherapy (Must be no less than 7 months ago from date of procedure)</ul>

//       <ul>Epilepsy, seizures</ul>

//       <ul>Surgeries including blepharoplasty and or brow lift in the last 6 months</ul>

//       <ul>Viral infections/diseases:</ul>

//       <li>Hepatitis or HIV</li>

//       <li>Diabetes</li>

//       <ul>BY BOOKING, YOU CONFIRM THAT YOU HAVE READ EVERYTHING, AND AGREE TO ALL TERMS & CONDITIONS LISTED ABOVE.</ul>
//     </p>
//       </div>
      

//       <div className="profile">
//       <h2>TERMS & CONDITIONS</h2>
//       <p className="ptag">
//       <ul>All appointments require a deposit fee that will go towards your service. The deposit is NON-REFUNDABLE under any circumstance. Cancellation for any reason will result in forfeiting your deposit.</ul>

//       <ul>72 hours notice is required for rescheduling. If you are unable to notify us before the 72 hour mark you will not be allowed to transfer the deposit over to the next appointment. Deposit is only transferrable once if rescheduling is before the 72 hour mark.</ul>

//       <ul>No shows will not be able to book another future appointment.</ul>

//       <ul>Late policy: please let us know if you are running late. You have a 15 minute grace period before your appointment gets cancelled.</ul>

//       <ul>You will receive an email confirmation upon booking and a email reminder sent out 72 hours in advance. Make sure to read everything in the emails to achieve the best outcome for your service.</ul>
      
//       <ul>NO ADDITIONAL GUESTS ALLOWED due to covid safety precautions and unwanted distractions.</ul>

//       <ul>All services that were provided are NON-REFUNDABLE under any circumstances. If there are any issues, we will try our best to correct them. Everyone's skin takes in permanent make up differently, therefore, we cannot guarantee a 100% successful result.</ul>

//       <ul>Results may vary due to the individuals skin type, blood type, lifestyle, existing hair, bone structure, use of medications, and aftercare.</ul>

//       <ul>Photos and videos will be taken before, during, and after the procedure for marketing purposes.</ul>

//       <ul>We reserve the right to refuse service at any time for any reason</ul>

//       <ul>Prices are subject to change at any time WITHOUT NOTICE.</ul>
//       </p>
//       </div>
  
     
//     </div>
//     );
//   }
// }
 
// export default FAQ;



//ATTEMPT 2
// import React from 'react'
// import { createContext, useState, useEffect } from "react";

// export default function FAQ() {
//   const [theDisplay, setTheDisplay] = useState("none");

//   const faqBody = document.querySelectorAll(".faq-body");
//   console.log(faqBody)
//   faqBody.forEach((body)=>{
//     body.style.display= theDisplay
//   })
//     const faq = document.querySelectorAll(".faq-page");
//     for (let i = 0; i < faq.length; i++) {
//       const element = faq[i];
//       element.addEventListener("click", function () {
  
//         this.classList.toggle("active");
    
//         let body = this.nextElementSibling;
//         console.log(body.style.display)
//         if (body.style.display === "block") {
//           console.log("test")
//             body.style.display = "none";
//         } else {
//           console.log("else statement")
//             body.style.display = "block";
//         }
//       })
//     };

//     return (

//       <div><h1 className="faq-heading">FAQ'S</h1>
//       <div className="faq-container">

//         <div className="faq-one">
//           <h1 className="faq-page">Qualifications</h1>
//           <div className="faq-body">
//             <p>Age requirements: 21-45 years old. Please send photos of brows.
//               Must NOT HAVE any of the following conditions:
//               Transmittable blood related conditions or diseases such as Hepatitis or HIV/AIDS
//               Be pregnant or nursing
//               Skin allergies to pigments or make up
//               Glaucoma and/or taking blood thinning medicines
//               Skin concerns such as eczema, psoriasis or keloids in treatment area
//               Active skin cancer
//               Experience with post inflammatory hyper-pigmentation
//               Undiagnosed rashes or blisters in brow or lip area
//               Someone who is under or scheduled for radiotherapy or chemotherapy
//               Someone who is epileptic who has experienced faint spell or seizure
//               If you are diabetic, please have a doctors note with medication + controlled diet
//               If you received botox 3 months before
//             </p>
//           </div>
//         </div>

//         <hr className="hr-line"></hr>

//           <div className="faq-two">
//             <h1 className="faq-page">Things to Avoid Before Your Appointment</h1>
//             <div className="faq-body">
//               <p>Blood thinners: vitamin E, fish oil, blood thinning medications, & etc. Avoid these substances for 48 hours prior to your appointment. Avoid caffeine **coffee/tea** and alcohol for 72 hours prior. These substances cause excessive bleeding that will affect the outcome.
//                 Smoking any substances for 72 hours prior.
//                 Exfoliating, chemical peels, and retinol for at least 2 weeks prior to your appointment date.
//                 Waxing, threading, plucking your brows for 2 weeks prior to your appointment date.
//               </p>
//             </div>
//           </div>

//           <hr className="hr-line"></hr>

//           <div className="faq-three">
//             <h1 className="faq-page">Brow Cover Up/ Correction</h1>
//             <div className="faq-body">
//               <p>This applies to you if you have any style brow tattoo that was done by another artist.
//                 Please email us 3 pictures of your bare brows in good lighting. **left 3/4. front facing, right 3/4**
//                 DO NOT BOOK UNTIL YOU GET CLEARANCE FROM US. Unfortunately, not all brows can be corrected. We cannot work on compromised skin.
//               </p>
//             </div>
//           </div>

//           <hr className="hr-line"></hr>

//           <div className="faq-four">
//             <h1 className="faq-page">Contradictions</h1>
//             <div className="faq-body">
//               <p>Permanent cosmetic procedures are not recommended if any of the contraindications listed below apply to you. Please consult with your physician prior to booking.
//                 Under 18 years of age.
//                 Pregnant and/or breastfeeding.
//                 History of allergy to makeup and pigmentation.
//                 Skin disorders such as eczema or psoriasis in the area to be treated **acne, sunburn, rashes, etc**
//                 Had Botox/Injections in the past 2 months in the area to be treated
//                 Active skin cancer in treated area
//                 History of post inflammatory hyperpigmentation/keloid scarring
//                 Prescribed blood thinning medications
//                 Hemophiliac
//                 Healing disorders
//                 On accutane, antasure, or steroids
//                 Undergoing chemotherapy **Must be no less than 7 months ago from date of procedure**
//                 Epilepsy, seizures
//                 Surgeries including blepharoplasty and or brow lift in the last 6 months
//                 Viral infections/diseases:
//                 Hepatitis or HIV
//                 Diabetes
//                 BY BOOKING, YOU CONFIRM THAT YOU HAVE READ EVERYTHING, AND AGREE TO ALL TERMS & CONDITIONS LISTED ABOVE.
//               </p>
//             </div>
//           </div>

//           <hr className="hr-line"></hr>

//           <div className="faq-four">
//             <h1 className="faq-page">TERMS & CONDITIONS</h1>
//             <div className="faq-body">
//               <p>All appointments require a deposit fee that will go towards your service. The deposit is NON-REFUNDABLE under any circumstance. Cancellation for any reason will result in forfeiting your deposit.
//                 72 hours notice is required for rescheduling. If you are unable to notify us before the 72 hour mark you will not be allowed to transfer the deposit over to the next appointment. Deposit is only transferrable once if rescheduling is before the 72 hour mark.
//                 No shows will not be able to book another future appointment.
//                 Late policy: please let us know if you are running late. You have a 15 minute grace period before your appointment gets cancelled.
//                 You will receive an email confirmation upon booking and a email reminder sent out 72 hours in advance. Make sure to read everything in the emails to achieve the best outcome for your service.
//                 NO ADDITIONAL GUESTS ALLOWED due to covid safety precautions and unwanted distractions.
//                 All services that were provided are NON-REFUNDABLE under any circumstances. If there are any issues, we will try our best to correct them. Everyone's skin takes in permanent make up differently, therefore, we cannot guarantee a 100% successful result.
//                 Results may vary due to the individuals skin type, blood type, lifestyle, existing hair, bone structure, use of medications, and aftercare.
//                 Photos and videos will be taken before, during, and after the procedure for marketing purposes.
//                 We reserve the right to refuse service at any time for any reason
//                 Prices are subject to change at any time WITHOUT NOTICE.
//               </p>
//             </div>
//           </div>

//        </div></div>
//     );
//     }

import React, { useState, useEffect } from "react";
const faqsExamples = [
  {
    question: "Qualifications",
    answer:
      "Age requirements: 21-45 years old. Please send photos of brows. Must NOT HAVE any of the following conditions:Transmittable blood related conditions or diseases such as Hepatitis or HIV/AIDS.Be pregnant or nursing.Skin allergies to pigments or make up.Glaucoma and/or taking blood thinning medicines.Skin concerns such as eczema, psoriasis or keloids in treatment area.Active skin cancer.Experience with post inflammatory hyper-pigmentation.Undiagnosed rashes or blisters in brow or lip area.Someone who is under or scheduled for radiotherapy or chemotherapy.Someone who is epileptic who has experienced faint spell or seizure.If you are diabetic, please have a doctors note with medication + controlled diet.If you received botox 3 months before",
    display: false,
  },
  {
    question: "Things to Avoid Before Your Appointment",
    answer:
      "Blood thinners: vitamin E, fish oil, blood thinning medications, & etc. Avoid these substances for 48 hours prior to your appointment. Avoid caffeine **coffee/tea** and alcohol for 72 hours prior. These substances cause excessive bleeding that will affect the outcome. Smoking any substances for 72 hours prior.Exfoliating, chemical peels, and retinol for at least 2 weeks prior to your appointment date.Waxing, threading, plucking your brows for 2 weeks prior to your appointment date.",
    display: false,
  },
  {
    question: "Brow Cover Up/ Correction",
    answer:
      "This applies to you if you have any style brow tattoo that was done by another artist.Please email us 3 pictures of your bare brows in good lighting. **left 3/4. front facing, right 3/4** DO NOT BOOK UNTIL YOU GET CLEARANCE FROM US. Unfortunately, not all brows can be corrected. We cannot work on compromised skin.",
    display: false,
  },
  {
    question: "Contradictions",
    answer:
      "Permanent cosmetic procedures are not recommended if any of the contraindications listed below apply to you. Please consult with your physician prior to booking. Under 18 years of age.Pregnant and/or breastfeeding.History of allergy to makeup and pigmentation. Skin disorders such as eczema or psoriasis in the area to be treated **acne, sunburn, rashes, etc** Had Botox/Injections in the past 2 months in the area to be treated. Active skin cancer in treated area. History of post inflammatory hyperpigmentation/keloid scarring. Prescribed blood thinning medications.Hemophiliac.Healing disorders.On accutane, antasure, or steroids. Undergoing chemotherapy **Must be no less than 7 months ago from date of procedure** Epilepsy, seizures. Surgeries including blepharoplasty and or brow lift in the last 6 months. Viral infections/diseases:Hepatitis or HIV,Diabetes. BY BOOKING, YOU CONFIRM THAT YOU HAVE READ EVERYTHING, AND AGREE TO ALL TERMS & CONDITIONS LISTED ABOVE.",
    display: false,
  },
  {
    question: "TERMS & CONDITIONS",
    answer:
      "All appointments require a deposit fee that will go towards your service. The deposit is NON-REFUNDABLE under any circumstance. Cancellation for any reason will result in forfeiting your deposit. 72 hours notice is required for rescheduling. If you are unable to notify us before the 72 hour mark you will not be allowed to transfer the deposit over to the next appointment. Deposit is only transferrable once if rescheduling is before the 72 hour mark. No shows will not be able to book another future appointment. Late policy: please let us know if you are running late. You have a 15 minute grace period before your appointment gets cancelled. You will receive an email confirmation upon booking and a email reminder sent out 72 hours in advance. Make sure to read everything in the emails to achieve the best outcome for your service. NO ADDITIONAL GUESTS ALLOWED due to covid safety precautions and unwanted distractions. All services that were provided are NON-REFUNDABLE under any circumstances. If there are any issues, we will try our best to correct them. Everyone's skin takes in permanent make up differently, therefore, we cannot guarantee a 100% successful result. Results may vary due to the individuals skin type, blood type, lifestyle, existing hair, bone structure, use of medications, and aftercare. Photos and videos will be taken before, during, and after the procedure for marketing purposes.We reserve the right to refuse service at any time for any reason Prices are subject to change at any time WITHOUT NOTICE.",
    display: false,
  },
];
export default function Faq() {
  const [faqs, setFaqs] = useState(faqsExamples);
  const displayHide = (clickedFaq) => {
    console.log("you just clicked");
    const displayFaqs = faqs.map((faq) => {
      // console.log(faq);
      if (clickedFaq === faq.question) {
        if (faq.display === true) {
          faq.display = false;
        } else if (faq.display === false) {
          faq.display = true;
        }
      }
      return faq;
    });
    // console.log({ displayFaqs });
    setFaqs(displayFaqs);
  };
  const faqsHTML = faqs.map((faq) => {
    // console.log(faq);
    if (faq.display === true) {
      return (
        <div
          onClick={() => {
            displayHide(faq.question);
          }}
          key={faq.question}
        >
          <h1>{faq.question}</h1>
          <p>{faq.answer}</p>
        </div>
      );
    } else if (faq.display === false) {
      return (
        <div
          onClick={() => {
            displayHide(faq.question);
          }}
          key={faq.question}
        >
          <h1>{faq.question}</h1>
        </div>
      );
    }
  });
  useEffect(() => {
    setFaqs(faqsExamples);
  }, []);

  return (
    <div>
       <div className="faq-one">
       <h1 className="faq-page">{faqsHTML}</h1>
       <div className="faq-body"></div>
    </div>
    </div>
  );
}