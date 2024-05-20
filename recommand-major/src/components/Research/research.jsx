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
                    <div className="question_box">
                        <p>당신은 쿠키런 점수 1억점 이상인가요?</p>
                        <div className="question_radio">
                            <div className='agree'><span>동의</span></div>
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
                            <div className='disagree'><span>비동의</span></div>
                        </div>
            
                    </div>
                    <div className="question_box">
                        <p>당신은 쿠키런 점수 1억점 이상인가요?</p>
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
                    <div className="summit_BT_box" action="/Result">
                        <button className="summit_BT">결과보기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResearchComponent;
