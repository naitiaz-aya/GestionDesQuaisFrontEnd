import React from "react";
import { CardTable } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { useHistory } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

export function HomePage() {
  // const [user, setUser] = useState(null);

  // const [token, setToken] = useState("");
  // const refreshToken = async () => {
  //   try {
  //   const res = await axios.post("http://localhost:8088/api/v1/users/token", { token: user.token });
  //     setUser({
  //       ...user,
  //       token: res.data.accessToken,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const axiosJWT = axios.create()

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     const decodedToken = jwt_decode(user.accessToken);
  //     if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       config.headers["authorization"] = "Bearer " + data.token;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );
  // const navigate = useNavigate();
  // // const history = useHistory();
  // const [name, setName] = useState("");

  // const [expire, setExpire] = useState("");
  const [containers, setContainers] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:8080/api/v1/container/getAllcontainer")
            .then(response => {
                  //console.log(response.data);
              setContainers(response.data.data.doc) 
              
            })
            
            .catch(error=> console.log(error))
     
      
    }, []);

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8088/api/v1/users/token"
  //     );
  //     setToken(response.data.accessToken);
  //     const decoded = jwt_decode(response.data.accessToken);
  //     setName(decoded.name);
  //     setExpire(decoded.exp);
  //   } catch (error) {
  //     if (error.response) {
  //       navigate("/", {
  //         replace: true,
  //       });
  //     }
  //   }
  // };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     const currentDate = new Date();
  //     if (expire * 1000 < currentDate.getTime()) {
  //       const response = await axios.get("http://localhost:8088/api/v1/users/token");
  //       config.headers.Authorization = `Bearer ${response.data.accessToken}`;
  //       setToken(response.data.accessToken);
  //       const decoded = jwt_decode(response.data.accessToken);
  //       setName(decoded.name);
  //       setExpire(decoded.exp);
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  // const getContainers = async () => {
  //   const response = await axiosJWT.get("http://localhost:8088/api/v1/container/getAllcontainer", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   setContainers(response.data);
  // };
    

  const listitems= containers.map(container => (
    <tr className="whitespace-nowrap" key={container._id} >
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{container.ref}</div></td>
                                <td className="px-6 py-4 text-sm text-gray-500">{container.brand}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="dimension">{container.dimension}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="serviceDate">{container.serviceDate}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="status">{container.status}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="userId">{container.userId.name}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="userIdRole">{container.userId.role}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="truckId">{container.truckId.matricule}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="categoryId">{container.categoryId.name}</td>
      <td className="px-6 py-4 text-sm text-gray-500" data-label="blockPartIdX">{container.blockPartId.xIndex}{container.blockPartId.yIndex}{container.blockPartId.zIndex}</td>
    </tr>
  ))
  //console.log(listitems);
  return (
   
    <div className="container flex justify-center mx-auto">
    <div className="flex flex-col">
        <div className="w-full">
        {!containers && (<div>loading ...</div>)}
            <div className="border-b border-gray-200 shadow">
                <table className="divide-y divide-gray-300 ">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-2 text-xs text-gray-500">
                  Ref
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Brand
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Dimension
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Service Date
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Status
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  User Name
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  User Role
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Truck Matricule
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Category
                </th>
                <th className="px-6 py-2 text-xs text-gray-500">
                  Block Part
                </th>
               
                
                              
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {containers&&listitems}
              </tbody>
          </table>
        </div>
       </div>
       </div>

      </div>
       
    
  );
}
