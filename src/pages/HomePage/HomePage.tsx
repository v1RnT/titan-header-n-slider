import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./HomePage.module.scss";
import { SliderContent } from "../../components/SliderContent";

import firstPic from "../../images/photos/first.svg";
import secondPic from "../../images/photos/second.svg";
import thirdPic from "../../images/photos/third.svg";

import firstFig from "../../images/figures/first.svg";
import secondFig from "../../images/figures/second.svg";
import thirdFig from "../../images/figures/third.svg";

export const HomePage = () => {
  const slides = [
    {
      title: "With our advanced financial technologies",
      description:
        "Your brokerage business will be up and running within the shortest time the industry has to offer.",
      figSrc: firstFig,
      imgSrc: firstPic,
    },
    {
      title: "Looking to open a brokerage?",
      description: "Get your business plan ready with our experts.",
      figSrc: secondFig,
      imgSrc: secondPic,
    },
    {
      title: "Are you an established company?",
      description:
        "Time to make changes and get better technological solution and pricing!",
      figSrc: thirdFig,
      imgSrc: thirdPic,
    },
  ];

  return (
    <div className={styles.swiper__container}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          el: "#num",
          type: "bullets",
          clickable: true,
          bulletClass: styles.customBullet,
          bulletActiveClass: styles.customBulletActive,
          renderBullet: function (_, className) {
            return `<span class="${className} ${styles.customBullet}"></span>`;
          },
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={1400}
        style={{ width: "100%", maxWidth: "100%" }}
        className="mySlider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderContent
              title={slide.title}
              description={slide.description}
              figSrc={slide.figSrc}
              imgSrc={slide.imgSrc}
            />
          </SwiperSlide>
        ))}
        <div id="num" className={styles.bullet__container}></div>
      </Swiper>
    </div>
  );
};
