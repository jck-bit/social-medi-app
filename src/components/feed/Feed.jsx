import React from 'react'
import Posts from '../posts/Posts'
import Share from '../share/Share'
import './Feed.css'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <Posts/>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>
        </div>
    )
}

export default Feed
