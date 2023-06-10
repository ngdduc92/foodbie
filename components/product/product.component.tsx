import React, { FC, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Image } from 'react-bootstrap';
import ProductPopup from '../product-popup/product-popup.component';
import { uuid } from '../utils';
const cx = classNames.bind(styles);

interface ProductProps {}

const Product: FC<ProductProps> = (props: any) => {
  const { dataProduct, menu = false } = props;
  const [showPopup, setshowPopup] = useState(false);

  const handleClose = () => setshowPopup(false);
  const handleShow = () => setshowPopup(true);

  const router = useRouter();
  return (
    <div className="product__list">
      {dataProduct?.map((item: any) => (
        <div key={uuid()}>
          <div className="wrapper__product__item">
            <div className="d-flex py-4" onClick={() => !menu && router.push(`shop/${item.id}`)}>
              <div className={cx('product__image')}>
                <Image src={item.image} />
              </div>
              <div className="flex-grow-1 ms-3">
                <div>
                  <div className="content__top">
                    <h3 className="fs-2 mb-1">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-2" />
                      {item.title}
                    </h3>
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
                      <FontAwesomeIcon
                        className={cx('product__icon__add', 'text-primary')}
                        icon={faSquarePlus}
                        onClick={handleShow}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="small__line"></div>
          </div>
        </div>
      ))}
      {menu && <ProductPopup showPopup={showPopup} onClose={handleClose} onShow={handleShow} />}
    </div>
  );
};

export default Product;
