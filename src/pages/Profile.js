import React from "react";
import axios from "axios";
import { useState } from "react";
const Profile = () => {
  const [verify,setVerify]=useState(false);
  const token=localStorage.getItem
  const fun = async (req, res) => {
    try {
      const pr = await axios.get("http://localhost:3000/api/profile", {
        headers: {
          Authorization:
            // "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDcyMmNkMjdkYjJjMDA5YmVjYjExYzAiLCJpYXQiOjE2ODUyOTcxMzAsImV4cCI6MTY4NTM2OTEzMH0.7x7VgZexGyhOJmfhVJMO8gJOJ5K2WNTZnjS7Q4bD0Hc",
       `bearer ${token}`
          },
      });
      console.log(pr);
      if (pr.status==200) {
        setVerify(true);
        res.status(200).send({
          success: true,
          pr,
        });
      } else {
        res.status(500);
      }
    } catch (err) {
      console.log(err);
    }
  };
  fun();
  return (
    <>
        {
      verify && (
        <div>
        <h1>Profile Page</h1> 
  
         {/* {verify?"Page is Unlock":""} */}
      </div>
      )
    }
    </>

  
  );
};

export default Profile;
