// components/ServiceArea.js

import Link from 'next/link';

const ServiceArea = () => {
  return (
    <section className="service-area sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-xl-4">
            <div className="title">
              <span>FAQs</span>
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
              <h5 className="mb-4 text-white">
                Common questions about being a Security...
              </h5>
              <h5 className="mb-4 text-white">
                Watch Security has successfully completed 13 years...
              </h5>
              <div className="cmn-btn">
                <Link href="/service">
                  <a>view all services</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8 col-xl-8">
            <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {/* Repeat this block for each FAQ */}
                <div className="border-b border-gray-200">
                  <button
                    aria-expanded="false"
                    aria-controls="faq1"
                    className="w-full flex justify-between items-center py-3 px-4 text-left text-gray-100 hover:bg-gray-800 focus:outline-none"
                  >
                    <span className="text-lg font-medium">
                      What types of security gates does Watch Security Gates Ltd offer?
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform rotate-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    id="faq1"
                    style={{ maxHeight: 0, opacity: 0, overflow: 'hidden' }}
                    className="py-3 px-4 text-gray-600"
                  >
                    {/* FAQ content */}
                  </div>
                </div>
                {/* End of FAQ block */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
