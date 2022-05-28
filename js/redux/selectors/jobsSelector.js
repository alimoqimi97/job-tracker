import { createCachedSelector } from 're-reselect';
import makeCacheKey from '../../lib/makeCacheKey';

const getJobs = (state) => state.jobs.jobs;
const getFilters = state => state.jobs.filters;

const filterJobs = createCachedSelector(
    [
        getJobs,
        getFilters
    ],
    (
        jobs,
        filters,
    ) => {

        let matchJobs = jobs;

        const findMatchJobs = (jobs, key, value) => {
            let isMatch = job => job[key] === value;

            if (Array.isArray(value)) {
                isMatch = job => job[key].every(element => value.includes(element));
            }

            const filteredJobs = jobs.filter(isMatch);

            return filteredJobs;
        }

        for (const key in filters) {
            const filterValue = filters[key];

            filterValue &&
                filterValue.length &&
                (matchJobs = findMatchJobs(matchJobs, key, filterValue));
        }

        return matchJobs;
    }
)(
    makeCacheKey
);

export default filterJobs;