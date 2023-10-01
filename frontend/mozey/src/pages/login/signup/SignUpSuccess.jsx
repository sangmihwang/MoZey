import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Success() {
  // const userData = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div>
          <div>가입 완료</div>
          <div style={{ lineHeight: "80px" }}>
          </div>
        </div>
        <div>
          {/* <div>{userData.nickname}님,</div> */}
          <h5>Mozey 회원가입을 진심으로 환영합니다.</h5>
        </div>
        <div>
          <button
            onClick={() => navigate('/')}
            style={{ backgroundColor: "white" }}
          >
            홈으로
          </button>
          {/* <button
            onClick={() => router.push("/login")}
            style={{ backgroundColor: "#9FB9FD", color: "white" }}
          >
            로그인하기
          </button> */}
        </div>
      </div>
    </div>
  );
}
