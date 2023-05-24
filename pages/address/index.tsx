import React from 'react';
import classNames from 'classnames/bind';
import styles from './address.module.scss';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faChevronRight, faBriefcase, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Address() {
  return (
    <div className={cx('wrapper__address')}>
      <div className={cx('address')}>
        <span className={cx('address__title')}>My address</span>
        <div className={cx('address__content')}>
          <div className={cx('address__content__item')}>
            <i className={cx('address__content__item__icon')}>
              <FontAwesomeIcon icon={faHouse} />
            </i>
            <div className={cx('text__address')}>
              <span className={cx('text__address__tile')}>Home</span>
              <span className={cx('text__address__subtitle')}>save address</span>
            </div>
            <i className={cx('icon__chevron-right')}>
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </div>
          <div className={cx('address__content__item')}>
            <i className={cx('address__content__item__icon')}>
              <FontAwesomeIcon icon={faBriefcase} />
            </i>
            <div className={cx('text__address')}>
              <span className={cx('text__address__tile')}>Company</span>
              <span className={cx('text__address__subtitle')}>save address</span>
            </div>
            <i className={cx('icon__chevron-right')}>
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </div>
        </div>
        <div className={cx('add__adress')}>
          <i className={cx('add__adress__icon')}>
            <FontAwesomeIcon icon={faPlus} />
          </i>
          <span>Add address</span>
        </div>
      </div>
    </div>
  );
}
