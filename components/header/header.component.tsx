import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useSearchStore } from '@/store/search/search.store';
import Link from 'next/link';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);
function Header() {
  const searchValue = useSearchStore((state: any) => state.searchString);
  const router = useRouter();

  const showMenu = () => {
    router.push('/menu');
  };

  return (
    <div className={cx('wrapper__header')}>
      <div className={cx('Nav__bar')}>
        <div className={cx('location')}>
          <FontAwesomeIcon icon={faLocationDot} className={cx('location__icon')} />
          <div className={cx('location__current')}>
            <p>491/8 Trường Chinh, Tân Phú, Thành phố Hồ Chí Minh491/8 Trường Chinh, Tân Phú, Thành phố Hồ Chí Minh</p>
          </div>
        </div>
        <div className={cx('actions')}>
          <div className={cx('notification')}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className={cx('mobile__menu')}>
            <FontAwesomeIcon icon={faBars} onClick={() => showMenu()} />
          </div>
        </div>
      </div>
      <Link href="/search">
        <div className={cx('search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search__icon')} />
          <input className={cx('search__input')} placeholder="Find restaurants, dishes" disabled />
        </div>
      </Link>
    </div>
  );
}
export default Header;
