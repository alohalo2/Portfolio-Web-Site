import projects from "@/data-project";

import classes from "./section-project.module.css";
import ImageCarousel from "./section-project-carousel";

export default function SectionProject() {
    return (
        <>
            {projects.map((project) => (
                <div key={project.id} className={classes.projectBox}>
                    <header className={classes.projectHeader}>
                        <h2>{project.name}</h2>
                        <p>
                            {" "}
                            {project.duration} <span>{"(" + project.participant + ")"}</span>
                        </p>{" "}
                    </header>
                    <main className={classes.projectContentBox}>
                        <div className={classes.projectContentLeft}>
                            {/* 이미지 캐러셀      */}
                            <ImageCarousel images={project.images} />
                        </div>
                        <div className={classes.projectContentRight}>
                            <div className={classes.projectDescription}>
                                {project.description.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className={classes.projectSlug}>
                                <p>
                                    <span>주요기능:</span>
                                    {project.function}
                                </p>
                                <p>
                                    <span>URL:</span>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.linkAlias}
                                    </a>
                                </p>
                                <p>
                                    <span>기술스택:</span>
                                    {project.technologies.join(", ")}
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            ))}
        </>
    );
}
