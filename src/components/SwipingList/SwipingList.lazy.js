import React, { lazy, Suspense } from 'react';

const LazySwipingList = lazy(() => import('./SwipingList'));

const SwipingList = props => (
  <Suspense fallback={null}>
    <LazySwipingList {...props} />
  </Suspense>
);

export default SwipingList;
