import React from 'react'
import Posts from '../posts/Posts'
import Share from '../share/Share'
import './Feed.css'
import { Pictures} from '../../DummyData'

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>

                {Pictures.map((p) => {
                    return (
                        <Posts key={p.id} post={p}/>
                    )
                })}
    
          
            </div>
        </div>
    )
}

export default Feed
