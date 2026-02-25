import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/img_bg_1.jpg`,
    title1: "Men's",
    title2: "Shoes",
    title3: "Collection",
    subtitle: "New trending shoes",
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/img_bg_2.jpg`,
    title1: "Huge",
    title2: "Sale",
    title3: "50% Off",
    subtitle: "Big sale sandals",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/img_bg_3.jpg`,
    title1: "New",
    title2: "Arrival",
    title3: "Up to 30% Off",
    subtitle: "New stylish shoes for men",
  },
];
  return (
    <div style={{ height: "600px" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        style={{ height: "100%" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
              }}
            >
              <div>
                <h1>{slide.title1}</h1>
                <h2>{slide.title2}</h2>
                <h3>{slide.title3}</h3>
                <p>{slide.subtitle}</p>
                <button className="btn btn-primary">
                  Shop Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}