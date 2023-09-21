import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Go',
    },
    {
      title: 'C/C++',

    },
   
    {
      title: 'JavaScript',
    
    }
   
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'Docker',
 
    },
    {
      title: 'Git',
 
    },

  ],
};

const env: ISkill.Skill = {
  category: 'Platform',
  items: [
    {
      title: 'Hyperledger fabric',
    
    },
    {
      title: 'Ethereum(Besu, Quorum)',
     
    },

  ],
};

const tool: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Vscode',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Confluence',
    }
  ],
};



const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, devops, env, tool]

 
};

export default skill;
