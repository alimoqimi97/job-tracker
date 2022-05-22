import React from "react";
import { SwipeableListItem } from "@sandstreamdev/react-swipeable-list";

const withSwipeItem = Item => {

    const SwipeableItem = ({ swipeProps, itemProps, key }) => (
        <SwipeableListItem
            key={key}
            {...swipeProps}
        >
            <Item  {...itemProps} />
        </SwipeableListItem>
    );

    SwipeableItem.displayName = 'swipeableItem';

    return SwipeableItem;
}

export default withSwipeItem;