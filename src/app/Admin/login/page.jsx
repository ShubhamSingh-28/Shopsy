"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
//import  { useForm } from"react-hook-form";


function Login() {
  const router =useRouter();
    const[registrationData, setRegistrationData] = useState({
        email: '',
        password: ''
      })
      const handleChange  = (e) =>{
        const { name, value} = e.target;
        setRegistrationData((prevValue) => ({...prevValue, [name]:value}))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           const response = await axios.post('/api/login',registrationData)
           const data = response.data
           console.log(data);
           if (data?.success) {
            router.replace('/Admin')
           }
          
        } catch (error) {
           console.error(error);
        }
        setRegistrationData({
          email: '',
          password: ''
       });
     };
     
    
    
    
      return (
     <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">login</button>
      </form>
     </div>
    
  )
}

export default Login
