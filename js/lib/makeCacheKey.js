
const makeCacheKey = (
    state,
) => {

    const { candidates: { filters } } = state;
    const {technology , experienceYears} = filters;

    return technology + ' ' + experienceYears.toString();
}
export default makeCacheKey;