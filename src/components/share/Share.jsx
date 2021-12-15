import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'
import './Share.css'

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/hello.jpeg" alt="" />
                    <input placeholder="What's on Your Mind ?"
                     className="searchInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label  htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room  htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions  htmlColor="gold" className="shareIcon"/>
                            <span className="shareOptionText">feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
