import React, { useState } from 'react';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronRight,
  faArrowLeft,
  faReceipt,
  faHeart,
  faMapLocationDot,
  faWallet,
  faShieldHalved,
  faCreditCard,
  faStar,
  faBell,
  faHeadphonesSimple,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function SideMenu() {
  const router = useRouter();

  const back = () => {
    router.push('/');
  };
  return (
    <nav className={cx('wrapper__menu')}>
      <div className={cx('header__menu')}>
        <i>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              back();
            }}
          />
        </i>
        <p>Account Information</p>
      </div>
      <div className={cx('profile')}>
        <a href="/profile">
          <div className={cx('user__sidebar')}>
            <i className={cx('user__icon')}>
              <FontAwesomeIcon icon={faUser} />
            </i>
            <p>Profile</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      <div className={cx('utility__list')}>
        <div className={cx('utility__item')}>
          <div className={cx('utility__item__content')}>
            <FontAwesomeIcon icon={faReceipt} />
            <label>Order</label>
          </div>
        </div>
        <div className={cx('utility__item')}>
          <div className={cx('utility__item__content')}>
            <FontAwesomeIcon icon={faHeart} />
            <label>Favorite store</label>
          </div>
        </div>
        <div className={cx('utility__item')}>
          <div className={cx('utility__item__content')}>
            <FontAwesomeIcon icon={faMapLocationDot} />
            <label>Address</label>
          </div>
        </div>
      </div>

      <ul className={cx('payment__option')}>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faWallet} />
            </i>
            <p>Wallet Coupon</p>
          </a>
        </li>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faCreditCard} />
            </i>
            <p>Payment management</p>
          </a>
        </li>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faShieldHalved} />
            </i>
            <p>Share personal information</p>
          </a>
        </li>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faStar} />
            </i>
            <p>Review Foobbie</p>
          </a>
        </li>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faBell} />
            </i>
            <p>Notification</p>
          </a>
        </li>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faHeadphonesSimple} />
            </i>
            <p>Support</p>
          </a>
        </li>
        <li className={cx('payment__option__item')}>
          <a>
            <i className={cx('payment__icon')}>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </i>
            <p>Controls and Policies</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
