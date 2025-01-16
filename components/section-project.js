import projects from "@/data-project";

import classes from "./section-project.module.css";

export default function SectionProject() {
    return (
        <>
            {projects.map((project) => (
                <div key={project.id} className={classes.projectBox}>
                    <div className={classes.projectHeader}>
                        <h2>{project.name}</h2>
                        <p>
                            {" "}
                            {project.duration} <span>{"(" + project.participant + ")"}</span>
                        </p>{" "}
                    </div>
                    <div className={classes.projectContentBox}>
                        <div className={classes.projectContentLeft}>
                            <p>이미지 캐러셀</p>
                        </div>
                        <div className={classes.projectContentRight}>
                            <div className={classes.projectDescription}>
                                <p>{project.description}</p>
                            </div>
                            <p>
                                <span>주요기능:</span>
                                {project.function}
                            </p>
                            <p>
                                <span>URL:</span>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                            <p>
                                <span>기술스택:</span>
                                {project.technologies.join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
