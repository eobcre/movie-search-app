import Logo from '../assets/logo.png';
import { BiSearch } from 'react-icons/Bi';

const SearchBar = () => {
  return (
    <div className='app-container'>
      <form className='app-form'>
        <img src={Logo} alt='Logo' width='100' className='app-img' />
        <div className='app-search'>
          <input type='text' className='app-input' />
          <BiSearch className='app-icon' />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
