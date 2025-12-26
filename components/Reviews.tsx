
import React, { useState } from 'react';

const Reviews: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
    // In a real app, this would send to an API
  };

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Customer Feedback</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">
              We value our customers’ experience. Your feedback helps us improve our service and better serve our community.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">Your feedback has been submitted successfully.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-700 font-semibold underline"
                >
                  Submit another review
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-lg font-bold text-slate-800 mb-4">Leave a review or share your experience</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`text-3xl transition-colors ${
                          star <= (hover || rating) ? 'text-yellow-400' : 'text-slate-200'
                        }`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  {rating === 0 && <p className="text-red-500 text-xs mt-2">Please select a rating</p>}
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-semibold text-slate-700 mb-2">Your Comments</label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your experience with Wari Insurance..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={rating === 0}
                  className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                    rating === 0 ? 'bg-slate-300 text-slate-500 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 italic text-slate-600 text-sm">
              "Wari Insurance was extremely helpful in finding us a home insurance plan that fit our budget after we bought our first house."
              <p className="mt-4 font-bold text-slate-800 not-italic">- Maria G.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 italic text-slate-600 text-sm">
              "Responsive service and clear advice. I've switched all my business policies to them. Highly recommend!"
              <p className="mt-4 font-bold text-slate-800 not-italic">- David R.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 italic text-slate-600 text-sm">
              "The agents are very patient and explain the fine print so you know exactly what you're getting."
              <p className="mt-4 font-bold text-slate-800 not-italic">- Susan K.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
