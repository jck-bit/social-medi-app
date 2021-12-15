import { Bookmark, Chat, Event, Fireplace, Group, RssFeed, Videocam } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className ="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListitems">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListitems">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListitems">
                        <Videocam className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListitems">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListitems">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li><li className="sidebarListitems">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListitems">
                        <Fireplace className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/hello.jpeg" alt="" />
                        <span className="sidebarFriendname">Me alone</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/dark.jpg" alt="" />
                        <span className="sidebarFriendname">Jureh</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/hey.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/yoo.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/hey.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/name.jpg" alt="" />
                        <span className="sidebarFriendname">Mr.Nien</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
