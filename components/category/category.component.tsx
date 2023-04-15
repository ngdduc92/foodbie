import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat, faBagShopping, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import stytes from './category.module.scss';
import { HttpClient } from '@/services/http-client';
const cx = classNames.bind(stytes);

const getAPI = () => {
  HttpClient.get('/auth/profile');
};

function Category() {
  return (
    <div>
      <nav className={cx('category')}>
        {/* <ul className={cx('category__list')}>
          <li className={cx('category__item')}>
            <i className={cx('wrapper__icon')} onClick={() => getAPI()}>
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
        </ul> */}
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
    </div>
  );
}

export default Category;
