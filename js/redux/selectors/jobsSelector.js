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

        // const {role , level , languages , tools} = filters;

        const findMatchJobs = (jobs, key, value) => {
            const isMatch = job => job[key] === value;

            return jobs.filter(isMatch);
        }

        for (const key in filters) {
            const filterValue = filters[key];

            filterValue && (matchJobs = findMatchJobs(matchJobs, key, filterValue));
        }

        return matchJobs;
    }
)(
    makeCacheKey
);

export default filterJobs;