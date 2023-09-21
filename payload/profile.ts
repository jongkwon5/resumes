import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBlogger, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Wonjoon Lddddssee',
    small: '',
  },
  contact: [
    {
      title: 'wnjoon@gmail.com',
      link: 'mailto:wnjoon@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-9621-0310',
      icon: faPhone,
    },
    {
      title: 'Github',
      link: 'https://github.com/wnjoon',
      icon: faGithub,
    },
    {
      title: '1994-03-10',
      icon: faGithub,
    },
  ],

  notice: {
    title: 'Focusing on rapidly growing industry 👨‍💻',
    // title: 'Status : Open to new opportunities and challenges 🙋‍♂️',
    // title: 'Status : 작성중입니다 🔧',
    icon: faBell,
  },
};

export default profile;
