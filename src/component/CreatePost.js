import {
  addDoc,
  collection,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import toast, { Toaster } from "react-hot-toast";
function CreatePost() {
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState("");
  const [newSubject, setNewSubject] = useState("");

  const addblog = async () => {
    const collectionref = collection(db, "blogs");
    const payload = {
      Title: newTitle,
      subject: newSubject,
      createdAt: serverTimestamp(),
    };
    // console.log(payload);
    await addDoc(collectionref, payload);

    toast.success("New blog-Y created");
    navigate("/");
  };
  return (
    <section className="mx-24 mt-5 ">
      <h1 className="font-medium">Title</h1>
      <input
        type="text"
        className="w-full h-10 bg-[#D9D9D9] rounded-lg "
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <h1 className="font-medium">Text</h1>
      <textarea
        rows={20}
        type="text"
        className="w-full h-full bg-[#D9D9D9] rounded-lg  "
        onChange={(event) => setNewSubject(event.target.value)}
      />
      <div className="flex justify-between">
        <button className="bg-pinky text-white font-normal p-2 rounded-lg ">
          Upload image
        </button>
        <button
          className="bg-green-600 text-white font-normal p-2 rounded-lg "
          onClick={addblog}
        >
          Done
        </button>
      </div>
    </section>
  );
}

export default CreatePost;
