"use client";

import classes from "./page.module.css";
import Typewriter from "typewriter-effect";

export default function Introduction() {
    return (
        <div className={classes.introductionBox}>
            <section id="introduction">
                <h1>
                    <Typewriter
                        options={{
                            strings: [
                                "안녕하세요, 프론트엔드 개발자 이주성입니다!",
                                "제 포트폴리오 웹사이트에 오신 것을 환영합니다.",
                                "더 나은 사용자 경험을 함께 만들어가요!",
                            ], // 타이핑할 문장들
                            autoStart: true, // 자동 시작
                            loop: true, // 반복 여부
                            typeSpeed: 100, // 타이핑 속도 (ms)
                            deleteSpeed: 50, // 지우기 속도 (ms)
                            pauseFor: 2000, // 문장 끝에서 대기 시간 (ms)
                        }}
                    />
                </h1>
            </section>
        </div>
    );
}
