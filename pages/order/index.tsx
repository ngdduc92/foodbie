import React from 'react';
import styles from './order.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer/footer.component';
import PageLayout from '@/components/page-layout/page-layout.component';
import { GetStaticProps } from 'next';
import { RouteSegments } from '@/enums/route-segments';
const cx = classNames.bind(styles);
interface OrderProps {
  secure: boolean;
  pageRoute: string;
}

export default function Order({ secure, pageRoute }: OrderProps) {
  return (
    <PageLayout secure={secure} pageRoute={pageRoute}>
      <div className={cx('wapper__order')}>
        <div className={cx('Order__completed')}>
          <span className={cx('Order__completed__title')}>Orde completed</span>
          <div className={cx('Order__completed__content')}>
            <div className={cx('information__order')}>
              <div className={cx('order__date')}>
                <i>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </i>
                <span className="ms-2">{'Delivered • 20, Jul'}</span>
              </div>
              <span className={cx('information__shop')}>MayCha Milk Tea</span>
              <div className={cx('information__price')}>
                <span className="ms-2">{'8$ (wallet MOMO) • 3 dishes'}</span>
                <span></span>
              </div>
              <i className={cx('icon__information__order')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </i>
            </div>
            <div className={cx('again__oder')}>
              <span>Re-Order</span>
            </div>
          </div>
          <div className={cx('Order__completed__content')}>
            <div className={cx('information__order')}>
              <div className={cx('order__date')}>
                <i>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </i>
                <span className="ms-2">{'Delivered • 20, Jul'}</span>
              </div>
              <span className={cx('information__shop')}>MayCha Milk Tea</span>
              <div className={cx('information__price')}>
                <span className="ms-2">{'8$ (wallet MOMO) • 6 dishes'}</span>
              </div>
              <i className={cx('icon__information__order')}>
                <FontAwesomeIcon icon={faChevronRight} />
              </i>
            </div>
            <div className={cx('again__oder')}>
              <span>Re-Order</span>
            </div>
          </div>
        </div>
      </div>
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
