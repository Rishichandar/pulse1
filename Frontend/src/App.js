import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loginpage } from "./pages/LoginPage/loginpage";
import Register from "./pages/RegisterPage/register";
import Main from "./pages/Attendance/main.js";
import Forgot from "./pages/ForgotPassPage/forgot.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resetpage from "./pages/ResetPasspage/resetpage.js";
import Sidebar1 from "./Usecase/Sidebar/sidebar";
import Home from "./Usecase/Allpages/Home.js";
import Admin from "./Usecase/Allpages/Admin.js";
import Projectdetails from "./Usecase/projectdetails/project-details";
import "./Usecase/Title/title.css"
import "./Usecase/Sidebar/sidebar.css"
import "./Usecase/projectdetails/project.css"
import User from "./Usecase/Allpages/User.js"
import Task from "./Usecase/Allpages/Signup.js";
import Navbar from "./Usecase/Navbar/navbar";
import "./Usecase/Navbar/navbar.css"
import './Usecase/projectdetails/button.css';
import "./Usecase/rightdiv/right-cont.css"
import "./Usecase/Allpages/table.css"
import "./Usecase/Allpages/user.css"
import "./Usecase/Allpages/taskdetails.css"
import Datas from "./pages/content/datas.js";

function App() {
  
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Router>
  <Routes>
    {/* Routes with Sidebar */}
    <Route
      path="/home"
      element={
        <>
           <Navbar/>
          <Sidebar1 />
          <Home />
        </>
      }
    />
    <Route
      path="/admin"
      element={
        <>
          <Navbar/>
          <Sidebar1 />
          <Admin />
        </>
      }
    />
    <Route
      path="/projectdetails"
      element={
        <>
          <Navbar/>
          <Sidebar1 />
          <Projectdetails />
        </>
      }
    />
    <Route
      path="/user"
      element={
        <>
          <Navbar/>
          <Sidebar1 />
          <User />
        </>
      }
    />
     <Route
      path="/attendance-home"
      element={
        <>
          <Sidebar1 />
          <Main />
        </>
      }
    />
    <Route
      path="/task"
      element={
        <>
          <Navbar/>
          <Sidebar1 />
          <Task/>
        </>
      }
    />
    

    {/* Routes without Sidebar */}
    <Route path="/" element={<Loginpage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset" element={<Resetpage />} />
    <Route path="/forgotpass" element={<Forgot />} />
    <Route path="/allData" element={<Datas/>} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
