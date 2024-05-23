import React from 'react';
import './research.css';

function ResearchComponent() {
    return (
        <>
            <div className="Research_BG"></div>
            <div className="research_empty_box"></div>
            <div className="research_contents">
                <div className="FindOutYourMajor">
                    <span>Find Out Your Major.</span>
                </div>
                <form action="/result" method="POST">
                    <div className="question_box first_question">
                        <p>라우터가 너무 흥미로워 미치겠다.</p>
                        <div className="question_radio">
                            <label htmlFor="q1-a1">
                                <input type="radio" id="q1-a1" name="Q1" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q1-a2">
                                <input type="radio" id="q1-a2" name="Q1" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q1-a3">
                                <input type="radio" id="q1-a3" name="Q1" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q1-a4">
                                <input type="radio" id="q1-a4" name="Q1" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q1-a5">
                                <input type="radio" id="q1-a5" name="Q1" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q1-a6">
                                <input type="radio" id="q1-a6" name="Q1" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q1-a7">
                                <input type="radio" id="q1-a7" name="Q1" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <img src="../image/research_line.png" alt="" />
                        <p>나는 하루 평균 휴대폰 사용시간이 5시간 이상이다.</p>
                        <div className="question_radio">
                            <label htmlFor="q2-a1">
                                <input type="radio" id="q2-a1" name="Q2" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q2-a2">
                                <input type="radio" id="q2-a2" name="Q2" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q2-a3">
                                <input type="radio" id="q2-a3" name="Q2" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q2-a4">
                                <input type="radio" id="q2-a4" name="Q2" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q2-a5">
                                <input type="radio" id="q2-a5" name="Q2" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q2-a6">
                                <input type="radio" id="q2-a6" name="Q2" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q2-a7">
                                <input type="radio" id="q2-a7" name="Q2" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 가끔 길가다가 전광판에 내 이름 석자를 새기고 싶은 충동이 있다.</p>
                        <div className="question_radio">
                            <label htmlFor="q3-a1">
                                <input type="radio" id="q3-a1" name="Q3" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q3-a2">
                                <input type="radio" id="q3-a2" name="Q3" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q3-a3">
                                <input type="radio" id="q3-a3" name="Q3" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q3-a4">
                                <input type="radio" id="q3-a4" name="Q3" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q3-a5">
                                <input type="radio" id="q3-a5" name="Q3" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q3-a6">
                                <input type="radio" id="q3-a6" name="Q3" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q3-a7">
                                <input type="radio" id="q3-a7" name="Q3" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 친구만나는 것보다 컴퓨터랑 대화하는게 즐겁다.</p>
                        <div className="question_radio">
                            <label htmlFor="q4-a1">
                                <input type="radio" id="q4-a1" name="Q4" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q4-a2">
                                <input type="radio" id="q4-a2" name="Q4" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q4-a3">
                                <input type="radio" id="q4-a3" name="Q4" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q4-a4">
                                <input type="radio" id="q4-a4" name="Q4" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q4-a5">
                                <input type="radio" id="q4-a5" name="Q4" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q4-a6">
                                <input type="radio" id="q4-a6" name="Q4" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q4-a7">
                                <input type="radio" id="q4-a7" name="Q4" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 분석을 안하면 심적으로 불안하다.</p>
                        <div className="question_radio">
                            <label htmlFor="q5-a1">
                                <input type="radio" id="q5-a1" name="Q5" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q5-a2">
                                <input type="radio" id="q5-a2" name="Q5" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q5-a3">
                                <input type="radio" id="q5-a3" name="Q5" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q5-a4">
                                <input type="radio" id="q5-a4" name="Q5" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q5-a5">
                                <input type="radio" id="q5-a5" name="Q5" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q5-a6">
                                <input type="radio" id="q5-a6" name="Q5" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q5-a7">
                                <input type="radio" id="q5-a7" name="Q5" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 조만간 AI가 인류를 장악할 것이라 생각한다.</p>
                        <div className="question_radio">
                            <label htmlFor="q6-a1">
                                <input type="radio" id="q6-a1" name="Q6" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q6-a2">
                                <input type="radio" id="q6-a2" name="Q6" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q6-a3">
                                <input type="radio" id="q6-a3" name="Q6" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q6-a4">
                                <input type="radio" id="q6-a4" name="Q6" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q6-a5">
                                <input type="radio" id="q6-a5" name="Q6" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q6-a6">
                                <input type="radio" id="q6-a6" name="Q6" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q6-a7">
                                <input type="radio" id="q6-a7" name="Q6" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>영화에서 01100101 나오면 멋있다고 생각한다.</p>
                        <div className="question_radio">
                            <label htmlFor="q7-a1">
                                <input type="radio" id="q7-a1" name="Q7" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q7-a2">
                                <input type="radio" id="q7-a2" name="Q7" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q7-a3">
                                <input type="radio" id="q7-a3" name="Q7" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q7-a4">
                                <input type="radio" id="q7-a4" name="Q7" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q7-a5">
                                <input type="radio" id="q7-a5" name="Q7" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q7-a6">
                                <input type="radio" id="q7-a6" name="Q7" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q7-a7">
                                <input type="radio" id="q7-a7" name="Q7" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>전자A</p>
                        <div className="question_radio">
                            <label htmlFor="q8-a1">
                                <input type="radio" id="q8-a1" name="Q8" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q8-a2">
                                <input type="radio" id="q8-a2" name="Q8" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q8-a3">
                                <input type="radio" id="q8-a3" name="Q8" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q8-a4">
                                <input type="radio" id="q8-a4" name="Q8" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q8-a5">
                                <input type="radio" id="q8-a5" name="Q8" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q8-a6">
                                <input type="radio" id="q8-a6" name="Q8" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q8-a7">
                                <input type="radio" id="q8-a7" name="Q8" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>네트워크B.</p>
                        <div className="question_radio">
                            <label htmlFor="q9-a1">
                                <input type="radio" id="q9-a1" name="Q9" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q9-a2">
                                <input type="radio" id="q9-a2" name="Q9" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q9-a3">
                                <input type="radio" id="q9-a3" name="Q9" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q9-a4">
                                <input type="radio" id="q9-a4" name="Q9" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q9-a5">
                                <input type="radio" id="q9-a5" name="Q9" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q9-a6">
                                <input type="radio" id="q9-a6" name="Q9" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q9-a7">
                                <input type="radio" id="q9-a7" name="Q9" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>모바일B.</p>
                        <div className="question_radio">
                            <label htmlFor="q10-a1">
                                <input type="radio" id="q10-a1" name="Q10" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q10-a2">
                                <input type="radio" id="q10-a2" name="Q10" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q10-a3">
                                <input type="radio" id="q10-a3" name="Q10" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q10-a4">
                                <input type="radio" id="q10-a4" name="Q10" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q10-a5">
                                <input type="radio" id="q10-a5" name="Q10" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q10-a6">
                                <input type="radio" id="q10-a6" name="Q10" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q10-a7">
                                <input type="radio" id="q10-a7" name="Q10" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>내 꿈은 화이트 해커이다.</p>
                        <div className="question_radio">
                            <label htmlFor="q11-a1">
                                <input type="radio" id="q11-a1" name="Q11" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q11-a2">
                                <input type="radio" id="q11-a2" name="Q11" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q11-a3">
                                <input type="radio" id="q11-a3" name="Q11" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q11-a4">
                                <input type="radio" id="q11-a4" name="Q11" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q11-a5">
                                <input type="radio" id="q11-a5" name="Q11" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q11-a6">
                                <input type="radio" id="q11-a6" name="Q11" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q11-a7">
                                <input type="radio" id="q11-a7" name="Q11" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 컴퓨터가 어떻게 돌아가는지 뜯어보고 싶다.</p>
                        <div className="question_radio">
                            <label htmlFor="q12-a1">
                                <input type="radio" id="q12-a1" name="Q12" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q12-a2">
                                <input type="radio" id="q12-a2" name="Q12" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q12-a3">
                                <input type="radio" id="q12-a3" name="Q12" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q12-a4">
                                <input type="radio" id="q12-a4" name="Q12" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q12-a5">
                                <input type="radio" id="q12-a5" name="Q12" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q12-a6">
                                <input type="radio" id="q12-a6" name="Q12" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q12-a7">
                                <input type="radio" id="q12-a7" name="Q12" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 휴대폰 어플을 정리한다.</p>
                        <div className="question_radio">
                            <label htmlFor="q13-a1">
                                <input type="radio" id="q13-a1" name="Q13" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q13-a2">
                                <input type="radio" id="q13-a2" name="Q13" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q13-a3">
                                <input type="radio" id="q13-a3" name="Q13" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q13-a4">
                                <input type="radio" id="q13-a4" name="Q13" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q13-a5">
                                <input type="radio" id="q13-a5" name="Q13" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q13-a6">
                                <input type="radio" id="q13-a6" name="Q13" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q13-a7">
                                <input type="radio" id="q13-a7" name="Q13" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>GPT같은 나만의 인공지능을 만들어보고싶다.</p>
                        <div className="question_radio">
                            <label htmlFor="q14-a1">
                                <input type="radio" id="q14-a1" name="Q14" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q14-a2">
                                <input type="radio" id="q14-a2" name="Q14" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q14-a3">
                                <input type="radio" id="q14-a3" name="Q14" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q14-a4">
                                <input type="radio" id="q14-a4" name="Q14" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q14-a5">
                                <input type="radio" id="q14-a5" name="Q14" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q14-a6">
                                <input type="radio" id="q14-a6" name="Q14" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q14-a7">
                                <input type="radio" id="q14-a7" name="Q14" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 클래식, 고전, 흑백영화 등을 좋아한다.</p>
                        <div className="question_radio">
                            <label htmlFor="q15-a1">
                                <input type="radio" id="q15-a1" name="Q15" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q15-a2">
                                <input type="radio" id="q15-a2" name="Q15" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q15-a3">
                                <input type="radio" id="q15-a3" name="Q15" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q15-a4">
                                <input type="radio" id="q15-a4" name="Q15" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q15-a5">
                                <input type="radio" id="q15-a5" name="Q15" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q15-a6">
                                <input type="radio" id="q15-a6" name="Q15" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q15-a7">
                                <input type="radio" id="q15-a7" name="Q15" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>브래드보드나 회로를 다뤄본 적이 있다.</p>
                        <div className="question_radio">
                            <label htmlFor="q16-a1">
                                <input type="radio" id="q16-a1" name="Q16" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q16-a2">
                                <input type="radio" id="q16-a2" name="Q16" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q16-a3">
                                <input type="radio" id="q16-a3" name="Q16" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q16-a4">
                                <input type="radio" id="q16-a4" name="Q16" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q16-a5">
                                <input type="radio" id="q16-a5" name="Q16" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q16-a6">
                                <input type="radio" id="q16-a6" name="Q16" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q16-a7">
                                <input type="radio" id="q16-a7" name="Q16" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>네트워크 시스템 개발자에 관심이 있다.</p>
                        <div className="question_radio">
                            <label htmlFor="q17-a1">
                                <input type="radio" id="q17-a1" name="Q17" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q17-a2">
                                <input type="radio" id="q17-a2" name="Q17" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q17-a3">
                                <input type="radio" id="q17-a3" name="Q17" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q17-a4">
                                <input type="radio" id="q17-a4" name="Q17" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q17-a5">
                                <input type="radio" id="q17-a5" name="Q17" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q17-a6">
                                <input type="radio" id="q17-a6" name="Q17" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q17-a7">
                                <input type="radio" id="q17-a7" name="Q17" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 어플리케이션을 개발하고 싶다.</p>
                        <div className="question_radio">
                            <label htmlFor="q18-a1">
                                <input type="radio" id="q18-a1" name="Q18" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q18-a2">
                                <input type="radio" id="q18-a2" name="Q18" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q18-a3">
                                <input type="radio" id="q18-a3" name="Q18" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q18-a4">
                                <input type="radio" id="q18-a4" name="Q18" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q18-a5">
                                <input type="radio" id="q18-a5" name="Q18" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q18-a6">
                                <input type="radio" id="q18-a6" name="Q18" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q18-a7">
                                <input type="radio" id="q18-a7" name="Q18" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 정보보안 대회에 관심있다.</p>
                        <div className="question_radio">
                            <label htmlFor="q19-a1">
                                <input type="radio" id="q19-a1" name="Q19" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q19-a2">
                                <input type="radio" id="q19-a2" name="Q19" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q19-a3">
                                <input type="radio" id="q19-a3" name="Q19" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q19-a4">
                                <input type="radio" id="q19-a4" name="Q19" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q19-a5">
                                <input type="radio" id="q19-a5" name="Q19" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q19-a6">
                                <input type="radio" id="q19-a6" name="Q19" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q19-a7">
                                <input type="radio" id="q19-a7" name="Q19" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>시스템을 안정적으로 효율적으로 만들 때 보람을 느낀다.</p>
                        <div className="question_radio">
                            <label htmlFor="q20-a1">
                                <input type="radio" id="q20-a1" name="Q20" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q20-a2">
                                <input type="radio" id="q20-a2" name="Q20" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q20-a3">
                                <input type="radio" id="q20-a3" name="Q20" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q20-a4">
                                <input type="radio" id="q20-a4" name="Q20" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q20-a5">
                                <input type="radio" id="q20-a5" name="Q20" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q20-a6">
                                <input type="radio" id="q20-a6" name="Q20" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q20-a7">
                                <input type="radio" id="q20-a7" name="Q20" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>일상생활에서 문제들을 찾아보고 데이터들을 가공해보고 싶다.</p>
                        <div className="question_radio">
                            <label htmlFor="q21-a1">
                                <input type="radio" id="q21-a1" name="Q21" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q21-a2">
                                <input type="radio" id="q21-a2" name="Q21" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q21-a3">
                                <input type="radio" id="q21-a3" name="Q21" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q21-a4">
                                <input type="radio" id="q21-a4" name="Q21" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q21-a5">
                                <input type="radio" id="q21-a5" name="Q21" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q21-a6">
                                <input type="radio" id="q21-a6" name="Q21" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q21-a7">
                                <input type="radio" id="q21-a7" name="Q21" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>머신러닝이나 딥러닝에 관심이 있다.</p>
                        <div className="question_radio">
                            <label htmlFor="q22-a1">
                                <input type="radio" id="q22-a1" name="Q22" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q22-a2">
                                <input type="radio" id="q22-a2" name="Q22" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q22-a3">
                                <input type="radio" id="q22-a3" name="Q22" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q22-a4">
                                <input type="radio" id="q22-a4" name="Q22" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q22-a5">
                                <input type="radio" id="q22-a5" name="Q22" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q22-a6">
                                <input type="radio" id="q22-a6" name="Q22" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q22-a7">
                                <input type="radio" id="q22-a7" name="Q22" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box">
                        <p>나는 하드웨어를 제어하는 개발자가 되고 싶다.</p>
                        <div className="question_radio">
                            <label htmlFor="q23-a1">
                                <input type="radio" id="q23-a1" name="Q23" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q23-a2">
                                <input type="radio" id="q23-a2" name="Q23" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q23-a3">
                                <input type="radio" id="q23-a3" name="Q23" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q23-a4">
                                <input type="radio" id="q23-a4" name="Q23" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q23-a5">
                                <input type="radio" id="q23-a5" name="Q23" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q23-a6">
                                <input type="radio" id="q23-a6" name="Q23" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q23-a7">
                                <input type="radio" id="q23-a7" name="Q23" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>
                    <div className="question_box last_question">
                        <p>IoT(사물인터넷)에 관심이 많다.</p>
                        <div className="question_radio">
                            <label htmlFor="q24-a1">
                                <input type="radio" id="q24-a1" name="Q24" value="1" />
                                <span className="radio_btn radioStyle-1"></span>
                            </label>
                            <label htmlFor="q24-a2">
                                <input type="radio" id="q24-a2" name="Q24" value="2" />
                                <span className="radio_btn radioStyle-2"></span>
                            </label>
                            <label htmlFor="q24-a3">
                                <input type="radio" id="q24-a3" name="Q24" value="3" />
                                <span className="radio_btn radioStyle-3"></span>
                            </label>
                            <label htmlFor="q24-a4">
                                <input type="radio" id="q24-a4" name="Q24" value="4" />
                                <span className="radio_btn radioStyle-4"></span>
                            </label>
                            <label htmlFor="q24-a5">
                                <input type="radio" id="q24-a5" name="Q24" value="5" />
                                <span className="radio_btn radioStyle-5"></span>
                            </label>
                            <label htmlFor="q24-a6">
                                <input type="radio" id="q24-a6" name="Q24" value="6" />
                                <span className="radio_btn radioStyle-6"></span>
                            </label>
                            <label htmlFor="q24-a7">
                                <input type="radio" id="q24-a7" name="Q24" value="7" />
                                <span className="radio_btn radioStyle-7"></span>
                            </label>
                        </div>
                    </div>

                    <div className="summit_BT_box" action="/result">
                        <button className="summit_BT">결과보기</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ResearchComponent;
