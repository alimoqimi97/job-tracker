import React from 'react';
import filterJobs from '../../../js/redux/selectors/jobsSelector';
import PropTypes from 'prop-types';
import styles from './Jobs.module.css';

const Jobs = () => {
  const matchCandidates = useSelector(state => filterJobs(state));

  const dispatch = useDispatch();

  // const rejectCandidate = useCallback((candidate) => {
  //   dispatch(removeCandidate(candidate.barcode));
  // }, []);

  // const acceptCandidate = useCallback((candidate) => {
  //   dispatch(addToAcceptedCandidates(candidate));
  // }, []);

  return (
    <div className="Candidates">
      {/* <PaginatedTable
        columns={columns.current}
        rawData={matchCandidates}
        handleSwipeRight={rejectCandidate}
        handleSwipeLeft={acceptCandidate}
      /> */}
    </div>
  );

  return (
    <div className={styles.Jobs}>
      Jobs Component
    </div>
  );
};

Jobs.propTypes = {};

Jobs.defaultProps = {};

export default Jobs;
