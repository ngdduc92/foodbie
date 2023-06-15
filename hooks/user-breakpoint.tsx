import { Breakpoint, SIZE_LG, SIZE_MD, SIZE_SM, SIZE_XL, SIZE_XS, SIZE_XXL } from '@/share/constants';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const resolveBreakpoint = (width: number): Breakpoint => {
  if (width < 576) {
    return SIZE_XS;
  } else if (width >= 576 && width < 768) {
    return SIZE_SM;
  } else if (width >= 768 && width < 992) {
    return SIZE_MD;
  } else if (width >= 992 && width < 1200) {
    return SIZE_LG;
  } else if (width >= 1200 && width < 1440) {
    return SIZE_XL;
  }
  return SIZE_XXL;
};

const useBreakpoint = () => {
  const [size, setSize] = useState(() => resolveBreakpoint(0));
  const update = useDebouncedCallback(() => {
    setSize(resolveBreakpoint(window.innerWidth));
  }, 200);

  useEffect(() => {
    setSize(resolveBreakpoint(window.innerWidth));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  return size;
};

export default useBreakpoint;
