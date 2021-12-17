import React from 'react'
import './CloseFriend.css'



const CloseFriends = ({user}) => {
    return (
     <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendname">{user.username}</span>
    </li>
    )}

export default CloseFriends
