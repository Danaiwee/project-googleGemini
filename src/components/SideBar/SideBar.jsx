import React, { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../contexts/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context);

  const loadPrompt = async (prompt)=> {
    setRecentPrompt(prompt);
    await onSent(prompt);
  }

  const handleClick = () => {
    return setExtended(!extended);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu-icon"
          onClick={handleClick}
        />
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="new-chat" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item,index)=>{
              return (
                <div onClick={()=> loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="recnet-message" />
                <p key={index}>{item.slice(0,18)} ...</p>
            </div>
              )
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
