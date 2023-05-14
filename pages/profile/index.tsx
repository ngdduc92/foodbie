import React from 'react';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPen, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import HeaderOption from '@/components/headerOption';
import authService from '@/services/auth';
const cx = classNames.bind(styles);

export default function Profile() {
  const logout = () => {
    authService.logout();
  };
  return (
    <div className={cx('wrapper__profile')}>
      <HeaderOption title={'Account Information'} link={'/menu'} />
      <div className={cx('avt__profile')}>
        <i className={cx('avt__user')}>
          <FontAwesomeIcon icon={faUser} />
        </i>
      </div>
      <ul className={cx('information__user')}>
        <li>
          <div className={cx('information__content')}>
            <p className={cx('title__information')}>Name</p>
            <input value={'Long'} />
          </div>
          <i>
            <FontAwesomeIcon icon={faPen} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <p className={cx('title__information')}>Telephone</p>
            <input value={'0123455566'} />
          </div>
          <i>
            <FontAwesomeIcon icon={faPen} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <p className={cx('title__information')}>Email Address</p>
            <input value={'lelong236610@gmail.com'} />
          </div>
          <i>
            <FontAwesomeIcon icon={faPen} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <p className={cx('title__information')}>Gender</p>
            <input value={'Male'} />
          </div>
          <i>
            <FontAwesomeIcon icon={faPen} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <p className={cx('title__information')}>Date of birth</p>
            <input value={'09/04/2000'} />
          </div>
          <i>
            <FontAwesomeIcon icon={faPen} />
          </i>
        </li>
        <li>
          <div className={cx('information__content')}>
            <p className={cx('title__information')}>Job</p>
            <input value={'IT'} />
          </div>
          <i>
            <FontAwesomeIcon icon={faPen} />
          </i>
        </li>
      </ul>
      <div className={cx('notification')}>
        <p>* This information will not be displayed or shared with anyone other than you</p>
      </div>
      <div className={cx('change__password', 'account')}>
        <p>Change Password</p>
        <FontAwesomeIcon icon={faChevronRight} className={cx('icon__account')} />
      </div>
      <div className={cx('Delete__Account', 'account')}>
        <p>Delete Account</p>
        <FontAwesomeIcon icon={faChevronRight} className={cx('icon__account')} />
      </div>
      <div className={cx('logout')} onClick={() => logout()}>
        <span>Logout</span>
      </div>
    </div>
  );
}
