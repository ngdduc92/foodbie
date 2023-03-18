import Main from '../components/Main';
import Layout from '@/components/Layout/layout';
import Slider from '../components/Slider/slider';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Main />
    </Layout>
  );
}
