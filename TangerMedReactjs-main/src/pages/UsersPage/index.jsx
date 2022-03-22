import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetUsers()
  }, []);
  //.then(response => response.json())  
const GetUsers = () => {
  axios.get("http://localhost:8080/api/v1/users/getAllUsers")  
    .then(response => {
                console.log(response.data)
                setUsers(response.data.data.data) 
            
          })
          
    .catch(error=> console.log(error))
}
  const DeleteUser = (id) => {
    axios.delete(`http://localhost:8080/api/v1/users/${id}`)
    .then((res) => console.log(res)).then(GetUsers)
    .catch((err) => console.log(err.response));
  }
  // const EditUser = (id) => {
  //   axios.delete(`http://localhost:8080/api/v1/users/${id}`)
  //   .then((res) => console.log(res)).then(GetUsers)
  //   .catch((err) => console.log(err.response));
  // }

  const listuser= users.map(user => (
    <tr className="whitespace-nowrap" key={user._id}   >
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">{user.name}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="dimension">
        {user.address}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="serviceDate">
        {user.nationality}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="status">
        {user.organisation}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="userId">
        {user.role}
      </td>
      <td className="px-6 py-4"  >
        <Link to={`/editusers/${user._id}`} className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</Link>
      </td>
      <td className="px-6 py-4">
        <button onClick={() => DeleteUser(user._id)} className="px-4 py-1 text-sm text-red-600 bg-red-200 rounded-full">Delete</button>
      </td>
      
    </tr>
  ));
  //console.log(listitems);
  return (
    <div className="user flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-300 ">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Email</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Adress</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Nationnality</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Organisation</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Role</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {listuser}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
