import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='bg-gray-900 text-white-shadow-md'>
      <ul className='flex  space-x-8 '>
        <li className='ms-10' ><NavLink 
        className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-bold' : 'text-white'
            }
         to="/">Home</NavLink></li>
        <li><NavLink 
        className={({ isActive }) =>
              isActive ? 'text-yellow-400 font-bold' : 'text-white'
            }
        to="/favorites">Favorites</NavLink></li>
      </ul>
    </nav>
  );
}
export default NavBar;
