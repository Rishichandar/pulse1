// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";
// import { CheckToken } from "../../HTTPHandler/api";
// import Resetpage from "../ResetPasspage/resetpage";
// // import UserMenu from "../../Component/usermenu";
// // import Content from "../../Component/layout";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { authenticate, logout } from "../../redux/authSlice/AuthSlice";
// import Content from "../content/content";


// function Main() {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);
//   const navigate = useNavigate();
//   // ? for auth the user


//   // ? for error message
//   const [message, setMessage] = useState("");
//   const [open, setOpen] = React.useState(true);
//   // const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);


//   // ? for getting the name


//   useEffect(() => {
//     CheckToken()
//       .then((res) => {
//         if (res.Status === "Success") {
//           dispatch(authenticate({ user: res.Response }));
//         } else {
//           dispatch(logout());
//           navigate("/");
//         }
//       })
//       .then((err) => {
//         console.log(err);
//         setMessage(err);
//       });
//   }, []);


//   return auth ? (
//     <Box sx={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
//       <Box sx={{ width: "100vw", height: "100vh" }}>
//        <Content info={user} />
//       </Box>
//       {user.IsFirstLogin === 1 ? (
//         <Modal open={open}>
//           <Resetpage closeFn={handleClose} email={user.Email} />
//         </Modal>
//       ) : (
//         <div></div>
//       )}
//     </Box>
//   ) : (
//     <Box>{message}</Box>
//   );
// }


// export default Main;

























import React, { createContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { CheckToken } from "../../HTTPHandler/api";
import Resetpage from "../ResetPasspage/resetpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar1 from "../../Usecase/Sidebar/sidebar";
import Home from "../../Usecase/Allpages/Home";
import UserMenu from "../content/usermenu";
import Content from "../content/content";
import Projectdetails from "../../Usecase/projectdetails/project-details";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../redux/authSlice/AuthSlice";



function Main() {
  const dispatch=useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  // const [user, setUser] = useState({});
   
  const navigate = useNavigate();

  // ? for auth the user
  // const [auth, setAuth] = useState(false);

  // ? for error message
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ? for getting the name

  const Logout = () => {
    localStorage.clear("Token");
    navigate("/");
  };
  useEffect(() => {
    CheckToken()
      .then((res) => {
        if (res.Status === "Success") {
          dispatch(authenticate({ user: res.Response }));
          console.log(user);
        } else {
          dispatch(Logout());
          // setMessage(res.data.ErrMessage);
        }
      })
      .then((err) => {
        console.log(err);
        setMessage(err);
      });
  }, []);

  return auth ? (
    <Box>
      <Box bgcolor={"#3c9ab0"} width={"100%"} height={70}>
        <UserMenu data={user} />
        
      </Box>
      <Box>
        <Content info={user} />
      </Box>
      {user.IsFirstLogin === 1 ? (
        <Modal open={open}>
          <Resetpage closeFn={handleClose} email={user.Email} />
        </Modal>
      ) : (
        <div></div>
      )}
    </Box>
  ) : (
    <Box>{message}</Box>
  );
}

export default Main;
