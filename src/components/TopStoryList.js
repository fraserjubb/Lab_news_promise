import React from "react";
import TopStoryItem from "./TopStoryItem";

const TopStoryList = ({topStories}) => {

    const TopStoryItems = topStories.map((topStory, index) => {
        return <TopStoryItem key={index} topStory={topStory} />
      })

    return (
        <div>
            <ul>
                {TopStoryItems}
            </ul>
        </div>
    )
}

export default TopStoryList