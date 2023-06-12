import Footer from './components/Footer';

const App = () => {
  return (
    <div className='app-container'>
      <h2>Movie Search App</h2>
      <div>
        <input type='text' />
        <button>Search</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
