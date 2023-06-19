import React from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import { RouteSegments } from '@/enums/route-segments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderOption(props: any) {
  const { title, link, isArrow, ischeckSmallLine } = props;
  const router = useRouter();
  const previousPageParam = router.query?.page as string;
  const back = () => {
    if (link) {
      router.push(link);
    } else if (previousPageParam) {
      router.push(RouteSegments.HOME);
    } else {
      router.back();
    }
  };

  return (
    <>
      <Row
        className={`justify-content-center align-items-center py-3 bg-white ${!ischeckSmallLine && 'border-bottom'}`}
      >
        <Col xs={1}>
          {!isArrow && (
            <FontAwesomeIcon
              className="text-primary fs-1"
              icon={faArrowLeft}
              onClick={() => {
                back();
              }}
            />
          )}
        </Col>
        <Col xs={10}>
          <p className="fs-2 fw-bold mb-0 text-center">{title}</p>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </>
  );
}
