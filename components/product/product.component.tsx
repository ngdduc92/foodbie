import React, { FC, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Button, Col, Image, Row } from 'react-bootstrap';
import ProductPopup from '../product-popup/product-popup.component';
import { uuid } from '../utils';
const cx = classNames.bind(styles);

interface ProductProps {}

const Product: FC<ProductProps> = (props: any) => {
  const router = useRouter();
  const { dataProduct, menu = false } = props;
  const [showPopup, setshowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClose = () => setshowPopup(false);

  const handleShow = (item: React.SetStateAction<null>) => {
    setshowPopup(true);
    setSelectedProduct(item);
  };

  return (
    <div className="product__list">
      {dataProduct?.map((item: any) => (
        <div key={uuid()}>
          <div>
            <div className="d-flex algin-items-center py-4" onClick={() => !menu && router.push(`shop/${item.id}`)}>
              <div className={cx('product__image')}>
                <Image src={item.image} alt={item.title} />
              </div>
              <div className="flex-grow-1 ms-3">
                <div>
                  <div className="content__top mb-2">
                    <h5 className="fw-bolder">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-2" />
                      {item.title}
                    </h5>
                  </div>
                  {!menu && (
                    <>
                      <div className="d-flex align-items-center">
                        <div className="text-warning">
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span className="px-3 border-end">4.9</span>

                        <span className="mx-2 px-3 border-end">({item.quantityPurchased} review)</span>
                        {/* &#8226; */}
                        <div className="ms-2">{item.distance}</div>
                      </div>
                      <Button className={cx('tab_code__off')} variant="outline-primary" size="sm">
                        <span>{' Code 10% off'}</span>
                      </Button>
                    </>
                  )}
                </div>
                {menu && (
                  <>
                    <div className="fs-5">
                      <span className="pe-3 border-end">{item.sold}k sold</span>
                      <span className="ps-3">{item.like} like</span>
                    </div>
                    <Row>
                      <Col xs={10}>
                        {item?.oldPrice && (
                          <span className="fs-5 me-3 text-decoration-line-through">{item?.oldPrice}$</span>
                        )}
                        <span className=" fs-3 text-primary">{item?.newPrice || item?.price}$</span>
                      </Col>
                      <Col xs={2} className=" text-end">
                        <FontAwesomeIcon
                          className={'text-primary fs-1'}
                          icon={faSquarePlus}
                          onClick={() => handleShow(item)}
                        />
                      </Col>
                    </Row>
                  </>
                )}
              </div>
            </div>
            <div className="small__line"></div>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <ProductPopup showPopup={showPopup} onClose={handleClose} selectedProduct={selectedProduct} />
      )}
    </div>
  );
};

export default Product;
