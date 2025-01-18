import classes from "./page.module.css";

export default function AboutMe() {
    return (
        <div className={classes.totalBox}>
            <section id="aboutme">
                <h1>About Me</h1>
                <div className={classes.colorBox}>
                    <div className={classes.whiteBox}>
                        <p>
                            패션디자인 전공을 통해 창의적 사고와 문제 해결 역량을 키웠으며, 7년간의 회사 생활에서는
                            유연한 소통, 스케줄 관리, 성과 및 팀원 관리 능력을 쌓아왔습니다. IT 분야로의 전환을 결심한
                            후, 비트캠프 DevOps 과정을 수료하며 웹 개발 기술과 협업 경험을 쌓았고, 다양한 프로젝트를
                            통해 React 기반 프론트엔드 구현, UI/UX 설계, 컴포넌트 구조 설계를 주도하며 개발자로서의
                            전문성을 강화했습니다. 디자인과 개발에서 얻은 다양한 경험과 역량을 결합해 팀과 함께
                            성장하며, 실질적인 결과물을 만들어내는 데 열정을 쏟고 있습니다. 앞으로도 지속적인 학습과
                            도전을 통해 새로운 가치를 창출하며 발전해 나가겠습니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
