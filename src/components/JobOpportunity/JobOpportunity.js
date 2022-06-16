import React from 'react';
import { makeFiltersList } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './JobOpportunity.module.css';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import JobDetails from '../JobDetails/JobDetails';
import FilterLabels from '../FilterLabels/FilterLabels';

const JobOpportunity = ({
  company,
  logo,
  new: isNew,
  isFeatured,
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

  const filters = tools && languages && [role, level, ...languages, ...tools];

  const filtersList = makeFiltersList(filters);

  const moreInfo = `${postedAt} . ${contract} . ${location}`;

  const imageAlternativeText = `${company} image`;

  const filterLabelsProps = {
    filtersList
  };

  const jobDetailsProps = {
    isNew,
    isFeatured,
    jobTitle,
    moreInfo
  }
  return (
    <div className={theme.JobOpportunity}>
      <CompanyLogo
        logo={logo}
        alt={imageAlternativeText}
      />
      <JobDetails
        companyName={company}
        {
        ...jobDetailsProps
        }
      />
      <FilterLabels
        {
          ...filterLabelsProps
        }
      />
    </div>
  );
};

JobOpportunity.propTypes = {};

JobOpportunity.defaultProps = {};

export default JobOpportunity;
