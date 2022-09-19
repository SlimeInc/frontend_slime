import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay, EffectFade } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import styles from "./Exchange.module.scss";

///////////////////////////////////////

const Carousel = (slides) => {
  console.log(`slides`, slides);

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
      {slides?.data.map((slide) => (
        <SwiperSlide className={styles.slide} key={slide.symbol}>
          <a href={slide.coinrankingUrl} target="_blank">
            <img src={slide.iconUrl} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
