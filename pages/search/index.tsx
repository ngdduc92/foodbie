import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

function Search() {
  const router = useRouter();
  return (
    <div className={cx('wrapper__search')}>
      <div className={cx('wrapper__search__input', 'border-bottom pb-2')}>
        <FontAwesomeIcon icon={faArrowLeft} onClick={() => router.push('/')} />
        <input placeholder="Tìm nhà hàng, món ăn" className={cx('search__input')} />
      </div>
      <div className={cx('food__suggestions', 'mt-2')}>
        <h2 className={cx('heading')}>Món gì đang hot?</h2>
        <div className={cx('d-flex flex-wrap')}>
          <div className={cx('suggestions__item')}>Bánh khọt</div>
          <div className={cx('suggestions__item')}>Cơm tấm</div>
          <div className={cx('suggestions__item')}>Phở</div>
          <div className={cx('suggestions__item')}>Chả cá</div>
          <div className={cx('suggestions__item')}>Bánh xèo</div>
          <div className={cx('suggestions__item')}>Cao lầu</div>
          <div className={cx('suggestions__item')}>Rau muống</div>
          <div className={cx('suggestions__item')}>Nem rán/chả giò</div>
          <div className={cx('suggestions__item')}>Gỏi cuốn</div>
          <div className={cx('suggestions__item')}>Bún bò Huế</div>
          <div className={cx('suggestions__item')}>Gà tần</div>
          <div className={cx('suggestions__item')}>Nộm hoa chuối</div>
          <div className={cx('suggestions__item')}>Bún bò Nam bộ</div>
          <div className={cx('suggestions__item')}>Hoa quả dầm</div>
          <div className={cx('suggestions__item')}>Phở cuốn</div>
          <div className={cx('suggestions__item')}>Gà nướng</div>
          <div className={cx('suggestions__item')}>Phở xào</div>
          <div className={cx('suggestions__item')}>cơm</div>
          <div className={cx('suggestions__item')}>cơm</div>
          <div className={cx('suggestions__item')}>cơm</div>
          <div className={cx('suggestions__item')}>cơm</div>
          <div className={cx('suggestions__item')}>cơm</div>
          <div className={cx('suggestions__item')}>cơm</div>
          <div className={cx('suggestions__item')}>cơm</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
