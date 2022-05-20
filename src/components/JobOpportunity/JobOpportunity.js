import React from 'react';
import Image from 'next/dist/client/image';
import { makeFiltersList } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './JobOpportunity.module.css';

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

  const filters = [role, level, ...languages, ...tools];

  const filtersList = makeFiltersList(filters);

  const moreInfo = `${postedAt} . ${contract} . ${location}`;

  return (
    <div className={theme.JobOpportunity}>
      <Image
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
