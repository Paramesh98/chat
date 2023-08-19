import React from "react";
import SideBarTitle from "../SidebarTitle";
import ChatList from "../ChatList";
import Button from "../Button";
import "./style.css";

function SideBar() {
  return (
    <div>
      <div class="sidebar">
        <SideBarTitle />

        <div class="home_sidebar-body__9zbei">
          <div
            data-rfd-droppable-id="chat-list"
            data-rfd-droppable-context-id=":r4:"
          >
            <ChatList />
          </div>
        </div>
        <div class="home_sidebar-tail__T2_u7">
          <Button />
        </div>
        <div class="home_sidebar-drag__G9SJI"></div>
      </div>
    </div>
  );
}

export default SideBar;
