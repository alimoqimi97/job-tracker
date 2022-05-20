
const makeCacheKey = (
    state,
) => {
    
    const { jobs: { filters } } = state;
    let cacheKey = '';

    
    for (const key in filters) {
        filters[key] && (cacheKey += ' ' + key);
    }

    console.log(cacheKey);

    return cacheKey;
}
export default makeCacheKey;