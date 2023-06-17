import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faHouse, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';
import { HOME, LIKES, MENU_ME, ORDER } from '@/constants/constants';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function Footer() {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className={cx('wrapper__footer')}>
      <div className={cx('footer__content')}>
        <Link href={HOME} className={cx('footer__content__item', `${pathName === HOME ? 'text-primary' : ''}`)}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
          <label>Home</label>
        </Link>
        <Link href={ORDER} className={cx('footer__content__item', `${pathName === ORDER ? 'text-primary' : ''}`)}>
          <FontAwesomeIcon icon={faReceipt} size="lg" />
          <label>Order</label>
        </Link>
        <Link href={LIKES} className={cx('footer__content__item', `${pathName === LIKES ? 'text-primary' : ''}`)}>
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <label>Likes</label>
        </Link>
        <div className={cx('footer__content__item')}>
          <FontAwesomeIcon icon={faBell} size="lg" />
          <label>Notifications</label>
        </div>
        <Link href={MENU_ME} className={cx('footer__content__item', `${pathName === MENU_ME ? 'text-primary' : ''}`)}>
          <FontAwesomeIcon icon={faUser} size="lg" />
          <label>Me</label>
        </Link>
      </div>
    </div>
  );
}
