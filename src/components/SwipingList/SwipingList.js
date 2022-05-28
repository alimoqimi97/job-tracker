import React,
{
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import { makeSwipingListItems } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './SwipingList.module.css';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import JobOpportunity from '../JobOpportunity/JobOpportunity';

const SwipingList = ({
  rawData,
  onLeftSwipe,
  leftContent,
  onRightSwipe,
  rightContent,
  render
}) => {

  const [data, setData] = useState(rawData);
  const items = useRef([]);

  const swipeRightOptions = useCallback((job) => ({
    content: rightContent,
    action: () => onRightSwipe(job)
  }), [onRightSwipe, rightContent]);

  const swipeLeftOptions = useCallback((job) => ({
    content: leftContent,
    action: () => onLeftSwipe(job)
  }), [leftContent, onLeftSwipe]);


  useEffect(() => {
    setData(rawData);
    items.current = makeSwipingListItems(
      data,
      swipeRightOptions,
      swipeLeftOptions,
      render
    );

  },
    [
      data,
      rawData,
      render,
      swipeLeftOptions,
      swipeRightOptions
    ]);


  return (
    <div className={theme.SwipingList}>
      <SwipeableList>
        {
          data.map((element) => (
            <SwipeableListItem
              key={element.id}
              swipeLeft={swipeLeftOptions(element)}
              swipeRight={swipeRightOptions(element)}
            >
              <JobOpportunity 
                {...element}
              />
            </SwipeableListItem>
          ))
        }
        {/* {
          items.current.length > 0 ? items.current : <h1>Loading...</h1>
        } */}
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
