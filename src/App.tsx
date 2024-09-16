// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import DashBoard from "./view/dashBoard";

function App() {
  // const [_greetMsg, setGreetMsg] = useState("");
  // const [name, _setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main>
      <div className="min-h-screen flex flex-row ">
        <DashBoard />
      </div>
      {/* <Sidebar /> */}
    </main>

  );
}
export default App;
