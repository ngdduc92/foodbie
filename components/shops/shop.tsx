import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Button, Col, Image, ListGroupItem, Row } from 'react-bootstrap';
import ProductPopup from '../product-popup/product-popup.component';

interface ShopProps {
    shop: object,
    menu: boolean,
    handleShow: Function,
}

const Shop: FC<ShopProps> = (props) => {
    const router = useRouter();
    const { shop, menu = false, handleShow } = props;

    return (
        <ListGroupItem className='border-0 border-bottom' onClick={() => !menu && router.push(`shop/${shop.id}`)}>
            <Row>
                <Col xs={3} className="px-0 pt-2 m-0">
                    <Image width={'100%'} height={'100%'} className='object-fit-cover rounded-3' src={shop.image} alt={shop.title} />
                </Col>
                <Col xs={9} className="pt-2">
                    <div className="mb-2">
                        <h5 className="fw-bolder">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-2" />
                            {shop.title}
                        </h5>
                    </div>
                    {!menu && (
                        <>
                            <div className="d-flex align-items-center">
                                <div className="text-warning">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <span className="px-2 border-end">4.9</span>

                                <span className="mx-2 px-2 border-end">({shop.quantityPurchased} review)</span>
                                {/* &#8226; */}
                                <div className="ms-2">{shop.distance}</div>
                            </div>
                            <Button variant="outline-primary" size="sm">
                                <span>{' Code 10% off'}</span>
                            </Button>
                        </>
                    )}
                    {menu && (
                        <>
                            <div className="fs-5">
                                <span className="pe-3 border-end">{shop.sold}k sold</span>
                                <span className="ps-3">{shop.like} like</span>
                            </div>
                            <Row>
                                <Col xs={10}>
                                    {shop?.oldPrice && (
                                        <span className="fs-5 me-3 text-decoration-line-through">{shop?.oldPrice}$</span>
                                    )}
                                    <span className=" fs-3 text-primary">{shop?.newPrice || shop?.price}$</span>
                                </Col>
                                <Col xs={2} className=" text-end">
                                    <FontAwesomeIcon
                                        className={'text-primary fs-1'}
                                        icon={faSquarePlus}
                                        onClick={() => handleShow(shop)}
                                    />
                                </Col>
                            </Row>
                        </>
                    )}
                </Col>
            </Row>
        </ListGroupItem>
    );
};

export default Shop;
