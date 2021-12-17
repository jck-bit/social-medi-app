import { Bookmark, 
    Chat,
    Event,
    Fireplace,
    Group, 
    RssFeed,
    Videocam 
    } from '@material-ui/icons'


    import {Users}  from '../../DummyData'
import CloseFriends from '../closefriend/CloseFriends'

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
                    {Users.map(u=>(
                        <CloseFriends key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
