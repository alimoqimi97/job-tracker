import React,
{
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import JobOpportunity from '../JobOpportunity/JobOpportunity';
import { SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import { SwipeableList } from '@sandstreamdev/react-swipeable-list';
import { makeSwipingListItems } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './SwipingList.module.css';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


const SwipingList = ({
  rawData,
  onLeftSwipe,
  leftContent,
  onRightSwipe,
  rightContent,
  render
}) => {

  const [data, setData] = useState(rawData);
  // const items = useRef([]);

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
    // items.current = makeSwipingListItems(
    //   data,
    //   swipeRightOptions,
    //   swipeLeftOptions,
    //   render
    // );

  },
    [
      data,
      rawData,
      render,
      swipeLeftOptions,
      swipeRightOptions
    ]);

  const makeSwipeableList = () => (
    <div className='flex flex-col gap-4'>
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
    </div>
  );

  const list = makeSwipeableList();

  return (
    <div className={theme.SwipingList}>
      <SwipeableList>
        {
          list
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
