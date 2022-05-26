import React from 'react';
import Image from 'next/dist/client/image';
import { makeFiltersList } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './JobOpportunity.module.css';

const loadImage = ({ src, width, quality }) => {
  return `${src}`;
}

const JobOpportunity = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  level,
  postedAt,
  contract,
  location,
  role,
  languages,
  tools
}) => {

  const jobTitle = `${level} ${position}`;

  const imageSrc = logo.split('//');
  let tmp = imageSrc[1].split('/').pop();

  const filters = tools && languages && [role, level, ...languages, ...tools];

  const filtersList = makeFiltersList(filters);

  const moreInfo = `${postedAt} . ${contract} . ${location}`;

  return (
    <div className={theme.JobOpportunity}>
      <Image
        loader={loadImage}
        src={logo}
        alt={`${company} image`}
        width='20px'
        height='20px'
      />
      <h3>{company}</h3>
      {isNew && <span>New!</span>}
      <h2>{jobTitle}</h2>
      <p>{moreInfo}</p>
      <ul>{filtersList}</ul>
    </div>
  );
};

JobOpportunity.propTypes = {};

JobOpportunity.defaultProps = {};

export default JobOpportunity;
