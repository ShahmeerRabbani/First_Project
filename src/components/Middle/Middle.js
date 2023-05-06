import React from "react";
import Firestore from "../firestore"; 
import { Link } from "react-router-dom";

function Middle(){



    return<>
                <div className="middle-body">
                <div className="main-mid">
                    <div className="mid-body">
                        <div className="mid-childs">
                            <div className="mid-child1">
                                <p>Stories</p>
                            </div>
                            <div className="mid-child1">
                                <p>Reels</p>
                            </div>
                            <div className="mid-child1">
                                <p>Rooms</p>
                            </div>
                        </div>
                        <div className="story">
                            <div className="story1">
                                <div className="myimage">
                                <img src="./images/me.jpg" alt=""/>
                                </div>
                            <div className="border"></div>
                            </div>
                            <div className="story2">
                                <img src="./images/t5.jpg" alt=""/>
                            </div>
                            <div className="story3">
                                <img src="./images/t4.jpeg" alt=""/>
                            </div>
                            <div className="story4">
                                <img src="./images/t8.jpg" alt=""/>
                                <div className="arrow">
                              <button>▶</button>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="mid-body2">
                        <div className="mid-search">
                            <img src="./images/me.jpg" alt=""/>
                            <div className="search-box">
                                <p>What's on your mind,Shahmeer?</p>
                            </div>
                        </div>
                        <div className="mid-icons">
                            <div className="midle-icon1">
                                <img src="./images/video.png" alt=""/>
                                <p>Live video</p>
                            </div>
                            <div className="midle-icon2">
                                <img src="./images/images-removebg-preview.png" alt="" />
                                <p><Link to={"/firestore"}>Photo/video</Link> </p>
                            </div>
                            <div className="midle-icon3">
                                <img src="./images/smile_emoji-removebg-preview.png" alt=""/>
                                <p>Feeling/activity</p>
                            </div>
                        </div>
                    </div>
                    <div className="mid-body3">
                        <div className="mid-bodychild">
                            <img src="./images/t4.jpeg" alt=""/>
                            <p>Sufiyan Javed</p>
                        </div>
                        <img src="./images/post.jpg" className="postpic"/>
                        <div className="like">
                            <div className="like-icon">
                                <img src="./images/thumb-removebg-preview.png" alt=""/>
                                <p>like</p>
                            </div>
                            <div className="coment-icon">
                                <img src="./images/comment.png" alt=""/>
                                <p>comments</p>
                            </div>
                            <div className="share-icon">
                                <img src="./images/share-removebg-preview.png" alt=""/>
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                    <div className="mid-body3">
                        <div className="mid-bodychild">
                            <img src="./images/t6.jpg" alt=""/>
                            <p>Hamza Bhugtawar</p>
                        </div>
                        <img src="./images/post1.jpg" className="postpic"/>
                        <div className="like">
                            <div className="like-icon">
                                <img src="./images/thumb-removebg-preview.png" alt=""/>
                                <p>like</p>
                            </div>
                            <div className="coment-icon">
                                <img src="./images/comment.png" alt=""/>
                                <p>comments</p>
                            </div>
                            <div className="share-icon">
                                <img src="./images/share-removebg-preview.png" alt=""/>
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                    <div className="mid-body3">
                        <div className="mid-bodychild">
                            <img src="./images/t2.jpg" alt=""/>
                            <p>Shayan Imran</p>
                        </div>
                        <img src="./images/post2.jpg" className="postpic"/>
                        <div className="like">
                            <div className="like-icon">
                                <img src="./images/thumb-removebg-preview.png" alt=""/>
                                <p>like</p>
                            </div>
                            <div className="coment-icon">
                                <img src="./images/comment.png" alt=""/>
                                <p>comments</p>
                            </div>
                            <div className="share-icon">
                                <img src="./images/share-removebg-preview.png" alt=""/>
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                    <div className="mid-body3">
                        <div className="mid-bodychild">
                            <img src="./images/t9.jpg" alt=""/>
                            <p>Zeeshan Kamran</p>
                        </div>
                        <img src="./images/post3.jpg" className="postpic"/>
                        <div className="like">
                            <div className="like-icon">
                                <img src="./images/thumb-removebg-preview.png" alt=""/>
                                <p>like</p>
                            </div>
                            <div className="coment-icon">
                                <img src="./images/comment.png" alt=""/>
                                <p>comments</p>
                            </div>
                            <div className="share-icon">
                                <img src="./images/share-removebg-preview.png" alt=""/>
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                    <div className="mid-body3">
                        <div className="mid-bodychild">
                            <img src="./images/t10.jpg" alt=""/>
                            <p>Ali Ansari</p>
                        </div>
                        <img src="./images/post4.jpg" className="postpic"/>
                        <div className="like">
                            <div className="like-icon">
                                <img src="./images/thumb-removebg-preview.png" alt=""/>
                                <p>like</p>
                            </div>
                            <div className="coment-icon">
                                <img src="./images/comment.png" alt=""/>
                                <p>comments</p>
                            </div>
                            <div className="share-icon">
                                <img src="./images/share-removebg-preview.png" alt=""/>
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </>

}

export default Middle;