import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '🇺🇸',
    'Experienced in distributed systems and security, and currently working in the blockchain field using Hyperledger Fabric and Ethereum.',
    'Currently working for making a new token economy through virtual assets with real value, such as digital currency and security tokens.',
    'Interested in how to provide good services to users through blockchain and web3 in the future. Furthermore, recently focus on how to tokenize the experience of users and express it through a blockchain service as value.',
    'Generally use Java and Go as the main backend languages, and use Solidity for contract development. Running a private blog in spare time to share what I learned and ideas.',
    '🇰🇷',
    '분산시스템, 보안 등의 분야에 경험이 있으며, 현재는 블록체인을 개발하고 있습니다. 하이퍼레저 패브릭과 이더리움을 이용하여 다양한 비지니스 환경에 블록체인 기술을 적용하였습니다.',
    '현재는 디지털화폐, 토큰증권 등 실질적인 가치를 지닐 수 있는 가상자산을 통한 새로운 토큰 이코노미가 만드는 일에 집중하고 있습니다.',
    '앞으로 블록체인과 web3를 통해 더 많은 사용자에게 좋은 서비스를 제공할 수 있는 방법에 관심이 많습니다. 특히 최근에는 사용자의 경험과 활동을 토큰화하고, 이를 중단되지 않는 특징을 갖는 블록체인 서비스를 통해 표현하여 자신의 가치를 표현할 수 있는 방법에 더 알아가고자 합니다.',
    '주된 백엔드 언어로 Java, Go를 사용하며, 컨트랙트 개발에는 Solidity를 사용합니다. 글을 쓰는 것을 좋아하며, 학습한 내용을 다른사람들과 공유하기 위해 블로그를 운영하고 있습니다.',
  ],
  sign: 'Wonjoon Lee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
