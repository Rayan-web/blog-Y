import React from "react";
import BlogPost from "./blogPost";
import SideBar from "./SideBar";
function Home() {
  return (
    <section className="grid grid-cols-12 m-5 gap-5 ">
      <div className="col-span-7">
        <BlogPost />
      </div>
      <div className="col-span-5">
        <SideBar />
      </div>
    </section>
  );
}

export default Home;
