import React, { lazy, Suspense } from 'react';

const LazyCompanyLogo = lazy(() => import('./CompanyLogo'));

const CompanyLogo = props => (
  <Suspense fallback={null}>
    <LazyCompanyLogo {...props} />
  </Suspense>
);

export default CompanyLogo;
