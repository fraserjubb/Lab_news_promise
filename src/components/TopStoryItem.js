import React from "react";

const TopStoryItem = ({topStory}) => {

    console.log({topStory})
    return (
        <li>
            <a href={topStory.url}>{topStory.title}</a>
        </li>
    )
}

export default TopStoryItem