import HeaderOption from '@/components/header-option';
import { faChevronRight, faClipboard, faClipboardList, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';

function ConfirmOrder() {
  return (
    <div className="container-fluid">
      <HeaderOption title={'Confirm Order'} />
      <div>
        <h4 className="my-4 fw-bold fs-5">TocoToco Bubble Tea</h4>
        <Row className="mb-3">
          <Col xs={2}>
            <Image
              src="https://images.foody.vn/res/g73/725302/s120x120/caaccfb4-fe89-4890-af65-292dfc833cf5.jpeg"
              className="w-100"
              alt=""
            />
          </Col>
          <Col xs={8}>1 x Black Diamond Okinawa Milk Tea</Col>
          <Col xs={2} className="text-end fw-bold">
            8$
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={2}>
            <Image
              src="https://images.foody.vn/res/g73/725302/s120x120/d3c6864f-873d-4321-b478-1eacc460631e.jpeg"
              className="w-100"
              alt=""
            />
          </Col>
          <Col xs={8}>1 x Crystal Noodle Milk Tea</Col>
          <Col xs={2} className="text-end fw-bold">
            8$
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={2}>
            <Image
              src="https://images.foody.vn/res/g73/725302/s120x120/1078d4f4-a32e-4d83-b985-949e4cf31149.jpeg"
              className="w-100"
              alt=""
            />
          </Col>
          <Col xs={8}>1 x Cream Cheese Green Tea</Col>
          <Col xs={2} className="text-end fw-bold">
            6$
          </Col>
        </Row>
      </div>
      <Row className="py-4 fw-light border-bottom">
        <Col xs={10}>Subtotal {'(1 item)'}</Col>
        <Col xs={2} className="text-end">
          22$
        </Col>
      </Row>
      <Row className="py-4 fw-light border-bottom">
        <Col xs={10}>Applicable fee</Col>
        <Col xs={2} className="text-end">
          0.2$
        </Col>
      </Row>
      <Row className="py-4 fw-light">
        <Col xs={10}>Total</Col>
        <Col xs={2} className="text-primary text-end fs-4">
          22.2$
        </Col>
        <span className="text-end">Tax included, where applicable</span>
      </Row>
      <div className="large__line"></div>
      <Row className="py-4 align-items-center border-bottom">
        <Col xs={1} className="text-primary">
          <FontAwesomeIcon icon={faTicket} />
        </Col>
        <Col xs={6} className="fw-bold text-start">
          Add Voucher
        </Col>
        <Col xs={4} className="text-end">
          Select voucher
        </Col>
        <Col xs={1} className="text-end">
          <FontAwesomeIcon icon={faChevronRight} />
        </Col>
      </Row>
      <Row className="py-4 align-items-center">
        <Col xs={1} className="text-primary">
          <FontAwesomeIcon icon={faClipboard} />
        </Col>
        <Col xs={6} className="fw-bold text-start">
          Note
        </Col>
        <Col xs={4} className="text-end">
          Note
        </Col>
        <Col xs={1} className="text-end">
          <FontAwesomeIcon icon={faChevronRight} />
        </Col>
      </Row>
      <div className="large__line"></div>
      <Row className="py-4 align-items-start">
        <Col xs={1} className="text-warning">
          <FontAwesomeIcon icon={faClipboardList} />
        </Col>
        <Col xs={11} className="text-start">
          By clicking "place Order", you agree to Foobbie Term of service and Regulation
        </Col>
      </Row>
      <div className="d-grid fixed-bottom py-2">
        <Button variant="primary text-white" size="lg">
          Place Order - 8.2$
        </Button>
      </div>
    </div>
  );
}

export default ConfirmOrder;
