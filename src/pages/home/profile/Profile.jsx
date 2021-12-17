import React from 'react'
import './Profile.css'
import Topbar from '../../../components/topbar/Topbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Rightbar from '../../../components/rightbar/Rightbar'
import Feed from '../../../components/feed/Feed'


const Profile = () => {
    return (
        <>
            <Topbar/>
            <div className="profile">
           <Sidebar/>
           <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">
                   <img className="profileCoverImg" 
                   src="assets/green.jpg" 
                   alt=""
                    />
                  <img className="profileUserImg"
                  src="assets/hello.jpeg"
                   alt=""
                   />


                   </div>
                   <div className="profileInfo">
                       <h4 className="profileInfoName">Nie&n</h4>
                       <sp className="profileInfoDescription">hello Friends</sp>
                   </div>
                 </div>
               <div className="profileRightBottom">
               <Feed/>
               <Rightbar/>
               </div>
         
           </div>
        
          </div>
        </>
    )
}

export default Profile
