import useBreakpoint from '@/hooks/use-breakpoint';
import { SliderModel } from '@/models/slider.model';
import { faCircleCheck, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Button, Card, Stack } from 'react-bootstrap';
import Slider from 'react-slick';
import styles from './slider.module.scss';
import Link from 'next/link';
import { uuid } from '@/components/utils';
import useSliderSettings from '@/hooks/use-slider-settings';
const cx = classNames.bind(styles);

interface CSliderProps {
  title: string;
  subTitle: string;
  sliders: SliderModel[];
}

const CSlider = ({ title, subTitle, sliders }: CSliderProps) => {
  const sliderSettings = useSliderSettings();

  return (
    <>
      <Stack className="d-flex" gap={3}>
        <div>
          <h3 className="text-primary fw-bolder pb-2">{title}</h3>
          <p>{subTitle}</p>
        </div>
        <Link href="/" className="ms-auto fs-6 text-end w-25">
          See All
          <FontAwesomeIcon icon={faGreaterThan} size="xs" className="ps-1" />
        </Link>
      </Stack>
      <Slider {...sliderSettings}>
        {sliders.map((slider) => (
          <Card key={uuid()}>
            <Card.Img variant="top" src={slider.image} />
            <Card.Body>
              <Card.Text className="d-flex align-items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-primary me-2" />
                <span className={cx('product__name')}>{slider.name}</span>
              </Card.Text>
              <Button className={cx('code__off')} variant="outline-primary">
                Code {slider.codeOff}% off
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Slider>
    </>
  );
};

export default CSlider;
