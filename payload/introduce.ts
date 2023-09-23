import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  top1: '300여 명과의 소통을 통해 커뮤니케이션 능력을 향상한 개발자',
  top2: '배움을 주저하지 않는 개발자',
  top3: 'aa',
  content1:
    '지난 2년 동안 모교에서 4개 학과, 총 300여명의 학생의 학사 업무를 담당하며 커뮤니케이션을 통한 업무 해결 능력을 키웠습니다. 이를 바탕으로 학원 팀 프로젝트에서 적극적으로 이견 조율 및 소통을 이끌어가며 기간 내 프로젝트를 완성하였습니다.',
  content2: 'df',
  content3: 'dfdfdfdfdfdfdfdfdfdfd',
  sign: 'Jongkwon Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
