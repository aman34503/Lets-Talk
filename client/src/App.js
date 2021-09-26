import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import io from "socket.io-client";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Chatroom from "./pages/Chatroom";
import Wellness from "./pages/Wellness";
import anger from "./components/anger"
import emotional from "./components/emotional"
import mindfullness from "./components/mindfullness"



import Home from "./pages/Home";
import Login from "./pages/Login";
import ChatWindow from "./pages/ChatWindow";
import Chat from "./pages/Chat";

// import Footer from './components/Footer';
const socket = io.connect("/");
socket.on("connect", function() {
  console.log(socket.id);
});
function App() {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />{" "}
          <div
            className="font-serif select-none	bg-primary flex"
            // onClick={() => {
            //   setOnHover(!onHover);
            // }}
          >
            <Navbar onHover={onHover} setOnHover={setOnHover} />
            <Route path="/about" exact component={About} />
            <Route path="/home" exact component={Home} />
            <Route path="/chat" exact component={Chat} />

            {/* <Route path="/chat" exact component={Chatroom} /> */}
            <Route exact path="/chatroom">
              <Chatroom socket={socket} />
            </Route>
            <Route exact path="/chatwindow">
              <ChatWindow socket={socket} />
            </Route>
            <Route path="/Wellness" exact component={Wellness} />
            <Route path="/anger" exact component={anger} />
            <Route path="/emotional" exact component={emotional} />
            <Route path="/mindfullness" exact component={mindfullness} />
          

          

            <Chatbot />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
