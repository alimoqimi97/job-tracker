import React, { lazy, Suspense } from 'react';

const LazyJobDetails = lazy(() => import('./JobDetails'));

const JobDetails = props => (
  <Suspense fallback={null}>
    <LazyJobDetails {...props} />
  </Suspense>
);

export default JobDetails;
