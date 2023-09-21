import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ST platform construct project',
      image: 'ddd',
      startedAt: '2022-02',
      endedAt: '2022-12',
      where: 'Samsung Securities',
      descriptions: [
        { content: '증권형 토큰(Security Token) 플랫폼 구축' },
        { content: 'Construct blockchain platform using Quorum, private Ethereum network' },
        {
          content: 'Smart contract development for securities business using ERC1400, ERC721',
        },
        {
          content: 'Smart contract testing using hardhat with typescript',
        },
        {
          content:
            'Re-constructing multi-sig using Gnosis open source for generating pre-confirmed signatures from off-chain',
        },
        { content: 'Private Ethereum client development using golang' },
        { content: 'Develop blockchain event listening module' },
        { content: 'Configure platform and blockchain node server monitoring tools' },
        {
          content: 'Paper:',
          postHref: 'http://www.riss.kr/link?id=T14771241',
        },
      ]
    }
  ]
    }
      
    
    

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
  


export default project;
