import React from "react";
import "./style.css";

function MessageBox() {
  return (
    <div className="messagebox_continer">
      <div class="messagebox">
        <textarea
          class="messagebox_textarea"
          placeholder="Ctrl + Enter to send, / to search prompts, : to use commands"
          rows="3"
        ></textarea>
        <button class="messagebox_button" role="button">
          <div class="button_icon-button-icon__AMZta no-dark"></div>
          <div class="messagebox_send">Send</div>
        </button>
      </div>
    </div>
  );
}

export default MessageBox;
