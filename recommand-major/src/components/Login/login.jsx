import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import loginArrow from '../image/login_arrow.png';
import loginTail from '../image/login_tail.png';
import loginLogo from '../image/login_logo.png';
import Character from "./Character";

function LoginPage() {
  const [studentID, setStudentID] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentID }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        navigate('/research');
      } else {
        alert('학번 저장 중 오류 발생');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버와의 통신 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='loginpage'>
      <div className="BG">
        <div className="Left_BG">
          <div className="arrow">
            <img src={loginArrow} alt="login" />
          </div>
          <div className="slide"></div>
        </div>
        <div className="Right_BG">
          <div className="login_empty_box"></div>
          <div className="login_box">
            <div className="login_title">
              <span id="login_text1">소프트웨어융합학과</span>
              <span id="login_text1">전공 추천</span>
              <span id="login_text2">본인의 학번을 입력하세요!</span>
            </div>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                id="studentID" 
                name="studentID" 
                placeholder="ex)A123456" 
                value={studentID} 
                onChange={(e) => setStudentID(e.target.value)} 
              />
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
