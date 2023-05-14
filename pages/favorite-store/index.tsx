import React from 'react';
import classNames from 'classnames/bind';
import styles from './favorite-store.module.scss';
import HeaderOption from '../../components/headerOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function FavoriteStore() {
  return (
    <div className={cx('wapper__favorite')}>
      <HeaderOption title={'Favorite store'} link={'/menu'} />
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
              Trà Sữa Maycha - Đồng Đen
            </span>
            <span className={cx('sub__title')}>Trà bông cúc bạc hà, Trà sâm thảo dược bảo bối</span>
            <div className={cx('evaluate')}>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <span>4.0</span>
              <span>(15+) &ensp; &#8226; &ensp;0.1km</span>
            </div>
            <div className={cx('promotion')}>
              <span>Giảm 15% tối đa 100k</span>
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
              Trà Sữa Maika - Thành Long
            </span>
            <span className={cx('sub__title')}>Trà bông cúc bạc hà, Trà sâm thảo dược bảo bối</span>
            <div className={cx('evaluate')}>
              <i>
                <FontAwesomeIcon icon={faStar} />
              </i>
              <span>4.0</span>
              <span>(15+) &ensp; &#8226; &ensp;0.1km</span>
            </div>
            <div className={cx('promotion')}>
              <span>Giảm 15% tối đa 100k</span>
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
  );
}
