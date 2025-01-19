import Image from "next/image";
import classes from "./section-skills-category.module.css";

export default function CategorySkills({ category, skills }) {
    return (
        <div className={classes.categorySection}>
            {/* 카테고리 헤더 */}
            <header className={classes.categoryHeader}>
                <h2>{category}</h2>
                <hr />
            </header>

            {/* 기술 카드 리스트 */}
            <main className={classes.skillsGrid}>
                {skills.map((skill) => (
                    <div key={skill.id} className={classes.skillCard}>
                        <div className={classes.skillImagesBox}>
                            {/* 이미지 처리 */}
                            <div className={classes.skillImages}>
                                {skill.image1 && (
                                    <div className={classes.imageWrapper}>
                                        <Image
                                            src={skill.image1}
                                            alt={`${skill.name} - Image 1`}
                                            width={50}
                                            height={50}
                                            className={classes.skillImage}
                                        />
                                    </div>
                                )}
                                {skill.image2 && (
                                    <div className={classes.imageWrapper}>
                                        <Image
                                            src={skill.image2}
                                            alt={`${skill.name} - Image 2`}
                                            width={50}
                                            height={50}
                                            className={classes.skillImage}
                                        />
                                    </div>
                                )}
                            </div>
                            <div>
                                <p>{skill.name}</p>
                            </div>
                        </div>
                        <ul>
                            {skill.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </main>
        </div>
    );
}
