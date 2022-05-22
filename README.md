# Job Tracker

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  <!-- - [Screenshot](#screenshot) -->
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Filter job listings based on the categories(role, level, languages, tools).
- according to large amount of data, performance of filtering must be good.

<!-- ### Screenshot -->

<!-- ![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it. -->

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML
- CSS 
- javascript
- Responsive design
- React-redux
- [Tailwindcss](https://tailwindcss.com/) - CSS framework
- [Next.js](https://nextjs.org/) - React framework
- [json-server](https://www.npmjs.com/package/json-server) - fake REST API for front-end developers.

### What I learned

According to large amount of data for showing and filtering, also implementing corresponding UI by tailwindcss; I learned how to filter data that have big size with minimum re-rendering of components by using reselect and re-reselect libraries when working with redux.
further, I learned data fetching featurs of nextjs such getStaticProps and getServerSideProps (,...) and worked with them.
for implementing UI, I selected tailwindcss for have more flexibility to implementing it.

```js
export async function getServerSideProps() {

  const response = await fetch(DATA_URL);
  const data = await response.json();

  return {
    props: {
      jobs: data,
    }
  }
}
```
```js
const makeCacheKey = (
    state,
) => {
    
    const { jobs: { filters } } = state;
    let cacheKey = '';

    
    for (const key in filters) {
        filters[key] && (cacheKey += ' ' + key);
    }

    return cacheKey;
}
```
```js
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
            
            if(typeof value === Array){
                isMatch = job => job[key].every(element => value.includes(element));
            }

            const filteredJobs = jobs.filter(isMatch);

            return filteredJobs;
        }

        for (const key in filters) {
            const filterValue = filters[key];

            console.log(typeof filterValue === Array);

            filterValue && (matchJobs = findMatchJobs(matchJobs, key, filterValue));
        }

        return matchJobs;
    }
)(
    makeCacheKey
);
```
### Continued development

To continue developing, I will add 'employer' section to this project for finding their desired developers. in this section, list of all matched developers that filtered by technology and experience of years will show to them and they will offer them.(and any other idea in future...)

### Useful resources

- [improving performance with re-reselect](https://blog.logrocket.com/react-re-reselect-better-memoization-cache-management/) - This helped me to understanding problem of reselect and solving it with re-reselect. I really liked this article and recommand it to you.
- [Reselect](https://redux.js.org/usage/deriving-data-selectors) - This is an amazing article which helped me finally understand reselect. I'd recommend it to anyone still learning this concept.

## Author

- Resume - [Ali Moghimi](https://cvbuilder.me/Resume/fa/6479e813-4612-4b05-830d-4b23f77d9502?template=template26)
- GitHub - [ali moghimi](https://github.com/alimoqimi97)
- LinkedIn - [alimoqimi97](https://www.linkedin.com/in/ali-moghimi-842464174)
