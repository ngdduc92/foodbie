import Category from '../components/category/category.component';
import Layout from '@/components/layout/layout.component';
import Slider from '../components/slider/slider.component';
import Product from '@/components/product/product.component';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Category />
      <div className="bottom-line"></div>
      <Product />
    </Layout>
  );
}
