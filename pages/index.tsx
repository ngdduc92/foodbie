// @ts-nocheck

import Category from '../components/category/category.component';
import Layout from '@/components/layout/layout.component';
import Slider from '../components/slider/slider.component';
import Product from '@/components/product/product.component';
import { DATA_PRODUCTS } from '@/share/constants';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Category />
      <div className="large__line my-4"></div>
      <div className="wrapper__product__list mb-5 pb-5">
        <h2 className="heading">{"What's delicious around here?"} </h2>
        <Product dataProduct={DATA_PRODUCTS} />
      </div>
    </Layout>
  );
}
