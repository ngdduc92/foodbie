import React from 'react';
import styles from './order.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer/footer.component';
const cx = classNames.bind(styles);

export default function Order() {
  return (
    <>
      <div className={cx('wapper__order')}>
        <div className={cx('Order__completed')}>
          <span className={cx('Order__completed__title')}>Orde completed</span>
          <div className={cx('Order__completed__content')}>
            <div className={cx('information__order')}>
              <div className={cx('order__date')}>
                <i>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </i>
                <span>&ensp; Delivered</span>
                <span>&ensp; &#8226; &ensp;18, Jul</span>
              </div>
              <span className={cx('information__shop')}>Trà Sữa MayCha - Đồng Đen</span>
              <div className={cx('information__price')}>
                <span>62.000đ (wallet MOMO) &#8226; 3 dishes</span>
              </div>
              <i className={cx('icon__information__order')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </i>
            </div>
            <div className={cx('again__oder')}>
              <span>Đặt Lại</span>
            </div>
          </div>
          <div className={cx('Order__completed__content')}>
            <div className={cx('information__order')}>
              <div className={cx('order__date')}>
                <i>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </i>
                <span>&ensp; Delivered</span>
                <span>&ensp; &#8226; &ensp;18, Jul</span>
              </div>
              <span className={cx('information__shop')}>Trà Sữa MayCha - Đồng Đen</span>
              <div className={cx('information__price')}>
                <span>182.000đ (wallet MOMO) &#8226; 6 dishes</span>
              </div>
              <i className={cx('icon__information__order')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </i>
            </div>
            <div className={cx('again__oder')}>
              <span>Đặt Lại</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
