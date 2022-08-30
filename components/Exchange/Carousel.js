import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, EffectFade } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "./Exchange.module.scss";
import Image from "next/image";
import { mediaByIndex } from "../../public/images";

///////////////////////////////////////
// const SLIDE_COUNT = 20;
// const slides = Array.from(Array(SLIDE_COUNT).keys());
const Carousel = ({ data }) => {
  const slides = data.data.coins;
  console.log(slides);
  // Now you can use Swiper
  // const swiper = new Swiper(".swiper", {
  //   // Install modules
  //   modules: [A11y, Autoplay, EffectCoverflow],
  //   speed: 500,
  // });
  return (
    <Swiper
      // install Swiper modules
      autoplay={true}
      modules={[A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={9}
      speed={1}
      // effect={"fade"}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={styles.swipe}
    >
      {slides.map((slide) => (
        <SwiperSlide className={styles.slide} key={slide.symbol}>
          <img src={slide.iconUrl}  />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
