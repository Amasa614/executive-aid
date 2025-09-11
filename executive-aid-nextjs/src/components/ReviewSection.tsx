
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
type Review = {
  client: string;
  rating: number;
  comment: string;
  project: string;
};

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [average, setAverage] = useState<number>(0);

  useEffect(() => {
// Replace this with a fetch from your backend in production
    const mockReviews = [
      {
        client: "John Doe",
        rating: 5,
        comment: "The team was amazing, very professional and timely!",
        project: "Custom SaaS Platform",
      },
      {
        client: "Sarah Smith",
        rating: 5,
        comment: "Great experience, though we needed a few revisions.",
        project: "E-commerce Website",
      },
      {
        client: "David Johnson",
        rating: 5,
        comment: "Excellent service, exceeded our expectations!",
        project: "Mobile App Development",
      },
      {
        client: "Amina Yusuf",
        rating: 5,
        comment: "Very good support and smooth process overall.",
        project: "Company Website Redesign",
      },
    ];

    setReviews(mockReviews);

    const avg =
      mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length;
    setAverage(Number(avg.toFixed(1)));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-900 mb-2">10+</div>
            <div className="text-gray-600">Clients</div>
          </div>

          {/* Dynamic Ratings Stat */}
          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-900 mb-2">
              ⭐ {average}/5
            </div>
            <div className="text-gray-600">
              Client Ratings ({reviews.length} reviews)
            </div>
          </div>

          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-900 mb-2">10+</div>
            <div className="text-gray-600">Virtual Assistants</div>
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                <p className="text-lg text-indigo-900 font-semibold mb-1">{review.client}</p>
                <p className="text-yellow-500 mb-2">{"⭐".repeat(review.rating)}</p>
                <p className="text-gray-700 mb-3">“{review.comment}”</p>
                <p className="text-sm text-gray-500">— {review.project}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
