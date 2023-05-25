import React, { useEffect, useRef, useState } from 'react';
import { faArrowLeft, faCircleXmark, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import Link from 'next/link';
import Image from 'next/image';
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

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center mt-1 py-3">
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} className="fs-1 pe-3" />
        </Link>
        <input
          value={inputElement.current?.value}
          placeholder="Find restaurants, dishes"
          className={cx('search__input')}
          ref={inputElement}
          onChange={(e) => setsearchInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, (e.target as HTMLInputElement).value)}
        />
        <FontAwesomeIcon icon={faCircleXmark} className="fs-1" onClick={() => handleRemoveSearchText()} />
      </div>
      <div className="small__line"></div>
      {searchResult.length > 0 ? (
        <div className="search__result">
          <h2 className="d-block mt-4 fw-bold">{searchResult.length} restaurants found</h2>
          <Product dataProduct={searchResult} />
        </div>
      ) : (
        <>
          {searchFilter.length > 0 ? (
            <div className="search__suggestions">
              {searchFilter.map((item, index) => (
                <div
                  className="d-flex justify-content-between align-items-center py-4"
                  key={index}
                  onClick={() => handleSearchResult(item)}
                >
                  <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span className="ms-5">{item}</span>
                  </div>
                  <Image alt="" src="/assets/images/up-left-arrow.png" width={25} height={25} />
                </div>
              ))}
            </div>
          ) : (
            <>
              {searchHistory.length > 0 && (
                <>
                  <div className="search__history mb-4">
                    <div className="d-flex align-items-center justify-content-between my-4">
                      <h2 className="fw-bold">Recent searches</h2>
                      <span className="text-primary" onClick={() => setsearchHistory([])}>
                        Clear
                      </span>
                    </div>
                    <div className="d-flex flex-wrap">
                      {searchHistory.map((item, index) => (
                        <div
                          className="px-3 py-2 border bg-light me-4 fs-4 rounded-pill"
                          key={index}
                          onClick={() => handleSearchResult(item)}
                        >
                          {item}
                          <FontAwesomeIcon icon={faXmark} className="ms-2" onClick={() => handleRemoveHistory(item)} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="large__line"></div>
                </>
              )}
              <div className="food__suggestions mt-4">
                <h2 className="fw-bold">What's hot?</h2>
                <div className="d-flex flex-wrap">
                  {foodSuggestions.map((item, index) => (
                    <div
                      className="px-3 py-2 border bg-light me-4 fs-4 rounded-pill mt-4"
                      key={index}
                      onClick={() => handleSearchResult(item)}
                    >
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
