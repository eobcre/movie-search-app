const SearchBar = () => {
  return (
    <form className='app-form'>
      <h2>Movie Search App</h2>
      <div>
        <label>
          <input type='text' />
          <button type='submit'>Search</button>
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
