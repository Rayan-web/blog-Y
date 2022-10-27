import React from "react";
import Pexel from "../image/pexels.jpg";
import "../index.css";
function BlogPost() {
  return (
    <>
      <div className="w-full space-y-3 mb-5  ">
        <img src={Pexel} alt="" className="img " />
        <h1 className="font-semibold text-2xl">
          Ukrainians told to 'charge everything' as power grid hit by Russia
        </h1>
        <p className="font-medium opacity-90 text-base">
          Ukraine's national energy company has urged citizens to "charge
          everything" by 07:00 (04:00 GMT) Thursday because of expected power
          cuts caused by Russian missile strikes. Energy plants were hit by
          Russian missiles again on Wednesday - part of a wave of such strikes
          since 10 October.
        </p>
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
      <div className="w-full space-y-3 mb-5  ">
        <img src={Pexel} alt="" className="img " />
        <h1 className="font-semibold text-2xl">
          Ukrainians told to 'charge everything' as power grid hit by Russia
        </h1>
        <p className="font-medium opacity-90 text-base">
          Ukraine's national energy company has urged citizens to "charge
          everything" by 07:00 (04:00 GMT) Thursday because of expected power
          cuts caused by Russian missile strikes. Energy plants were hit by
          Russian missiles again on Wednesday - part of a wave of such strikes
          since 10 October.
        </p>
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
    </>
  );
}

export default BlogPost;
