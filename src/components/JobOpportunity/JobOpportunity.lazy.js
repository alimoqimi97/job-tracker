import React, { lazy, Suspense } from 'react';

const LazyJobOpportunity = lazy(() => import('./JobOpportunity'));

const JobOpportunity = props => (
  <Suspense fallback={null}>
    <LazyJobOpportunity {...props} />
  </Suspense>
);

export default JobOpportunity;
