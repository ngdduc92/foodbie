import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './detailstore.module.scss';
import {
  faArrowLeft,
  faCircleCheck,
  faMagnifyingGlass,
  faTicket,
  faUserGroup,
  faClock,
  faStar,
  faBasketShopping,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function DetailStore() {
  return (
    <div className={cx('container-fluid')}>
      <div className={cx('header')}>
        <div className={cx('avatar')}>
          <img src="https://images.foody.vn/res/g78/773964/prof/s640x400/foody-upload-api-foody-mobile-16-190624150335.jpg" />
        </div>
        <nav className={cx('navigation')}>
          <div className={cx('nav__left')}>
            <FontAwesomeIcon icon={faArrowLeft} className={cx('icon')} />
          </div>
          <div className={cx('nav__right')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
            <FontAwesomeIcon className={cx('icon')} icon={faShareFromSquare} />
          </div>
        </nav>
      </div>
      <div className={cx('content')}>
        <div className={cx('detail__restaurant__info')}>
          <p className={cx('label')}>
            <FontAwesomeIcon className={cx('label__icon')} icon={faCircleCheck} />
            FOOBBIE'S PARTNERS FOOBBIE
          </p>
          <h1 className={cx('detail__restaurant')}>TocoToco Bubble Tea</h1>
          <div className={cx('address__restaurant')}>0.3km • 697 Phạn Thế Hiển, Ward 4, District 8</div>
        </div>
        <div className={cx('detail__other')}>
          <div className={cx('other__item')}>
            <div className={cx('item__left')}>
              <FontAwesomeIcon className={cx('detail__other__icon')} icon={faClock} />
              <span>Delivered by driver</span>
            </div>
            <span className={cx('item__right')}>Change</span>
          </div>
          <div className={cx('other__item')}>
            <div className={cx('item__left')}>
              <FontAwesomeIcon className={cx('detail__other__icon')} icon={faUserGroup} />
              <span>Group order</span>
            </div>
            <span className={cx('item__right')}>Create order</span>
          </div>
          <div className={cx('other__item')}>
            <div className={cx('item__left', 'highlight')}>
              <FontAwesomeIcon className={cx('detail__other__icon')} icon={faTicket} />
              <span>Sale</span>
            </div>
            <span className={cx('item__right')}>More</span>
          </div>
          <div className={cx('other__item')}>
            <div className={cx('item__left')}>
              <FontAwesomeIcon className={cx('detail__other__icon', 'highlight')} icon={faStar} />
              <span className="me-3">4.7 ( 999+ )</span> •
              <span>
                <FontAwesomeIcon className="ms-3 me-3" icon={faBasketShopping} />
                999+ sold
              </span>
            </div>
            <span className={cx('item__right')}>Review</span>
          </div>
        </div>
        <div className="large__line"></div>
        <div className={cx('menu')}>
          <h2 className={cx('menu__title')}>Menu</h2>
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-6 gy-4 gx-4">
              <div className="col">
                <div className={cx('menu__item')}>
                  <div className={cx('menu__item__img')}>
                    <img
                      src="https://images.foody.vn/res/g94/939299/s120x120/f90cf757-b335-4114-89a4-6de03578-368f5f21-211210192925.jpeg"
                      alt=""
                    />
                  </div>
                  <h3 className={cx('menu__item__name')}>Grass Jelly Milk Coffee</h3>
                  <span className={cx('menu__item__price')}>15$</span>
                </div>
              </div>
              <div className="col">
                <div className={cx('menu__item')}>
                  <div className={cx('menu__item__img')}>
                    <img
                      src="https://images.foody.vn/res/g94/939299/s120x120/98dc8502-ab16-4714-9df5-0966ac46-b9633e35-211210192812.jpeg"
                      alt=""
                    />
                  </div>
                  <h3 className={cx('menu__item__name')}>Royal Pearl Milk Coffee</h3>
                  <span className={cx('menu__item__price')}>15$</span>
                </div>
              </div>
              <div className="col">
                <div className={cx('menu__item')}>
                  <div className={cx('menu__item__img')}>
                    <img
                      src="https://images.foody.vn/res/g94/939299/s120x120/2a175552-ce38-48cd-a5cc-813c14278467.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className={cx('menu__item__name')}>Trà sữa ô long</h3>
                  <span className={cx('menu__item__price')}>15$</span>
                </div>
              </div>
              <div className="col">
                <div className={cx('menu__item')}>
                  <div className={cx('menu__item__img')}>
                    <img
                      src="https://images.foody.vn/res/g94/939299/s120x120/3579d38e-a8a0-44b1-8329-b15b7f2c22d1.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className={cx('menu__item__name')}>Ô long thái cực</h3>
                  <span className={cx('menu__item__price')}>10$</span>
                </div>
              </div>
              <div className="col">
                <div className={cx('menu__item')}>
                  <div className={cx('menu__item__img')}>
                    <img
                      src="https://images.foody.vn/res/g94/939299/s120x120/99769aaa-5245-4e20-b691-5d63f20409cf.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className={cx('menu__item__name')}>Trà Xanh</h3>
                  <span className={cx('menu__item__price')}>15$</span>
                </div>
              </div>
              <div className="col">
                <div className={cx('menu__item')}>
                  <div className={cx('menu__item__img')}>
                    <img
                      src="https://images.foody.vn/res/g94/939299/s120x120/9a8a4ec1-9fa7-48c7-9f19-c7ac08ec1382.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className={cx('menu__item__name')}>Matcha kem phô mai</h3>
                  <span className={cx('menu__item__price')}>15$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStore;
