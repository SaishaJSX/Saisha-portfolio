import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-pink-100 w-full py-16 px-6 flex flex-col items-center">
      <div className="bg-white rounded-3xl px-8 py-14 w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-pink-700 border-b border-pink-600 pb-2 mb-14 font-serif">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
