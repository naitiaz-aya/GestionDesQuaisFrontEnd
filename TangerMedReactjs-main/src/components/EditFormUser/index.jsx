// import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export function EditFormUser(props) {
  // const _id = useRef();
  const  {id}  = useParams("id");
 // console.log(id)
  // const name = useRef("");
  // const adress = useRef("");
  // const nationality = useRef("");
  // const organisation = useRef("");
  const role = useRef("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.editFormData({
      // email: email.current.value,
      // name: name.current.value,
      // adress: adress.current.value,
      // nationality: nationality.current.value,
      // organisation: organisation.current.value,
      
      _id: {id},
      role: role.current.value,
    });
  };
  
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        {/* {id} */}
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500  font-bold">
                    Edit User
                  </h6>
                </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleFormSubmit} >
                  
                  <div className="relative w-full mb-3">
                    
                    <input
                      type="hidden"
                      // ref={_id}
                      defaultValue={id}
                      
                      name="id"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="id"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      role  
                    </label>
                    <input
                      type="text"
                      ref={role}
                      name="role"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Role"
                    />
                  </div>
                  
              
                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="block bg-blue-800 hover:bg-blue-700 active:bg-blue-600 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                    >
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
