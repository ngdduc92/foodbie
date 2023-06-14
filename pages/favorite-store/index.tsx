import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './favorite-store.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faStar, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer/footer.component';
import HeaderOption from '@/components/header-option';
import { Tabs, Tab, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { uuid } from '@/components/utils';

const cx = classNames.bind(styles);



export default function FavoriteStore() {
  const [dropdownBtnTitle, setDropdownBtnTitle] = useState('All Services')
  const dataDropdown = ['All Services', 'Food', 'Fresh', 'Beer', 'Flowers', 'Mart']
  const dropDown = () => (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className="bg-light ps-3 shadow-none w-100 d-flex justify-content-start align-items-center" >
        {dropdownBtnTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-100'>
        {dataDropdown.map((item) => (
          <Dropdown.Item key={uuid()} onClick={() => setDropdownBtnTitle(item)} className="d-flex justify-content-between w-100">
            {item}
            {dropdownBtnTitle === item && <FontAwesomeIcon icon={faCheck} className="text-primary" />}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
  return (
    <>
      <div className={cx('wapper__favorite')}>
        <HeaderOption title={'Likes'} isArrow ischeckSmallLine />
        <Tabs
          defaultActiveKey="Latest"
          id="fill-tab-example"
          className="mb-3 border-0"
          fill
        >
          <Tab eventKey="Latest" title="Latest">
            {dropDown()}
            <div className={cx('favorite__content')}>
              <div className={cx('favorite__content__item')}>
                <div className={cx('item__right')}>
                  <img src="assets/images/maycha.jpg" />
                </div>
                <div className={cx('item__left')}>
                  <span className={cx('title__item__left')}>
                    <i>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </i>
                    MayCha Milk Tea
                  </span>
                  <div className={cx('evaluate')}>
                    <i>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <span>4.0 | 6.7km | 37min</span>
                  </div>
                  <div className={cx('promotion')}>
                    <span>FE CREDIT 40K off</span>
                  </div>
                  <div className={cx('heart')}>
                    <i>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={cx('favorite__content__item')}>
                <div className={cx('item__right')}>
                  <img src="assets/images/maika.jpg" />
                </div>
                <div className={cx('item__left')}>
                  <span className={cx('title__item__left')}>
                    <i>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </i>
                    Maika Milk Tea
                  </span>
                  <div className={cx('evaluate')}>
                    <i>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <span>4.8 | 6.7km | 37km</span>
                  </div>
                  <div className={cx('promotion')}>
                    <span> 15% off menu</span>
                  </div>
                  <div className={cx('heart')}>
                    <i>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Nearby" title="Nearby">
            {dropDown()}
            <div className={cx('favorite__content')}>
              <div className={cx('favorite__content__item')}>
                <div className={cx('item__right')}>
                  <img src="assets/images/maika.jpg" />
                </div>
                <div className={cx('item__left')}>
                  <span className={cx('title__item__left')}>
                    <i>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </i>
                    Maika Milk Tea
                  </span>
                  <div className={cx('evaluate')}>
                    <i>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <span>4.8 | 6.7km | 37km</span>
                  </div>
                  <div className={cx('promotion')}>
                    <span> 15% off menu</span>
                  </div>
                  <div className={cx('heart')}>
                    <i>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>
              <div className={cx('favorite__content__item')}>
                <div className={cx('item__right')}>
                  <img src="assets/images/maycha.jpg" />
                </div>
                <div className={cx('item__left')}>
                  <span className={cx('title__item__left')}>
                    <i>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </i>
                    MayCha Milk Tea
                  </span>
                  <div className={cx('evaluate')}>
                    <i>
                      <FontAwesomeIcon icon={faStar} />
                    </i>
                    <span>4.0 | 6.7km | 37min</span>
                  </div>
                  <div className={cx('promotion')}>
                    <span>FE CREDIT 40K off</span>
                  </div>
                  <div className={cx('heart')}>
                    <i>
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  </div>
                </div>
              </div>

            </div>
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </>
  );
}
