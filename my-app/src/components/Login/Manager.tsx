"use client";
import React from "react";
import { Adduser } from "./Adduser";

export const Manager = () => {

  return (
    <div className="flex flex-col h-full bg-slate-300 text-black">
      <div className="text-2xl text-cyan-900 text-center py-5">
        <b>Contact Manager</b>
      </div>
      <div className="border-2 mx-7 my-2 border-cyan-900"></div>
      <div className="text-2xl text-cyan-900 text-center py-5">
        <b>Contact List</b>
      </div>
      <Adduser />
    </div>
  );
};
