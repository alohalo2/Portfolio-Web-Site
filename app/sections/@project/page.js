import SectionProject from "@/components/section-project";
import classes from "./page.module.css";

export default function Project() {
    return (
        <div className={classes.projectSection}>
            <section id="project">
                <h1>Project</h1>
                <SectionProject />
            </section>
        </div>
    );
}
