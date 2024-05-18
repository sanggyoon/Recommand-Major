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
            <span>나와 어울리는 컴퓨터 전공은?</span>
          </div>
          <div className="result_type_img">
            <img src="" alt="" />
          </div>            
        </div>
      </div>
      <div className="Result_content_sub">
        <div className="infromation_box"></div>
        <div className="recommand_major">
          <p id="recommand_title">추천 수강 과목</p>
        </div>
        <div className="recommand_certification">
          <p id="recommand_title">자격증</p>
        </div>
        <div className="recommand_relatedCompany">
          <p id="recommand_title">기업</p>
        </div>
        <div className="again_BT">
          <a href="/login" method="POST">다시하기</a>
        </div>
      </div>
    </>
  );
}

export default YourComponent;
