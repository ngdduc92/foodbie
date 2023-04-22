import React from 'react';
import styles from './headerOption.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
const cx = classNames.bind(styles);

export default function HeaderOption(props: any) {
  const { title, link } = props;
  const router = useRouter();
  const back = () => {
    router.push(link);
  };
  return (
    <div className={cx('header__option')}>
      <i>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => {
            back();
          }}
        />
      </i>
      <p>{title}</p>
    </div>
  );
}
