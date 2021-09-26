import React from "react";
import { Link } from "react-router-dom";
function Wellness() {
  return (
    <>
      <div className="w-full h-screen">
        {" "}
        <div className="text-3xl text-white font-extralight ml-40 mt-8">
          Wellness and Personal Devlopment
        </div>{" "}
        <div className="flex justify-around mt-16">
          <Link to="anger">
            <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight 	">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                Anger Management
              </div>
            </div>
          </Link>

          <Link to="emotional">
            <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                Emotional <br /> Resillience
              </div>
            </div>{" "}
          </Link>

          

          <Link to="mindfullness">
            <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
         Mindfullness
              </div>
            </div>{" "}
          </Link>

        </div>
        
      </div>
    </>
  );
}

export default Wellness;
