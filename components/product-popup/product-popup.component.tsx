import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Checkbox, HButton, HField, HForm, HRadio, RadioGroup } from '../hook-form';
import { useForm } from 'react-hook-form';
import { uuid } from '../utils';
import { useProductStore } from '@/store/product/product.store';

interface Product {
  like: number;
  sold: number;
  title: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  option: object[];
}
interface ProductPopupProps {
  showPopup: boolean;
  selectedProduct: Product;
  onClose: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = (props) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const [total, setTotal] = useState(1);
  const [numberProduct, setNumberProduct] = useState();
  const addProductToCart = useProductStore((state: any) => state.addProductToCart);

  const handleAddToCart = () => {
    addProductToCart({ ...props.selectedProduct, total: total, quantity: numberProduct });
  };

  useEffect(() => {
    const formValues = methods.getValues();
    const basePrice = props.selectedProduct.newPrice || props.selectedProduct.oldPrice || 0;
    const optionPrice = props.selectedProduct.option?.reduce((total, optionGroup: any) => {
      const selectedOptions = optionGroup.option_content.filter(
        (option: { field: string | number }) => formValues[option.field],
      );
      const optionGroupPrice = selectedOptions.reduce(
        (optionTotal: number, selectedOption: { price: number }) => optionTotal + selectedOption.price,
        0,
      );
      return total + optionGroupPrice;
    }, 0);
    const totalPrice = basePrice * methods.getValues('count') + (optionPrice || 0);
    setTotal(totalPrice);
    setNumberProduct(methods.getValues('count'));
  }, [methods.watch()]);

  useEffect(() => {
    methods.reset();
    methods.setValue('count', 1, { shouldDirty: true });
  }, [props.selectedProduct]);

  const increaseCount = () => {
    methods.setValue('count', methods.getValues('count') + 1, { shouldDirty: true });
  };

  const decreaseCount = () => {
    if (methods.getValues('count') <= 1) return;
    methods.setValue('count', methods.getValues('count') - 1, { shouldDirty: true });
  };

  const onSubmit = (values: any) => {
    props.onClose();
    return Promise.resolve();
  };

  return (
    <>
      <Modal show={props.showPopup} onHide={() => props.onClose()} centered>
        <HForm methods={methods} onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card className="d-flex flex-row border-0 mb-3">
              <Card.Img variant="top" src={props.selectedProduct?.image} style={{ width: '100px', height: '80px' }} />
              <Card.Body style={{ width: '70%' }}>
                <Card.Title className="fs-3">{props.selectedProduct.title}</Card.Title>
                <Card.Text className="fs-5 text-truncate mb-0 w-100">
                  Some quick example text to build on the card title and make up the bulk of the
                </Card.Text>
                <div className="fs-5">
                  <span className="pe-3 border-end">{props.selectedProduct.sold}k sold</span>
                  <span className="ps-3">{props.selectedProduct.like}like</span>
                </div>
                <Row className="align-items-center">
                  <Col xs={2}>
                    <span className="fs-5 text-decoration-line-through">{props.selectedProduct.oldPrice}$</span>
                  </Col>
                  <Col xs={2}>
                    <span className="fs-3 text-primary">{props.selectedProduct.newPrice}$</span>
                  </Col>
                  <Col xs={4} className="text-end">
                    <Button onClick={decreaseCount} variant="outline-primary">
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                  </Col>
                  <Col xs={2}>
                    <HField name="count" className="text-center border-none" labelProps={undefined} />
                  </Col>
                  <Col xs={2}>
                    <Button onClick={increaseCount}>
                      <FontAwesomeIcon icon={faPlus} className="text-white" />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {props.selectedProduct.option &&
              props.selectedProduct.option.map((selectedProductOptionItem: any) => (
                <div key={uuid()}>
                  <p className="bg-light mb-0 py-1 text-black-50" style={{ margin: '0 -1rem', paddingLeft: '1rem' }}>
                    {selectedProductOptionItem.option_title}
                  </p>
                  {selectedProductOptionItem.option_content.map((optionContentItem: any) => (
                    <Row key={uuid()} className="align-items-center">
                      <Col xs={11} className="my-3">
                        <div className="fs-3 fw-bold">{optionContentItem.content_title}</div>
                        <div className="fs-5">{optionContentItem.price}$</div>
                      </Col>
                      <Col xs={1}>
                        <Checkbox name={optionContentItem.field} className="fs-2" />
                      </Col>
                    </Row>
                  ))}
                </div>
              ))}
          </Modal.Body>
          <Modal.Footer>
            <div className="d-grid flex-grow-1">
              <HButton id="btnSubmit" type="submit" variant="primary btn-lg text-white" onClick={handleAddToCart}>
                Add to Basket - {total || props.selectedProduct.newPrice}$
              </HButton>
            </div>
          </Modal.Footer>
        </HForm>
      </Modal>
    </>
  );
};

export default ProductPopup;
