import React, { useState } from "react";
import BlogPost from "./blogPost";
import SideBar from "./SideBar";
import { collection, addDoc, getDocs } from "firebase/firestore";
function Home() {
  return (
    <section className="grid  grid-cols-12 m-5 gap-5 ">
      <div className="lg:col-span-7 md:col-span-7 col-span-12">
        <BlogPost />
      </div>
      <div className=" lg:col-span-5 md:col-span-5 lg:block md:block hidden ">
        <SideBar />
      </div>
    </section>
  );
}

export default Home;
