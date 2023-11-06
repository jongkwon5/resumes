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
          content: '실시간 채팅 서비스 구현',
          descriptions: [
            {
              content:
                'Spring WebSocket 기술을 활용해 실시간 양방향 통신을 구현하여 사용자는 채팅을 통해 실시간으로 상호작용이 가능하며, 사용자 입/퇴장 실시간 알림, 귓속말, 비공개 방 생성 등 다양한 기능을 사용할 수 있습니다.',
            },
          ],
        },
        {
          content: '웹 페이지 UI/UX 디자인 구현',
          descriptions: [
            {
              content:
                'HTML/CSS 및 JavaScript를 사용하여 메인 페이지 및 채팅방 목록 페이지를 구현하였습니다.',
            },
            {
              content:
                'Swiper API를 활용하여 메인 페이지에 이미지 슬라이드쇼를 구현하여 시각적으로 다양한 환경을 구현하였습니다.',
            },
          ],
        },
        {
          content: '채팅 비즈니스 로직 개발',
          descriptions: [
            {
              content:
                '사용자 입/퇴장 실시간 알림, 귓속말, 비공개 방 생성 등의 채팅 비즈니스 로직을 구현하였습니다. 실시간으로 사용자가 입장하거나 퇴장할 때 알림을 제공하며, 사용자는 귓속말을 통해 다른 사용자에게 개인 메시지를 보낼 수 있으며, 공개/비공개 채팅방을 선택할 수 있습니다.',
            },
          ],
        },
        {
          content: '데이터베이스 연동 및 관리',
          descriptions: [
            {
              content:
                'MyBatis를 활용하여 채팅방 목록 CRUD를 구현하였으며, MySQL를 통해 채팅방 정보를 저장 및 관리하였습니다.',
            },
          ],
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Java, Spring, MySQL, JavaScript' }],
        },
        {
          content: 'Github : https://github.com/jongkwon5/TT',
          href: 'https://github.com/jongkwon5/TT',
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
          content: '웹 페이지 UI/UX 디자인 구현',
          descriptions: [
            {
              content:
                'HTML/CSS, JavaScript, Bootstrap를 활용하여 메인 페이지, 회사 소개, 게시판, 아티스트 소개, 로그인/회원가입 페이지를 구현하였습니다.',
            },
            {
              content:
                'Swiper API, Kakao 지도 API, fullPage.js를 사용하여 웹 페이지의 시각적 효과를 향상하였습니다.',
            },
          ],
        },
        {
          content: '게시판 구현',
          descriptions: [
            {
              content:
                'MyBatis를 활용하여 게시판 CRUD 및 페이징 기능을 구현하였으며, MySQL를 통해 게시글 정보를 저장 및 관리하였습니다.',
            },
            {
              content: 'AJAX를 활용하여 댓글 수정 및 삭제를 비동기 방식으로 구현하였습니다.',
            },
          ],
        },
        {
          content: '인증 및 사용자 관리',
          descriptions: [
            {
              content:
                '로그인 및 회원가입은 세션을 기반으로 하여 구현하였습니다. 더불어, 아이디 중복 검사 등의 유효성 검사를 적용하였으며, 이를 AJAX를 통해 실시간으로 확인 가능하게 구현하였습니다.',
            },
          ],
        },
        {
          content: '설계 아키텍처 ',
          descriptions: [
            {
              content:
                'Spring MVC Model2 아키텍처를 기반으로 설계되었으며, MVC 패턴을 준수하여 구현하였습니다.',
            },
          ],
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Java, Spring, MySQL, JavaScript' }],
        },
        {
          content: 'Github : https://github.com/jongkwon5/Entertainment',
          href: 'https://github.com/jongkwon5/Entertainment',
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
