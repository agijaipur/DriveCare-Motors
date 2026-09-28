import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, MessageSquare } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    category: "Rental Requirements",
    questions: [
      {
        q: "What documents do I need to rent a car?",
        a: "For self-drive rentals, you need a valid original Driving License, Aadhar Card (or Passport for foreign nationals), and a credit/debit card for the security deposit."
      },
      {
        q: "What is the minimum age to rent a car?",
        a: "The minimum age requirement is 21 years with at least 1 year of driving experience."
      }
    ]
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "Is fuel included in the rental price?",
        a: "No, fuel is not included. You will receive the car with a certain fuel level and must return it with the same level, or pay for the difference."
      },
      {
        q: "Do you charge a security deposit?",
        a: "Yes, a refundable security deposit is required. The amount varies depending on the vehicle category."
      },
      {
        q: "Are there extra charges for outstation travel?",
        a: "Outstation travel is subject to extra kilometer charges if you exceed the included km limit, plus state border taxes and toll charges which are borne by the customer."
      }
    ]
  },
  {
    category: "Detailing Services",
    questions: [
      {
        q: "How long does a ceramic coating take?",
        a: "Our premium 9H Ceramic Coating process takes approximately 2 days, as it involves thorough paint correction, multiple layers of coating, and curing time."
      },
      {
        q: "Do I need to book in advance for car washing?",
        a: "While walk-ins are welcome for basic washes, we highly recommend booking in advance for deep cleaning and detailing services to avoid waiting times."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-soft min-h-screen">
      {/* Header */}
      <div className="bg-brand-black text-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-brand-gray/80 max-w-2xl mx-auto">
            Find answers to common questions about our car rental and detailing services in Surat.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-brand-white border-b border-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-brand-gray-dark">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="font-medium text-brand-black">FAQs</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-brand-black">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((faq, faqIdx) => {
                const id = `${sectionIdx}-${faqIdx}`;
                const isOpen = openIndex === id;
                return (
                  <div 
                    key={id} 
                    className={clsx(
                      "bg-brand-white rounded-lg border transition-all duration-300 overflow-hidden",
                      isOpen ? "border-brand-accent shadow-md" : "border-brand-gray shadow-sm hover:border-brand-gray-dark"
                    )}
                  >
                    <button
                      onClick={() => toggleAccordion(id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                    >
                      <span className="font-semibold text-brand-black pr-8">{faq.q}</span>
                      <ChevronDown 
                        size={20} 
                        className={clsx(
                          "text-brand-gray-dark transition-transform duration-300 flex-shrink-0",
                          isOpen ? "transform rotate-180 text-brand-accent" : ""
                        )} 
                      />
                    </button>
                    <div 
                      className={clsx(
                        "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <p className="text-brand-gray-dark leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-16 bg-brand-white p-8 rounded-2xl shadow-sm border border-brand-gray text-center">
          <MessageSquare size={40} className="mx-auto text-brand-accent mb-4" />
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-brand-gray-dark mb-6">Our team is here to help you with any queries you might have.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary px-8">Contact Us</Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary px-8 flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
