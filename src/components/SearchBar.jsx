import Logo from '../assets/logo.png';
import { BiSearch } from 'react-icons/Bi';

const SearchBar = () => {
  const getMovies = async (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  return (
    <div className='app-container'>
      <form onSubmit={getMovies} className='app-form'>
        <img src={Logo} alt='Logo' width='100' className='app-img' />
        <div className='app-search'>
          <input type='text' className='app-input' />
          <button type='submit' className='app-button'>
            <BiSearch className='app-icon' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
