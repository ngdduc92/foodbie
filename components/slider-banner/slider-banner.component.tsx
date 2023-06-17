/* eslint-disable @next/next/no-img-element */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './slider-banner.module.scss';
import Slider from 'react-slick';

const cx = classNames.bind(styles);

function SliderBanner() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <>
      <Slider {...sliderSettings} className={cx('slider')}>
        <div className={cx('slider__item')}>
          <img alt="picture 1" src="/assets/images/hero-1.jpg" width={800} height={500} />
        </div>
        <div className={cx('slider__item')}>
          <img alt="picture 1" src="/assets/images/hero-2.jpg" width={800} height={500} />
        </div>
        <div className={cx('slider__item')}>
          <img alt="picture 1" src="/assets/images/hero-3.jpg" width={800} height={500} />
        </div>
        <div className={cx('slider__item')}>
          <img alt="picture 1" src="/assets/images/hero-4.jpg" width={800} height={500} />
        </div>
      </Slider>
    </>
  );
}

export default SliderBanner;
