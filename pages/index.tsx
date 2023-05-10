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
      <div className="large__line"></div>
      <Product dataProduct={DATA_PRODUCTS} />
    </Layout>
  );
}
