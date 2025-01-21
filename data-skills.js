const skills = [
    {
        id: 1,
        name: "HTML & CSS",
        category: "Frontend",
        image1: "/images/html_icon.svg",
        image2: "/images/css_icon.svg", // 두 번째 이미지
        description: [
            "시멘틱 마크업 작업이 가능하며 tag 구조 설계에 능숙합니다.",
            "CSS 애니메이션 및 가상 선택자 사용에 능숙하며 퍼블리싱 작업 가능합니다.",
        ],
    },
    {
        id: 2,
        name: "JS & TS",
        category: "Frontend",
        image1: "/images/javascript_icon.svg",
        image2: "/images/typescript_icon.svg",
        description: [
            "async await 문법으로 비동기 처리를 할 수 있습니다.",
            "변수 및 함수의 Type 설정할 수 있습니다.",
        ],
    },
    {
        id: 3,
        name: "React",
        category: "Frontend",
        image1: "/images/react_icon.svg",
        image2: null, // 두 번째 이미지 없음
        description: [
            "React 컴포넌트 설계 및 Hooks 사용에 익숙합니다.",
            "WebSocket, socket.io 라이브러리 사용하여 실시간 경매 및 실시간 채팅 구현한 경험이 있습니다.",
        ],
    },
    {
        id: 4,
        name: "Redux",
        category: "Frontend",
        image1: "/images/redux_icon.svg",
        image2: null, // 두 번째 이미지 없음
        description: [
            "Redux를 이용해 로그인 및 경매 데이터를 전역으로 상태 관리 해본 경험이 있습니다.",
        ],
    },
    {
        id: 5,
        name: "Next.js",
        category: "Frontend",
        image1: "/images/nextjs_icon.svg",
        image2: null, // 두 번째 이미지 없음
        description: [
            "SSR(Server-Side Rendering)에 대해 이해하고 있습니다.",
            "App route로 URL 경로에 따른 사용자 경험을 향상 시킬 수 있습니다.",
            "API route를 통해 데이터를 가공하여 화면에 띄울 수 있습니다.",
        ],
    },
    {
        id: 6,
        name: "Git & GitHub",
        category: "Community",
        image1: "/images/git_icon.svg",
        image2: "/images/github_icon.svg",
        description: [
            "Git으로 프로젝트 버전 관리 가능합니다.",
            "SourceTree Tool을 사용해 프로젝트를 진행한 경험이 있습니다.",
            "Code-review를 통해 코드의 질을 향상 시킵니다.",
        ],
    },
    {
        id: 7,
        name: "Style",
        category: "Frontend",
        image1: "/images/vanilla-extract_icon.svg",
        image2: null, // 두 번째 이미지 없음
        description: [
            "Vanilla Extract(CSS-in-TS)로 스타일에 타입 안정성을 향상시켰던 경험이 있습니다.",
            "CSS Module을 사용해 스타일 충돌 방지하고 가독성과 재사용성을 향상시켰던 경험이 있습니다.",
        ],
    },
    {
        id: 8,
        name: "Notion",
        category: "Community",
        image1: "/images/notion_icon.svg",
        image2: null, // 두 번째 이미지 없음
        description: [
            "포트폴리오, 노트로 작업 가능합니다.",
            "일정 관리 가능합니다.",
        ],
    },
    {
        id: 9,
        name: "Figma",
        category: "Community",
        image1: "/images/figma_icon.svg",
        image2: null, // 두 번째 이미지 없음
        description: [
            "Web site 와이어프레임 작업 가능합니다.",
            "사용한 elements를 SVG, PDF 파일로 export 가능합니다.",
        ],
    },
];

export default skills;