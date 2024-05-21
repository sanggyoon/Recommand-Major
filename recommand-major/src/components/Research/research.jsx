import React from 'react';
import './research.css';

function ResearchComponent() {
    return (
        <div className='Research'>
            <div className="Research_BG"></div>
            <div className="research_empty_box"></div>
            <div className="research_contents">
                <div className="FindOutYourMajor">
                    <span>Find Out Your Major.</span>
                </div>
                
                <form action="/result" method="POST">
                    <div className='Entire_research_box'>
                        <div className="question_box first_question">
                            <div className='question_box_questionback'></div>
                            <p>라우터가 흥미로워서 미치겠다.</p>
                            <div className="question_radio">
                                <div className='disagree'><span>비동의</span></div>
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
                                <div className='agree'><span>동의</span></div>
                            </div>
                        </div>
                    
                        <div className="question_box">
                        <p>나는 하루 평균 휴대폰 사용시간이 5시간 이상이다.</p>
                        <div className="question_radio">
                            <div className='disagree'><span>비동의</span></div>
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
                            <div className='agree'><span>동의</span></div>
                        </div>
            
                        </div>
                        <div className="question_box">
                        <p>당신은 쿠키런 점수 1억점 이상인가요?</p>
                        <div className="question_radio">
                            <div className='disagree'><span>비동의</span></div>
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
                            <div className='agree'><span>동의</span></div>
                        </div>
            
                        </div>
                        <div className="question_box last_question">
                        <p>IoT(사물인터넷)에 관심이 많다.</p>
                        <div className="question_radio">
                        <div className='disagree'><span>비동의</span></div>
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
                            <div className='agree'><span>동의</span></div>
                        </div>
                        <div className="summit_BT_box" action="/Result">
                        <button className="summit_BT">결과보기</button>
                    </div>
                        </div>
                    </div>
                    <div className="research_empty_box"></div>
                </form>
            </div>
        </div>
    );
}

export default ResearchComponent;
