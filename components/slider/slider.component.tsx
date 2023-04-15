/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
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
    </Carousel>
  );
}

export default Slider;
