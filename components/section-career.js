import Image from "next/image";

import careers from "@/data-career";
import SectionCareerLink from "./section-career-link";
import classes from "./section-career.module.css";

export default function SectionCareer() {
    return (
        <>
            {careers.map((career) => (
                <div key={career.id} className={classes.careerBox}>
                    {/* 이미지 렌더링    */}
                    <div className={classes.imageBox}>
                        <Image src={career.logo} alt={`${career.company} 로고`} width={100} height={100} />
                    </div>
                    <div>
                        <header className={classes.careerHeader}>
                            <div className={classes.careerHeaderTitle}>
                                <h2>{career.company}</h2>
                                <p className={classes.duration}>{career.duration}</p>
                            </div>
                            <div className={classes.introduction}>
                                {career.introduction.map((intro, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: intro }} />
                                ))}
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: career.responsibility }} />
                        </header>
                        <main className={classes.careerMain}>
                            {/* projects 배열 순회 */}
                            {career.projects.map((project, index) => (
                                <div key={index} className={classes.projectsBox}>
                                    <div className={classes.projectsTitle}>
                                        <h3>{project.title}</h3>
                                        <p className={classes.duration}>{project.duration}</p>
                                    </div>
                                    <ul>
                                        {/* highlights 배열 출력 */}
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx}>
                                                {/* highlight에 http가 포함되어 있는지 확인 */}
                                                {typeof highlight === "string" && highlight.includes("http") ? (
                                                    /* SectionCareerLink 컴포넌트로 링크 처리 */
                                                    <SectionCareerLink highlight={highlight} />
                                                ) : (
                                                    /* HTML 문자열은 dangerouslySetInnerHTML로 렌더링 */
                                                    <span dangerouslySetInnerHTML={{ __html: highlight }} />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </main>
                    </div>
                </div>
            ))}
        </>
    );
}
