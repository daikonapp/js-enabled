import React from 'react';
import FeedWrapper from '../Components/Feed';

function Feed(props){
    console.log('props', props);
    return (
        <div>
            This is Feed
            <FeedWrapper />
        </div>
    )
}

export default Feed;