import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faHouse, faReceipt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { RouteSegments } from '@/enums/route-segments';
const cx = classNames.bind(styles);

export default function Footer() {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className={cx('wrapper__footer')}>
      <div className={cx('footer__content')}>
        <Link
          href={RouteSegments.HOME}
          className={cx('footer__content__item', `${pathName === RouteSegments.HOME ? 'text-primary' : ''}`)}
        >
          <FontAwesomeIcon icon={faHouse} size="lg" />
          <label>Home</label>
        </Link>
        <Link
          href={RouteSegments.ORDER}
          className={cx('footer__content__item', `${pathName === RouteSegments.ORDER ? 'text-primary' : ''}`)}
        >
          <FontAwesomeIcon icon={faReceipt} size="lg" />
          <label>Order</label>
        </Link>
        <Link
          href={RouteSegments.LIKES}
          className={cx('footer__content__item', `${pathName === RouteSegments.LIKES ? 'text-primary' : ''}`)}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <label>Likes</label>
        </Link>
        <div className={cx('footer__content__item')}>
          <FontAwesomeIcon icon={faBell} size="lg" />
          <label>Notifications</label>
        </div>
        <Link
          href={RouteSegments.MENU_ME}
          className={cx('footer__content__item', `${pathName === RouteSegments.MENU_ME ? 'text-primary' : ''}`)}
        >
          <FontAwesomeIcon icon={faUser} size="lg" />
          <label>Me</label>
        </Link>
      </div>
    </div>
  );
}
