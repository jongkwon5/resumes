import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '중앙정보처리학원',
      position: 'JAVA기반 풀스택 개발자 취업과정',
      startedAt: '2023-02',
      endedAt: '2023-08',
      descriptions: [
        'Develop web3 services',
        'Construct security token platform in various institutions',
      ],
      skillKeywords: ['Blockchain', 'Ethereum', 'Hyperledger Besu', 'Java', 'Golang', 'Solidity'],
    },
  ],
};

export default experience;
