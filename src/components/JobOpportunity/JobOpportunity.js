import React from 'react';
import { makeFiltersList } from '../../../js/lib/functons';
import PropTypes from 'prop-types';
import theme from './JobOpportunity.module.css';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

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

  const filters = tools && languages && [role, level, ...languages, ...tools];

  const filtersList = makeFiltersList(filters);

  const moreInfo = `${postedAt} . ${contract} . ${location}`;

  return (
    <div className={theme.JobOpportunity}>
      <CompanyLogo logo={logo} alt={`${company} image`} />
      {/* <div className='rounded-full w-40'>
        <Image
          loader={loadImage}
          src={logo}
          className='rounded-full mx-auto'
          alt={`${company} image`}
          width='80%'
          height='80%'
          objectFit="cover"
        />
      </div> */}
      <div>
        <h3>
          {
            company
          }
        </h3>
        {
          isNew && <span>New!</span>
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
      <ul>
        {
          filtersList
        }
      </ul>
    </div>
  );
};

JobOpportunity.propTypes = {};

JobOpportunity.defaultProps = {};

export default JobOpportunity;
