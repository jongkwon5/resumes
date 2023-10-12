import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  top1: '300여 명과의 소통을 통해 커뮤니케이션 능력을 향상한 개발자',
  top2: '배움을 주저하지 않는 개발자',
  top3: '유연성과 적응력을 중요시하는 개발자',
  content1:
    '지난 2년 동안 모교에서 4개 학과, 총 300여 명의 학생의 학사 업무를 담당하며 커뮤니케이션을 통한 업무 해결 능력을 키웠습니다. 이를 바탕으로 학원 팀 프로젝트에서 적극적으로 이견 조율 및 소통을 이끌어가며 기간 내 프로젝트를 완성할 수 있었습니다. 이토록 결과는 혼자서 만드는 것이 아닌, 모두의 노력이 필요하다고 생각하기에 팀 구성원들과 적극적으로 커뮤니케이션하며 협업하고자 합니다.',
  content2:
    '배움과 도전에 주저하지 않는 개발자입니다. 저는 전반적인 CS 기초 지식을 습득하기 위해 학원 수업과 병행하며 정보처리기사, SQLD 자격증을 취득하였으며, 현재는 다양한 기술 서적 등을 읽으며 프로그래밍 기술을 향상하고자 노력하고 있습니다. 이러한 노력을 통해 업무의 속도와 효율성을 향상하며 동시에 유지보수성을 높이고, 이를 통한 비즈니스 성장에 기여하고자 합니다.',
  content3:
    '변화에 대한 두려움 없이 새로운 기술과 도전을 수용하며, 다양한 환경과 요구사항에서도 빠르게 대응하고 항상 최고의 솔루션을 제공할 수 있는 유연성과 적응력을 갖춘 개발자가 되고자 합니다.',
  sign: 'Jongkwon Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
