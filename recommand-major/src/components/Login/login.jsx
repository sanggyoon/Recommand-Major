import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // CSS import 방식 변경
import loginArrow from '../image/login_arrow.png'; // 이미지 import 방식 변경
import loginTail from '../image/login_tail.png';
import loginLogo from '../image/login_logo.png';

function LoginPage() {
  const [studentID, setStudentID] = useState('');
  const navigate = useNavigate();

  // studentID 검증 함수
  const validateStudentID = (id) => {
    const regex = /^[A-Za-z]\d{6}$/;
    return regex.test(id);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateStudentID(studentID)) {
  //     navigate('/research');
  //   } else {
  //     alert('학번 형식이 올바르지 않습니다.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStudentID(studentID)) {
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
          console.log(data.message); // 서버에서 온 메시지 출력
          navigate('/research');
        } else {
          alert('학번 저장 중 오류 발생');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('서버와의 통신 중 오류가 발생했습니다.');
      }
    } else {
      alert('학번 형식이 올바르지 않습니다.');
    }
  };

  return (
    <div className="BG">
      <div className="Left_BG">
        <div className="arrow">
          {/* src 속성 변경 */}
          <img src={loginArrow} alt="" />
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
          <form onSubmit={handleSubmit}>
            {/* input과 button 태그 수정 */}
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
          {/* src 속성 변경 */}
          <img src={loginTail} alt="" />
        </div>
        <div className="charater_box"></div>
        <div className="logo_box">
          {/* src 속성 변경 */}
          <img src={loginLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
