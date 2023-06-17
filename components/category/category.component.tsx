import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBowlFood,
  faEgg,
  faWineBottle,
  faBreadSlice,
  faCookie,
  faPizzaSlice,
  faHotdog,
  faCakeCandles,
  faShrimp,
  faFish,
  faCheese,
  faCandyCane,
} from '@fortawesome/free-solid-svg-icons';
import stytes from './category.module.scss';
const cx = classNames.bind(stytes);

function Category() {
  return (
    <nav className={cx('container', 'mt-5')}>
      <div className="row row-cols-4 row-cols-lg-6 gy-4 gx-4">
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faEgg} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>egg</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faBowlFood} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>rice</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faWineBottle} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>wine</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faBreadSlice} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Bread</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faCookie} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Cookie</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faPizzaSlice} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Pizza</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faHotdog} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Hotdog</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faCakeCandles} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Cake</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faShrimp} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Shrimp</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faFish} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Fish</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faCheese} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>Cheese</span>
          </div>
        </div>
        <div className="col">
          <div className={cx('category__item')}>
            <i className={cx('wrapper__icon')}>
              <FontAwesomeIcon icon={faCandyCane} className={cx('category__icon')} />
            </i>
            <span className={cx('category__content')}>candy</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Category;
