import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSpinner, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { Button, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import ProductPopup from '../product-popup/product-popup.component';
import { uuid } from '../utils';
import Shop from './shop';
import { DATA_PRODUCTS } from '../../constants/constants';
import InfiniteScroll from "react-infinite-scroll-component";

interface ShopsProps {
    shops: object[] | undefined;
    menu: boolean;
}

const Shops: FC<ShopsProps> = (props) => {
    const router = useRouter();
    const { menu = false } = props;
    const [showPopup, setshowPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleClose = () => setshowPopup(false);

    const [shops, setShops] = useState([]);
    const fetchData = () => {
        setTimeout(() => {
            setShops([...shops, ...DATA_PRODUCTS])
        }, 5000);
    }

    const handleShow = (item: React.SetStateAction<null>) => {
        setshowPopup(true);
        setSelectedProduct(item);
    };

    return (
        <InfiniteScroll
            dataLength={shops.length}
            next={fetchData}
            hasMore={true}
            loader={<FontAwesomeIcon
                icon={faSpinner}
                spin
                className="w-100 px-auto"
            />}
        >
            <ListGroup>
                {shops?.map((item: any) => (
                    <Shop key={uuid()} shop={item} menu={menu} handleShow={handleShow} />
                ))}
                {selectedProduct && (
                    <ProductPopup showPopup={showPopup} onClose={handleClose} selectedProduct={selectedProduct} />
                )}
            </ListGroup>
        </InfiniteScroll>

    );
};

export default Shops;
