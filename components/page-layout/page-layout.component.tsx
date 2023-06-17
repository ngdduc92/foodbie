// @flow
// @ts-nocheck
import authService from '@/services/auth';
import { LOGIN } from '@/share/constants/constants';
import { useRouter } from 'next/router';
import type { FunctionComponent } from 'react';
import { createContext, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

// @flow
export type PageProps = {
  children: object;
  secure?: boolean;
  ctx?: object;
  className?: string;
  pageRoute?: string;
};

export const PageCtx = createContext({});
export const usePageContext = () => useContext(PageCtx);

export const PageLayout: FunctionComponent<PageProps> = ({
  children,
  secure,
  ctx,
  className,
  pageRoute,
  ...props
}: PageProps) => {
  const router = useRouter();

  useEffect(() => {
    const apiToken = authService.getToken();
    if (secure && !apiToken) {
      router.push({
        pathname: LOGIN,
        query: { page: pageRoute },
      });
    }
  }, [secure, router, pageRoute]);

  return (
    <PageCtx.Provider value={ctx}>
      <Container className={className || 'mt-3 mb-2'} {...props}>
        {children}
      </Container>
    </PageCtx.Provider>
  );
};
PageLayout.defaultProps = {
  secure: false,
  ctx: {},
  className: '',
};

export default PageLayout;
