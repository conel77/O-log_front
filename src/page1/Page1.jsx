import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import banner from "./banner.png";
import banner2 from "./banner2.png";
import "./page1.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TopBar from "../component/topbar/TopBar";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Page1() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 백과 연동하는 부분
  };

  return (
    <div>
      <TopBar />
      <div>
        <Swiper
          className="swiper-container"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          effect={"fade"}
          autoplay={{ delay: 2000, speed: 1000 }}
        >
          <SwiperSlide className="swiper-slide">
            <img src={banner} className="banner" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="inputUrl"
          type="text"
          placeholder="여러분 가게의 리뷰URL을 올려주세요."
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="button">
          <Link className="link" to="/result">
            URL 입력
          </Link>
        </button>
      </form>
    </div>
  );
}
