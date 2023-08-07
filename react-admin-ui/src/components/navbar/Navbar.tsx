import './navbar.scss';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo1.svg' alt='' className='logo' />
        <span>Dashboard</span>
      </div>
      <div className='icons'>
        <img src='' alt='' className='icon' />
        <img src='' alt='' className='icon' />
        <img src='' alt='' className='icon' />
        <div className='notification'></div>
        <div className='user'></div>
        <img src='' alt='' className='icon' />
      </div>
    </div>
  );
};

export default Navbar;