import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ searchQuery, setSearchQuery, setCategoryFilter }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mb-4 border-b">
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0">
        <div className="flex px-2 sm:mx-auto items-center">
          <img src="logo-light.png" alt="Logo" className="h-16 w-16 object-fill" />
          {/* <h1 className="ml-2 text-xl font-bold">Personal Notes Manager</h1> */}
        </div>

        <div className="w-full max-w-4xl flex items-center space-x-4 mx-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setCategoryFilter={setCategoryFilter}
          />
        </div>
        <div className='sm:ml-auto w-full sm:w-auto'>
          <button
            onClick={() => navigate('/create')}
            className="mr-2 p-2 w-full btn-primary items-center justify-center "
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
