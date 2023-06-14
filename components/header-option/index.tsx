import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';

export default function HeaderOption(props: any) {
  const { title, link, isArrow, ischeckSmallLine } = props;
  const router = useRouter();

  const back = () => {
    router.push(link);
  };

  return (
    <>
      <Row className={`justify-content-center align-items-center py-3 bg-white ${!ischeckSmallLine && 'border-bottom'}`}>
        <Col xs={1}>
          {!isArrow &&
            <FontAwesomeIcon
              className="text-primary fs-1"
              icon={faArrowLeft}
              onClick={() => {
                back();
              }}
            />
          }
        </Col>
        <Col xs={10}><p className="fs-2 fw-bold mb-0 text-center">{title}</p></Col>
        <Col xs={1}></Col>
      </Row>
    </>
  );
}
