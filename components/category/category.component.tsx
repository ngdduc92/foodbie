import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlateWheat, faBagShopping, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import styte from './category.module.scss';
function Category() {
  return (
    <div className={styte.Container}>
      <nav className={styte.MobileCategory}>
        <ul className={styte.MobileCategoryList}>
          <li className={styte.MobileCategoryListItem}>
            <FontAwesomeIcon icon={faPenRuler} className={styte.MobileCategoryIcon} />
            <span className={styte.MobileCategoryContent}>studio</span>
          </li>
          <li className={styte.MobileCategoryListItem}>
            <FontAwesomeIcon icon={faBagShopping} className={styte.MobileCategoryIcon} />
            <span className={styte.MobileCategoryContent}>mart</span>
          </li>
          <li className={styte.MobileCategoryListItem}>
            <FontAwesomeIcon icon={faPlateWheat} className={styte.MobileCategoryIcon} />
            <span className={styte.MobileCategoryContent}>mama woo</span>
          </li>
          <li className={styte.MobileCategoryListItem}>
            <FontAwesomeIcon icon={faPenRuler} className={styte.MobileCategoryIcon} />
            <span className={styte.MobileCategoryContent}>studio</span>
          </li>
          <li className={styte.MobileCategoryListItem}>
            <FontAwesomeIcon icon={faBagShopping} className={styte.MobileCategoryIcon} />
            <span className={styte.MobileCategoryContent}>mart</span>
          </li>
          <li className={styte.MobileCategoryListItem}>
            <FontAwesomeIcon icon={faPlateWheat} className={styte.MobileCategoryIcon} />
            <span className={styte.MobileCategoryContent}>mama woo</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Category;
