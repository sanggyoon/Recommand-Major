import React from 'react';
import './login.css'; // CSS import 방식 변경
import loginArrow from '../image/login_arrow.png'; // 이미지 import 방식 변경
import loginTail from '../image/login_tail.png';
import loginLogo from '../image/login_logo.png';
import Character from "./Character";

function LoginPage() {
  return (
  <div className='loginpage'>
    <div className="BG">
      <div className="Left_BG">
        <div className="arrow">
          {/* src 속성 변경 */}
          <img src={loginArrow} alt="login" />
        </div>
        <div className="slide"></div>
      </div>
      <div className="Right_BG">
        <div className="login_empty_box"></div>
        <div className="login_box">
          <div className="login_title">
            {/* id 속성 변경 */}
            <span id="login_text1">소프트웨어융합학과</span>
            <span id="login_text1">전공 추천</span>
            <span id="login_text2">본인의 학번을 입력하세요!</span>
          </div>
          <form action="/research">
            <input type="text" id="userID" name="userID" placeholder="ex)A123456" />
            <div className="login_icon"></div>
            <button type="submit" id="loginBT" name="loginBT">확인</button>
          </form>
          <img src={loginTail} alt="" />
        </div>
        <div className="character_box">
         <Character />
        </div>
        <div className="logo_box">
          <img src={loginLogo} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
