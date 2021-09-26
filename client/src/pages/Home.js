import React from "react";
import About from "./About";
import Chatroom from "./Chatroom";
import Wellness from "./Wellness";


function Home() {
  return (
    <>
      <div className="flex flex-col	">
        {" "}
        <div>
          <About />
        </div>
        <div>
          {" "}
          <Wellness />
        </div>
        <div>
          {" "}
          <Chatroom />
        </div>
      </div>
    </>
  );
}

export default Home;
