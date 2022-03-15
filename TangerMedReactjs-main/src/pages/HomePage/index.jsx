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
    const getAllcontainer = async () => {
      const res = await axios.get(
        "http://localhost:8088/api/v1/container/getAllcontainer"
      );
      console.log(res.data);
      setContainers(res.data);
    };
    getAllcontainer();
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
   
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-2 px-4">
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {containers.map((container) => (
                <tr key={container._id}>
                  <th data-label="ref">{container.ref}</th>
                  <th data-label="brand">{container.brand}</th>
                  <th data-label="dimension">{container.dimension}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      this is home page
    </>
  );
}
