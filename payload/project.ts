import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '지역 축제 소개를 토대로 여행 파트너를 구할 수 있는 서비스 - TT',
      startedAt: '23-07-25',
      endedAt: '23-09-03',
      where: '[5인 팀 프로젝트]',
      descriptions: [
        {
          content: '',
          postImage:
            'https://user-images.githubusercontent.com/137694287/270161882-fb6fe059-d30f-4ef0-9686-b182197688f7.gif',
        },
        {
          content: '[담당 : 메인 페이지 / 채팅방 목록 & 실시간 채팅 풀스택 개발]',
          weight: 'MEDIUM',
        },
        {
          content: 'Spring WebSocket을 활용한 실시간 양방향 통신 채팅 서비스 구현',
        },
        {
          content:
            'HTML/CSS, JavaScript(Swiper API)를 활용한 메인 페이지, 채팅방 목록, 채팅 페이지 UI/UX 구현',
        },
        {
          content: '사용자 입/퇴장 실시간 알림, 귓속말, 비공개 방 생성 등 채팅 비즈니스 로직 구현',
        },
        {
          content: 'MyBatis를 활용한 채팅방 목록 CRUD 구현',
        },
        {
          content: 'https://github.com/jongkwon5/TT',
          href: 'https://github.com/jongkwon5/TT',
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Java, Spring, MySQL, JavaScript' }],
        },
      ],
    },

    {
      title: '가상의 Entertainment Company',
      startedAt: '23-06-07',
      endedAt: '23-07-10',
      where: '[개인 프로젝트]',
      descriptions: [
        {
          content: 'http://www.riss.kr/link?id=T14771241',
          postImage:
            'https://user-images.githubusercontent.com/137694287/270162201-967fc049-04ba-41c9-b871-0c795b8911d4.gif',
        },
        {
          content: '[회사 소개, 아티스트 소개, 게시판, 오디션 지원 페이지 등 풀스택 개발]',
          weight: 'MEDIUM',
        },
        {
          content: 'HTML/CSS, Swiper API, Kakao 지도 API, fullPage.js를 활용한 UI/UX 구현',
        },
        {
          content: 'MyBatis를 활용한 게시판 CRUD 구현 및 AJAX를 통한 게시판 댓글 비동기 처리 구현',
        },
        {
          content:
            '세션 기반의 로그인, 회원가입 기능 및 아이디 중복 확인 등에 대한 유효성 검사 구현',
        },
        { content: 'Spring MVC Model2 기반 설계' },
        {
          content: 'https://github.com/jongkwon5/Entertainment',
          href: 'https://github.com/jongkwon5/Entertainment',
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Java, Spring, MySQL, JavaScript' }],
        },
      ],
    },

    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Hello Everyone' },
    //     {
    //       content: 'Launched Bar Service in 2018',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
    //         {
    //           content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
