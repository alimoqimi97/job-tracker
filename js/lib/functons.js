
export const makeFiltersList = (filters) => filters.map(
    (
        filter,
        index
    ) =>
        <li
            key={index}
        >
            {
                filter
            }
        </li>
);

export const makeSwipingListItems = (
    data,
    swipeRightOptions,
    swipeLeftOptions,
    renderItem
) => data.map(element => {

    const itemProps = {
        data: element,
    };

    const swipeProps = {
        swipeLeft: swipeRightOptions(element),
        swipeRight: swipeLeftOptions(element),
    };

    const swipeableItemProps = {
        swipeProps,
        itemProps,
    };

    return (
        renderItem(swipeableItemProps)
    )
});

export const loadImage = ({ src, width, quality }) => {
    return `${src}`;
  }
  