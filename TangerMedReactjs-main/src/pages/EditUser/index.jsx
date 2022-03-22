import React, { useState, useEffect } from "react"
import { EditFormUser } from "../../components"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function EditUser() {
  const [FormData, setFormData] = useState(null)
  const navigate = useNavigate()
  const EditUser_func = async () => {
    let id = FormData._id.id
    let role = FormData.role
  
     await axios.patch(`http://localhost:8080/api/v1/users/${id}`, {role},{headers:{
       "accept":"application/json",
      
     }})
        .then(res=>res.status === 200  && console.log(JSON.stringify(res.data)))
        .then(navigate("/users", {
          replace: true,
        }))
    .catch((err) => console.log(err.response));
  }
  useEffect(() => {
    if(FormData){
      EditUser_func()
    }
  },[FormData])
  
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          <EditFormUser editFormData={setFormData} />
        </h2>
      </div>
    </div>
  )
}
