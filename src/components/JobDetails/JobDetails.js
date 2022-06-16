import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobDetails.module.css';

const JobDetails = ({
  companyName,
  isNew,
  isFeatured,
  jobTitle,
  moreInfo
}) => (
  <div className={styles.JobDetails}>

    <h3>
      {
        companyName
      }
    </h3>
    {
      isNew && <span>NEW!</span>
    }
    {
      isFeatured && <span>FEATURED</span>
    }
    <h2>
      {
        jobTitle
      }
    </h2>
    <p>
      {
        moreInfo
      }
    </p>
  </div>
);

JobDetails.propTypes = {};

JobDetails.defaultProps = {};

export default JobDetails;
