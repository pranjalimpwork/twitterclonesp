import React, { FC, useState } from "react";
import style from "./style.module.scss";
import { Button, Input, Progress } from "antd";
import { Picker } from "emoji-mart";
const { TextArea } = Input;
const TweetEditor = () => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [showPicker, setShowPicker] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    let word = e.target.value.length;
    const newprogress = (word / 280) * 100;
    console.log(word);

    setProgress(newprogress);
    setText(value);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const addEmoji = (emoji) => {
    setText(text + emoji.native);
    togglePicker();
  };

  return (
    <div className={style.editor_container}>
      <div className={style.profile_box}>
        <img src={"https://www.w3schools.com/howto/img_avatar.png"} alt="" />
      </div>
      <div className={style.editor}>
        <div className={style.input_box}>
          <TextArea
            value={text}
            placeholder="Write something?"
            autoSize={{ minRows: 2 }}
            onChange={handleInput}
          />
        </div>
        <div className={`${style.tool_box} ${text ? style.show : ""} `}>
          <div className={style.tool}>
            <img src="/assets/icons/Media.svg" alt="" />
          </div>
          <div className={style.tool}>
            <img src="/assets/icons/Gif.svg" alt="" />
          </div>
          <div className={style.tool}>
            <img src="/assets/icons/Poll.svg" alt="" />
          </div>
          <div className={style.tool} onClick={togglePicker}>
            <img src="/assets/icons/Emoji.svg" alt="" />
          </div>
          <div className={style.tool}>
            <img src="/assets/icons/Schedule.svg" alt="" />
          </div>
          <Progress
            type="circle"
            percent={progress}
            width={20}
            showInfo={false}
            status={progress > 80 ? "exception" : "active"}
            className={style.progress}
          />
          <Button
            className={style.twt_btn}
            style={{ opacity: text == "" ? "0.5" : "1" }}
          >
            Tweet
          </Button>

          <Picker
            onSelect={addEmoji}
            title="Pick your emoji"
            emoji="point_up"
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default TweetEditor;
