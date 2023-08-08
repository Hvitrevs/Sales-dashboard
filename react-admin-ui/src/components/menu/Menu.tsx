import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';

const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
      <div className='item'>
        <span className='title'>MAIN</span>
        <Link to='/' className='listItem'>
        <img src='/home.svg' alt='' />
        <span className='listItemTitle'>Home</span>
        </Link >
        <Link to='/'className='listItem'>
        <img src='/profile.svg' alt='' />
        <span className='listItemTitle'>Profile</span>
        </Link >
      </div>
      ))}
    </div>
  );
};

export default Menu;