const projects = [
    {
        id: 1,
        name: "Portfolio Web Site",
        duration: "2024.12 - 2025.01",
        participant: "1명",
        description: [
            <span key="1">
                <strong>Portfolio Web Site</strong>는 Next.js와 CSS Modules를 사용해
                개발된 개인 포트폴리오 사이트로, 프로젝트와 커리어 정보를 효율적으로 시각화하여
                <strong> 자신만의 개발 여정</strong>을 표현하는 데 중점을 두었습니다.
            </span>,
            <span key="2">
                사용자는 포트폴리오 사이트에서 <strong>About Me, Skills, Projects</strong> 및 <strong>Career</strong>
                섹션을 탐색하며 상세한 프로젝트 정보와 기술 스택을 확인할 수 있습니다. 모든 콘텐츠는 구조적으로 구성되어
                사용자 경험을 강화합니다.
            </span>,
            <span key="3">
                <strong>Vercel</strong>을 통해 배포된 이 사이트는 <strong>반응형 디자인</strong>을 구현하여 다양한
                디바이스 환경에서 최적의 화면을 제공합니다. 또한, 최신 웹 기술을 적용하여 성능과 사용자 접근성을 모두
                고려했습니다.
            </span>,
        ],
        function: "포트폴리오",
        technologies: ["Next.js", "CSS Modules", "Vercel"],
        link: "https://portfolio-web-site-three.vercel.app/",
        linkAlias: "Current Site",
        images: [
            "/images/carousel/portfolio_image01.png",
            "/images/carousel/portfolio_image02.png",
            "/images/carousel/portfolio_image03.png",
            "/images/carousel/portfolio_image04.png",
            "/images/carousel/portfolio_image05.png",
            "/images/carousel/portfolio_image06.png",
        ],
    },
    {
        id: 2,
        name: "BIBID",
        duration: "2024.08 - 2024.11",
        participant: "5명",
        description: [
            <span key="1">
                <strong>BIBID</strong>는 네이버 클라우드 플랫폼, WebSocket, OBS, Redis를 활용해 구축한 실시간 경매
                사이트로, <strong>실시간 스트리밍과 채팅 기능</strong>을 통해 박진감 넘치는 경매 경험을 제공합니다.
            </span>,
            <span key="2">
                프로젝트 초기에는 React 컴포넌트 구조와 상태 관리의 복잡성, CSS와 MUI 스타일 충돌 문제로 어려움을
                겪었으나, <strong>Redux를 활용한 전역 상태 관리</strong>와<strong> CSS 구조 개선</strong>을 통해 이를
                해결했습니다.
            </span>,
            <span key="3">
                <strong>BIBID</strong>는 실시간 데이터 동기화와 UI 품질을 향상시키며, 기술적 도전과 문제 해결을 통해
                <strong> 사용자 중심의 경매 환경</strong>을 성공적으로 구축한 프로젝트입니다.
            </span>,
        ],
        function: "경매 사이트",
        technologies: ["React", "Redux", "WS", "Redis", "OBS", "NCP LiveStation"],
        link: "https://github.com/NaverCloud-Devops12-Bibid/bibid_frontend",
        linkAlias: "BIBID Github",
        images: [
            "/images/carousel/bibid_메인페이지.png",
            "/images/carousel/bibid_메인페이지_알림.png",
            "/images/carousel/bibid_일반경매.png",
            "/images/carousel/bibid_일반경매_모달.png",
            "/images/carousel/bibid_실시간경매.png",
            "/images/carousel/bibid_실시간경매_판매자&구매자.png",
            "/images/carousel/bibid_실시간경매_경매시작.png",
            "/images/carousel/bibid_실시간경매_구매자배너.png",
            "/images/carousel/bibid_실시간경매_실시간채팅.png",
            "/images/carousel/bibid_마이페이지.png",
            "/images/carousel/bibid_마이페이지_지갑.png",
        ],
    },
    {
        id: 3,
        name: "COMMA",
        duration: "2024.07 - 2024.08",
        participant: "4명",
        description: [
            <span key="1">
                <strong>COMMA</strong>는 사용자가 클릭과 드래그만으로 손쉽게 <strong>여행 일정을 계획</strong>할 수 있는
                웹사이트로, 여행 계획과 정보를 공유할 수 있는 커뮤니티 기능을 제공합니다. Daum Address API를 활용해
                사용자 프로필 수정 및 주소 검색 기능을, Kakao Map API를 통해 여행 정보 검색 및 경로 계획기능을 구현하여
                직관적이고 편리한 사용자 경험을 제공합니다.
            </span>,
            <span key="2">
                프로젝트 초기에는 UI/UX 설계 경험 부족과 데이터 연동의 비효율성 같은 문제가 있었지만,
                <strong>Figma를 활용한 와이어프레임 설계</strong>와 AJAX 및 MyBatis로{" "}
                <strong>데이터 처리를 최적화</strong>하며 문제를 해결했습니다.
            </span>,
            <span key="3">
                이 프로젝트를 통해 직관적인 UI/UX 설계, 실시간 데이터 연동, 체계적인 Git 관리 등을 실현하며 사용자
                편의성을 극대화하였습니다. 여행 기록, 계획, 예약 내역 관리 기능으로 사용자 경험을 크게 향상시켰으며,
                프로젝트 진행 과정에서 <strong>협업 및 문제 해결 역량</strong>을 강화할 수 있었습니다.
            </span>,
        ],
        function: "여행 계획 지원 사이트",
        technologies: ["JSP", "XML", "Spring Framework", "Mybatis"],
        link: "https://github.com/NCloudSemi/NCloudSEMI",
        linkAlias: "COMMA Github",
        images: [
            "/images/carousel/comma_로그인.png",
            "/images/carousel/comma_메인페이지.png",
            "/images/carousel/comma_커뮤니티.png",
            "/images/carousel/comma_커뮤니티_모달.png",
            "/images/carousel/comma_마이페이지.png",
        ],
    },
];

export default projects;
