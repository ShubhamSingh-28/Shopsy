"use client"
import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react";


function Register() {
  const router = useRouter();
  const[registrationData, setRegistrationData] = useState({
      name:'',
        email: '',
        password: ''
      })
      const handleChange  = (e) =>{
        const { name, value} = e.target;
        setRegistrationData((prevValue) => ({...prevValue, [name]:value}))
      }
     // let router = useRouter();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const response = await axios.post('/api/register',registrationData)
           const data =response.data;
           console.log(data);
           if (data?.success) {
            router.replace('/Admin/login')
           }
           // Reset the form after successful registration
          
        } catch (error) {
           console.error(error);
        }
        setRegistrationData({
          name:'',
          email: '',
          password: ''
       });
     };
     
    
    
    
      return (
     <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={registrationData.name} onChange={handleChange} className=" bg-white" />
        <input type="email" 
        className=" bg-white"
        name="email"  
        placeholder="email" 
        required
        value={registrationData.email}
        onChange={handleChange}
        />
       <input
       className=" bg-white"
       type="password"
       name="password"  
       placeholder="Password"
       required
       value={registrationData.password}
       onChange={handleChange}
    />
        <button type="submit">Register</button>
      </form>
     </div>
    
  )
}

export default Register
