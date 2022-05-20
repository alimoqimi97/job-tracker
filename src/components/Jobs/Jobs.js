import React, { useCallback } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import withSwipeItem from '../../../js/HOC/withSwipeItem';
import JobOpportunity from '../JobOpportunity/JobOpportunity';
import SwipingList from '../SwipingList/SwipingList';
import filterJobs from '../../../js/redux/selectors/jobsSelector';
import { addToBookmarks, addToLikedJobs } from '../../../js/redux/slices/jobs/jobsSlice';
import PropTypes from 'prop-types';
import theme from './Jobs.module.css';

const SwipeableItem = withSwipeItem(JobOpportunity);

const Jobs = () => {
  const matchJobs = useSelector(state => filterJobs(state));

  const dispatch = useDispatch();

  const bookmarkJob = useCallback((job) => {
    dispatch(addToBookmarks(job));
  }, []);

  const likeJob = useCallback((job) => {
    dispatch(addToLikedJobs(job));
  }, []);

  const renderItem = useCallback(
    props => <SwipeableItem {...props} />
    , []
  );

  return (
    <div className={theme.Jobs}>
      <SwipingList
        rawData={matchJobs}
        render={renderItem}
        leftContent={<p>bookmark</p>}
        rightContent={<p>like</p>}
        onRightSwipe={likeJob}
        onLeftSwipe={bookmarkJob}
      />
    </div>
  );
};

Jobs.propTypes = {};

Jobs.defaultProps = {};

export default Jobs;
