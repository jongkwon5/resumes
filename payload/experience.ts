import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'LG CNS',
      position: 'Blockchain Software Engineer',
      startedAt: '2023-05',
      descriptions: [
        'Develop web3 services',
        'Construct security token platform in various institutions',
      ],
      skillKeywords: ['Blockchain', 'Ethereum', 'Hyperledger Besu', 'Java', 'Golang', 'Solidity'],
    },
    {
      title: 'Samsung Securities',
      position: 'Senior Engineer',
      startedAt: '2022-02',
      endedAt: '2023-05',
      descriptions: [
        'Construct Blockchain Platform based on ST(Security Token)',
        'Develop smartcontract for security token using ERC1400',
        'Develop Multi-sig smartcontract based on Gnosis SafeContract for reducing sign times in private network',
        'Develop client application to connect with Quorum(Private Ethereum) network using golang',
        'Configure platform and blockchain node server monitoring tools',
        'Investige new technologies and prototype them on the platform',
      ],
      skillKeywords: ['Blockchain', 'Ethereum', 'Quorum', 'Golang', 'Solidity', 'Docker'],
    },
    {
      title: 'LG CNS',
      position: 'Blockchain Software Engineer',
      startedAt: '2018-07',
      endedAt: '2022-02',
      descriptions: [
        'Construct and configure Hyperledger fabric-based blockchain system',
        'Develop Hyperledger fabric-based smart contract using golang',
        'Develop API application for smart contract transaction call using java',
        'Design and implement smart contract logic for efficient processing of large amounts of data',
        'Apply various consensus algorithms (Raft, Kafka-zookeeper)',
        'Test and optimize chaincode performance using nGrinder',
        'Construct node monitoring system using ELK, Prometheus',
        'Construct NFT marketplace prototype using Ethereum and develop smart contract to swap ERC20 with ERC721',
        'Construct NFT marketplace between Ethereum mainnet and private network based on Hyperledger Fabric',
      ],
      skillKeywords: [
        'Blockchain',
        'Hyperledger Fabric',
        'Ethereum',
        'Java',
        'Golang',
        'Solidity',
        'Docker',
      ],
    },
    {
      title: 'Ever More Security',
      position: 'Software Engineer',
      startedAt: '2016-01',
      endedAt: '2018-03',
      descriptions: [
        'Develop internal systems of security equipment called NADP(Non-Addressable Data Protection) that do not have IP or other accounts',
        'Develop a real-time key exchange system between communication sessions using Netfilter and iptables-based packet capture system',
        'Apply for a patent of real-time key exchange mechanism',
      ],
      skillKeywords: ['Packet forwarding', 'Key exchange', 'Cryptographic', 'C'],
    },
  ],
};

export default experience;
