import pro from './PMS.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import img from "./proj.png"
import { useState,useEffect } from 'react';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import { Height } from '@mui/icons-material';


const ITEM_HEIGHT = 35;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Rishi',
  'Thiru',
  'Jana',
  'Nandhini',
  'Manoj',
  'Somusundaram'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Projectdetails(){
  const email=useSelector((state)=>state.auth.user.Email)
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  
  // const handleChange1 = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
      
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };
  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    const selectedNames = typeof value === 'string' ? value.split(',') : value;
    // Convert selected names array to a comma-separated string
    const formattedValue = typeof value === 'string' ? value : selectedNames.join(',');
    setPersonName(selectedNames); // if needed
    handleChange({ target: { name: 'Team', value: formattedValue }});
  };
  const handleChange = (event) => {
    setInputValue({...inputValue, [event.target.name]: event.target.value})
  };
  const navigate = useNavigate();


  // console.log(user);
 
     //for dropdown
//for onchange value will save in this usestate
 const [inputValue,setInputValue] = useState({
 
  Title: '',
  Email:email,
  Description: '',
  Team: '',
  Startdate: '',
  Deadline: '',
  Tools: '',
  Files: '',
});
// assign value to  setvalue function
console.log(inputValue)

// press submit button prevent default
// const handleSubmit = (event) => {
//   event.preventDefault();
//  axios.post('http://localhost:9025/project_info', inputValue)//inside we write api to post the data in mysql
//  .then(res=> console.log(res))
//  .catch(err=> console.log(err));
// }
 // for submited
 const [submitted, setSubmitted] = useState(false);
//for alert message if  user details submited
const handleSubmit = (e) => {
  e.preventDefault();
 
  // Check if required fields are filled
  if (inputValue.Title.trim() === '' || inputValue.Description.trim() === '' || inputValue.Team.trim() === ''|| inputValue.Tools.trim() === '') {
    alert("User didn't fill the required fields");
    return;
  }
  // Proceed with form submission logic
  // For example, you can send the form data to the backend here
  console.log('Form submitted with data:', inputValue);
  axios.post('http://localhost:8000/project_infos', inputValue)//inside we write api to post the data in mysql
  .then(res=> console.log(res))
  .catch(err=> console.log(err));
  setSubmitted(true);
};
    //image transition
    const [formImagePosition, setFormImagePosition] = useState('hidden1');
