import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import stytes from './category.module.scss';
import { CategoryModel } from '@/models/category.model';
import Slider from 'react-slick';
import { Col, Row, Stack } from 'react-bootstrap';
import { uuid } from '../utils';
import useSliderSettings from '@/hooks/use-slider-settings';
import { ChangeEvent, useRef, useState } from 'react';
const cx = classNames.bind(stytes);

interface CategoryProps {
  categories: CategoryModel[];
}

const Category = ({ categories }: CategoryProps) => {
  const sliderSettings = useSliderSettings();
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const sliderRef: any = useRef(null);

  const sliderChanges = {
    ...sliderSettings,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setSliderIndex(newIndex);
    },
  };

  const categoryRows = categories?.reduce((rows: any, currentValue, index) => {
    return (index % 2 == 0 ? rows.push([currentValue]) : rows[rows.length - 1].push(currentValue)) && rows;
  }, []);

  const totalSlider = categoryRows.length - sliderChanges.slidesToShow || 0;

  return (
    <nav className={cx('container', 'mt-5')}>
      <Slider ref={sliderRef} {...sliderChanges}>
        {categoryRows?.map((categoryPair: CategoryModel[]) => (
          <Row key={uuid()} className="gy-4 gx-4">
            <Col>
              <Stack className={cx('category__item')}>
                <span className={cx('wrapper__icon')}>
                  <FontAwesomeIcon icon={categoryPair[0].icon} className={cx('category__icon')} />
                </span>
                <span className={cx('category__content')}>{categoryPair[0].name}</span>
              </Stack>
            </Col>
            {categoryPair[1] && (
              <Col>
                <Stack className={cx('category__item')}>
                  <span className={cx('wrapper__icon')}>
                    <FontAwesomeIcon icon={categoryPair[1].icon} className={cx('category__icon')} />
                  </span>
                  <span className={cx('category__content')}>{categoryPair[1].name}</span>
                </Stack>
              </Col>
            )}
          </Row>
        ))}
      </Slider>
      <Stack className={cx('input__range')}>
        <input
          className="d-flex mx-auto mt-4"
          onChange={(e: ChangeEvent<HTMLInputElement>) => sliderRef.current.slickGoTo(e.target.value)}
          value={sliderIndex}
          type="range"
          min={0}
          max={totalSlider}
          step={sliderChanges.slidesToShow}
        />
      </Stack>
    </nav>
  );
};

export default Category;
