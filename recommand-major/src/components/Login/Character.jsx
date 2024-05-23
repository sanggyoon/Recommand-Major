import React, { useState, useEffect } from "react";
import Character_Tail from "../image/character_Tail.png";
import "./Character.css"; // CSS 파일에서 스타일링을 해줍니다.

function Charater() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // 눈의 형태를 결정하는 상태 추가 (true는 동그라미, false는 일직선)
  const [eyesOpen, setEyesOpen] = useState(true);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let timerId = null;

    const blinkEyes = () => {
      setEyesOpen(false); // 먼저 눈을 감습니다.
      setTimeout(() => {
        setEyesOpen(true); // 일정 시간 후 눈을 뜹니다.

        // 눈을 뜬 후, 다음 눈 깜빡임까지의 최소 시간 간격을 2분(120초, 120000밀리초)으로 설정합니다.
        const nextBlinkTime = Math.random() * (8000 - 6000) + 1200; // 2분에서 3분 사이의 랜덤한 시간 간격을 설정합니다.
        timerId = setTimeout(blinkEyes, nextBlinkTime); // 설정한 시간 간격 후에 blinkEyes 함수를 다시 실행합니다.
      }, 200); // 눈을 감았다가 200밀리초 후에 뜹니다.
    };

    // 초기 깜빡임 시작
    blinkEyes();

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트 마운트 시에만 이 효과를 실행합니다.

  return (
    <div className="character">
      <div
        className="face"
        style={{
          left: `calc(${mousePosition.x / 110}px)`,
          top: `calc(${mousePosition.y / 110}px)`,
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="eye left"
          style={{
            left: `calc(35% + ${mousePosition.x / 50}px - 20px)`,
            top: `calc(40% + ${mousePosition.y / 20}px - 15px)`,
            borderRadius: eyesOpen ? "60%" : "10%",
            height: eyesOpen ? "20px" : "5px",
            width: eyesOpen ? "20px" : "18px",
          }}
        ></div>
        <div
          className="eye right"
          style={{
            left: `calc(27% + ${mousePosition.x / 35}px + 40px)`,
            right: `calc(10% + ${mousePosition.x / 30}px + 20px)`,
            top: `calc(45% + ${mousePosition.y / 20}px - 20px)`,
            borderRadius: eyesOpen ? "60%" : "10%",
            height: eyesOpen ? "20px" : "5px",
            width: eyesOpen ? "20px" : "18px",
          }}
        ></div>

        <div
          className="mouth"
          style={{
            left: `calc(35% + ${mousePosition.x / 40}px)`,
            top: `calc(53% + ${mousePosition.y / 30}px)`,
            width: `calc(21% - ${
              (mousePosition.x / window.innerWidth) * 5
            }% - 25px )`,
          }}
        ></div>
      </div>
      <div className="Character_Tail">
        <img src={Character_Tail} alt="캐릭터꼬리"></img>
      </div>
    </div>
  );
}

export default Charater;
