import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Allusers() {
  const navigate = useNavigate();
 
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const user =  getUser();
    console.log(user);
}, []);

const  getUser=async()=> {
  const response = await fetch(`http://localhost:5173/users`);
  
  
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  const data = await response.json();
  setAllUsers(data);

  return response.json();
}

//   async function getData() {
//     const url = "http://localhost:5173/users";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json =  response;
//       console.log(response);
//     //   setAllUsers(json);

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const CallServer = async () => {
    
//     try {
//       // await createUser(formData);

//        fetch(`http://localhost:5173/users`, {
       
//       });

  
      
//       if (!response.ok) {
//         throw new Error('Failed to create user');
//       }

//       return response.json();


//       navigate('/');
//     } catch (error) {
//       console.error('Failed to create user:', error);
//     } finally {
//     }
//   };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
    
    
    <div className="">
      {JSON.stringify(allUsers)} 
           
    </div>

   
    </div>
  );
}