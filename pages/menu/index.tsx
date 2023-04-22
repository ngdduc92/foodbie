import React, { useState } from 'react';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronRight,
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
import Link from 'next/link';
import HeaderOption from '@/components/headerOption';

const cx = classNames.bind(styles);

export default function SideMenu() {
  return (
    <nav className={cx('wrapper__menu')}>
      <HeaderOption title={'Account Information'} link={'/'} />
      <div className={cx('profile')}>
        <Link href="/profile">
          <div className={cx('user__sidebar')}>
            <i className={cx('user__icon')}>
              <FontAwesomeIcon icon={faUser} />
            </i>
            <p>Profile</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      <div className={cx('utility__list')}>
        <div className={cx('utility__item')}>
          <Link href="../order" className={cx('utility__item__content')}>
            <FontAwesomeIcon icon={faReceipt} />
            <label>Order</label>
          </Link>
        </div>
        <div className={cx('utility__item')}>
          <Link href="../favoriteStore" className={cx('utility__item__content')}>
            <FontAwesomeIcon icon={faHeart} />
            <label>Favorite store</label>
          </Link>
        </div>
        <div className={cx('utility__item')}>
          <Link href="../address" className={cx('utility__item__content')}>
            <FontAwesomeIcon icon={faMapLocationDot} />
            <label>Address</label>
          </Link>
        </div>
      </div>
      <ul className={cx('payment__option', 'option')}>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faWallet} />
            </i>
            <p>Wallet Coupon</p>
          </a>
        </li>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faCreditCard} />
            </i>
            <p>Payment management</p>
          </a>
        </li>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faShieldHalved} />
            </i>
            <p>Share personal information</p>
          </a>
        </li>
      </ul>
      <ul className={cx('evaluate__option', 'option')}>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faStar} />
            </i>
            <p>Review Foobbie</p>
          </a>
        </li>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faBell} />
            </i>
            <p>Notification</p>
          </a>
        </li>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faHeadphonesSimple} />
            </i>
            <p>Support</p>
          </a>
        </li>
        <li className={cx('payment__option__item', 'option__item')}>
          <a>
            <i className={cx('payment__icon', 'icon')}>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </i>
            <p>Controls and Policies</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
