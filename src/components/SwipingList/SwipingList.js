import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import { makeSwipingListItems } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './SwipingList.module.css';

const SwipingList = ({
  rawData,
  onLeftSwipe,
  leftContent,
  onRightSwipe,
  rightContent,
  render
}) => {

  const [data, setData] = useState(rawData);
  const items = useRef(null);

  useEffect(() => {
    setData(rawData);
    items.current = makeSwipingListItems(data, swipeRightOptions, swipeLeftOptions);
  }, [data, rawData, swipeLeftOptions, swipeRightOptions]);


  const swipeRightOptions = useCallback((job) => ({
    content: rightContent,
    action: () => onRightSwipe(job)
  }),[onRightSwipe, rightContent]);

  const swipeLeftOptions = useCallback((job) => ({
    content: leftContent,
    action: () => onLeftSwipe(job)
  }),[leftContent, onLeftSwipe]);

  return (
    <div className={theme.SwipingList}>
      <SwipeableList>
        {
          items
        }
      </SwipeableList>

    </div>
  )
};

SwipingList.propTypes = {
  rawData: PropTypes.array.isRequired,
  leftContent: PropTypes.element,
  onLeftSwipe: PropTypes.func,
  rightContent: PropTypes.element,
  onRightSwipe: PropTypes.func
};

SwipingList.defaultProps = {};

export default memo(SwipingList);
