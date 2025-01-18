'use client'; // 클라이언트 컴포넌트 선언

import archivings from "@/data-archiving";
import ArchivingContent from "./section-archiving-content";

export default function SectionArchiving() {
    const handleCardClick = (url) => {
        if (url) {
            window.location.href = url; // 브라우저 네이티브 이동
        } else {
            console.error("Invalid URL");
        }
    };

    return (
        <>
            {archivings.map((archiving) => (
                <div
                    key={archiving.id}
                    onClick={() => handleCardClick(archiving.url)} // URL 이동 처리
                    style={{ cursor: "pointer" }}
                >
                    <ArchivingContent archiving={archiving} />
                </div>
            ))}
        </>
    );
}
