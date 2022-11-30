import React, { useContext, useState } from 'react'
import UserData from './Store.js'
import './Login.css'

function Login(){

let {userDetails, setuserDetails} = useContext(UserData);
let [localData, setLocalData] = useState({})
const [border, setBorder] = useState(false);
const [lborder, setlBorder] = useState(false);
const [cborder, setcBorder] = useState(false);


const handleChange = (e) =>{
    var data = {...localData,[e.target.name]:e.target.value};
    setLocalData(data)
}

const handleCLick = (e) =>{
    if(!firstName){
        setBorder(true)
    }
    else if(!lastName){
        setlBorder(true)
    }
    else if(!city){
       setcBorder(true)
    }
    else{
        setuserDetails(localData);
    }
}

const tableValues = userDetails.map(val=>(
  
    <div>
        <tr>
         <td>{val.firstName}</td>
        <td>{val.lastName}</td>
        <td>{val.city}</td>
        </tr>
        </div>
       
    
))


return(
    <div>
        <div>
            <input name="firstName" className={border?'mandatory':''} onChange={handleChange} placeholder='Enter FirstName'></input>
            <input name="lastName" className={lborder?'mandatory':''} onChange={handleChange} placeholder='Enter lastName'></input>
            
            <input name="city" className={cborder?'mandatory':''} onChange={handleChange} placeholder='Enter city'></input>
            <button onClick={()=>handleCLick()}>Submit</button>
        </div>

        <div>
        <table>
        <th>
        <td>First Name</td>
        <td>Last Name</td>
        <td>City</td>
        </th>
        {tableValues}
        </table>
        </div>
    </div>
)


}

export default Login