useEffect(() => {
    // After the component mounts, set a timeout to display the image after a delay
    const timeoutNo = setTimeout(() => {
      setFormImagePosition('visibled');
    }, 1000); // Delay in milliseconds (adjust as needed)

    // Cleanup function to clear the timeout if the component unmounts before it fires
    return () => clearTimeout(timeoutNo);
  }, []);
 
  const handleClick = () => {
    // Navigate to the signup page
    setTimeout(() => {
      // Navigate to the task page after 3 seconds
      navigate('/task');
    }, 2000); // 3000 milliseconds = 3 seconds
   
  };
  return (
   
  
     <div id='left-container'>

      <div id='page'></div>
      {/* <div id='img-cont'>
      <img src={pro} id='projectmanage' className={formImagePosition === 'visibled' ? 'slidein' : 'hidden1'}alt='hi'/>
     </div>  */}
     <div id='title'>
     
     
    </div> 
    <div>
    {/* <span id='first-name'>Navigate the complexities of modern project management</span> */}
    {/* <span id='name'>Plan your first project in minutes.</span> */}
    </div>
   
    
    <div id="right-container">
      {/* form  */}

      {/*  */}
      <form onSubmit={handleSubmit} id='form1'> 
        {/* <input placeholder="Project-Id" id='id' name='ID'onChange={handleChange}/> */}
         <div id='form'>
         
            {/* <tr>
            <TextField
              
              type="title"
              variant="outlined"
              label="Title"
              autoFocus
              name="Title"
              id='title'
              sx={{ width: "300px", mb: 5 ,}}
              onChange={handleChange}
            />
            <TextField
              type="email"
              variant="outlined"
              label="Email"
              autoFocus
              name="Email"
              value={inputValue.Email}
              sx={{ width: "300px", mb: 1 }}
              onChange={handleChange}
              id='email'
              style={{position: 'relative', left:35 ,fontSize:'10'}}/>
          
            </tr>
            <br></br>
           
            <tr>
            <TextField
              
              type="Description"
              variant="outlined"
              label="Description"
              autoFocus
              name="Description"
              sx={{ width: "300px", mb: 5 }}
              onChange={handleChange}
              id='description'
           />
            <FormControl sx={{ m: 1, width: 300, position: 'relative', bottom: 10, left:30 }}>
             <InputLabel id="demo-multiple-name-label" >Team</InputLabel>
             <Select
             name='Team'
             labelId="demo-multiple-name-label"
            style={{height:"53px"}}
             
              multiple
              value={personName}
              onChange={handleChange1}
              input={<OutlinedInput label="Name" />}
               MenuProps={MenuProps}
               >
              {names.map((name) => (
               <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
                 >
               {name}
             </MenuItem>
              ))}
              
            </Select>
            </FormControl>
          
            </tr>
             <br></br>
            <tr>
            <input type='date' id='startdate' name='Startdate' onChange={handleChange} style={{width:"300px",textAlign:"center",height:"50px",color:"grey"}}/>
            <input type='date' id='enddate' name='Deadline' onChange={handleChange}  style={{width:"300px",textAlign:"center",height:"50px",color:"grey",position: 'relative', left:35}}/>
            </tr>
            <br></br>
            <br></br>
            <tr>
            <TextField
              type="Tools"
              variant="outlined"
              label="Teck stack"
              autoFocus
              name="Tools"
              sx={{ width: "300px", mb: 1 }}
              onChange={handleChange}
              id='tool'
              style={{marginTop:'15px'}}/>
            <input type='file' id='file1'  name='Files' onChange={handleChange} style={{position: 'relative', left:35, marginTop:'15px'}}/>
            </tr>
            <br></br>
            <br></br>
         
            <tr>
            <button type='submit' id='sub'  onClick={handleClick}>Submit</button>
            </tr>
          */}
        
     
          <span id='span-title'>Project Title</span>
         
        <input type="text" id="pro-title"  name='Title' onChange={handleChange}/>
        <br></br>
        <span id='span-email'>Email</span>
        <input type="text" id="Email" name='Email' value={inputValue.Email} disabled />
        <br></br>
        <span id='span-des'>Description</span>
        <input  id='textarea2' name='Description' onChange={handleChange}/>
        <br></br>
        <span id='span-mem'>Team members</span>
       
      <FormControl sx={{ m: 1, width: 335, position: 'relative', bottom: 65, left:10 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          name='Team'
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange1}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
   
        <br></br>
        <label id='label1'>Startdate</label><input type='date' id='startdate' name='Startdate' onChange={handleChange}/>
        <br></br>
        <label id='label2'>Enddate</label><input type='date' id='enddate' name='Deadline' onChange={handleChange}/>
        <br></br>
        <span id='span-tools'>Tools</span>
        <input type='text'  id='toolsused' name='Tools' onChange={handleChange}/>
        <br></br>
        <span id='span-files'>Files</span>
        <input type='file' id='file1'  name='Files' onChange={handleChange}/>
        <br></br>
        <button type='submit' id='sub'  onClick={handleClick}>Submit</button>
        </div>
      </form>
      {submitted && <span id='success'>submitted successfully!</span>}
     
  
    </div>
     
    
    </div>
    
    

  );


      
    
    
    

}
export default Projectdetails;
// Navigate the complexities of modern project management
// Experience a world where consistency meets innovation and where you're always in control. Rocketlane doesn't just enable project delivery; we shape it.