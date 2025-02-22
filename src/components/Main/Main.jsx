import { assets } from "../../assets/assets";
import "./Main.css";
import React, { useContext } from "react";
import { Context } from "../../contexts/Context";

const Main = () => {
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  // function for input
  const inputValue = (event)=> {
    return setInput(event.target.value)
  }

  //function for send data
  const sentData = ()=>{
    return onSent();
  }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>

      <div className="main-container">

        {!showResult
        ? <>
          <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beatiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="bulb" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="message" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="code" />
          </div>
        </div>
        </>
        : <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="user" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="gemini" />
            {loading
            ? <div className="loader">
                <hr />
                <hr />
                <hr />
            </div>
            : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }
        
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a promt here" onChange={inputValue} value={input} />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? <img src={assets.send_icon} alt="send" onClick={sentData} /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
