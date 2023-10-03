import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userInfoStore } from 'store/userInfoStore';

export default function UserInfo() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [campus, setCampus] = useState("");
  const [group, setGroup] = useState("");
  const setUserInfo = userInfoStore(state => state.setUserInfo)

  function submitUserInfo() {
    axios.post("https://j9a510.p.ssafy.io/api/users", {
      name: name,
      campus: campus,
      group: group,
      term: 9,
      email: localStorage.getItem("email"),
    }).then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("email");
      setUserInfo(res.data);
      navigate('/success');
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <div>
        <div>
          <div>회원가입</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="이름을 입력하세요" 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>
            <input 
              type="radio"
              name="campus"
              value="서울"
              onChange={(e) => setCampus(e.target.value)} />
            <span>서울</span>
          </label>
          <label>
            <input 
              type="radio"
              name="campus"
              value="대전"
              onChange={(e) => setCampus(e.target.value)} />
            <span>대전</span>
          </label>
          <label>
            <input 
              type="radio"
              name="campus"
              value="광주"
              onChange={(e) => setCampus(e.target.value)} />
            <span>광주</span>
          </label>
          <label>
            <input 
              type="radio"
              name="campus"
              value="구미"
              onChange={(e) => setCampus(e.target.value)} />
            <span>구미</span>
          </label>
          <label>
            <input 
              type="radio"
              name="campus"
              value="부울경"
              onChange={(e) => setCampus(e.target.value)} />
            <span>부울경</span>
          </label>
        </div>
        <div>
          <input type="number" value="9" readOnly />
        </div>
        <div>
          <label>
            특화
            <input
              type="number" 
              min="1" 
              max="7" 
              value={group} 
              onChange={(e) => setGroup(e.target.value)}/>
          </label>
        </div>
        {/* 가입 요청 보내기 */}
        <div>
          <button onClick={submitUserInfo}>가입하기</button>
        </div>
      </div>
    </div>
  );
}
