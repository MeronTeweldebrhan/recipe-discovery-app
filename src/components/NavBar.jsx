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
  <>
    <nav className="bg-gray-900 py-4 text-white shadow-md">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-2xl font-bold">Posts Social</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : "text-white"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
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
    </>
  );
}
//   return (
//     // <div>
//     //   <nav className="bg-gray-900 py-4 text-white shadow-md">
//     //     <div>
//     //     <ul className='mt-2 flex space-x-8'>
//     //       <li className=' ms-10'>
//     //         <NavLink
//     //           className={({ isActive }) =>
//     //             isActive ? 'text-yellow-400 font-bold' : 'text-white'
//     //           }
//     //           to="/"
//     //         >
//     //           Home
//     //         </NavLink>
//     //       </li>
//     //       <li>
//     //         <NavLink
//     //           className={({ isActive }) =>
//     //             isActive ? 'text-yellow-400 font-bold' : 'text-white'
//     //           }
//     //           to="/favorites"
//     //         >
//     //           Favorites
//     //         </NavLink>
//     //       </li>
//     //     </ul>
//     //   </nav>
      
//     //   <form onSubmit={handleSubmit} className="mt-4 ms-10">
//     //     <input
//     //       type='text'
//     //       value={searchTerm}
//     //       onChange={(e) => setSearchTerm(e.target.value)}
//     //       className='ms-200 text-black p-2 rounded'
//     //       placeholder='Search recipes...'
//     //     />
//     //     <button type='submit' className='ml-2 bg-yellow-400 px-3 py-2 rounded'>
//     //       Search
//     //     </button>
//     //   </form>
//     // </div>
//   );
// }

export default NavBar;
