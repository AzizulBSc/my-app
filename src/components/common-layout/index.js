
import Loading from '@/app/loading';
import { Suspense } from 'react';

const { default: ReduxProvider } = require('@/provider');

async function CommonLayout({ children }) {

  return (
    <ReduxProvider>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ReduxProvider>
  );
}

export default CommonLayout;
