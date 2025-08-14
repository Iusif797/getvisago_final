import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import strelkaIcon from '../../assets/strelka.svg';
import questionsButton from '../../assets/questions_svg.svg';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;
  const isMobile = width < 768;

  const faqItems = [
    { type: 'heading', title: 'About the Service' },
    {
      question: 'What is an e-Visa and why is it convenient?',
      answer: (
        <>
          <p>An electronic visa (e‑Visa) is an official travel authorization issued online. You don’t need to visit an embassy — just fill out the application on our website, upload your documents, make the payment, and receive your visa by email.</p>
        </>
      )
    },
    {
      question: 'How does GetVisaGo work?',
      answer: (
        <ol className="list-decimal pl-6 space-y-1">
          <li>Choose your destination on our website.</li>
          <li>Fill in a short online form.</li>
          <li>Upload your documents (passport, photo, and sometimes tickets or hotel booking).</li>
          <li>Pay with a Visa or MasterCard card.</li>
          <li>We check everything and submit your application to the official government portal.</li>
          <li>Receive your visa by email and WhatsApp.</li>
        </ol>
      )
    },
    {
      question: 'Are you a government website?',
      answer: (
        <p>No. We are a UK‑based private company (GetVisaGo Ltd, No. 16470281). We are not affiliated with any government. We submit applications only through official visa portals to ensure your visa is processed without errors or delays.</p>
      )
    },
    {
      question: 'Who can apply through GetVisaGo?',
      answer: (
        <p>Primarily Indian citizens and their family members. We handle tourist, business, transit, and in some cases medical or student e‑Visas.</p>
      )
    },
    { type: 'heading', title: 'About Visas' },
    {
      question: 'What types of visas can I apply for?',
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Tourist Visa — leisure, sightseeing, visiting friends.</li>
          <li>Business Visa — meetings, conferences, exhibitions.</li>
          <li>Transit Visa — connecting flights in another country.</li>
          <li>Medical Visa — treatment purposes.</li>
          <li>Student Visa — courses, internships.</li>
        </ul>
      )
    },
    {
      question: 'What documents are required for an e‑Visa?',
      answer: (
        <div className="space-y-2">
          <div>
            <div className="font-semibold">In most cases:</div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Passport valid for at least 6 months.</li>
              <li>Photo with a light background.</li>
              <li>Travel dates.</li>
              <li>Email and phone number.</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Sometimes:</div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Flight tickets, hotel booking, bank statement, or invitation letter.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: 'How long does processing take?',
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Standard: 24–72 hours.</li>
          <li>Urgent: from 6–12 hours (if available).</li>
          <li>Some countries: up to 7 working days (e.g., Vietnam).</li>
        </ul>
      )
    },
    {
      question: 'What is the validity period of the visa?',
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>UAE: 30 or 90 days.</li>
          <li>Saudi Arabia: 1 year (multiple entry, up to 90 days per visit).</li>
          <li>Turkey: 180 days (up to 30 days stay).</li>
          <li>Vietnam: 30 or 90 days.</li>
        </ul>
      )
    },
    {
      question: 'Can I enter multiple times?',
      answer: (<p>Yes, if your visa is Multiple Entry. The entry type is shown on each country’s page.</p>)
    },
    {
      question: 'Do I need to print my visa?',
      answer: (<p>We recommend printing it — even if the country accepts an electronic copy, border officers may request a paper version.</p>)
    },
    { type: 'heading', title: 'Before Traveling' },
    {
      question: 'Are vaccinations or tests required?',
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Some countries require a yellow fever vaccination certificate.</li>
          <li>COVID‑19 tests are not required in most countries, but check before traveling.</li>
        </ul>
      )
    },
    {
      question: 'What might be requested at border control?',
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Passport and e‑Visa.</li>
          <li>Return ticket.</li>
          <li>Proof of accommodation.</li>
          <li>Proof of sufficient funds (sometimes).</li>
        </ul>
      )
    },
    {
      question: 'Can I enter from a third country?',
      answer: (<p>Yes, if permitted by the visa rules.</p>)
    },
    { type: 'heading', title: 'Application & Corrections' },
    {
      question: 'Can I apply for my whole family?',
      answer: (<p>Yes. You can include several travelers in one application — it’s faster and easier.</p>)
    },
    {
      question: 'What if there’s an error in my application?',
      answer: (<p>If we haven’t submitted it yet — we’ll fix it for free. After submission, changes depend on the country’s rules.</p>)
    },
    {
      question: 'What if my visa is refused?',
      answer: (<p>We review the reason, fix the documents, and resubmit.</p>)
    },
    { type: 'heading', title: 'Fees & Payment' },
    {
      question: 'How much does a visa cost?',
      answer: (<p>The price = government fee + GetVisaGo service fee (document check, application, and support). Both fees are displayed before payment.</p>)
    },
    {
      question: 'How can I pay?',
      answer: (<p>We only accept Visa and MasterCard (debit or credit cards). Other payment methods (UPI, RuPay, cash) are not accepted.</p>)
    },
    {
      question: 'Can I get a refund?',
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Before submission — we refund our service fee.</li>
          <li>After submission — government fees are usually non‑refundable.</li>
        </ul>
      )
    },
    {
      question: 'How do you store my documents?',
      answer: (<p>We comply with GDPR and the UK Data Protection Act. All data is encrypted and deleted after visa processing is completed.</p>)
    },
    {
      question: 'How will I know my visa status?',
      answer: (<p>We send updates by email and WhatsApp. You can also check the status on our website using your order number.</p>)
    },
    {
      question: 'Do you work with travel agencies?',
      answer: (<p>Yes, we have a partner program, B2B rates, and priority processing for agents.</p>)
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className={`w-full ${isMobile ? 'mobile-section' : 'py-10'} bg-[#F6F7FA]`}>
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {isMobile ? (
          <div className="flex justify-start items-start mb-6">
            <h2 className="text-3xl font-black tracking-tight leading-none bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #00C6A2 0%, #2F8CBD 100%)' }}>FAQ</h2>
          </div>
        ) : (
          <h2 className="text-4xl font-black tracking-tight leading-none mb-8 text-left bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #00C6A2 0%, #2F8CBD 100%)' }}>FAQ</h2>
        )}

        <div className={`${isDesktop ? 'grid grid-cols-2 gap-6' : 'space-y-4'} w-full`}>
          {faqItems.map((item, index) => {
            if (item.type === 'heading') {
              return (
                <div key={`h-${index}`} className={`col-span-2 ${index === 0 ? 'mt-0' : 'mt-8'} mb-2`}>
                  <h3 className="text-2xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #00BFA5 0%, #3B82F6 100%)' }}>
                    {item.title}
                  </h3>
                </div>
              );
            }
            return (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${openQuestion === index ? 'shadow-md' : ''} ${isMobile ? 'card-spacing' : ''}`}
              >
                <div
                  className={`flex justify-between items-center p-5 cursor-pointer ${isDesktop ? 'border border-gray-200 rounded-lg' : ''} ${openQuestion === index && !isDesktop ? 'bg-[#f8fafc]' : 'bg-white'}`}
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-base font-medium text-gray-800">{item.question}</h3>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M7 10L12 15L17 10" stroke="#9B51E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {openQuestion === index && (
                  <div className="p-5 bg-white text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!isDesktop && (
          <div className="w-full flex justify-center mt-8 mb-0">
            <img src={questionsButton} alt="More Questions" className="h-auto cursor-pointer" />
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ; 