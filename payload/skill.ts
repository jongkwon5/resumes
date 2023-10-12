import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring',
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'JavaScript',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const env: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git/Github',
    },
    {
      title: 'VScode',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Tomcat',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, devops, env, tool],
};

export default skill;
