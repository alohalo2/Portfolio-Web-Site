import SectionCareer from "@/components/section-career";
import classes from "./page.module.css";

export default function Career() {
    return (
        <div className={classes.careerBox}>
            <section id="career">
                <h1>Career</h1>
                <SectionCareer />
            </section>
        </div>
    );
}
