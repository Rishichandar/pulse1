
// import { useSelector } from "react-redux";
import Title from "../Title/title";
import Navigate from "../projectdetails/navigate";
import Rightdiv from "../rightdiv/right-cont";



function Home(){
//    const email=useSelector((state)=>state.auth.user.Email)
    return <>

     {/* <h1 style={{textAlign:"center"}}>Email:{email}</h1> */}
     <Title />
     <Navigate/>
     <Rightdiv/>
   
     </>
 
 }
 export default Home;