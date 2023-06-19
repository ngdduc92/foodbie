import React from 'react';
import styles from './order.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer/footer.component';
import PageLayout from '@/components/page-layout/page-layout.component';
import { GetStaticProps } from 'next';
import { RouteSegments } from '@/enums/route-segments';
import { Tab, Tabs } from 'react-bootstrap';
import Ongoing from '@/components/ongoing/ongoing.component';
import History from '@/components/history/history.component';
import ToRate from '@/components/to-rate/to-rate.component';
import Cart from '@/components/cart/cart.component';
const cx = classNames.bind(styles);
interface OrderProps {
  secure: boolean;
  pageRoute: string;
}

export default function Order({ secure, pageRoute }: OrderProps) {
  return (
    <PageLayout className="px-0" secure={secure} pageRoute={pageRoute}>
      <Tabs
        defaultActiveKey="Ongoing"
        id="fill-tab-example"
        fill
        className='border-0'
      >
        <Tab eventKey="Ongoing" title="Ongoing" tabClassName='py-3'>
          <Ongoing />
        </Tab>
        <Tab eventKey="History" title="History" tabClassName='py-3'>
          <History />
        </Tab>
        <Tab eventKey="To Rate" title="To Rate" tabClassName='py-3'>
          <ToRate />
        </Tab>
        <Tab eventKey="Cart" title="Cart" tabClassName='py-3'>
          <Cart />
        </Tab>
      </Tabs >
      < Footer />
      <Footer />
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      secure: true,
      pageRoute: RouteSegments.ORDER,
    },
  };
};
