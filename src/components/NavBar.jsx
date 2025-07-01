import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <div>
      <nav className='bg-gray-900 h-13 text-white shadow-md'>
        <ul className='mt-2 flex space-x-8'>
          <li className=' ms-10'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-bold' : 'text-white'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-bold' : 'text-white'
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <form onSubmit={handleSubmit} className="mt-4 ms-10">
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='ms-200 text-black p-2 rounded'
          placeholder='Search recipes...'
        />
        <button type='submit' className='ml-2 bg-yellow-400 px-3 py-2 rounded'>
          Search
        </button>
      </form>
    </div>
  );
}

export default NavBar;
