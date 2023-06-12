import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app-container'>
      <h2>Movie Search App</h2>
      <div>
        <label>
          <input type='text' />
          <button>Search</button>
        </label>
      </div>
      <Footer />
    </div>
  );
};

export default App;
