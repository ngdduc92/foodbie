import { useProductStore } from '@/store/product/product.store';
import { faBasketShopping, faClipboard, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Image, Modal, Row } from 'react-bootstrap';
import { uuid } from '../utils';
import { useRouter } from 'next/router';
import { routerDict } from '@/share/constants';

function Basket() {
  const removeProductToCart = useProductStore((state: any) => state.removeProductToCart);
  const router = useRouter();
  const [showBasket, setShowBasket] = useState(false);
  const carts = useProductStore((state: any) => state.carts);
  const [total, setTotal] = useState(0);
  const handleClose = () => setShowBasket(false);
  const handleShow = () => setShowBasket(true);

  useEffect(() => {
    const result = carts?.reduce((total: number, cart: any) => {
      return (total += cart.total);
    }, 0);
    setTotal(result);
  }, [carts]);

  const removeProducts = () => {
    setShowBasket(false);
    removeProductToCart();
  };

  return (
    <>
      {carts.length > 0 && (
        <div className="fixed-bottom zindex-1">
          <Row className="bg-white ps-3 shadow-lg">
            <Col xs={8} md={9} className="py-3 d-flex align-items-center" onClick={handleShow}>
              <FontAwesomeIcon icon={faBasketShopping} className="text-primary display-6" />
              <span className="text-end text-primary flex-grow-1">{total}$</span>
            </Col>
            <Col xs={4} md={3}>
              <Button
                className="bg-primary text-white w-100 h-100 fs-3"
                onClick={() => router.push(routerDict.confirmOrder)}
              >
                Checkout
              </Button>
            </Col>
          </Row>
          <Modal show={showBasket} onHide={handleClose} centered>
            <Modal.Header className="justify-content-between">
              <Button
                variant="link"
                className="fs-4 text-primary pe-auto text-decoration-none w-25 text-start"
                onClick={removeProducts}
              >
                Clear All
              </Button>
              <Modal.Title>My basket</Modal.Title>
              <a className="pe-auto w-25 text-end">
                <FontAwesomeIcon icon={faXmark} className="fs-1" onClick={handleClose} />
              </a>
            </Modal.Header>
            <Modal.Body>
              {carts.map((carts: any) => (
                <Row className="my-5" key={uuid()}>
                  <Col xs={2}>
                    <Image src={carts.image} className="w-100" alt="" />
                  </Col>
                  <Col xs={10}>
                    <p className="fw-bold fs-3">{carts.title}</p>
                    <p className="fs-5 text-muted">
                      <FontAwesomeIcon icon={faClipboard} /> Add note...
                    </p>
                    <Row>
                      <Col xs={6}>
                        <span className="fs-2 text-primary">{carts.total}$</span>
                      </Col>
                      <Col xs={6} className="text-end">
                        <Button variant="outline-primary">
                          <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <span className="mx-4">{carts.quantity}</span>
                        <Button>
                          <FontAwesomeIcon icon={faPlus} className="text-white" />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Basket;
