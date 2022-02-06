import React from 'react'
import './Rightbar.css'
import {Users}  from '../../DummyData'
import Online from '../online/Online'

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthadyContainer">
                    <img className="birthdayImg" src="/assets/itachi.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Juren</b> and <b>three other friends</b> have a birthday today
                        </span>
                </div>
                <img className="rightbarAd" src="/assets/download.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendlist">
                {Users.map((u) => (
                     <Online key={u.id} user={u} />
                 ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
