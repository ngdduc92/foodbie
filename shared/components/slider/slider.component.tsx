import useBreakpoint from '@/hooks/user-breakpoint';
import { SIZE_LG, SIZE_MD, SIZE_SM, SIZE_XS } from '@/constants/constants';
import { SliderModel } from '@/models/slider.model';
import { faCircleCheck, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useMemo } from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import Slider from 'react-slick';
import styles from './slider.module.scss';
import Link from 'next/link';
import { uuid } from '@/components/utils';
const cx = classNames.bind(styles);

interface CSliderProps {
  title: string;
  subTitle: string;
  sliders: SliderModel[];
}

const CSlider = ({ title, subTitle, sliders }: CSliderProps) => {
  const size = useBreakpoint();
  const sliderSettings = useMemo(() => {
    let sliderSettingInitial = {
      dots: false,
      infinite: true,
      speed: 700,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
    };
    let slidesToShowNumber;
    let slidesToScrollNumber;
    switch (size) {
      case SIZE_XS:
        slidesToShowNumber = 3;
        slidesToScrollNumber = 3;
        break;
      case SIZE_SM:
      case SIZE_MD:
        slidesToShowNumber = 4;
        slidesToScrollNumber = 4;
        break;
      case SIZE_LG:
        slidesToShowNumber = 5;
        slidesToScrollNumber = 5;
        break;
      default:
        slidesToShowNumber = 6;
        slidesToScrollNumber = 6;
        break;
    }
    sliderSettingInitial.slidesToShow = slidesToShowNumber;
    sliderSettingInitial.slidesToScroll = slidesToShowNumber;
    return sliderSettingInitial;
  }, [size]);

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
