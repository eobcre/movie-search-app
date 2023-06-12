const SearchBar = () => {
  return (
    <form className='app-form'>
      <h2 className='app-title'>Movie Search App</h2>
      <div>
        <label>
          <input type='text' className='app-input' />
          <button type='submit' className='app-button'>
            Search
          </button>
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
