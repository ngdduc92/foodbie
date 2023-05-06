import React, { useEffect, useRef, useState } from 'react';
import { faArrowLeft, faCircleXmark, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const cx = classNames.bind(styles);

function Search() {
  const dataSearch = [
    'Phở',
    'Bánh khọt',
    'Bún',
    'Bún chả',
    'Bún bò Huế',
    'Bún thang',
    'Bát bún cá',
    'Bún đũa',
    'Bánh cuốn',
    'Cơm tấm',
    'Bánh mì',
    'Bánh xèo',
    'Gà nướng KonPlông',
    'Gỏi cuốn',
    'Bánh chưng',
    'Bánh tét',
    'Bánh bèo',
    'Chả giò',
    'Nem rán',
    'Hủ tiếu',
    'Cơm cháy',
    'Cao lầu',
    'Bánh căn',
    'Phở chua',
    'Yến sào',
    'Lẩu thả',
    'Bánh canh',
    'Súp lươn',
    'Cơm hến',
    'Cơm sường',
    'Cơm phần',
    'Bánh khoái Huế',
    'Mì Quảng',
    'Bún chả cá Quy Nhơn',
    'Bánh đa cua',
    'Chả cá',
    'Chả mực',
  ];
  const inputElement = useRef<HTMLInputElement>(null);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchHistory, setsearchHistory] = useState<string[]>([]);
  const handleSearch = (e: any) => {
    const keySearch = e.target.value;
    if (keySearch === '') {
      setSearchResults([]);
    } else {
      const results = dataSearch.filter((item) => item.toLowerCase().includes(keySearch));
      setSearchResults(results);
    }
  };
  const handleRemoveSearchText = () => {
    if (null !== inputElement.current) {
      inputElement.current.value = '';
    }
    setSearchResults([]);
  };
  const handleRemoveHistory = (value: string) => {
    const results = searchHistory.filter((item) => item !== value);
    setsearchHistory(results);
  };
  // search history
  useEffect(() => {
    const searchHistory: string[] = ['Bánh khọt', 'Bánh xèo', 'Bún mắm'];
    localStorage.setItem('SEARCHHISTORYS', JSON.stringify(searchHistory));
    setsearchHistory(JSON.parse(localStorage.getItem('SEARCHHISTORYS') || '[]'));
  }, []);

  return (
    <div className={cx('container-fluid')}>
      <div className={cx('wrapper__search__input')}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} className={cx('icon__back')} />
        </Link>
        <input
          placeholder="Find restaurants, dishes"
          className={cx('search__input')}
          ref={inputElement}
          onChange={(e) => handleSearch(e)}
        />
        <FontAwesomeIcon icon={faCircleXmark} className={cx('remove__icon')} onClick={() => handleRemoveSearchText()} />
      </div>
      {searchResults.length > 0 ? (
        <div className={cx('search__result')}>
          {searchResults.map((item, index) => (
            <div className={cx('search__item')} key={index}>
              <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span className={cx('ms-5')}>{item}</span>
              </div>
              <Image alt="" src="/assets/images/up-left-arrow.png" width={25} height={25} />
            </div>
          ))}
        </div>
      ) : (
        <>
          {searchHistory.length > 0 && (
            <>
              <div className={cx('search__history')}>
                <div className={cx('history__heading')}>
                  <h2>Recent searches</h2>
                  <span onClick={() => setsearchHistory([])}>Clean</span>
                </div>
                <div className={cx('history')}>
                  {searchHistory.map((item, index) => (
                    <div className={cx('history__item')} key={index}>
                      {item}
                      <FontAwesomeIcon
                        icon={faXmark}
                        className={cx('ms-2')}
                        onClick={() => handleRemoveHistory(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bottom-line"></div>
            </>
          )}
          <div className={cx('food__suggestions')}>
            <h2 className={cx('suggestions__heading')}>What's hot?</h2>
            <div className={cx('suggestions')}>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
