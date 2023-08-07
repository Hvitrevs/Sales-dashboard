import './navbar.scss';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <a className='line'>|I|</a>
        <span>DASHBOARD</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='' className='icon' />
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className='notification'>
          <img src='/notification.svg' alt='' />
          <span>1</span>
        </div>
        <div className='user'>
          <img src='https://cdna.artstation.com/p/assets/images/images/060/780/462/medium/hvitrev-raiden-shogun.jpg?1679321834' alt='' />
          <span> John Doe</span>
        </div>
        <img src='/settings.svg' alt='' className='icon' />
      </div>
    </div>
  );
};

export default Navbar;