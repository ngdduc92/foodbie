import React, { useMemo } from 'react';
import useBreakpoint from './use-breakpoint';
import { SIZE_LG, SIZE_MD, SIZE_SM, SIZE_XS } from '@/constants/constants';

const useSliderSettings = () => {
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
    sliderSettingInitial.slidesToScroll = slidesToScrollNumber;
    return sliderSettingInitial;
  }, [size]);
  return sliderSettings;
};
export default useSliderSettings;
