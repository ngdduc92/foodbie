import React from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
const cx = classNames.bind(styles);

function Product(props: any) {
  const { dataProduct, menu = false } = props;
  const router = useRouter();
  return (
    <div className={cx('product__list')}>
      {dataProduct?.map((item: any) => (
        <div className={cx('wrapper__product__item')} key={item.id}>
          <div className={cx('product__item')} onClick={() => !menu && router.push(`shop/${item.id}`)}>
            <div className={cx('product__image')}>
              <img alt="" src={item.image} />
            </div>
            <div className={cx('product__content')}>
              <div>
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
                  {!menu && (
                    <>
                      <span className={cx('quantity__purchased')}>({item.quantityPurchased})</span>
                      &#8226;
                      <div className={cx('distance')}>{item.distance}</div>
                    </>
                  )}
                </div>
              </div>
              {menu && (
                <>
                  <div className={cx('product__content__right')}>
                    <span className={cx('product__price')}>
                      {item?.price}
                      <sup>đ</sup>
                    </span>
                    <FontAwesomeIcon className={cx('product__icon__add')} icon={faSquarePlus} />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={cx('small__line')}></div>
        </div>
      ))}
    </div>
  );
}

export default Product;
