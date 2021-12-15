import React from 'react'
import './Rightbar.css'

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthadyContainer">
                    <img className="birthdayImg" src="/assets/itachi.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Juren</b> and <b>three other friemds</b> have a birthday today
                        </span>
                </div>
                <img className="rightbarAd" src="/assets/download.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendlist">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarprofileImg" src="/assets/hey.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Eslam kish</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarprofileImg" src="/assets/yoo.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Itachi</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarprofileImg" src="/assets/hello.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Eslam kish</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarprofileImg" src="/assets/mm.jpeg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Eslam kish</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
