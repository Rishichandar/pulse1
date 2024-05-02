import React, { useState } from "react";
import "./content.css";
import img from "./Am.png";
import { Box, Button } from "@mui/material";
import axios from "axios";

const Content = ({ info }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [comment, setComment] = useState("");
  const [isBreakIn, setIsBreakIn] = useState(true);
  const [isLunchIn, setIsLunchIn] = useState(true); // New state for lunch
  const [message, setMessage] = useState("");

  const handleLoginToggle = () => {
    setIsLoggedIn((prevState) => !prevState);
    const activityType = isLoggedIn ? "logout" : "login";
    const messageText = isLoggedIn
      ? "You are successfully logged out!"
      : "You are successfully logged in!";
    const commentText = comment.trim(); // Trim the comment text
    storeActivity(activityType, messageText, commentText);
  };

  const handleActivityToggle = () => {
    setIsBreakIn((prevState) => !prevState);
    const activityType = isBreakIn ? "breakin" : "breakout";
    const messageText = isBreakIn
      ? "You have successfully broken in!"
      : "You have successfully broken out!";
    const commentText = comment.trim(); // Trim the comment text
    storeActivity(activityType, messageText, commentText);
  };

  const handleLunchToggle = () => {
    // Function to toggle lunch in/out
    setIsLunchIn((prevState) => !prevState);
    const activityType = isLunchIn ? "lunchin" : "lunchout";
    const messageText = isLunchIn
      ? "You have successfully taken lunch in!"
      : "You have successfully taken lunch out!";
    const commentText = comment.trim(); // Trim the comment text
    storeActivity(activityType, messageText, commentText);
  };
  const storeActivity = (activityType, messageText, commentText) => {
    const currentDate = new Date(); // Get current date and time
    const month = currentDate.getMonth() + 1; // Get month (returns 0-indexed, so add 1)
    const year = currentDate.getFullYear(); // Get full year
    const date = currentDate.getDate(); // Get day of the month
    const currentdate = `${month}/${date}/${year}`; // Format date as MM/DD/YYYY
    const hours = currentDate.getHours(); // Get hours (0-23)
    const minutes = currentDate.getMinutes(); // Get minutes (0-59)
    const seconds = currentDate.getSeconds(); // Get seconds (0-59)
    const currentTime = `${hours}:${minutes}:${seconds}`; // Format time as HH:MM:SS
    const email = info.Email; // Assuming user object is available

    const data = {
      Date: currentdate,
      Time: currentTime,
      Userid: email,
      Activity_type: activityType,
      Comments: commentText,
    };
    axios
      .post("/attendance_app", data)
      .then((response) => {
        console.log(
          `${activityType} time stored successfully:`,
          response.data.Userid
        );
        setMessage(messageText);
        if (activityType === "login") {
          setIsLoggedIn(true);
        } else if (activityType === "logout") {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(`Error storing ${activityType} time:`, error);
      });
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Box
        className="cont"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "350px" }}
        position={"relative"}
      >
        <Box className="msg">
          <img src={img} alt="" className="logo-wel" />
        </Box>
        <Box className="login">
          <Box className="activity">
            <Box className="comment-box" mt={5}>
              <input
                type="text"
                value={comment}
                onChange={handleInputChange}
                placeholder="Enter your comment"
                className="comment-input"
                style={{textAlign: 'center'}}
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              className="btn-div"
            >
              <Button
                variant="contained"
                color="success"
                className="login-button"
                onClick={handleLoginToggle}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
              <Button
                variant="contained"
                color="success"
                className="break-button"
                onClick={handleActivityToggle}
              >
                {isBreakIn ? "Break In" : "Break Out"}
              </Button>
              <Button
                variant="contained"
                color="success"
                className="lunch-button"
                onClick={handleLunchToggle}
              >
                {isLunchIn ? "Lunch In" : "Lunch Out"}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box>{message && <div className="login-message">{message}</div>}</Box>
      </Box>
    </>
  );
};

export default Content;
