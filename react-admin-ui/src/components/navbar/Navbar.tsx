import './navbar.scss';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <a className='line'>|I|</a>
        <a href="/">DASHBOARD</a>
      </div>
      <div className='icons'>
        <a href="/profile"><img src="/user.svg" alt='' className='icon'></img></a>
      </div>
    </div>
  );
};

export default Navbar;