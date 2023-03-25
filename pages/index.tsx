import Category from '../components/category/category.component';
import Layout from '@/components/layout/layout.component';
import Slider from '../components/slider/slider.component';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Category />
    </Layout>
  );
}
