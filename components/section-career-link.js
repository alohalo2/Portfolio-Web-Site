import Link from "next/link";

import classes from "./section-career-link.module.css";

export default function SectionCareerLink({ highlight }) {
    const regex = /\[(.+?)\]\((.+?)\)/; // 링크를 감지하는 정규식 (예: [텍스트](링크))
    const match = highlight.match(regex);

    if (match) {
        const text = match[1]; // 링크 텍스트
        const url = match[2]; // 링크 URL
        return (
            <>
                {highlight.split(regex)[0]}{" "}
                <Link href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
                    {text}
                </Link>
            </>
        );
    }

    return <>{highlight}</>; // 링크가 없으면 원래 텍스트 반환
}
