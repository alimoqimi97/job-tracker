import React from 'react';
import { loadImage } from '../../../js/lib/functons';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './CompanyLogo.module.css';

const CompanyLogo = ({logo , alt}) => (
  <div
    className={styles.CompanyLogo}
  >
    <Image
      loader={loadImage}
      src={logo}
      className='rounded-full mx-auto'
      alt={alt}
      width='80%'
      height='80%'
      objectFit="cover"
    />
  </div>
);

CompanyLogo.propTypes = {};

CompanyLogo.defaultProps = {};

export default CompanyLogo;
