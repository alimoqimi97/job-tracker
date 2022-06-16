import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterLabels.module.css';

const FilterLabels = ({
  filtersList
}) => (
  <div
    className={styles.FilterLabels}
  >
    <ul>
      {
        filtersList
      }
    </ul>
  </div>
);

FilterLabels.propTypes = {};

FilterLabels.defaultProps = {};

export default FilterLabels;
