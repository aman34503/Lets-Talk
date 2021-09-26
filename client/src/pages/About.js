import React from "react";
import about from "../assets/about.svg";
import feature from "../assets/feature.png";

function About() {
  return (
    <>
      <div className="w-full h-full">
        {" "}
        <div className="text-3xl text-white font-extralight ml-40 mt-8 mb-28">
          Let's
          <span className="text-5xl pl-4 font-light"> Talk </span>
        </div>{" "}
        <div className="flex justify-around  mt-16 opacity-90">
          <div className="h-1/3 w-1/3 mr-12">
            {" "}
            <img src={about} alt="chatroom" />
          </div>{" "}
          <div className="h-20 w-1/3 text-white text-2xl text-justify font-light capitalize leading-relaxed">
            <p className="">
              Everyone experiences anxiety. It is a natural and important
              emotion, signaling through stirrings of worry, fearfulness, and
              alarm that danger or a sudden, threatening change is near. Yet
              sometimes anxiety becomes an exaggerated, unhealthy response. If
              you have, or believe you may have, mental health problem, it can
              be helpful to talk about these issues with others. It can be scary
              to reach out for help, but it is often the first step to helping
              you heal, grow, and recover.
            </p>
          </div>
        </div>
        <div className=" h-full my-40 mt-64">
          <div className="">
            <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Build Your Support System{" "}
                </h3>
                <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                  Find someone—such as a parent, family member, teacher, faith
                  leader, health care provider or other trusted individual, who:
                  Gives good advice when you want and ask for it; assists you in
                  taking action that will help Likes, respects, and trusts you
                  and who you like, respect, and trust, too
                </p>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Find a Peer Group{" "}
                </h3>
                <p class="text-md text-gray-500 dark:text-gray-300 py-4">
                  Find a group of people with mental health problems similar to
                  yours. Peer support relationships can positively affect
                  individual recovery because: People who have common life
                  experiences have a unique ability to help each other based on
                  a shared history and a deep understanding that may go beyond
                  what exists in other relationships
                </p>
              </div>
              <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <div class="flex-shrink-0">
                  <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <img src={feature} alt="feature" />
                  </div>
                </div>
                <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                  Participate in Your Treatment Decisions{" "}
                </h3>
                <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                  It’s also important for you to be educated, informed, and
                  engaged about your own mental health. Find out as much as you
                  can about mental health wellness and information specific to
                  your diagnosed mental health problem. Play an active role in
                  your own treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
