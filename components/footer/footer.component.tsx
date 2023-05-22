import React from 'react'
import classNames from 'classnames/bind';
import styles from './footer.module.scss'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faHouse, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx('wrapper__footer')}>
      <div className={cx('footer__content')}>
        <Link href="/" className={cx('footer__content__item')}>
          <i><FontAwesomeIcon icon={faHouse} /></i>
          <label>Home</label>
        </Link>
        <Link href="../order" className={cx('footer__content__item')}>
          <i><FontAwesomeIcon icon={faReceipt} /></i>
          <label>Order</label>
        </Link>
        <Link href="../favorite-store" className={cx('footer__content__item')}>
          <i><FontAwesomeIcon icon={faHeart} /></i>
          <label>Likes</label>
        </Link>
        <div className={cx('footer__content__item')}>
          <i><FontAwesomeIcon icon={faBell} /></i>
          <label>Notifications</label>
        </div>
        <Link href="../menu" className={cx('footer__content__item')}>
          <i><FontAwesomeIcon icon={faUser} /></i>
          <label>Me</label>
        </Link>
      </div>
    </div>
  )
}