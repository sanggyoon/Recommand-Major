import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios를 사용하여 API 호출
import './result.css';

function YourComponent() {
  const [result, setResult] = useState('');
  const [lectures, setLectures] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // 사용자의 결과를 가져오는 함수
    const fetchResult = async () => {
      try {
        const response = await axios.get('/api/getUserResult');
        setResult(response.data.result);
      } catch (error) {
        console.error('결과를 가져오는 중 오류 발생:', error);
      }
    };

    // 사용자의 결과에 해당하는 강의 목록 및 자격증 목록을 가져오는 함수
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/api/getRecommendations');
        setLectures(response.data.lectures);
        setCertifications(response.data.certifications);
      } catch (error) {
        console.error('추천 정보를 가져오는 중 오류 발생:', error);
      }
    };

    fetchResult();
    fetchRecommendations();
  }, []);
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

            {/* 수강 과목 출력 */}
            {lectures.map((lecture, index) => (
              <div className={`lectureName lectureNameCount-${index + 1}`} key={index}>
                {lecture.lectureName}
              </div>
            ))}

          </div>
          <div className="lectureExplains">

            {lectures.map((lecture, index) => (
              <div className={`lectureExplain lectureExplainCount-${index + 1}`} key={index}>
                {lecture.lectureExplain}
              </div>
            ))}

          </div>
        </div>
        <div className="recommand_certification">
          <p id="recommand_title">자격증</p>

          {certifications.map((certification, index) => (
              <div className={`certificationBox certificationBoxCount-${index + 1}`} key={index}>
                <div className="certificationName certificationNameCount-1">{certification.certificationName}</div>
                <div className="certificationExplain certificationExplainCount-1">{certification.certificationExplain}</div>
              </div>
            ))}

        </div>
        <div className="again_BT">
          <a href="/login" method="POST">다시하기</a>
        </div>
      </div>
    </>
  );
}

export default YourComponent;