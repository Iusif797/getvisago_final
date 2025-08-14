import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiUser } from 'react-icons/bi';

const reviewsData = [
  {
    id: 1,
    name: 'Rahul M.',
    rating: 5,
    text: 'I needed a Dubai tourist e‑Visa urgently. Uploaded my documents late evening, paid with my Visa card, and got approval the next afternoon. The process was simple and I received clear instructions on WhatsApp.',
    date: '15 Aug 2025',
    source: 'google',
  },
  {
    id: 2,
    name: 'Priya S.',
    rating: 5,
    text: 'Planned a family trip to Turkey with parents. GetVisaGo checked our photos, fixed a mistake in our travel dates, and kept us updated. Immigration was smooth because we followed their advice to print the visa.',
    date: '02 Jul 2025',
    source: 'google',
  },
  {
    id: 3,
    name: 'Arjun K.',
    rating: 5,
    text: 'Applied for a Vietnam tourist e‑Visa. The checklist was spot on, the online tracker showed every stage, and support even replied late at night. Approval came in 48 hours.',
    date: '28 Jun 2025',
    source: 'google',
  },
  {
    id: 4,
    name: 'Neha P.',
    rating: 4,
    text: 'Applied for an Australia e‑Visa. Paid with my MasterCard without any problems. No hidden fees – everything was clear. The visa arrived on time, but the upload page could be a bit faster.',
    date: '03 May 2025',
    source: 'google',
  },
  {
    id: 5,
    name: 'Sameer R.',
    rating: 5,
    text: 'Got my Saudi tourist e‑Visa. They helped resize my photo and submitted the application the same day. Two days later I received the approval PDF by email and WhatsApp.',
    date: '19 Apr 2025',
    source: 'google',
  },
  {
    id: 6,
    name: 'Kavita D.',
    rating: 5,
    text: 'Booked an Azerbaijan trip at the last minute. The form took only 10 minutes, and they noticed my passport was expiring soon – saved me a big problem. Visa approved in less than 24 hours.',
    date: '07 Mar 2025',
    source: 'google',
  },
  {
    id: 7,
    name: 'Vikram L.',
    rating: 4,
    text: 'Applied for a South Korea tourist e‑Visa. They suggested a multiple‑entry option, which was useful. Service was professional, but more payment options beyond Visa/MasterCard would be nice.',
    date: '12 Jan 2025',
    source: 'google',
  },
  {
    id: 8,
    name: 'Anjali C.',
    rating: 5,
    text: 'Travelling with elderly parents to Sri Lanka. Group application was perfect – one payment, same documents for all, and regular updates. No stress at Colombo airport.',
    date: '22 Dec 2024',
    source: 'google',
  },
  {
    id: 9,
    name: 'Deepak B.',
    rating: 5,
    text: 'Oman e‑Visa approved in just 36 hours. They even sent arrival tips for Muscat and reminded me to print the visa. Exactly what I needed.',
    date: '15 Nov 2024',
    source: 'google',
  },
  {
    id: 10,
    name: 'Sneha G.',
    rating: 4,
    text: 'My first time using an online visa service for Bahrain. The instructions were simple and transparent. It took slightly longer than expected, but the visa came through without issues.',
    date: '28 Oct 2024',
    source: 'google',
  },
  {
    id: 11,
    name: 'Ramesh T.',
    rating: 5,
    text: 'Applied for Cambodia. The mobile upload worked perfectly; they even resized my photo for free. Payment with Visa went through instantly, and approval came earlier than expected.',
    date: '05 Sep 2024',
    source: 'google',
  },
  {
    id: 12,
    name: 'Ishita N.',
    rating: 5,
    text: 'Malaysia tourist e‑Visa – clear document list and fast review. WhatsApp updates kept me informed all the way. Will recommend to friends.',
    date: '16 Aug 2024',
    source: 'google',
  },
  {
    id: 13,
    name: 'Karan S.',
    rating: 4,
    text: 'Applied for an Israel e‑Visa. They checked everything line by line and pricing was transparent. The mobile site could load faster, but overall a very good experience.',
    date: '27 Jul 2024',
    source: 'google',
  },
  {
    id: 14,
    name: 'Meera J.',
    rating: 5,
    text: 'Applied for Vietnam from my phone during lunch break. The mobile form was easy to use, the tracker showed progress, and support replied quickly. Will use again for Thailand.',
    date: '09 Jun 2024',
    source: 'google',
  },
];

const DesktopReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

  const prev = () => {
    setCurrentPage((currentPage - 1 + totalPages) % totalPages);
  };

  const next = () => {
    setCurrentPage((currentPage + 1) % totalPages);
  };

  const currentReviews = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, reviewsData.length);
    return reviewsData.slice(startIndex, endIndex);
  };

  // Функция для рендеринга звезд рейтинга
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="w-full py-16 bg-[#F6F7FA]">
      <div className="w-full px-4 max-w-[1400px] mx-auto relative">
        <div className="flex justify-between items-start mb-12">
          <h2
            className="text-4xl font-extrabold bg-clip-text text-transparent tracking-tight"
            style={{ backgroundImage: 'linear-gradient(90deg, #00BFA5 0%, #7C3AED 100%)' }}
          >
            Reviews
          </h2>

          <div className="flex space-x-3">
            <button
              onClick={prev}
              className="w-9 h-9 bg-[#7C3AED] rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-300 hover:bg-[#9061F9] hover:scale-105"
              aria-label="Previous"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 bg-[#7C3AED] rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-300 hover:bg-[#9061F9] hover:scale-105"
              aria-label="Next"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentReviews().map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px] border border-gray-100 flex flex-col"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center mb-4 justify-center">
                    {review.avatar ? (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 flex items-center justify-center text-white font-bold mr-3 shadow-md">
                        {review.avatar}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 flex items-center justify-center text-white mr-3 shadow-md">
                        <BiUser size={22} />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900">{review.name}</h3>
                  </div>
                  <div className="flex mb-4 justify-center">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 mb-6 line-clamp-4 text-center">
                    {review.text}
                  </p>
                </div>
                {/* Meta row (date, source) intentionally removed per design spec */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                ? 'bg-violet-600 transform scale-125'
                : index === currentPage - 1 || index === currentPage + 1
                  ? 'bg-violet-300'
                  : 'bg-violet-200'
                }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesktopReviews; 