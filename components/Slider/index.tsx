import React from 'react';
import clsx from 'clsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Slider.module.scss';
function index() {
  return (
    <Carousel
      autoPlay
      centerMode
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={10}
      className={styles.Slider}
    >
      <div className="slider__item">
        <img alt="Picture 1" src="assets/img/images.jfif" />
      </div>
      <div className="slider__item">
        <img alt="Picture 2" src="assets/img/images1.jfif" />
      </div>
      <div className="slider__item">
        <img alt="Picture 3" src="assets/img/images2.jfif" />
      </div>
      <div className="slider__item">
        <img alt="Picture 3" src="assets/img/images3.jfif" />
      </div>
    </Carousel>
  );
}

export default index;
