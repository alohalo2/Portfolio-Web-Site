import Image from "next/image";
import Link from "next/link";
import classes from "./section-archiving.module.css";

export default function ArchivingContent({ archiving }) {
    return (
        <div className={classes.colorBox}>
            <div className={classes.whiteBox}>
                <div className={classes.header}>
                    {/* 동적 이미지 렌더링 */}
                    <Image
                        src={archiving.image}
                        alt={`${archiving.title} Icon`}
                        width={60}
                        height={60}
                    />
                    <div className={classes.headerContents}>
                        {/* 동적 제목 및 URL */}
                        <h3>{archiving.title}</h3>
                        <p>
                            <span>URL:</span>
                            <Link
                                href={archiving.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkStyle"
                            >
                                {archiving.urlAlias}
                            </Link>
                        </p>
                    </div>
                </div>
                <ul className={classes.contents}>
                    {/* 동적 리스트 렌더링 */}
                    {archiving.contents.map((content, idx) => (
                        <li key={idx}>{content}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}