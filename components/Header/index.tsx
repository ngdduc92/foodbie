import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <div className={clsx(styles.WrapperHeader)}>
      <div className={clsx(styles.NavBar)}>
        <div className={clsx(styles.Location)}>
          <FontAwesomeIcon icon={faLocationDot} className={clsx(styles.LocationIcon)} />
          <div className={styles.LocationCurrent}>
            <p>491/8 Trường Chinh, Tân Phú, Thành phố Hồ Chí Minh491/8 Trường Chinh, Tân Phú, Thành phố Hồ Chí Minh</p>
          </div>
        </div>
        <div className={styles.Notification}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className={styles.MobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={clsx(styles.Search)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={clsx(styles.SearchIcon)} />
        <input className={clsx(styles.SearchInput)} placeholder="Tìm cửa hàng hay sản phẩm" />
      </div>
    </div>
  );
}
export default Header;
