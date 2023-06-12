import Logo from '../assets/logo.png';

const SearchBar = () => {
  return (
    <div className='app-container'>
      <form className='app-form'>
        <img src={Logo} alt='Logo' width='100' />
        <div>
          <input type='text' className='app-input' />
          <button type='submit' className='app-button'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
