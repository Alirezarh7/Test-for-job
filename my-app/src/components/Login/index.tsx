"use client";
import React from "react";
//import { useState } from "react";

const LoginWeb = () => {
  //const [signUp, setSignUp] = useState(false);
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
              <label className="felx justify-start text-black">Username</label>
              <input
                type="text"
                name="First-name"
                placeholder="Firstname"
                className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="felx justify-start text-black">Lastname</label>
              <input
                type="text"
                name="Last-name"
                placeholder="Lastname"
                className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="felx justify-start text-black">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <label className="felx justify-start text-black">Phone number</label>
              <input
                type="number"
                name="Number"
                placeholder="Phone number"
                className="outline-none bg-white pt-2 pb-2 rounded-xl w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className=" bg-cyan-800 text-white border-2 border-black py-2 px-12 inline-block rounded-full hover:bg-slate-300 hover:text-black esese in duration-500"
            >
              sign in
            </a>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default LoginWeb;
