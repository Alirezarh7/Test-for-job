"use client";
import React, { useState, useEffect } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
//import formdata from "../../../Server-API/data.json";
import Axios from "../../app/API/contacts";
import  {Contact}  from "./Contact";
export const Adduser = () => {

  const [edit, setEdit] = useState(false);
  const [delet, setDelet] = useState(false);
  const [save, setSave] = useState(false);
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState<Contact[]>([]);

  const getData = () => {
    Axios.get("/contacts").then((res) => {
      setData(res.data);
    });
  };


  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (save) {
      setEdit(false);
    }
  }, [save]);

  return (  
    <main>
      {data && data.map((user) => (
        <div key={user.id}>
          <div className="border-2 mx-7 my-2 border-cyan-900"></div>
          <div className="flex flex-col md:flex-row justify-between items-center mx-4 my-4">
            <div className="flex items-center mb-4 md:mb-0">
              <IoPersonAddOutline size={45} />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-2">
                {edit ? (
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
                  />
                ) : (
                  <div>{user.username}</div>
                )}
              </div>
              <div className="mb-2">
                {edit ? (
                  <input
                    type="text"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
                  />
                ) : (
                  <div>{user.phoneNumber}</div>
                )}
              </div>
              <div className="mb-2">
                {edit ? (
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
                  />
                ) : (
                  <div>{user.lastName}</div>
                )}
              </div>
              <div className="mb-2">
                {edit ? (
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
                  />
                ) : (
                  <div>{user.lastName}</div>
                )}
              </div>
            </div>
            <div className={edit ? "hidden" : "flex items-center gap-5"}>
              <div>
                <GrEdit
                  className="cursor-pointer hover:text-red-700"
                  size={25}
                  onClick={() => setEdit((prevEdit) => !prevEdit)}
                />
              </div>
              <div>
                <MdDelete
                  className="cursor-pointer hover:text-red-700"
                  size={25}
                  onClick={() => setDelet(!delet)}
                />
              </div>
            </div>
            <div
              className="flex justify-end mb-4 md:mb-0"
              onClick={() => setSave(!save)}
            >
              <div
                className={
                  edit
                    ? "bg-cyan-800 text-white border-2 border-black py-2 px-6 rounded-full hover:bg-slate-300 hover:text-black duration-500"
                    : "hidden"
                }
              >
                Save
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
  
export default Adduser
