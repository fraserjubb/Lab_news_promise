import React, { useState, useEffect } from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TopStoryList from '../components/TopStoryList'


const NewsContainer = () => {

    const [topStories, setTopStories] = useState([])

    useEffect( () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(ids => ids.slice(0, 20))
            .then(ids20 => ids20.map(id => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    .then(res => res.json())
            }))
            .then(twentyPromises => Promise.all(twentyPromises))
            .then(finalStories => setTopStories(finalStories))
        // console.log(twentyPromises)

        
            // Promise.all(twentyPromises)
            //     .then(console.log)
    }, [])

    return (
        <div>
            <h1>NEWS OIOI</h1>
            <TopStoryList topStories={topStories}/>
        </div>
    )

}

export default NewsContainer