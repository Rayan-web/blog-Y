import React from "react";

function CreatePost() {
  return (
    <section className="mx-24 mt-5 ">
      <form className="">
        <h1 className="font-medium">Title</h1>
        <input type="text" className="w-full h-10 bg-[#D9D9D9] rounded-lg " />
        <h1 className="font-medium">Text</h1>
        <textarea
          rows={20}
          type="text"
          className="w-full h-full bg-[#D9D9D9] rounded-lg  "
        />
        <div className="flex justify-between">
          <button className="bg-pinky text-white font-normal p-2 rounded-lg ">
            Upload image
          </button>
          <button className="bg-green-600 text-white font-normal p-2 rounded-lg ">
            Done
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
