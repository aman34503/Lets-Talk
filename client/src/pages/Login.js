import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sawo from "sawo";
import login from "../assets/login.svg";
// For localhost
const API_KEY = "99018950-438f-4e33-bd56-2ff3f99cc3a4";


const LoginPage = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});
  const history = useHistory();
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);
  console.log(payload);
  if (isUserLoggedIn) {
    history.push("/about");
  }
  return (
    <>
      <div className="h-screen bg-primary flex items-center justify-center w-full ">
        <div>
          <div
            id="sawo-container"
            style={{ height: "40vh", width: "25rem" }}
          ></div>
        </div>
        <div className="">
          <div className="ml-40 mt-80 opacity-80">
            {" "}
            <img src={login} alt="login" height="300px" width="450px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
