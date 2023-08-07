import './navbar.scss';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo1.svg' alt='' className='logo' />
        <span>AdminDashboard</span>
      </div>
      <div className='icons'></div>
    </div>
  );
};

export default Navbar;