import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { Checkbox, HButton, HField, HForm } from '../hook-form';
import { useForm } from 'react-hook-form';

interface ProductPopupProps {
  showPopup: boolean;
  onClose: () => void;
  onShow: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = (props) => {
  const { showPopup, onClose, onShow } = props;
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = (values: any) => {
    console.log(values);
    onClose();
    return Promise.resolve();
  };

  return (
    <>
      <Modal show={showPopup} onHide={() => onClose()} centered>
        <HForm methods={methods} onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="d-flex flex-row border-0 mb-3">
              <Card.Img
                variant="top"
                src="https://gongcha.com.vn/wp-content/uploads/2023/02/Tra-Xanh-Sua-Dau.png"
                style={{ width: '100px', height: '80px' }}
              />
              <Card.Body style={{ width: '70%' }}>
                <Card.Title className="fs-3">Strawberry Milk Tea</Card.Title>
                <Card.Text className="fs-5 text-truncate mb-0 w-100">
                  Some quick example text to build on the card title and make up the bulk of the
                </Card.Text>
                <div className="fs-5">
                  <span className="pe-3 border-end">5,6k sold</span>
                  <span className="ps-3">91 like</span>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="fs-5 text-decoration-line-through me-3">10$</span>
                    <span className="fs-2 text-primary">8$</span>
                  </div>
                  <div className="">
                    <Button onClick={decreaseCount} variant="outline-primary">
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <span className="mx-4">{count}</span>
                    <Button onClick={increaseCount}>
                      <FontAwesomeIcon icon={faPlus} className="text-white" />
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="">
              <p className="bg-light mb-0 py-1 text-black-50" style={{ margin: '0 -1rem', paddingLeft: '1rem' }}>
                CHOOSE SIZE(Choose 1)
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-contens-between my-3">
                  <div className="d-flex flex-column">
                    <span className="fs-3 fw-bold">Size S</span>
                    <span className="fs-5">0$</span>
                  </div>
                </div>
                <Checkbox name="SizeS" />
              </div>
              {/* <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-contens-between my-3">
                  <div className="d-flex flex-column">
                    <span className="fs-3">Size M</span>
                    <span className="fs-5">0.5$</span>
                  </div>
                </div>
                <Checkbox name="SizeM" />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-contens-between my-3">
                  <div className="d-flex flex-column">
                    <span className="fs-3">Size L</span>
                    <span className="fs-5">1$</span>
                  </div>
                </div>
                <Checkbox name="SizeL" />
              </div> */}
            </div>
            <div className="">
              <p className="bg-light mb-0 py-1 text-black-50" style={{ margin: '0 -1rem', paddingLeft: '1rem' }}>
                TOPPING(Option, Max 7)
              </p>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex flex-column">
                  <span className="fs-3 fw-bold">Calories</span>
                  <span className="fs-5">1$</span>
                </div>
                <Checkbox name="Calories" />
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex flex-column">
                  <span className="fs-3 fw-bold">Caffeine</span>
                  <span className="fs-5">1$</span>
                </div>
                <Checkbox name="Caffeine" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-grid flex-grow-1">
              <HButton id="btnSubmit" type="submit" variant="primary btn-lg text-white">
                Add to Basket - 8$
              </HButton>
            </div>
          </Modal.Footer>
        </HForm>
      </Modal>
    </>
  );
};

export default ProductPopup;
