import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './detailstore.module.scss';
import { faArrowLeft, faCircleCheck, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faShareFromSquare, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { useRouter } from 'next/router';
import ShopService from '@/services/shop';
import { Shop } from '@/share/model/shop';
import Product from '@/components/product/product.component';
const cx = classNames.bind(styles);

function DetailStore() {
  const router = useRouter();
  const [shopData, setShopData] = useState<Shop>();
  const shopId = router.query.id;
  useEffect(() => {
    if (shopId && !shopData) {
      setShopData(ShopService.getById(`${shopId}`));
    }
  }, [shopData, shopId]);
  return (
    <div className={cx('container-fluid')}>
      <div className={cx('header')}>
        <div className={cx('avatar')}>
          <img src={shopData?.image} />
        </div>
        <nav className={cx('navigation')}>
          <div className={cx('nav__left')} onClick={() => router.back()}>
            <FontAwesomeIcon icon={faArrowLeft} className={cx('icon')} />
          </div>
          <div className={cx('nav__right')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            <FontAwesomeIcon className={cx('icon')} icon={faShareFromSquare} />
          </div>
        </nav>
      </div>
      <div className={cx('content')}>
        <div className={cx('detail__restaurant__info')}>
          <span className={cx('label')}>Preferred</span>
          <FontAwesomeIcon className={cx('label__icon')} icon={faCircleCheck} />
          <h1 className={cx('detail__restaurant')}>{shopData?.title}</h1>
          <div className={cx('wrapper__reviews')}>
            <div className={cx('reviews')}>
              <div className={cx('reviews_star')}>
                <FontAwesomeIcon className={cx('star_item', 'highlight')} icon={faStar} />
                <FontAwesomeIcon className={cx('star_item', 'highlight')} icon={faStar} />
                <FontAwesomeIcon className={cx('star_item', 'highlight')} icon={faStar} />
                <FontAwesomeIcon className={cx('star_item', 'highlight')} icon={faStar} />
                <FontAwesomeIcon className={cx('star_item', 'highlight')} icon={faStarHalfStroke} />
              </div>
              <div className={cx('reviews_conntent')}>
                <span className={cx('rating')}>4.9</span>
                <span className={cx('number__reviews')}>(999+ Review)</span>
                <span className={cx('reviews__distance')}>{shopData?.distance}</span>
              </div>
            </div>
            <FontAwesomeIcon icon={faHeart} className={cx('heart__icon')} />
          </div>
        </div>
        <div className="large__line"></div>
        <div className={cx('menu')}>
          <h2 className={cx('menu__title')}>Menu</h2>
          <Product dataProduct={shopData?.menu} menu />
        </div>
      </div>
    </div>
  );
}

export default DetailStore;
