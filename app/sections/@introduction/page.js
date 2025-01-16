'use client';

import Typewriter from "typewriter-effect";

export default function Introduction() {
    return (
        <section>
            <h1>
                <Typewriter
                    options={{
                        strings: ["Welcome to my website!", "Explore my portfolio!", "Contact me anytime!"], // 타이핑할 문장들
                        autoStart: true, // 자동 시작
                        loop: true, // 반복 여부
                        typeSpeed: 100, // 타이핑 속도 (ms)
                        deleteSpeed: 50, // 지우기 속도 (ms)
                        pauseFor: 2000, // 문장 끝에서 대기 시간 (ms)
                    }}
                />
            </h1>
        </section>
    );
}
