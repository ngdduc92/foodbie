// @ts-nocheck

import Category from '../components/category/category.component';
import Layout from '@/components/layout/layout.component';
import Slider from '../components/slider/slider.component';
import Product from '@/components/product/product.component';
import { DATA_PRODUCTS, SHOP_DATA_SUGGEST, SHOP_DATA_WHAT_EAT_TODAY } from '@/share/constants';
import SliderCommon from '@/components/slider-common';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Category />
      <div className="large__line my-4"></div>
      <SliderCommon
        title="What should you eat today?"
        subTitle={"If you don't know what you want to eat. Foobbie will suggest you now!"}
        sliders={SHOP_DATA_WHAT_EAT_TODAY}
      />
      <div className="large__line my-4"></div>
      <SliderCommon
        title="Foobbie Suggest"
        subTitle="Suggest a lot of food you need to try today!"
        sliders={SHOP_DATA_SUGGEST}
      />
      <div className="large__line my-4"></div>
      <div className="wrapper__product__list mb-5 pb-5">
        <h2 className="text-primary fw-bolder">{"What's delicious around here?"} </h2>
        <Product dataProduct={DATA_PRODUCTS} />
      </div>
    </Layout>
  );
}
