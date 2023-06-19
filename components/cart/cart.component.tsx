import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, Image, Modal, Row } from 'react-bootstrap'
import { CDropdown, CSplitDropDown } from '@/shared/components/dropdown';
import { ServiceOptionModel } from '@/models/service-option';

export default function Cart() {
  const [show, setShow] = useState(false);

  const options: ServiceOptionModel[] = [
    { id: 1, label: 'All Services', active: true },
    { id: 2, label: 'Food', active: false },
    { id: 3, label: 'Fresh', active: false },
    { id: 4, label: 'Beer', active: false },
    { id: 5, label: 'Flowers', active: false },
    { id: 6, label: 'Mart', active: false }]
  return (
    <>
      <Container fluid >
        <Row className="position-relative bg-light align-items-center py-2 border-top">
          <Col xs={3} className="p-0">
            <CDropdown
              options={options}
              toggleClasse="bg-light ps-3 shadow-none w-100 d-flex justify-content-around align-items-center"
              onClick={(option: ServiceOptionModel) => {
                console.log(1231, option);
              }}
              itemClass="d-flex justify-content-between w-100"
            />
          </Col>
          <Col className="p-0">
          </Col>
          <Col xs={3} className="p-0 text-center">
            <Button variant="light" className='shadow-none' onClick={() => setShow(true)}>
              Clear All
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="bg-light vh-100 text-center px-5 d-flex flex-column pt-5 border-top align-items-center">
        <Image src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" rounded className='w-50 my-5' />
        <span>{"I'm famisshed!"}</span>
        <p className='text-secondary mt-2'>Fill me up quickly by adding some items!</p>
      </div>
      <Modal show={show} centered>
        <Modal.Header closeLabel='Close' className='justify-content-center'>
          <Modal.Title>Are you sure to Clear all drafts?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>The draft orders cannot be recovered.</Modal.Body>
        <Modal.Footer>
          <Button variant="white" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}