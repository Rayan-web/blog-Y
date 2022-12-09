import { collection, getDocs, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Photo from "../image/photo.jpg";
import { db } from "../firebase-config";
function SideBar() {
  const [blogs, setBlogs] = useState([]);
  const collectionref = collection(db, "blogs");
  useEffect(() => {
    const getblogs = async () => {
      const refblogs = await getDocs(collectionref);
      setBlogs(refblogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(refblogs);
    };
    getblogs();
    console.log(blogs);
  }, []);
  return (
    <section className="  gap-5 ">
      {blogs.map((blog) => {
        return (
          <div className="  rounded-lg flex mb-5 ">
            <img
              src={Photo}
              alt=""
              className="w-2/5 h-52 rounded-lg object-cover object-center "
            />
            <div className=" space-y-2 mt-8  ml-4">
              <h1 className="text-lg font-semibold">{blog.Title}</h1>
              <p className="opacity-80 text-gray-500">{blog.Title}</p>
              <div className="font-medium flex gap-2 ">
                <h1 className="text-pinky "> Read more</h1>
                <svg
                  class="w-6 h-6"
                  fill="#CF22C8"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SideBar;
