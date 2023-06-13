import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

export default function HeaderOption(props: any) {
  const { title, link, isArrow, ischeckSmallLine } = props;
  const router = useRouter();

  const back = () => {
    router.push(link);
  };

  return (
    <div className={`d-flex justify-content-center align-items-center py-3 position-relative bg-white ${!ischeckSmallLine && 'small__line'}`}>
      {!isArrow &&
        <FontAwesomeIcon
          className="position-absolute start-0 text-primary fs-1 ms-3"
          icon={faArrowLeft}
          onClick={() => {
            back();
          }}
        />
      }
      <p className="fs-2 fw-bold mb-0">{title}</p>
    </div>
  );
}
