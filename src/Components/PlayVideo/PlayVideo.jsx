import React from 'react'
import './PlayVideo.css'
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
const PlayVideo = () => {
    return (
        <div className="play-video">
            <video src={video1} controls autoplay muted ></video>
            <h3>Best channel to learn Web developer</h3>

            <div className="play-video-info">
                <p>1524 views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="Like" /></span>
                    <span><img src={dislike} alt="Dislike" /></span>
                    <span><img src={share} alt="Share" /></span>
                    <span><img src={save} alt="Save" /></span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="Publisher" />
                <div>
                    <p>GreatStack</p>
                    <span>1.5M subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid_description">
                <p>Channel that make Learning Easy</p>
                <p>Best channel to learn coding that help you to be a better developer</p>
                <hr />
                <h4>130 Comments</h4>



                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholeson
                            <span>1 day ago</span>
                            <p>This is a great video! Thanks for sharing.</p>
                            <div className="comment_action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                        </h3>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholeson
                            <span>1 day ago</span>
                            <p>This is a great video! Thanks for sharing.</p>
                            <div className="comment_action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                        </h3>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholeson
                            <span>1 day ago</span>
                            <p>This is a great video! Thanks for sharing.</p>
                            <div className="comment_action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                        </h3>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholeson
                            <span>1 day ago</span>
                            <p>This is a great video! Thanks for sharing.</p>
                            <div className="comment_action">
                                <img src={like} alt="" />
                                <span>244</span>
                                <img src={dislike} alt="" />
                            </div>
                        </h3>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default PlayVideo