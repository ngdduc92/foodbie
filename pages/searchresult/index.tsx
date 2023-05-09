import classNames from 'classnames/bind';
import styles from './searchresult.module.scss';
import { useSearchStore } from '@/store/search/search.store';

const cx = classNames.bind(styles);

function SearchResult() {
  return <h1 className="SearchResult">SearchResult</h1>;
}

export default SearchResult;
