import React, { useEffect, useRef, useState } from 'react';
import { faArrowLeft, faCircleXmark, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchStore } from '@/store/search/search.store';
import Product from '@/components/product/product.component';
import { DATA_PRODUCTS } from '@/share/constants';

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
  const foodSuggestions = [
    'Cơm tấm',
    'Bánh khọt',
    'Phở',
    'Chả cá',
    'Bánh xèo',
    'Cao lầu',
    'Rau muống',
    'Nem rán/chả giò',
    'Gỏi cuốn',
    'Bún bò Huế',
    'Gà tần',
    'Nộm hoa chuối',
    'Bún bò Nam bộ',
    'Hoa quả dầm',
    'Phở cuốn',
    'Gà nướng',
    'Phở xào',
  ];
  const inputElement = useRef<HTMLInputElement>(null);
  const [searchInput, setsearchInput] = useState<string>('');
  const [searchFilter, setSearchFilter] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<object[]>([]);
  const [searchHistory, setsearchHistory] = useState<string[]>([]);
  // const { searchResult, setSearchParam } = useSearchStore((state: any) => ({
  //   searchResult: state.searchResult,
  //   setSearchParam: state.setSearchParam,
  // }));
  const handleRemoveSearchText = () => {
    if (inputElement.current !== null) {
      inputElement.current.value = '';
    }
    setSearchFilter([]);
    setSearchResult([]);
  };
  const handleRemoveHistory = (value: string) => {
    const results = searchHistory.filter((item) => item !== value);
    setsearchHistory(results);
  };
  const handleSearchResult = (value: string) => {
    if (inputElement.current !== null) {
      inputElement.current.value = value;
    }
    const results = DATA_PRODUCTS.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setSearchResult(results);
  };
  const handleKeyDown = (e: any, value: string) => {
    if (e.key === 'Enter') {
      handleSearchResult(value);
    }
  };
  useEffect(() => {
    const keySearch = searchInput.toLowerCase();
    if (keySearch === '') {
      setSearchFilter([]);
    } else {
      setSearchResult([]);
      const results = dataSearch.filter((item) => item.toLowerCase().includes(keySearch));
      setSearchFilter(results);
    }
  }, [searchInput]);
  // search history
  useEffect(() => {
    const searchHistory: string[] = ['Cơm tấm', 'Phở', 'Bún mắm'];
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
          value={inputElement.current?.value}
          placeholder="Find restaurants, dishes"
          className={cx('search__input')}
          ref={inputElement}
          onChange={(e) => setsearchInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, (e.target as HTMLInputElement).value)}
        />
        <FontAwesomeIcon icon={faCircleXmark} className={cx('remove__icon')} onClick={() => handleRemoveSearchText()} />
      </div>
      <div className="small__line"></div>
      {searchResult.length > 0 ? (
        <div className={cx('search__result')}>
          <span className={cx('search__result__title')}>{searchResult.length} restaurants found</span>
          <Product dataProduct={searchResult} />
        </div>
      ) : (
        <>
          {searchFilter.length > 0 ? (
            <div className={cx('search__suggestions')}>
              {searchFilter.map((item, index) => (
                <div className={cx('search__suggestion__item')} key={index} onClick={() => handleSearchResult(item)}>
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
                      <span onClick={() => setsearchHistory([])}>Clear</span>
                    </div>
                    <div className={cx('history')}>
                      {searchHistory.map((item, index) => (
                        <div className={cx('history__item')} key={index} onClick={() => handleSearchResult(item)}>
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
                  <div className="large__line"></div>
                </>
              )}
              <div className={cx('food__suggestions')}>
                <h2 className={cx('suggestions__heading')}>What's hot?</h2>
                <div className={cx('suggestions')}>
                  {foodSuggestions.map((item, index) => (
                    <div className={cx('suggestions__item')} key={index} onClick={() => handleSearchResult(item)}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Search;
