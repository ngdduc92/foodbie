import React, { useState } from 'react';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faMapLocationDot,
  faWallet,
  faShieldHalved,
  faCreditCard,
  faStar,
  faHeadphonesSimple,
  faCircleExclamation,
  faTicket,
  faEnvelope,
  faCircleQuestion,
  faStore,
  faFileContract,
  faGear,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Footer from '@/components/footer/footer.component';
import authService from '@/services/auth';

const cx = classNames.bind(styles);

export default function SideMenu() {
  const logout = () => {
    authService.logout();
  };
  return (
    <>
      <nav className={cx('wrapper__menu')}>
        <div className={cx('profile')}>
          <Link href="/profile" className={cx('user__sidebar')}>
            <img className={cx('user__img')} src="https://vnn-imgs-f.vgcloud.vn/2021/05/11/15/nintchdbpict000591626263.jpg" />
            <label>Leonardo DiCaprio</label>
          </Link>
        </div>
        <ul className={cx('payment__option', 'option')}>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')} style={{ color: 'red' }}>
                  <FontAwesomeIcon icon={faTicket} />
                </i>
                <label>My Vouchers</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')} style={{ color: '#26aa99' }}>
                  <FontAwesomeIcon icon={faMapLocationDot} />
                </i>
                <label>Address</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
        <ul className={cx('share__information__option', 'option')}>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')} style={{ color: 'darkslateblue' }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <label>Controls and Policies</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')} style={{ color: '#26aa99' }}>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
                <label>Help Center</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
        <ul className={cx('share__information__option', 'option')}>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')} style={{ color: 'red' }}>
                  <FontAwesomeIcon icon={faStore} />
                </i>
                <label>For Shop Owners</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
        <ul className={cx('evaluate__option', 'option')}>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')}>
                  <FontAwesomeIcon icon={faFileContract} style={{ color: '#ffc107' }} />
                </i>
                <label>User Policy</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')}>
                  <FontAwesomeIcon icon={faGear} style={{ color: 'darkslateblue' }} />
                </i>
                <label>Settings</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
          <li className={cx('option__item')}>
            <a>
              <div className={cx('option__item__content')}>
                <i className={cx('icon')} style={{ color: 'red' }}>
                  <FontAwesomeIcon icon={faUtensils} />
                </i>
                <label>About Foobbie</label>
              </div>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </li>
        </ul>
        <div className={cx('logout')} onClick={() => logout()}>
          <span>Log Out</span>
        </div>
        <Footer />
      </nav>
    </>
  );
}
