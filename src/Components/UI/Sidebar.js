import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Icon = ({ icon }) => {
  return (
    <FontAwesomeIcon icon={icon} className='h-8 cursor-pointer text-primary hover:text-secondary'/>
  )
};

const NavIcons = () => {
  return (
    <div className='flex flex-col gap-14 m-0 justify-center relative top-1/3 '>
      <Icon icon={faHome} />
      <Icon icon={faUser} />
      <Icon icon={faEnvelope} />
      <Icon icon={faBarsStaggered} />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="absolute left-0 w-24 h-full bg-sidebar ">
      <NavIcons />
      <div className='flex flex-col gap-9 absolute bottom-8 w-full'>
        <Icon icon={faLinkedin}/>
        <Icon icon={faGithub} />
      </div>
    </div>
  );
};

export default Sidebar;
