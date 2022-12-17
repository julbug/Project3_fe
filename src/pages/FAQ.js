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
    answer:"All appointments require a deposit fee that will go towards your service. The deposit is NON-REFUNDABLE under any circumstance. Cancellation for any reason will result in forfeiting your deposit. 72 hours notice is required for rescheduling. If you are unable to notify us before the 72 hour mark you will not be allowed to transfer the deposit over to the next appointment. Deposit is only transferrable once if rescheduling is before the 72 hour mark. No shows will not be able to book another future appointment. Late policy: please let us know if you are running late. You have a 15 minute grace period before your appointment gets cancelled. You will receive an email confirmation upon booking and a email reminder sent out 72 hours in advance. Make sure to read everything in the emails to achieve the best outcome for your service. NO ADDITIONAL GUESTS ALLOWED due to covid safety precautions and unwanted distractions. All services that were provided are NON-REFUNDABLE under any circumstances. If there are any issues, we will try our best to correct them. Everyone's skin takes in permanent make up differently, therefore, we cannot guarantee a 100% successful result. Results may vary due to the individuals skin type, blood type, lifestyle, existing hair, bone structure, use of medications, and aftercare. Photos and videos will be taken before, during, and after the procedure for marketing purposes.We reserve the right to refuse service at any time for any reason Prices are subject to change at any time WITHOUT NOTICE.",
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
          <h1 className="faq-page">{faq.question}</h1>
          <p className="show">{faq.answer}</p>
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
          <h1 className="faq-page">{faq.question}</h1>
        </div>
      );
    }
  });
  useEffect(() => {
    setFaqs(faqsExamples);
  }, []);

  return (
    <div>
       {faqsHTML}
    </div>
  );
}

