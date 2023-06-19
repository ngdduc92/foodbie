import React, { useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import DatePicker, { DateObject } from "react-multi-date-picker";
import { CDropdown, CSplitDropDown } from '@/shared/components/dropdown';
import { ServiceOptionModel } from '@/models/service-option';

export default function History() {
  const [values, setValues] = useState([
    new DateObject(),
    new DateObject().add(1, 'days')
  ])
  const options: ServiceOptionModel[] = [
    { id: 1, label: 'All Services', active: true },
    { id: 2, label: 'Food', active: false },
    { id: 3, label: 'Fresh', active: false },
    { id: 4, label: 'Beer', active: false },
    { id: 5, label: 'Flowers', active: false },
    { id: 6, label: 'Mart', active: false }]

  return (
    <>
      <Row className="position-relative bg-light align-items-center py-2 border-top">
        <Col xs={3}>
          <CDropdown
            options={options}
            toggleClasse="bg-light ps-3 shadow-none w-100 d-flex justify-content-around align-items-center"
            onClick={(option: ServiceOptionModel) => {
              console.log(1231, option);
            }}
            itemClass="d-flex justify-content-between w-100"
          />
        </Col>
        <Col xs={4}>
          <CDropdown
            options={options}
            toggleClasse="bg-light ps-3 shadow-none w-100 d-flex justify-content-around align-items-center"
            onClick={(option: ServiceOptionModel) => {
              console.log(1231, option);
            }}
            itemClass="d-flex justify-content-between w-100"
          />
        </Col>
        <Col xs={5}>
          <DatePicker value={values}
            onChange={(data: DateObject[]) => {
              const dataDate: any = data.map(i => i.format());
              setValues(dataDate)
            }}
            range editable={true} dateSeparator=' - ' highlightToday
            arrow={false}
            format='DD/MM/YYYY'
            inputClass='fs-6 bg-light border-0 w-100'
            calendarPosition="bottom"
          />
        </Col>
      </Row>
      <Row>
        <div className="bg-light vh-100 text-center px-5 d-flex flex-column pt-5 border-top align-items-center">
          <Image src="https://cdn-icons-png.flaticon.com/512/223/223002.png" rounded className='w-25 my-5' />
          <span>Start making history</span>
          <p className='text-secondary mt-2'>Items you ordered will show up here so you can find your favourite items again!</p>
        </div>
      </Row>
    </>
  )
}