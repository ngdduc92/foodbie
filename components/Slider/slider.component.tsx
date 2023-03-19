import classNames from 'classnames/bind';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './slider.module.scss';
const cx = classNames.bind(styles);
function Slider() {
  return (
    <Carousel
      autoPlay
      autoFocus={true}
      centerMode
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      selectedItem={10}
      className={cx('slider')}
    >
      <div className={cx('slider__item')}>
        <img alt="Picture 1" src="assets/images/images.jfif" />
      </div>
      <div className={cx('slider__item')}>
        <img alt="Picture 2" src="assets/images/images1.jfif" />
      </div>
      <div className={cx('slider__item')}>
        <img alt="Picture 3" src="assets/images/images2.jfif" />
      </div>
      <div className={cx('slider__item')}>
        <img alt="Picture 3" src="assets/images/images3.jfif" />
      </div>
    </Carousel>
  );
}

export default Slider;
