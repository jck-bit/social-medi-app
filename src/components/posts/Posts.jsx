import { MoreVert,ThumbDown } from '@material-ui/icons'

import React,{useState} from 'react'
import './Posts.css'
import { Users } from '../../DummyData'


const Posts = ({post}) => { 
    const [like, setlike] = useState(post.like)
    const likeHandler= () =>{
        setlike(like +1 )
    }

    const [disliked, setdisliked] = useState(post.dislike)
    const dislikeHandler = () =>{
        setdisliked(disliked +1)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postLeft">
                        <img  className="postProfileImg"src={Users.filter(u=>u.id ===post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter(u=>u.id ===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postRight">
                        <MoreVert className="myn"/>
                    </div>
                </div>
                <div className="postCenter">
                  <div className="postText">{post.description}</div>
                    <img className="postImg"src={post.photo} alt="first post" />
                     </div>
                       <div className="postBottom">
                       <div className="postBottomLeft">
                      
                       <img className="likeIcon" src="/assets/like.png" alt="" onClick ={likeHandler}/>                   
                        <span className="postlikeCounter">{like}</span>
                       
                        <ThumbDown htmlColor="tomato"  className="likeIcon" onClick={dislikeHandler}/>
                        <span >{disliked}</span>
                  </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
        
        
    )
}

export default Posts
