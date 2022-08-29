import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, EffectFade } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "../Main.module.scss";
import Image from "next/image";
import { mediaByIndex } from "../../public/images";

///////////////////////////////////////
const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());
const Carousel = () => {
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
      slidesPerView={4}
      speed={30}
      // effect={"fade"}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={styles.swipe}
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <Image src={mediaByIndex(slide)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
