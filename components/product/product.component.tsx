import React from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const dataProduct = [
  {
    title: 'Heo Con - Gà Rán, Hamburger & Sushi',
    subTitle: 'Gà Rán, Hamburger & Sushi',
    quantityPurchased: '999+',
    distance: '0.3km',
    image: 'https://images.foody.vn/res/g101/1001799/prof/s280x175/image-02c35b39-200910114133.jpeg',
  },
  {
    title: 'TocoToco Bubble Tea',
    subTitle: 'Trà sữa trân châu hoàng gia',
    quantityPurchased: '999+',
    distance: '0.3km',
    image: 'https://images.foody.vn/res/g78/773964/prof/s280x175/foody-upload-api-foody-mobile-16-190624150335.jpg',
  },
  {
    title: 'Quán Chay KVegetarian',
    subTitle: 'Bánh bao chay/Vegetarian dumpling',
    quantityPurchased: '999+',
    distance: '2km',
    image:
      'https://images.foody.vn/res/g73/726458/prof/s280x175/foody-upload-api-foody-mobile-2--a6d744e9-230224132709.jpeg',
  },
  {
    title: 'Trà Sữa',
    subTitle: 'Trà sữa đường đen',
    quantityPurchased: '999+',
    distance: '1km',
    image: '/assets/images/tra_sua.jpg',
  },
  {
    title: 'Nước Cốt Mix',
    subTitle: 'Nước Mía & Rau Má Mix',
    quantityPurchased: '999+',
    distance: '0.3km',
    image: 'https://images.foody.vn/res/g102/1019255/prof/s280x175/foody-upload-api-foody-mobile-25a-200429094713.jpg',
  },
  {
    title: 'Yoko Sushi',
    subTitle: 'Sushi',
    quantityPurchased: '999+',
    distance: '0.5km',
    image: 'https://images.foody.vn/res/g79/781513/prof/s280x175/foody-upload-api-foody-mobile-2-190611091841.jpg',
  },

  {
    title: 'Milano Coffee',
    subTitle: 'Nước Cốt - Cà Phê Đá Truyền Thống',
    quantityPurchased: '999+',
    distance: '0.3km',
    image:
      'https://images.foody.vn/res/g70/692723/prof/s280x175/file_restaurant_photo_9crv_16379-b337f388-211126184753.jpg',
  },
];

function Product() {
  return (
    <div className={cx('wrapper__product__list')}>
      <h2 className={cx('heading')}>What's delicious around here?</h2>
      <div className={cx('product__list')}>
        {dataProduct.map((item, index) => (
          <div className={cx('wrapper__product__item')} key={index}>
            <div className={cx('product__item')}>
              <div className={cx('product__image')}>
                <img alt="" src={item.image} />
              </div>
              <div className={cx('product__content')}>
                <div className={cx('content__top')}>
                  <h3 className={cx('title')}>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('title__icon')} />
                    {item.title}
                  </h3>
                  <h3 className={cx('sub__title')}>{item.subTitle}</h3>
                </div>
                <div className={cx('content__bottom')}>
                  <div className={cx('rating')}>
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <span className={cx('quantity__purchased')}>({item.quantityPurchased})</span>
                  &#8226;
                  <div className={cx('distance')}>{item.distance}</div>
                </div>
              </div>
            </div>
            <div className={cx('small__line')}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
