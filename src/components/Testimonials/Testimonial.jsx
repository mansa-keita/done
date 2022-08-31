import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import lama from "../../img/lama.jpg"
import Mo from "../../img/Mo.jpg"

const Testimonial = () => {
  const clients = [
    {
      img: lama,
      review:
        "Lamarana jallow,  Sundiata is a hardworking student, his hardworking does not only stop in class but even outside the four conner of the class. Am sure he is ready for the industry ",
    },
    {
      img: Mo,
      review:
        "Mo jallo, sundiata is creative and innovative and he is ready for industry  ",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Recomendation from </span>
        <span>lectures </span>
        <span>UTG and mentors...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
