const SearchBar = () => {
  return (
    <div className='app-container'>
      <form className='app-form'>
        <h2 className='app-title'>Movie Search App</h2>
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
