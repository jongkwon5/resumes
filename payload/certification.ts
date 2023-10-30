import { IPresentation } from '../component/certification/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '정보처리기사',
      subTitle: '한국산업인력공단',
      at: '23-09-01',
    },
    {
      title: 'SQL 개발자(SQLD) ',
      subTitle: '한국데이터베이스진흥센터',
      at: '23-07-07',
    },
    {
      title: '정보기술자격(ITQ)OA마스터 ',
      subTitle: '한국생산성본부(KPC)',
      at: '07-02-01',
    },
    {
      title: '컴퓨터활용능력2급  ',
      subTitle: '대한상공회의소',
      at: '06-08-01',
    },
    {
      title: '워드프로세서1급 ',
      subTitle: '대한상공회의소',
      at: '04-12-01',
    },
  ],
};

export default presentation;
