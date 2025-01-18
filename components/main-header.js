import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
    return (
        <header className={classes.mainHeader}>
            <h2>
                <Link href="/">PORTFOLIO</Link>
            </h2>
            <nav className={classes.nav}>
                <Link href="/#aboutme">About Me</Link>
                <Link href="/#skills">Skills</Link>
                <Link href="/#archiving">Archiving</Link>
                <Link href="/#project">Project</Link>
                <Link href="/#career">Career</Link>
            </nav>
        </header>
    );
}
