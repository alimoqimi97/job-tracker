import SwipeableItem from "../../src/components/SwipeableItem/SwipeableItem";

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
    swipeLeftOptions
) => data.map( element => {

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
        <SwipeableItem
            key={element.id}
            {
            ...swipeableItemProps
            }
        />
    )
});

