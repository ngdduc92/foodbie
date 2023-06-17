// @ts-nocheck

import Category from '../components/category/category.component';
import Layout from '@/components/layout/layout.component';
import SliderBanner from '../components/slider-banner/slider-banner.component';
import Product from '@/components/product/product.component';
import { DATA_PRODUCTS, SHOP_DATA_SUGGEST, SHOP_DATA_WHAT_EAT_TODAY } from '@/share/constants';
import SliderCommon from '@/components/slider-common';
import { Tab, Tabs } from 'react-bootstrap';

export default function Home() {
  return (
    <Layout>
      <SliderBanner />
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
      <Tabs id="menu-tabs" defaultActiveKey="nearby" className="mb-2" fill>
        <Tab eventKey="nearby" title="Nearby" tabClassName="fw-bold">
          <div className="mb-5 pb-5">
            <Product dataProduct={DATA_PRODUCTS} />
          </div>
        </Tab>
        <Tab eventKey="rating" title="Rating" tabClassName="fw-bold">
          <div className="mb-5 pb-5">
            <Product dataProduct={DATA_PRODUCTS} />
          </div>
        </Tab>
      </Tabs>
    </Layout>
  );
}
