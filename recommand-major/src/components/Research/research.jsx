import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './research.css';

function ResearchComponent() {
  const [values, setValues] = useState(Array(24).fill(0));
  const navigate = useNavigate();

  const questions = [
    '라우터가 너무 흥미로워 미치겠다.',
    '나는 하루 평균 휴대폰 사용시간이 5시간 이상이다.',
    '나는 가끔 길가다가 전광판에 내 이름 석자를 새기고 싶은 충동이 있다.',
    '나는 친구만나는것보다 컴퓨터랑 대화하는게 즐겁다.',
    '나는 분석을 안하면 심적으로 불안하다.',
    '나는 조만간 AI가 인류를 장악할것이라 생각한다.',
    '영화에서 01100101 나오면 멋있다고 생각한다.',
    '나는 내가 평소에 다루는 전자제품의 구조가 궁금한 적이 많다.',
    '나는 와이파이 연결이 되지 않을 때 내가 고쳐보고 싶다고 생각한 적이 있다.',
    '나는 휴대폰에 어플을30개 이상가지고있다.',
    '내 꿈은 화이트 해커이다.',
    '나는 컴퓨터가 어떻게 돌아가는지 뜯어보고 싶다.',
    '나는 휴대폰 어플을 정리한다.',
    'GPT같은 나만의 인공지능을 만들어보고싶다.',
    '나는 클래식, 고전, 흑백영화등을 좋아한다.',
    '브래드 보드나 회로를 다뤄본 적이 있다.',
    '네트워크시스템 개발자에 관심이 있다.',
    '나는 어플리케이션을 개발하고싶다.',
    '나는 정보보안 대회에 관심있다.',
    '시스템을 안정적이고 효율적으로 만들 때 보람을 느낀다.',
    '일상생활에서 문제들을 찾아보고 데이터들을 가공해보고 싶다.',
    '머신러닝이나 딥러닝에 관심이 있다.',
    '나는 HW를 제어하는 개발자가 되고싶다.',
    'IoT(사물인터넷)에 관심이 많다. '
  ];

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = Number(value);
    setValues(newValues);
  };

  const calculateResults = () => {
    const results = {
      wwww: 0,
      phon: 0,
      idpw: 0,
      back: 0,
      data: 0,
      aiai: 0,
      ibdd: 0,
      eltn: 0
    };
    results.wwww = values[0] * 0.7 + values[8] * 1.3 + values[16] * 1.7;
    results.phon = values[1] * 0.7 + values[9] * 1.3 + values[17] * 1.7;
    results.idpw = values[2] * 0.7 + values[10] * 1.3 + values[18] * 1.7;
    results.back = values[3] * 0.7 + values[11] * 1.3 + values[19] * 1.7;
    results.data = values[4] * 0.7 + values[12] * 1.3 + values[20] * 1.7;
    results.aiai = values[5] * 0.7 + values[13] * 1.3 + values[21] * 1.7;
    results.ibdd = values[6] * 0.7 + values[14] * 1.3 + values[22] * 1.7;
    results.eltn = values[7] * 0.7 + values[15] * 1.3 + values[23] * 1.7;
    return results;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedResults = calculateResults();
    
    // 결과를 배열로 변환하고, 가장 높은 값을 찾습니다.
    const resultsArray = Object.entries(calculatedResults).map(([key, value]) => ({ key, value }));
    const highestValue = Math.max(...resultsArray.map(result => result.value));
  
    // 가장 높은 값을 가지는 요소들을 필터링합니다.
    const highestResults = resultsArray.filter(result => result.value === highestValue);
  
    // 주어진 우선순위에 따라 정렬합니다.
    const priority = ['back', 'aiai', 'data', 'wwww', 'phon', 'eltn', 'idpw', 'ibdd'];
    highestResults.sort((a, b) => priority.indexOf(a.key) - priority.indexOf(b.key));
  
    // 가장 높은 우선순위를 가진 결과를 출력합니다.
    console.log(`${highestResults[0].key}:`, highestResults[0].value.toFixed(2));
  
    navigate('/result');
  };
  

  return (
    <>
      <div className="Research_BG"></div>
      <div className="research_empty_box"></div>
      <div className="research_contents">
        <div className="FindOutYourMajor">
          <span>Find Out Your Major.</span>
        </div>
        <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div className={`question_box ${index === 0 ? 'first_question' : ''} ${index === questions.length - 1 ? 'last_question' : ''}`} key={index}>
            <p>{question}</p>
            <div className="question_radio">
              <div className='disagree'><span>비동의</span></div>
              {[...Array(7)].map((_, optionIndex) => (
                <label key={optionIndex}>
                  <input
                    type="radio"
                    id={`q${index + 1}-a${optionIndex + 1}`}
                    name={`Q${index + 1}`}
                    value={optionIndex + 1}
                    onChange={(e) => handleChange(index, e.target.value)}
                  />
                  <span className={`radio_btn radioStyle-${optionIndex + 1}`}></span>
                </label>
              ))}
              <div className='agree'><span>동의</span></div>
            </div>
          </div>
        ))}
          <div className="summit_BT_box">
            <button className="summit_BT" type="submit">결과보기</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResearchComponent;
