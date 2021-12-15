import { MoreVert } from '@material-ui/icons'
import React from 'react'
import './Posts.css'
const Posts = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <img  className="postProfileImg"src="/assets/hello.jpeg" alt="" />
                        <span className="postUsername"> Ni&n</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postRight">
                        <MoreVert className="myn"/>
                    </div>
                </div>
                <div className="postCenter">
                  <div className="postText">Hey ! This is my firs post</div>
                    <img className="postImg"src="/assets/hey.jpg" alt="first post" />
                     </div>
                       <div className="postBottom">
                       <div className="postBottomLeft">
                       <img className="likeIcon" src="/assets/like.png" alt="" />
                     <img  className="likeIcon" src="/assets/heart.png" alt="" />
                    <span className="postlikeCounter">Liked by juren and 45 others</span>
                  </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        
        
    )
}

export default Posts
