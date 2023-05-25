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
    <div className="product__list">
      {dataProduct?.map((item: any) => (
        <div className="wrapper__product__item" key={item.id}>
          <div className="d-flex py-4" onClick={() => !menu && router.push(`shop/${item.id}`)}>
            <div className={cx('product__image')}>
              <img alt="" src={item.image} />
            </div>
            <div className="flex-grow-1 ms-3">
              <div>
                <div className="content__top">
                  <h3 className="fs-2 mb-1">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-2" />
                    {item.title}
                  </h3>
                  <h3 className="fw-light fs-4 my-2">{item.subTitle}</h3>
                </div>
                <div className="d-flex align-items-center">
                  <div className="text-warning">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  {!menu && (
                    <>
                      <span className="mx-2">({item.quantityPurchased})</span>
                      &#8226;
                      <div className="ms-2">{item.distance}</div>
                    </>
                  )}
                </div>
              </div>
              {menu && (
                <>
                  <div className="d-flex justify-content-between">
                    <span className={cx('product__price', 'fs-2 fw-bold')}>
                      {item?.price}
                      <sup>đ</sup>
                    </span>
                    <FontAwesomeIcon className={cx('product__icon__add', 'text-primary')} icon={faSquarePlus} />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="small__line"></div>
        </div>
      ))}
    </div>
  );
}

export default Product;
