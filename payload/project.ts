import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '지역 축제 소개를 토대로 여행 파트너를 구할 수 있는 서비스 - TT',
      startedAt: '2023-07',
      endedAt: '2023-08',
      where: '[5인 팀 프로젝트]',
      descriptions: [
        {
          content: '',
          postImage:
            'https://user-images.githubusercontent.com/137694287/270161882-fb6fe059-d30f-4ef0-9686-b182197688f7.gif',
        },
        {
          content: '담당 : 메인 페이지 / 채팅방 목록 & 실시간 채팅 풀스택 개발',
          weight: 'MEDIUM',
        },
        {
          content: 'Spring WebSocket API를 활용한 실시간 양방향 통신 채팅 서비스 구현',
          weight: 'MEDIUM',
        },
        { content: 'Messagesource Properties를 활용한 다국어 처리 구현' },
        {
          content: 'MyBatis를 활용한 채팅방 목록 CRUD 구축',
        },
        { content: 'HTML, CSS, JS를 활용한 메인, 채팅방 목록, 채팅 페이지 화면 구현' },
        {
          content: 'https://github.com/jongkwon5/TT',
          weight: 'MEDIUM',
          href: 'https://github.com/jongkwon5/TT',
        },
      ],
    },

    {
      title: '가상의 Entertainment Company',
      startedAt: '2023-06',
      endedAt: '2023-07',
      where: '[개인 프로젝트]',
      descriptions: [
        {
          content: 'http://www.riss.kr/link?id=T14771241',
          postImage:
            'https://user-images.githubusercontent.com/137694287/270162201-967fc049-04ba-41c9-b871-0c795b8911d4.gif',
        },
        {
          content: '회사 소개, 아티스트 소개, 게시판, 오디션 지원 등 풀스택 개발',
          weight: 'MEDIUM',
        },
        { content: 'SessionLocaleResolver를 활용한 다국어 처리 구현' },
        { content: 'Spring MVC Model2 Pattern 기반 설계' },
        { content: 'MyBatis를 활용한 게시판 CRUD 구현' },
        {
          content: 'https://github.com/jongkwon5/Entertainment',
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
