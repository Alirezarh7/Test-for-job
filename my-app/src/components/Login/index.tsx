"use client";
import React from "react";
import FormData from "../../../Server-API/data.json";
import { useState } from "react";
import Link from "next/link";
import { Manager } from "./Manager";
import sendData from "@/app/API/contacts";

const SignUp = () => {
  const [formData, setFormData] = useState(FormData);
  //const [signUp, setSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async() => {
    try {
      await sendData(formData);
      console.log(formData)
      } catch (error) {
        console.log('we have an error',error)
        throw error
      }
    };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-[#1a5f70]">
      <div className="bg-slate-300 flex">
        <div className="flex w-full h-screen justify-center items-center">
          <div className=" bg-[#1a5f70] w-[95%] h-[95%]  rounded-2xl shadow-2xl flex ">
            <div className="flex w-[95%] h-[95%]   rounded-2xl m-auto flex-col bg-slate-300 ">
              <div className="flex text-2xl text-cyan-900 justify-center">
                <b>Sign in to Acount</b>
              </div>
              <div className="border-2 px-7 m-2 inline-block border-cyan-900"></div>
              <div className="grid grid-cols-2 gap-4 justify-items-auto m-2">
                <div className="flex flex-col justify-center items-center">
                  <label className="felx justify-start text-black">
                    Firstname
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    key="first_name"
                    placeholder="Firstname"
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full text-black"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <label className="felx justify-start text-black">
                    Lastname
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    key="last_name"
                    onChange={handleChange}
                    placeholder="Lastname"
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full text-black"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <label className="felx justify-start text-black">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    key="phone_number"
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full text-black"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <label className="felx justify-start text-black">
                    username
                  </label>
                  <input
                    type="text"
                    name="username"
                    key="username"
                    onChange={handleChange}
                    placeholder="username"
                    className="outline-none bg-white pt-2 pb-2 rounded-xl w-full text-black"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-10">
                <Link
                  href="/"
                  onClick={handleSubmit}
                  className=" bg-cyan-800 text-white border-2 border-black py-2 px-12 inline-block rounded-full hover:bg-slate-300 hover:text-black esese in duration-500"
                >
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Manager />
    </div>
  );
};

export default SignUp;
