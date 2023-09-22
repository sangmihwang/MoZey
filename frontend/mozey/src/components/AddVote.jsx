// 투표했을때 알림갈예정

import React, { useState } from "react";

const AddVote = () => {
  const [vote, setVote] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    // 잘못보내면 setMessage(error 트루넣고 msg 넣고)
    // return
  };
  return (
    <div>
      <input type="test" />
      <input type="text" />
      <button onClick={(e) => setFrom(e.target.value)}>클릭하면날아가자</button>
      {/* 클릭했을때 날아가야함 알림 */}
    </div>
  );
};
