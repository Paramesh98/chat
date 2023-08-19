import logo from "./logo.svg";
import "./App.css";
import ChatList from "./components/ChatList";
import SideBarTitle from "./components/SidebarTitle";
import Button from "./components/Button";
import SideBar from "./components/SideBar";
import MessageBox from "./components/MessageBox";
import ChatHeader from "./components/ChatHeader";
import ChatTile from "./components/ChatTile";

function App() {
  return (
    <div className="App">
      <ChatHeader />
      <ChatTile />
    </div>
  );
}

export default App;
