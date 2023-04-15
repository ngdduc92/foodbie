import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat, faBagShopping, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import stytes from './category.module.scss';
const cx = classNames.bind(stytes);

function Category() {
  return (
    <nav className={cx('category')}>
      <div className="row row-cols-4 row-cols-lg-6 g-5 g-lg-4">
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPenRuler} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>studio</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Category;
