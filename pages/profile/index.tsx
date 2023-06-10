import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HeaderOption from '@/components/header-option';
import Link from 'next/link';
const cx = classNames.bind(styles);

export default function Profile() {
  return (
    <div className={cx('wrapper__profile')}>
      <HeaderOption title={'User Information'} link={'/menu'} />
      <div className={cx('avt__profile')}>
        <Link href="/" className={cx('avt__user')}>
          <img
            className={cx('user__img')}
            src="https://vnn-imgs-f.vgcloud.vn/2021/05/11/15/nintchdbpict000591626263.jpg"
          />
          <div className={cx('change__avt')}>
            <label style={{ color: '#fd5a2f' }}>Change avatar</label>
            <i className={cx('icon__chev__right')}>
              <FontAwesomeIcon icon={faChevronRight} />
            </i>
          </div>
        </Link>
      </div>
      <ul className={cx('information__user')}>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Username</span>
            <span className={cx('txt__information')}>foobbie_m0fo0cbu</span>
          </div>
        </li>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Phone Number</span>
            <span className={cx('txt__information')}>12345678</span>
          </div>
          <i className={cx('icon__chev__right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </li>
      </ul>
      <ul className={cx('information__user')} style={{ marginTop: '8px' }}>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Name</span>
            <span className={cx('txt__information')}>Leonardo DiCaprio</span>
          </div>
          <i className={cx('icon__chev__right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Email</span>
            <span className={cx('txt__information')}>leonardo@gmail.com</span>
          </div>
          <i className={cx('icon__chev__right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Gender</span>
            <span className={cx('txt__information')}>Male</span>
          </div>
          <i className={cx('icon__chev__right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Date of Birth</span>
            <span className={cx('txt__information')}>11/11/1974</span>
          </div>
          <i className={cx('icon__chev__right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <span className={cx('title__information')}>Occupation</span>
            <span className={cx('txt__information')}>Other workers</span>
          </div>
          <i className={cx('icon__chev__right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </i>
        </li>
      </ul>
    </div>
  );
}
