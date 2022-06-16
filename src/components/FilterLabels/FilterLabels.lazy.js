import React, { lazy, Suspense } from 'react';

const LazyFilterLabels = lazy(() => import('./FilterLabels'));

const FilterLabels = props => (
  <Suspense fallback={null}>
    <LazyFilterLabels {...props} />
  </Suspense>
);

export default FilterLabels;
