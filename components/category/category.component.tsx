import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat, faBagShopping, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import stytes from './category.module.scss';
const cx = classNames.bind(stytes);
function Category() {
  return (
    <div className={cx('container')}>
      <nav className={cx('category')}>
        <ul className={cx('category__list')}>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </li>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faBagShopping} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>mart</span>
          </li>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPlateWheat} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>mama woo</span>
          </li>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              {' '}
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </li>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faBagShopping} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>mart</span>
          </li>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPlateWheat} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>mama woo</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Category;
