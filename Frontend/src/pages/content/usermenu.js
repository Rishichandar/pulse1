import React, { useState } from "react";
import {
  Avatar,
  Modal,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { Settings, ExitToApp, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function UserMenu({ data }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Logout = () => {
    localStorage.clear("Token");
    navigate("/");
  };
  const register = () => {
    navigate("/register");
  };

  const showData = () => {
    navigate("/allData");
    // {
    //   data.RoleId === 1 ? <Datas /> : <div></div>;
    // }
  };
  let email=data.Email
  console.log(email);
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <img
            width={130}
            height={45}
            style={{ position: 'relative', left: '140px' ,top:'8px'}}
            src="https://pozent.com/wp-content/uploads/2023/09/Pozent-approved-logo-01-e1694515008130.png"
            alt="Pozent"
          />
        </Box>
        <Typography color={"white"}style={{ position: 'relative' ,top:'10px',left:'50px',letterSpacing:'2px'}}>ATTENDANCE MANAGEMENT SYSTEM</Typography>
        <Button
          color="inherit"
          sx={{ marginRight: "-330px" }}
          style={{ position: 'relative' ,top:'10px'}}
          onClick={showData}
        >
          View Info
        </Button>
        {/* <Typography position={"absolute"} right={100}> */}
        {/* View */}
        {/* </Typography> */}
        <Box mr={3}>
          <Avatar onClick={handleOpen} style={{ cursor: "pointer", position: 'relative',top:'8px',right:"10px"}}></Avatar>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: "100%",
            bgcolor: "background.paper",
            p: 2,
            boxShadow: 24,
            mt: 8,
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mb={5}
          >
            <Avatar
              onClick={handleOpen}
              style={{ cursor: "pointer", width: "100px", height: "100px" }}
            ></Avatar>

            <Typography variant="h6" component="h2" paddingTop={2}>
              {data.RoleId}-{data.Email}
             
            </Typography>
            <Box
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Typography color={data.RoleId === 2 ? "green" : "red"}>
                {data.RoleId === 2 ? "User" : "Admin"}
              </Typography>
              <Button onClick={Logout}>
                <ExitToApp />
                Sign Out
              </Button>
            </Box>
          </Box>

          <Divider />
          <List>
            {data.RoleId === 2 ? (
              <></>
            ) : (
              <ListItem button onClick={register}>
                <Person sx={{ mr: 2 }} />
                <ListItemText primary="Register" />
              </ListItem>
            )}

            <ListItem button>
              <Settings sx={{ mr: 2 }} />
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Modal>
    </div>
  );
}

export default UserMenu;
