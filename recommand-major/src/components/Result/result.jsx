import React from 'react';
import './result.css';

function YourComponent() {
  return (
    <>
      <div className="Result_BG"></div>
      <div className="Result_empty_box"></div>
      <div className="Result_content_main">
        <div className="result_title">
          <div className="rectangle"></div>
          <div className="YourMajorIs">
            <span>나와 어울리는 컴퓨터 전공 유형은</span>
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
            <div className="lectureName lectureNameCount-1">
              인공지능
              <div className="result_arrow"></div>
            </div>
            {/* 반복  끝 */}

          </div>
          <div className="lectureExplains">

            {/* 반복 시작 */}
            <div className="lectureExplain lectureExplainCount-1">
            현대 인공지능의 기초가 되는 기술(그래프 검색, 최적화, 지식 표현 및 추론, 강화학습, 자연어 처리)과 알고리즘을 실습 프로젝트를 통해 학습한다.
            </div>
            {/* 반복 끝 */}

          </div>
        </div>
        <div className="recommand_certification">
          <p id="recommand_title">자격증</p>

          {/* 반복 시작 */}
          <div className="certificationBox certificationBoxCount-1">
            <div className="certificationName certificationNameCount-1">
              AICE
            </div>
            <div className="certificationExplain certificationExplainCount-1">
              KT가 개발하여 한국경제신문과 함께 주관하는 인공지능 능력시험
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
