import React from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Product(props: any) {
  const { dataProduct } = props;
  return (
    <div className={cx('wrapper__product__list')}>
      <h2 className={cx('heading')}>What's delicious around here?</h2>
      <div className={cx('product__list')}>
        {dataProduct?.map((item: any, index: number) => (
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
