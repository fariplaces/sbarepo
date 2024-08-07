import React, { useState } from 'react';
import Link from 'next/link';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-3 px-4 text-left text-gray-100 hover:bg-gray-800 focus:outline-none"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? '1' : '0', overflow: 'hidden' }}
        className="py-3 px-4 text-gray-600 transition-all duration-500"
      >
        {answer}
      </div>
    </div>
  );
};

const ServiceArea = () => {
  const faqs = [
    {
      question: 'What types of security gates does Watch Security Gates Ltd offer?',
      answer: 'We offer a variety of security gates including swing gates, sliding gates, and more.'
    },
    {
      question: 'How long does the installation process take?',
      answer: 'The installation process typically takes between 1-2 days depending on the complexity of the project.'
    },
    {
      question: 'Are your security gates durable and weather-resistant?',
      answer: 'Yes, our security gates are designed to withstand various weather conditions and are highly durable.'
    },
    {
      question: 'Can you customize the design of the security gate to match my property\'s aesthetics?',
      answer: 'Absolutely, we offer customization options to ensure the security gate complements your property\'s aesthetics.'
    },
    {
      question: 'Do you provide maintenance and repair services for security gates?',
      answer: 'Yes, we provide comprehensive maintenance and repair services to keep your security gates in top condition.'
    }
  ];

  return (
    <section className="service-area sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-4">
            <div className="title">
              <span>FAQs</span>
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
              <h5 className="mb-4 text-white">Common questions about being a Security</h5>
              <h5 className="mb-4 text-white">
                Watch Security has successfully completed 13 years in the private security industry. Due to its professionalism,
                hard work, and high ethical standards, Orion has been able to attain...
              </h5>
              <div className="cmn-btn">
                <Link href="/service">
                  view all services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8 col-xl-8">
            <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
