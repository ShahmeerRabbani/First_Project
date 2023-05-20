import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../screen/configRequest";
import { Box, Button, Modal } from "@mui/material";

function Middle() {


    const box = {
        width:500,height:520,
        // justifyContent:"center",
        alignItems:"center",
        display:"flex",
        bgcolor:"white",
        outline:"none",
        borderRadius:"10px",
        boxShadow: 15,
        mt: "70px", ml: "420px",
        flexDirection:"column"
    }



    const navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleLogOut = () => {
        navigate('/', { replace: true })
        console.log("Log Out")
    }

    const handleAddData = async () => {


        console.log("data adding -----")

        const myCollection = collection(db, "New_Data")
        var names = document.getElementById('name').value

        const payload = {
            name: names
        }

        await addDoc(myCollection, payload);

        console.log("data added", payload)
    }

    return <>
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
                            {/* <div className="story-circle1">
                                <div className="story-circle">
                                    <img src="./images/me.jpg"/>
                                </div>
                                </div> */}
                            <img src="./images/me.jpg" alt="" />
                        </div>

                        <div className="story1">
                            <img src="./images/t1.jpg" alt="" />
                        </div>

                        <div className="story1">
                            <img src="./images/t2.jpg" alt="" />
                        </div>

                        <div className="story1">
                            <img src="./images/t3.jpg" alt="" />
                        </div>

                        <div className="story1">
                            <img src="./images/t4.jpeg" alt="" />
                        </div>
                        <div className="story1">
                            <img src="./images/t5.jpg" alt="" />
                        </div>

                        <div className="story1">
                            <img src="./images/t6.jpg" alt="" />
                        </div>

                        <div className="story1">
                            <img src="./images/t7.jpg" alt="" />
                        </div>
                        <div className="story1">
                            <img src="./images/t8.jpg" alt="" />
                        </div>
                        <div className="story1">
                            <img src="./images/t9.jpg" alt="" />
                        </div>
                        <div className="story1">
                            <img src="./images/t10.jpg" alt="" />
                        </div>

                    </div>
                </div>
                <div className="mid-body2">
                    <div className="mid-search">
                        <img src="./images/me.jpg" alt="" />
                        <div className="search-box" onClick={handleOpen}>
                            <p>What's on your mind,Shahmeer?</p>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-aria-labelledby="parent-modal-title"
                                aria-aria-describedby="parent-modal-description"
                            >
                                <Box
                                    sx={box}
                                >
                                    <div></div>
                                    <h2>Create Post</h2>
                                    <textarea
                                        cols={55} rows={20}
                                        type="text" placeholder="What's on your mind?" id="name"></textarea>
                                    <Button
                                        sx={{ mt: 3, width: "400px" }}
                                        size="large"
                                        variant="contained"
                                        onClick={handleAddData}>Post</Button>
                                    <Button
                                        sx={{ mt: 3, width: "400px" }}
                                        size="large"
                                        color="error"
                                        variant="contained"
                                        onClick={handleLogOut}>Cancel</Button>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className="mid-icons">
                        <div className="midle-icon1">
                            <img src="./images/video.png" alt="" />
                            <p>Live video</p>
                        </div>
                        <div className="midle-icon2">
                            <img src="./images/images-removebg-preview.png" alt="" />
                            <p>Photo/video </p>
                        </div>
                        <div className="midle-icon3">
                            <img src="./images/smile_emoji-removebg-preview.png" alt="" />
                            <p>Feeling/activity</p>
                        </div>
                    </div>
                </div>
                <div className="mid-body3">
                    <div className="mid-bodychild">
                        <img src="./images/t4.jpeg" alt="" />
                        <p>Sufiyan Javed</p>
                    </div>
                    <img src="./images/post.jpg" className="postpic" />
                    <div className="like">
                        <div className="like-icon">
                            <img src="./images/thumb-removebg-preview.png" alt="" />
                            <p>like</p>
                        </div>
                        <div className="coment-icon">
                            <img src="./images/comment.png" alt="" />
                            <p>comments</p>
                        </div>
                        <div className="share-icon">
                            <img src="./images/share-removebg-preview.png" alt="" />
                            <p>share</p>
                        </div>
                    </div>
                </div>
                <div className="mid-body3">
                    <div className="mid-bodychild">
                        <img src="./images/t6.jpg" alt="" />
                        <p>Hamza Bhugtawar</p>
                    </div>
                    <img src="./images/post1.jpg" className="postpic" />
                    <div className="like">
                        <div className="like-icon">
                            <img src="./images/thumb-removebg-preview.png" alt="" />
                            <p>like</p>
                        </div>
                        <div className="coment-icon">
                            <img src="./images/comment.png" alt="" />
                            <p>comments</p>
                        </div>
                        <div className="share-icon">
                            <img src="./images/share-removebg-preview.png" alt="" />
                            <p>share</p>
                        </div>
                    </div>
                </div>
                <div className="mid-body3">
                    <div className="mid-bodychild">
                        <img src="./images/t2.jpg" alt="" />
                        <p>Shayan Imran</p>
                    </div>
                    <img src="./images/post2.jpg" className="postpic" />
                    <div className="like">
                        <div className="like-icon">
                            <img src="./images/thumb-removebg-preview.png" alt="" />
                            <p>like</p>
                        </div>
                        <div className="coment-icon">
                            <img src="./images/comment.png" alt="" />
                            <p>comments</p>
                        </div>
                        <div className="share-icon">
                            <img src="./images/share-removebg-preview.png" alt="" />
                            <p>share</p>
                        </div>
                    </div>
                </div>
                <div className="mid-body3">
                    <div className="mid-bodychild">
                        <img src="./images/t9.jpg" alt="" />
                        <p>Zeeshan Kamran</p>
                    </div>
                    <img src="./images/post3.jpg" className="postpic" />
                    <div className="like">
                        <div className="like-icon">
                            <img src="./images/thumb-removebg-preview.png" alt="" />
                            <p>like</p>
                        </div>
                        <div className="coment-icon">
                            <img src="./images/comment.png" alt="" />
                            <p>comments</p>
                        </div>
                        <div className="share-icon">
                            <img src="./images/share-removebg-preview.png" alt="" />
                            <p>share</p>
                        </div>
                    </div>
                </div>
                <div className="mid-body3">
                    <div className="mid-bodychild">
                        <img src="./images/t10.jpg" alt="" />
                        <p>Ali Ansari</p>
                    </div>
                    <img src="./images/post4.jpg" className="postpic" />
                    <div className="like">
                        <div className="like-icon">
                            <img src="./images/thumb-removebg-preview.png" alt="" />
                            <p>like</p>
                        </div>
                        <div className="coment-icon">
                            <img src="./images/comment.png" alt="" />
                            <p>comments</p>
                        </div>
                        <div className="share-icon">
                            <img src="./images/share-removebg-preview.png" alt="" />
                            <p>share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default Middle;