import React,
{
  memo,
  useCallback,
  useEffect,
  useMemo,
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
import styles from './SwipingList.module.css';


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

  const makeSwipeableList = (itemsData) => (
    <div
      className={styles.ListContainer}
    //  className='flex flex-col gap-4'
    >
      {
        itemsData.length > 0 &&
        itemsData.map((element) => (
          <div className='shadow-lg'>
            <SwipeableListItem
              key={element.id}
              swipeLeft={swipeLeftOptions(element)}
              swipeRight={swipeRightOptions(element)}
            >
              <JobOpportunity
                {...element}
              />
            </SwipeableListItem>
          </div>
        ))
      }
    </div>
  );

  const list = useMemo(
    () => {
      console.log(data);
      makeSwipeableList(data);
    }
    , [data]
  );

  // const list = makeSwipeableList(data);

  return (
    <div className={theme.SwipingList}>
      <SwipeableList>
        {
          makeSwipeableList(data)
          // list
          // list.length > 0 ? list : <h1>Loading...</h1>
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
