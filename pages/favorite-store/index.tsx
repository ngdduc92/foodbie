import React from 'react';
import classNames from 'classnames/bind';
import styles from './favorite-store.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer/footer.component';

const cx = classNames.bind(styles);

export default function FavoriteStore() {
  return (
    <>
      <div className={cx('wapper__favorite')}>
        <div className={cx('favorite__content')}>
          <div className={cx('favorite__content__item')}>
            <div className={cx('item__right')}>
              <img src="assets/images/maycha.jpg" />
            </div>
            <div className={cx('item__left')}>
              <span className={cx('title__item__left')}>
                <i>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </i>
                MayCha Milk Tea
              </span>
              <div className={cx('evaluate')}>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <span>4.0</span>
                <span>{'(15+) • 0.1km'}</span>
              </div>
              <div className={cx('promotion')}>
                <span>15% off menu</span>
              </div>
              <div className={cx('heart')}>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </div>
            </div>
          </div>
          <div className={cx('favorite__content__item')}>
            <div className={cx('item__right')}>
              <img src="assets/images/maika.jpg" />
            </div>
            <div className={cx('item__left')}>
              <span className={cx('title__item__left')}>
                <i>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </i>
                Maika Milk Tea
              </span>
              <div className={cx('evaluate')}>
                <i>
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <span>4.0</span>
                <span>{'(15+) • 0.1km'}</span>
              </div>
              <div className={cx('promotion')}>
                <span> 15% off menu</span>
              </div>
              <div className={cx('heart')}>
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
