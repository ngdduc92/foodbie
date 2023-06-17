import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './detailstore.module.scss';
import {
  faArrowLeft,
  faCircleCheck,
  faMagnifyingGlass,
  faStar,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShareFromSquare, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import ShopService from '@/services/shop';
import { Shop } from '@/share/models/shop';
import Product from '@/components/product/product.component';
import Basket from '@/components/basket/basket.componet';
const cx = classNames.bind(styles);

function DetailStore() {
  const router = useRouter();
  const [shopData, setShopData] = useState<Shop>();
  const shopId = router.query.id;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (shopId && !shopData) {
      setShopData(ShopService.getById(`${shopId}`));
    }
  }, [shopData, shopId]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="container-fluid">
      <div className={cx('header')}>
        <div className={cx('avatar')}>
          <img src={shopData?.image} />
        </div>
        <nav className="d-flex justify-content-between position-absolute top-0 w-100 mt-3">
          <div onClick={() => router.back()}>
            <FontAwesomeIcon icon={faArrowLeft} className={cx('icon')} />
          </div>
          <div className={cx('nav__right')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            <FontAwesomeIcon className={cx('icon')} icon={faShareFromSquare} />
          </div>
        </nav>
      </div>
      <div className="content">
        <div className="my-4">
          <div className="d-flex align-items-center">
            <span className="text-white bg-primary rounded px-2">Preferred</span>
            <FontAwesomeIcon className="text-warning mx-2" icon={faCircleCheck} />
            <h1>{shopData?.title}</h1>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex">
              <div className="reviews_star">
                <FontAwesomeIcon className="me-1 text-warning" icon={faStar} />
                <FontAwesomeIcon className="me-1 text-warning" icon={faStar} />
                <FontAwesomeIcon className="me-1 text-warning" icon={faStar} />
                <FontAwesomeIcon className="me-1 text-warning" icon={faStar} />
                <FontAwesomeIcon className="text-warning" icon={faStarHalfStroke} />
              </div>
              <div className="reviews_conntent">
                <span className="ms-3">4.9</span>
                <span className="mx-3">(999+ Review)</span>
                <span className="me-3 ps-3 border-start">{shopData?.distance}</span>
              </div>
            </div>
            {isLiked ? (
              <FontAwesomeIcon icon={faHeartSolid} className="fs-1 text-primary" onClick={handleLike} />
            ) : (
              <FontAwesomeIcon icon={faHeart} className="fs-1" onClick={handleLike} />
            )}
          </div>
        </div>
        <div className="large__line"></div>
        <div className="menu">
          <h2 className="my-4">Menu</h2>
          <Product dataProduct={shopData?.menu} menu />
        </div>
      </div>
      <Basket />
    </div>
  );
}

export default DetailStore;
