import React, { useState } from 'react';
import './result.css';

function YourComponent() {
  const [hoveredLecture, setHoveredLecture] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredLecture(index);
  };

  const handleMouseLeave = () => {
    setHoveredLecture(null);
  };

  return (
    <>
      <div className="Result_BG"></div>
      <div className="Result_empty_box"></div>
      <div className="Result_content_main">
        <div className="result_title">
          <div className="rectangle"></div>
          <div className="YourMajorIs">
            <span>나와 어울리는 컴퓨터 전공은?</span>
          </div>
          <div className="result_type_img">
            <img src="" alt="" />
          </div>            
        </div>
      </div>
      <div className="Result_content_sub">
        <div className="infromation_box"></div>
        <div className="recommand_lecture">
          <p id="recommand_title">추천 수강 과목</p>
          <div className="lectureNames">

            {/* 반복 시작 */}
            <div 
              className="lectureName lectureNameCount-1"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              {/* 여기는 lectures테이블의 lectureName */}
            </div>
            {/* 반복  끝 */}

          </div>
          <div className="lectureExplains">

            {/* 반복 시작 */}
            <div className={`lectureExplain lectureExplainCount-1 ${hoveredLecture === 1 ? 'visible' : 'hidden'}`}>
              {/* 여기는 lectures테이블의 lectureExplain */}
            </div>
            {/* 반복 끝 */}

          </div>
        </div>
        <div className="recommand_certification">
          <p id="recommand_title">자격증</p>

          {/* 반복 시작 */}
          <div className="certificationBox certificationBoxCount-1">
            <div className="certificationName certificationNameCount-1">
              {/* 여기는 certifications테이블의 certificationName */}
            </div>
            <div className="certificationExplain certificationExplainCount-1">
              {/* 여기는 certifications테이블의 certificationExplain */}
            </div>
          </div>
          {/* 반복 끝 */}

        </div>
        <div className="again_BT">
          <a href="/login" method="POST">다시하기</a>
        </div>
      </div>
    </>
  );
}

export default YourComponent;
