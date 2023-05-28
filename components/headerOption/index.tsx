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
    <div className="d-flex justify-content-center align-items-center py-3 position-relative bg-white small__line">
      <i className="position-absolute start-0 text-primary fs-1 ms-3">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => {
            back();
          }}
        />
      </i>
      <p className="fs-2 fw-bold mb-0">{title}</p>
    </div>
  );
}
